import type { Axios } from 'axios';
import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import * as cheerio from 'cheerio';
import { CookieJar } from 'tough-cookie';

const BASE_URL = 'https://gpa.myntust.com';
const LOGIN_PAGE_URL = BASE_URL + '/auth/login';
const LOGIN_API_URL = LOGIN_PAGE_URL;
const QUERY_URL = BASE_URL + '/query';
const PROFILE_URL = BASE_URL + '/auth/profile';

export interface NtustGpaSearchOptions {
  baseUrl: string;
  loginPageUrl: string;
  loginApiUrl: string;
  queryUrl: string;
}

export const defaultOptions: NtustGpaSearchOptions = {
  baseUrl: BASE_URL,
  loginPageUrl: LOGIN_PAGE_URL,
  loginApiUrl: LOGIN_API_URL,
  queryUrl: QUERY_URL
};

export interface UserProfile {
  nickname: string;
  email: string;
  emailVerified: boolean;
  studentId: string;
  pPoints: number;
  fPoints: number;
}

export interface GpaOverview {
  courseNo: string;
  courseName: string;
  teacher: string;
  semester: string;
  people: number;
  gpa: number;
  aad: number; // average absolute deviation
  sd: number; // standard deviation
}

export interface GpaDetail {
  courseNo: string[];
  teacher?: string;
  courseName: string;
  time: string[];
  geType: string;
  gpaAvg: number;
  people: number;
  failPeople: number;
  passingRate: number;
  grades: Record<Grade, GradeDetail>;
}

export type Grade = 'A+' | 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D' | 'E' | 'X';

export interface GradeDetail {
  people: number;
  percentage: number;
}

export interface Gpa {
  overview: GpaOverview[];
  details: GpaDetail[];
}

export class NtustGpaSearch {
  private options: NtustGpaSearchOptions;
  public jar: CookieJar;
  public httpClient: Axios;

  constructor(options: NtustGpaSearchOptions = defaultOptions) {
    this.options = options;
    this.jar = new CookieJar();
    this.httpClient = wrapper(axios.create({ jar: this.jar }));
  }

  public getOptions(): NtustGpaSearchOptions {
    return this.options;
  }

  public async getSessionToken(): Promise<string | undefined> {
    const cookies = await this.jar.getCookies(BASE_URL);
    const sessionCookie = cookies.find((cookie) => cookie.key === 'myntust_gpa_search_session');
    return sessionCookie?.value;
  }

  public async getUserProfile(): Promise<UserProfile> {
    const profileResp = await this.httpClient.get(PROFILE_URL);
    const profileHtml = profileResp.data;
    const $ = cheerio.load(profileHtml);
    const form = $("form[action='/auth/change-profile']");
    const nickname = form.find('input#nickname').val();
    const email = form.find('input#email').val();
    const emailVerified =
      form.find(`div.profile-col:nth-of-type(3) > p.profile-text:nth-of-type(2)`).text().trim() ===
      '已認證';
    const studentId = form
      .find(`div.profile-col:nth-of-type(5) > p.profile-text:nth-of-type(2)`)
      .text()
      .trim();

    const pPointsCard = $('div.card-content').filter(function (this: cheerio.Element) {
      return $(this).text().includes('目前持有P點');
    });
    const pPoints = parseInt(pPointsCard.find('h1.theme-text').eq(0).text().trim());

    const fPointsCard = $('div.card-content').filter(function (this: cheerio.Element) {
      return $(this).text().includes('目前持有F點');
    });
    const fPoints = parseInt(fPointsCard.find('h1.theme-text').eq(0).text().trim());

    return {
      nickname,
      email,
      emailVerified,
      studentId,
      pPoints,
      fPoints
    };
  }

  public async query(keywords: string): Promise<Gpa> {
    const queryResp = await this.httpClient.get(QUERY_URL, {
      params: { keywords }
    });

    const queryHtml = queryResp.data;
    const $ = cheerio.load(queryHtml);

    if ($.html().includes('Access denied')) {
      const errorMessage = $('div.main-content > .row > div.col.s12.center-align > p')
        .eq(0)
        .text()
        .trim();
      throw new Error(`Access denied: ${errorMessage}`);
    }

    const overviewTable = $('div.card-content')
      .filter(function (this: cheerio.Element) {
        return $(this).text().includes('總覽');
      })
      .find('table');

    const trs = overviewTable.find('tbody > tr');
    const overview: GpaOverview[] = trs
      .map(function (this: cheerio.Element): GpaOverview {
        const tds = $(this).find('td:not(.overview-highlight)');
        // const index = parseInt(tds.eq(0).text().trim());
        const courseNo = tds.eq(1).text().trim();
        const courseName = tds.eq(2).text().trim();
        const teacher = tds.eq(3).text().trim();
        const semester = tds.eq(4).text().trim();
        const people = parseInt(tds.eq(5).text().trim());
        const gpa = parseFloat(tds.eq(6).text().trim());
        const aad = parseFloat(tds.eq(7).text().trim());
        const sd = parseFloat(tds.eq(8).text().trim());
        return {
          courseNo,
          courseName,
          teacher,
          semester,
          people,
          gpa,
          aad,
          sd
        };
      })
      .get();

    const detailCards = $('div.card').filter(function (this: cheerio.Element) {
      return $(this).text().includes('總人數');
    });

    const details: GpaDetail[] = detailCards
      .map(function (this: cheerio.Element): GpaDetail {
        const courseNoRegex = /^[A-Za-z]{2}\d{7}$/;
        const courseNo = $(this).find('p.card-text-row').eq(0).text().trim().split(' ');
        let teacher = undefined;
        // If the last element is not a course number, it should be a teacher name
        if (courseNo.length > 1 && !courseNoRegex.test(courseNo[courseNo.length - 1])) {
          teacher = courseNo.pop();
        }
        const courseName = $(this).find('p.card-text-row').eq(1).text().trim();
        const timeAndGeType = $(this).find('p.card-text-row').eq(2).text().trim().split(' ');
        const time = timeAndGeType[0].split(',');
        const geType = timeAndGeType[1];
        const peopleAndGpaAvg = $(this)
          .find('p.card-text-row')
          .eq(3)
          .text()
          .trim()
          .match(/總人數(\d+)\s+平均(\d+\.\d+)/);
        const people = parseInt(peopleAndGpaAvg?.[1] ?? '0');
        const gpaAvg = parseFloat(peopleAndGpaAvg?.[2] ?? '0');
        const failAndPassingRate = $(this)
          .find('p.card-text-row')
          .eq(4)
          .text()
          .trim()
          .match(/不及格人數(\d+)\s+及格比例(\d+\.\d+)%/);
        const failPeople = parseInt(failAndPassingRate?.[1] ?? '0');
        const passingRate = parseFloat(failAndPassingRate?.[2] ?? '0');

        const gradesTable = $(this).find('table.centered');
        const grades: Partial<Record<Grade, GradeDetail>> = {};
        gradesTable.find('tbody > tr').each(function (this: cheerio.Element) {
          const tds = $(this).find('td');
          const grade = tds.eq(0).text().trim() as Grade;
          const people = parseInt(tds.eq(1).text().trim());
          const percentageText = tds.eq(2).text().trim();
          const percentage = percentageText === '-' ? 0 : parseFloat(percentageText);
          grades[grade] = { people, percentage };
        });

        return {
          courseNo,
          teacher,
          courseName,
          time,
          geType,
          people,
          gpaAvg,
          failPeople,
          passingRate,
          grades: grades as Record<Grade, GradeDetail>
        };
      })
      .get();

    return {
      overview,
      details
    };
  }
}
