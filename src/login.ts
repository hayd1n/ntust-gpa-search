import * as cheerio from 'cheerio';

import type { NtustGpaSearch } from '.';

export interface LoginMethod {
  login: (c: NtustGpaSearch) => Promise<void>;
}

export class LoginByAccount implements LoginMethod {
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  private async getCsrfToken(c: NtustGpaSearch): Promise<string> {
    const loginPage = await c.httpClient.get(c.getOptions().loginPageUrl);
    const loginPageHtml = loginPage.data;
    const $ = cheerio.load(loginPageHtml);
    return $(`input[name="_token"]`).val() as string;
  }

  public async login(c: NtustGpaSearch): Promise<void> {
    const csrfToken = await this.getCsrfToken(c);

    const loginPayload = {
      _token: csrfToken,
      username: this.username,
      password: this.password
    };

    const loginResp = await c.httpClient.post(c.getOptions().loginApiUrl, loginPayload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    if (loginResp.status !== 200 && loginResp.status !== 302) {
      throw new Error('Login failed');
    }
  }
}

export class LoginBySessionToken implements LoginMethod {
  private sessionToken: string;

  constructor(sessionToken: string) {
    this.sessionToken = sessionToken;
  }

  public async login(c: NtustGpaSearch): Promise<void> {
    await c.jar.setCookie(
      `myntust_gpa_search_session=${this.sessionToken}`,
      c.getOptions().baseUrl
    );

    const resp = await c.httpClient.get(c.getOptions().loginPageUrl);
    if (resp.status !== 200) {
      throw new Error('Login failed');
    }
  }
}
