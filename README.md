# NTUST GPA Search

Unofficial client for [myNTUST GPA SEARCH](https://gpa.myntust.com/).

Compatible with Node.js and browsers.

## Usage

### Login

#### By Username & Password

```typescript
const client = new NtustGpaSearch();

const loginMethod = new LoginByAccount(USERNAME, PASSWORD);
await loginMethod.login(client);
```

#### By Session Token

```typescript
const client = new NtustGpaSearch();

const loginMethod = new LoginBySessionToken(SESSION_TOKEN);
await loginMethod.login(client);
```

### Get User Profile

```typescript
const userProfile = await client.getUserProfile();
```

**Example Result:**

```json
{
  "nickname": "Hayden Chang",
  "email": "m831718@gmail.com",
  "emailVerified": true,
  "studentId": "B11030202",
  "pPoints": 0,
  "fPoints": 57
}
```

### Query

```typescript
const result = await client.query('線性代數');
```

**Example Result:**

<details>
<summary>Click me</summary>

```json
{
  "overview": [
    {
      "courseNo": "CS1006301",
      "courseName": "線性代數",
      "teacher": "項天瑞",
      "semester": "1122",
      "people": 77,
      "gpa": 2.61,
      "aad": 1.307,
      "sd": 1.143
    },
    {
      "courseNo": "CS1006302",
      "courseName": "線性代數",
      "teacher": "周詩梵",
      "semester": "1122",
      "people": 40,
      "gpa": 3.54,
      "aad": 0.959,
      "sd": 0.979
    },
    {
      "courseNo": "EE4005301",
      "courseName": "線性代數",
      "teacher": "張立中",
      "semester": "1122",
      "people": 62,
      "gpa": 3.15,
      "aad": 0.821,
      "sd": 0.906
    },
    {
      "courseNo": "EE4005302",
      "courseName": "線性代數",
      "teacher": "謝易錚",
      "semester": "1122",
      "people": 80,
      "gpa": 3.21,
      "aad": 0.731,
      "sd": 0.855
    },
    {
      "courseNo": "CS1006301",
      "courseName": "線性代數",
      "teacher": "項天瑞",
      "semester": "1112",
      "people": 63,
      "gpa": 3.89,
      "aad": 0.44,
      "sd": 0.663
    },
    {
      "courseNo": "CS1006302",
      "courseName": "線性代數",
      "teacher": "周詩梵",
      "semester": "1112",
      "people": 48,
      "gpa": 2.4,
      "aad": 1.335,
      "sd": 1.156
    },
    {
      "courseNo": "EC2003701",
      "courseName": "線性代數",
      "teacher": "EC2003701",
      "semester": "1112",
      "people": 49,
      "gpa": 3.06,
      "aad": 1.02,
      "sd": 1.01
    },
    {
      "courseNo": "EE4005301",
      "courseName": "線性代數",
      "teacher": "張立中",
      "semester": "1112",
      "people": 62,
      "gpa": 3.06,
      "aad": 0.929,
      "sd": 0.964
    },
    {
      "courseNo": "EE4005302",
      "courseName": "線性代數",
      "teacher": "陳俊良",
      "semester": "1112",
      "people": 77,
      "gpa": 3.21,
      "aad": 0.852,
      "sd": 0.923
    },
    {
      "courseNo": "EC2003702",
      "courseName": "線性代數",
      "teacher": "陳俊良",
      "semester": "1112",
      "people": 17,
      "gpa": 3.15,
      "aad": 1.021,
      "sd": 1.01
    },
    {
      "courseNo": "CS1006301",
      "courseName": "線性代數",
      "teacher": "項天瑞",
      "semester": "1102",
      "people": 50,
      "gpa": 3.42,
      "aad": 0.951,
      "sd": 0.975
    },
    {
      "courseNo": "CS1006302",
      "courseName": "線性代數",
      "teacher": "周詩梵",
      "semester": "1102",
      "people": 68,
      "gpa": 3.01,
      "aad": 0.945,
      "sd": 0.972
    },
    {
      "courseNo": "EC2003701",
      "courseName": "線性代數",
      "teacher": "鄧惟中",
      "semester": "1102",
      "people": 52,
      "gpa": 3.14,
      "aad": 0.875,
      "sd": 0.936
    },
    {
      "courseNo": "EE4005301",
      "courseName": "線性代數",
      "teacher": "張立中",
      "semester": "1102",
      "people": 71,
      "gpa": 3.05,
      "aad": 0.818,
      "sd": 0.904
    },
    {
      "courseNo": "EE4005302",
      "courseName": "線性代數",
      "teacher": "陳俊良",
      "semester": "1102",
      "people": 94,
      "gpa": 3.17,
      "aad": 0.898,
      "sd": 0.948
    },
    {
      "courseNo": "CS1006301",
      "courseName": "線性代數",
      "teacher": "項天瑞",
      "semester": "1092",
      "people": 115,
      "gpa": 3.26,
      "aad": 0.959,
      "sd": 0.979
    },
    {
      "courseNo": "EE4005301",
      "courseName": "線性代數",
      "teacher": "陳俊良",
      "semester": "1092",
      "people": 85,
      "gpa": 3.35,
      "aad": 0.949,
      "sd": 0.974
    },
    {
      "courseNo": "EE4005302",
      "courseName": "線性代數",
      "teacher": "張立中",
      "semester": "1092",
      "people": 69,
      "gpa": 3.13,
      "aad": 0.842,
      "sd": 0.918
    },
    {
      "courseNo": "EC2003701",
      "courseName": "線性代數",
      "teacher": "鄧惟中",
      "semester": "1092",
      "people": 54,
      "gpa": 3.13,
      "aad": 0.893,
      "sd": 0.945
    },
    {
      "courseNo": "EC2003701",
      "courseName": "線性代數",
      "teacher": "鄧惟中",
      "semester": "1082",
      "people": 85,
      "gpa": 2.86,
      "aad": 1.034,
      "sd": 1.017
    },
    {
      "courseNo": "CS1006301",
      "courseName": "線性代數",
      "teacher": "項天瑞",
      "semester": "1082",
      "people": 115,
      "gpa": 2.39,
      "aad": 1.044,
      "sd": 1.022
    },
    {
      "courseNo": "EC2003301",
      "courseName": "線性代數",
      "teacher": "鄧惟中",
      "semester": "1072",
      "people": 61,
      "gpa": 2.35,
      "aad": 1.124,
      "sd": 1.06
    },
    {
      "courseNo": "EC2003301",
      "courseName": "線性代數",
      "teacher": "鄧惟中",
      "semester": "1062",
      "people": 75,
      "gpa": 2.37,
      "aad": 1.164,
      "sd": 1.079
    },
    {
      "courseNo": "CS1006301",
      "courseName": "線性代數",
      "teacher": "項天瑞",
      "semester": "1062",
      "people": 74,
      "gpa": 2.68,
      "aad": 1.112,
      "sd": 1.055
    },
    {
      "courseNo": "EE4005301",
      "courseName": "線性代數",
      "teacher": "陳俊良",
      "semester": "1062",
      "people": 60,
      "gpa": 2.99,
      "aad": 0.721,
      "sd": 0.849
    }
  ],
  "details": [
    {
      "courseNo": [
        "CS1006301"
      ],
      "teacher": "項天瑞",
      "courseName": "線性代數",
      "time": [
        "M3",
        "M4",
        "R2"
      ],
      "geType": "無向度",
      "people": 77,
      "gpaAvg": 2.61,
      "failPeople": 17,
      "passingRate": 77.9,
      "grades": {
        "A+": {
          "people": 13,
          "percentage": 16.9
        },
        "A": {
          "people": 12,
          "percentage": 15.6
        },
        "A-": {
          "people": 5,
          "percentage": 6.5
        },
        "B+": {
          "people": 2,
          "percentage": 2.6
        },
        "B": {
          "people": 11,
          "percentage": 14.3
        },
        "B-": {
          "people": 4,
          "percentage": 5.2
        },
        "C+": {
          "people": 3,
          "percentage": 3.9
        },
        "C": {
          "people": 3,
          "percentage": 3.9
        },
        "C-": {
          "people": 7,
          "percentage": 9.1
        },
        "D": {
          "people": 3,
          "percentage": 3.9
        },
        "E": {
          "people": 14,
          "percentage": 18.2
        },
        "X": {
          "people": 0,
          "percentage": 0
        }
      }
    },
    {
      "courseNo": [
        "CS1006302"
      ],
      "teacher": "周詩梵",
      "courseName": "線性代數",
      "time": [
        "M3",
        "M4",
        "R2"
      ],
      "geType": "無向度",
      "people": 40,
      "gpaAvg": 3.54,
      "failPeople": 4,
      "passingRate": 90,
      "grades": {
        "A+": {
          "people": 24,
          "percentage": 60
        },
        "A": {
          "people": 1,
          "percentage": 2.5
        },
        "A-": {
          "people": 3,
          "percentage": 7.5
        },
        "B+": {
          "people": 2,
          "percentage": 5
        },
        "B": {
          "people": 4,
          "percentage": 10
        },
        "B-": {
          "people": 1,
          "percentage": 2.5
        },
        "C+": {
          "people": 0,
          "percentage": 0
        },
        "C": {
          "people": 1,
          "percentage": 2.5
        },
        "C-": {
          "people": 0,
          "percentage": 0
        },
        "D": {
          "people": 0,
          "percentage": 0
        },
        "E": {
          "people": 3,
          "percentage": 7.5
        },
        "X": {
          "people": 1,
          "percentage": 2.5
        }
      }
    },
    {
      "courseNo": [
        "EE4005301"
      ],
      "teacher": "張立中",
      "courseName": "線性代數",
      "time": [
        "R8",
        "W6",
        "W7"
      ],
      "geType": "無向度",
      "people": 62,
      "gpaAvg": 3.15,
      "failPeople": 4,
      "passingRate": 93.5,
      "grades": {
        "A+": {
          "people": 6,
          "percentage": 9.7
        },
        "A": {
          "people": 13,
          "percentage": 21
        },
        "A-": {
          "people": 13,
          "percentage": 21
        },
        "B+": {
          "people": 2,
          "percentage": 3.2
        },
        "B": {
          "people": 10,
          "percentage": 16.1
        },
        "B-": {
          "people": 4,
          "percentage": 6.5
        },
        "C+": {
          "people": 5,
          "percentage": 8.1
        },
        "C": {
          "people": 3,
          "percentage": 4.8
        },
        "C-": {
          "people": 2,
          "percentage": 3.2
        },
        "D": {
          "people": 1,
          "percentage": 1.6
        },
        "E": {
          "people": 2,
          "percentage": 3.2
        },
        "X": {
          "people": 1,
          "percentage": 1.6
        }
      }
    },
    {
      "courseNo": [
        "EE4005302"
      ],
      "teacher": "謝易錚",
      "courseName": "線性代數",
      "time": [
        "W6",
        "W7",
        "T8"
      ],
      "geType": "無向度",
      "people": 80,
      "gpaAvg": 3.21,
      "failPeople": 6,
      "passingRate": 92.5,
      "grades": {
        "A+": {
          "people": 7,
          "percentage": 8.8
        },
        "A": {
          "people": 15,
          "percentage": 18.8
        },
        "A-": {
          "people": 18,
          "percentage": 22.5
        },
        "B+": {
          "people": 8,
          "percentage": 10
        },
        "B": {
          "people": 16,
          "percentage": 20
        },
        "B-": {
          "people": 6,
          "percentage": 7.5
        },
        "C+": {
          "people": 0,
          "percentage": 0
        },
        "C": {
          "people": 1,
          "percentage": 1.3
        },
        "C-": {
          "people": 3,
          "percentage": 3.8
        },
        "D": {
          "people": 2,
          "percentage": 2.5
        },
        "E": {
          "people": 4,
          "percentage": 5
        },
        "X": {
          "people": 0,
          "percentage": 0
        }
      }
    },
    {
      "courseNo": [
        "CS1006301"
      ],
      "teacher": "項天瑞",
      "courseName": "線性代數",
      "time": [
        "M3",
        "M4",
        "R2"
      ],
      "geType": "無向度",
      "people": 63,
      "gpaAvg": 3.89,
      "failPeople": 2,
      "passingRate": 96.8,
      "grades": {
        "A+": {
          "people": 29,
          "percentage": 46
        },
        "A": {
          "people": 17,
          "percentage": 27
        },
        "A-": {
          "people": 9,
          "percentage": 14.3
        },
        "B+": {
          "people": 3,
          "percentage": 4.8
        },
        "B": {
          "people": 2,
          "percentage": 3.2
        },
        "B-": {
          "people": 0,
          "percentage": 0
        },
        "C+": {
          "people": 0,
          "percentage": 0
        },
        "C": {
          "people": 1,
          "percentage": 1.6
        },
        "C-": {
          "people": 0,
          "percentage": 0
        },
        "D": {
          "people": 1,
          "percentage": 1.6
        },
        "E": {
          "people": 1,
          "percentage": 1.6
        },
        "X": {
          "people": 0,
          "percentage": 0
        }
      }
    },
    {
      "courseNo": [
        "CS1006302"
      ],
      "teacher": "周詩梵",
      "courseName": "線性代數",
      "time": [
        "M3",
        "M4",
        "R2"
      ],
      "geType": "無向度",
      "people": 48,
      "gpaAvg": 2.4,
      "failPeople": 12,
      "passingRate": 75,
      "grades": {
        "A+": {
          "people": 8,
          "percentage": 16.7
        },
        "A": {
          "people": 3,
          "percentage": 6.3
        },
        "A-": {
          "people": 4,
          "percentage": 8.3
        },
        "B+": {
          "people": 5,
          "percentage": 10.4
        },
        "B": {
          "people": 2,
          "percentage": 4.2
        },
        "B-": {
          "people": 4,
          "percentage": 8.3
        },
        "C+": {
          "people": 1,
          "percentage": 2.1
        },
        "C": {
          "people": 4,
          "percentage": 8.3
        },
        "C-": {
          "people": 5,
          "percentage": 10.4
        },
        "D": {
          "people": 2,
          "percentage": 4.2
        },
        "E": {
          "people": 9,
          "percentage": 18.8
        },
        "X": {
          "people": 1,
          "percentage": 2.1
        }
      }
    },
    {
      "courseNo": [
        "EC2003701",
        "EC2003701"
      ],
      "courseName": "線性代數",
      "time": [
        "M1",
        "T3",
        "T4"
      ],
      "geType": "無向度",
      "people": 49,
      "gpaAvg": 3.06,
      "failPeople": 7,
      "passingRate": 85.7,
      "grades": {
        "A+": {
          "people": 12,
          "percentage": 24.5
        },
        "A": {
          "people": 5,
          "percentage": 10.2
        },
        "A-": {
          "people": 6,
          "percentage": 12.2
        },
        "B+": {
          "people": 6,
          "percentage": 12.2
        },
        "B": {
          "people": 6,
          "percentage": 12.2
        },
        "B-": {
          "people": 4,
          "percentage": 8.2
        },
        "C+": {
          "people": 2,
          "percentage": 4.1
        },
        "C": {
          "people": 0,
          "percentage": 0
        },
        "C-": {
          "people": 1,
          "percentage": 2
        },
        "D": {
          "people": 1,
          "percentage": 2
        },
        "E": {
          "people": 6,
          "percentage": 12.2
        },
        "X": {
          "people": 0,
          "percentage": 0
        }
      }
    },
    {
      "courseNo": [
        "EE4005301"
      ],
      "teacher": "張立中",
      "courseName": "線性代數",
      "time": [
        "R8",
        "W6",
        "W7"
      ],
      "geType": "無向度",
      "people": 62,
      "gpaAvg": 3.06,
      "failPeople": 8,
      "passingRate": 87.1,
      "grades": {
        "A+": {
          "people": 11,
          "percentage": 17.7
        },
        "A": {
          "people": 7,
          "percentage": 11.3
        },
        "A-": {
          "people": 11,
          "percentage": 17.7
        },
        "B+": {
          "people": 7,
          "percentage": 11.3
        },
        "B": {
          "people": 7,
          "percentage": 11.3
        },
        "B-": {
          "people": 6,
          "percentage": 9.7
        },
        "C+": {
          "people": 0,
          "percentage": 0
        },
        "C": {
          "people": 4,
          "percentage": 6.5
        },
        "C-": {
          "people": 1,
          "percentage": 1.6
        },
        "D": {
          "people": 4,
          "percentage": 6.5
        },
        "E": {
          "people": 4,
          "percentage": 6.5
        },
        "X": {
          "people": 0,
          "percentage": 0
        }
      }
    },
    {
      "courseNo": [
        "EE4005302"
      ],
      "teacher": "陳俊良",
      "courseName": "線性代數",
      "time": [
        "R8",
        "W6",
        "W7"
      ],
      "geType": "無向度",
      "people": 77,
      "gpaAvg": 3.21,
      "failPeople": 4,
      "passingRate": 94.8,
      "grades": {
        "A+": {
          "people": 18,
          "percentage": 23.4
        },
        "A": {
          "people": 9,
          "percentage": 11.7
        },
        "A-": {
          "people": 12,
          "percentage": 15.6
        },
        "B+": {
          "people": 3,
          "percentage": 3.9
        },
        "B": {
          "people": 10,
          "percentage": 13
        },
        "B-": {
          "people": 6,
          "percentage": 7.8
        },
        "C+": {
          "people": 4,
          "percentage": 5.2
        },
        "C": {
          "people": 5,
          "percentage": 6.5
        },
        "C-": {
          "people": 6,
          "percentage": 7.8
        },
        "D": {
          "people": 4,
          "percentage": 5.2
        },
        "E": {
          "people": 0,
          "percentage": 0
        },
        "X": {
          "people": 0,
          "percentage": 0
        }
      }
    },
    {
      "courseNo": [
        "EC2003702"
      ],
      "teacher": "陳俊良",
      "courseName": "線性代數",
      "time": [
        "R8",
        "W6",
        "W7"
      ],
      "geType": "無向度",
      "people": 17,
      "gpaAvg": 3.15,
      "failPeople": 2,
      "passingRate": 88.2,
      "grades": {
        "A+": {
          "people": 5,
          "percentage": 29.4
        },
        "A": {
          "people": 2,
          "percentage": 11.8
        },
        "A-": {
          "people": 2,
          "percentage": 11.8
        },
        "B+": {
          "people": 1,
          "percentage": 5.9
        },
        "B": {
          "people": 2,
          "percentage": 11.8
        },
        "B-": {
          "people": 0,
          "percentage": 0
        },
        "C+": {
          "people": 0,
          "percentage": 0
        },
        "C": {
          "people": 1,
          "percentage": 5.9
        },
        "C-": {
          "people": 2,
          "percentage": 11.8
        },
        "D": {
          "people": 2,
          "percentage": 11.8
        },
        "E": {
          "people": 0,
          "percentage": 0
        },
        "X": {
          "people": 0,
          "percentage": 0
        }
      }
    },
    {
      "courseNo": [
        "CS1006301"
      ],
      "teacher": "項天瑞",
      "courseName": "線性代數",
      "time": [
        "M3",
        "M4",
        "R2"
      ],
      "geType": "無向度",
      "people": 50,
      "gpaAvg": 3.42,
      "failPeople": 6,
      "passingRate": 88,
      "grades": {
        "A+": {
          "people": 19,
          "percentage": 38
        },
        "A": {
          "people": 8,
          "percentage": 16
        },
        "A-": {
          "people": 9,
          "percentage": 18
        },
        "B+": {
          "people": 3,
          "percentage": 6
        },
        "B": {
          "people": 2,
          "percentage": 4
        },
        "B-": {
          "people": 1,
          "percentage": 2
        },
        "C+": {
          "people": 2,
          "percentage": 4
        },
        "C": {
          "people": 0,
          "percentage": 0
        },
        "C-": {
          "people": 0,
          "percentage": 0
        },
        "D": {
          "people": 1,
          "percentage": 2
        },
        "E": {
          "people": 3,
          "percentage": 6
        },
        "X": {
          "people": 2,
          "percentage": 4
        }
      }
    },
    {
      "courseNo": [
        "CS1006302"
      ],
      "teacher": "周詩梵",
      "courseName": "線性代數",
      "time": [
        "M3",
        "M4",
        "R2"
      ],
      "geType": "無向度",
      "people": 68,
      "gpaAvg": 3.01,
      "failPeople": 6,
      "passingRate": 91.2,
      "grades": {
        "A+": {
          "people": 8,
          "percentage": 11.8
        },
        "A": {
          "people": 15,
          "percentage": 22.1
        },
        "A-": {
          "people": 8,
          "percentage": 11.8
        },
        "B+": {
          "people": 5,
          "percentage": 7.4
        },
        "B": {
          "people": 8,
          "percentage": 11.8
        },
        "B-": {
          "people": 4,
          "percentage": 5.9
        },
        "C+": {
          "people": 3,
          "percentage": 4.4
        },
        "C": {
          "people": 6,
          "percentage": 8.8
        },
        "C-": {
          "people": 5,
          "percentage": 7.4
        },
        "D": {
          "people": 2,
          "percentage": 2.9
        },
        "E": {
          "people": 3,
          "percentage": 4.4
        },
        "X": {
          "people": 1,
          "percentage": 1.5
        }
      }
    },
    {
      "courseNo": [
        "EC2003701"
      ],
      "teacher": "鄧惟中",
      "courseName": "線性代數",
      "time": [
        "M1",
        "T3",
        "T4"
      ],
      "geType": "無向度",
      "people": 52,
      "gpaAvg": 3.14,
      "failPeople": 3,
      "passingRate": 94.2,
      "grades": {
        "A+": {
          "people": 10,
          "percentage": 19.2
        },
        "A": {
          "people": 8,
          "percentage": 15.4
        },
        "A-": {
          "people": 7,
          "percentage": 13.5
        },
        "B+": {
          "people": 2,
          "percentage": 3.8
        },
        "B": {
          "people": 8,
          "percentage": 15.4
        },
        "B-": {
          "people": 3,
          "percentage": 5.8
        },
        "C+": {
          "people": 5,
          "percentage": 9.6
        },
        "C": {
          "people": 3,
          "percentage": 5.8
        },
        "C-": {
          "people": 3,
          "percentage": 5.8
        },
        "D": {
          "people": 1,
          "percentage": 1.9
        },
        "E": {
          "people": 1,
          "percentage": 1.9
        },
        "X": {
          "people": 1,
          "percentage": 1.9
        }
      }
    },
    {
      "courseNo": [
        "EE4005301"
      ],
      "teacher": "張立中",
      "courseName": "線性代數",
      "time": [
        "R8",
        "W6",
        "W7"
      ],
      "geType": "無向度",
      "people": 71,
      "gpaAvg": 3.05,
      "failPeople": 5,
      "passingRate": 93,
      "grades": {
        "A+": {
          "people": 7,
          "percentage": 9.9
        },
        "A": {
          "people": 11,
          "percentage": 15.5
        },
        "A-": {
          "people": 13,
          "percentage": 18.3
        },
        "B+": {
          "people": 6,
          "percentage": 8.5
        },
        "B": {
          "people": 9,
          "percentage": 12.7
        },
        "B-": {
          "people": 11,
          "percentage": 15.5
        },
        "C+": {
          "people": 1,
          "percentage": 1.4
        },
        "C": {
          "people": 4,
          "percentage": 5.6
        },
        "C-": {
          "people": 4,
          "percentage": 5.6
        },
        "D": {
          "people": 1,
          "percentage": 1.4
        },
        "E": {
          "people": 4,
          "percentage": 5.6
        },
        "X": {
          "people": 0,
          "percentage": 0
        }
      }
    },
    {
      "courseNo": [
        "EE4005302"
      ],
      "teacher": "陳俊良",
      "courseName": "線性代數",
      "time": [
        "R8",
        "W6",
        "W7"
      ],
      "geType": "無向度",
      "people": 94,
      "gpaAvg": 3.17,
      "failPeople": 6,
      "passingRate": 93.6,
      "grades": {
        "A+": {
          "people": 24,
          "percentage": 25.5
        },
        "A": {
          "people": 11,
          "percentage": 11.7
        },
        "A-": {
          "people": 15,
          "percentage": 16
        },
        "B+": {
          "people": 7,
          "percentage": 7.4
        },
        "B": {
          "people": 7,
          "percentage": 7.4
        },
        "B-": {
          "people": 6,
          "percentage": 6.4
        },
        "C+": {
          "people": 3,
          "percentage": 3.2
        },
        "C": {
          "people": 8,
          "percentage": 8.5
        },
        "C-": {
          "people": 7,
          "percentage": 7.4
        },
        "D": {
          "people": 6,
          "percentage": 6.4
        },
        "E": {
          "people": 0,
          "percentage": 0
        },
        "X": {
          "people": 0,
          "percentage": 0
        }
      }
    },
    {
      "courseNo": [
        "CS1006301"
      ],
      "teacher": "項天瑞",
      "courseName": "線性代數",
      "time": [
        "M3",
        "M4",
        "R2"
      ],
      "geType": "無向度",
      "people": 115,
      "gpaAvg": 3.26,
      "failPeople": 5,
      "passingRate": 95.7,
      "grades": {
        "A+": {
          "people": 43,
          "percentage": 37.4
        },
        "A": {
          "people": 8,
          "percentage": 7
        },
        "A-": {
          "people": 10,
          "percentage": 8.7
        },
        "B+": {
          "people": 7,
          "percentage": 6.1
        },
        "B": {
          "people": 9,
          "percentage": 7.8
        },
        "B-": {
          "people": 10,
          "percentage": 8.7
        },
        "C+": {
          "people": 3,
          "percentage": 2.6
        },
        "C": {
          "people": 8,
          "percentage": 7
        },
        "C-": {
          "people": 12,
          "percentage": 10.4
        },
        "D": {
          "people": 1,
          "percentage": 0.9
        },
        "E": {
          "people": 4,
          "percentage": 3.5
        },
        "X": {
          "people": 0,
          "percentage": 0
        }
      }
    },
    {
      "courseNo": [
        "EE4005301"
      ],
      "teacher": "陳俊良",
      "courseName": "線性代數",
      "time": [
        "R8",
        "W6",
        "W7"
      ],
      "geType": "無向度",
      "people": 85,
      "gpaAvg": 3.35,
      "failPeople": 10,
      "passingRate": 88.2,
      "grades": {
        "A+": {
          "people": 26,
          "percentage": 30.6
        },
        "A": {
          "people": 19,
          "percentage": 22.4
        },
        "A-": {
          "people": 9,
          "percentage": 10.6
        },
        "B+": {
          "people": 4,
          "percentage": 4.7
        },
        "B": {
          "people": 8,
          "percentage": 9.4
        },
        "B-": {
          "people": 3,
          "percentage": 3.5
        },
        "C+": {
          "people": 1,
          "percentage": 1.2
        },
        "C": {
          "people": 1,
          "percentage": 1.2
        },
        "C-": {
          "people": 4,
          "percentage": 4.7
        },
        "D": {
          "people": 7,
          "percentage": 8.2
        },
        "E": {
          "people": 2,
          "percentage": 2.4
        },
        "X": {
          "people": 1,
          "percentage": 1.2
        }
      }
    },
    {
      "courseNo": [
        "EE4005302"
      ],
      "teacher": "張立中",
      "courseName": "線性代數",
      "time": [
        "R8",
        "W6",
        "W7"
      ],
      "geType": "無向度",
      "people": 69,
      "gpaAvg": 3.13,
      "failPeople": 4,
      "passingRate": 94.2,
      "grades": {
        "A+": {
          "people": 10,
          "percentage": 14.5
        },
        "A": {
          "people": 13,
          "percentage": 18.8
        },
        "A-": {
          "people": 10,
          "percentage": 14.5
        },
        "B+": {
          "people": 3,
          "percentage": 4.3
        },
        "B": {
          "people": 9,
          "percentage": 13
        },
        "B-": {
          "people": 6,
          "percentage": 8.7
        },
        "C+": {
          "people": 7,
          "percentage": 10.1
        },
        "C": {
          "people": 4,
          "percentage": 5.8
        },
        "C-": {
          "people": 3,
          "percentage": 4.3
        },
        "D": {
          "people": 2,
          "percentage": 2.9
        },
        "E": {
          "people": 1,
          "percentage": 1.4
        },
        "X": {
          "people": 1,
          "percentage": 1.4
        }
      }
    },
    {
      "courseNo": [
        "EC2003701"
      ],
      "teacher": "鄧惟中",
      "courseName": "線性代數",
      "time": [
        "M1",
        "T3",
        "T4"
      ],
      "geType": "無向度",
      "people": 54,
      "gpaAvg": 3.13,
      "failPeople": 4,
      "passingRate": 92.6,
      "grades": {
        "A+": {
          "people": 7,
          "percentage": 13
        },
        "A": {
          "people": 11,
          "percentage": 20.4
        },
        "A-": {
          "people": 10,
          "percentage": 18.5
        },
        "B+": {
          "people": 4,
          "percentage": 7.4
        },
        "B": {
          "people": 6,
          "percentage": 11.1
        },
        "B-": {
          "people": 3,
          "percentage": 5.6
        },
        "C+": {
          "people": 2,
          "percentage": 3.7
        },
        "C": {
          "people": 4,
          "percentage": 7.4
        },
        "C-": {
          "people": 3,
          "percentage": 5.6
        },
        "D": {
          "people": 1,
          "percentage": 1.9
        },
        "E": {
          "people": 2,
          "percentage": 3.7
        },
        "X": {
          "people": 1,
          "percentage": 1.9
        }
      }
    },
    {
      "courseNo": [
        "EC2003701"
      ],
      "teacher": "鄧惟中",
      "courseName": "線性代數",
      "time": [
        "M1",
        "T3",
        "T4"
      ],
      "geType": "無向度",
      "people": 85,
      "gpaAvg": 2.86,
      "failPeople": 12,
      "passingRate": 85.9,
      "grades": {
        "A+": {
          "people": 14,
          "percentage": 16.5
        },
        "A": {
          "people": 9,
          "percentage": 10.6
        },
        "A-": {
          "people": 10,
          "percentage": 11.8
        },
        "B+": {
          "people": 8,
          "percentage": 9.4
        },
        "B": {
          "people": 13,
          "percentage": 15.3
        },
        "B-": {
          "people": 5,
          "percentage": 5.9
        },
        "C+": {
          "people": 4,
          "percentage": 4.7
        },
        "C": {
          "people": 4,
          "percentage": 4.7
        },
        "C-": {
          "people": 6,
          "percentage": 7.1
        },
        "D": {
          "people": 4,
          "percentage": 4.7
        },
        "E": {
          "people": 6,
          "percentage": 7.1
        },
        "X": {
          "people": 2,
          "percentage": 2.4
        }
      }
    },
    {
      "courseNo": [
        "CS1006301"
      ],
      "teacher": "項天瑞",
      "courseName": "線性代數",
      "time": [
        "M3",
        "M4",
        "T1"
      ],
      "geType": "無向度",
      "people": 115,
      "gpaAvg": 2.39,
      "failPeople": 24,
      "passingRate": 79.1,
      "grades": {
        "A+": {
          "people": 3,
          "percentage": 2.6
        },
        "A": {
          "people": 4,
          "percentage": 3.5
        },
        "A-": {
          "people": 23,
          "percentage": 20
        },
        "B+": {
          "people": 12,
          "percentage": 10.4
        },
        "B": {
          "people": 17,
          "percentage": 14.8
        },
        "B-": {
          "people": 8,
          "percentage": 7
        },
        "C+": {
          "people": 8,
          "percentage": 7
        },
        "C": {
          "people": 7,
          "percentage": 6.1
        },
        "C-": {
          "people": 9,
          "percentage": 7.8
        },
        "D": {
          "people": 13,
          "percentage": 11.3
        },
        "E": {
          "people": 9,
          "percentage": 7.8
        },
        "X": {
          "people": 2,
          "percentage": 1.7
        }
      }
    },
    {
      "courseNo": [
        "EC2003301"
      ],
      "teacher": "鄧惟中",
      "courseName": "線性代數",
      "time": [
        "F7",
        "F8",
        "T1"
      ],
      "geType": "無向度",
      "people": 61,
      "gpaAvg": 2.35,
      "failPeople": 12,
      "passingRate": 80.3,
      "grades": {
        "A+": {
          "people": 6,
          "percentage": 9.8
        },
        "A": {
          "people": 6,
          "percentage": 9.8
        },
        "A-": {
          "people": 6,
          "percentage": 9.8
        },
        "B+": {
          "people": 3,
          "percentage": 4.9
        },
        "B": {
          "people": 5,
          "percentage": 8.2
        },
        "B-": {
          "people": 2,
          "percentage": 3.3
        },
        "C+": {
          "people": 4,
          "percentage": 6.6
        },
        "C": {
          "people": 8,
          "percentage": 13.1
        },
        "C-": {
          "people": 9,
          "percentage": 14.8
        },
        "D": {
          "people": 5,
          "percentage": 8.2
        },
        "E": {
          "people": 7,
          "percentage": 11.5
        },
        "X": {
          "people": 0,
          "percentage": 0
        }
      }
    },
    {
      "courseNo": [
        "EC2003301"
      ],
      "teacher": "鄧惟中",
      "courseName": "線性代數",
      "time": [
        "M3",
        "M4",
        "T1"
      ],
      "geType": "無向度",
      "people": 75,
      "gpaAvg": 2.37,
      "failPeople": 17,
      "passingRate": 77.3,
      "grades": {
        "A+": {
          "people": 9,
          "percentage": 12
        },
        "A": {
          "people": 4,
          "percentage": 5.3
        },
        "A-": {
          "people": 7,
          "percentage": 9.3
        },
        "B+": {
          "people": 5,
          "percentage": 6.7
        },
        "B": {
          "people": 6,
          "percentage": 8
        },
        "B-": {
          "people": 6,
          "percentage": 8
        },
        "C+": {
          "people": 6,
          "percentage": 8
        },
        "C": {
          "people": 7,
          "percentage": 9.3
        },
        "C-": {
          "people": 8,
          "percentage": 10.7
        },
        "D": {
          "people": 5,
          "percentage": 6.7
        },
        "E": {
          "people": 12,
          "percentage": 16
        },
        "X": {
          "people": 0,
          "percentage": 0
        }
      }
    },
    {
      "courseNo": [
        "CS1006301"
      ],
      "teacher": "項天瑞",
      "courseName": "線性代數",
      "time": [
        "M3",
        "M4",
        "T1"
      ],
      "geType": "無向度",
      "people": 74,
      "gpaAvg": 2.68,
      "failPeople": 17,
      "passingRate": 77,
      "grades": {
        "A+": {
          "people": 21,
          "percentage": 28.4
        },
        "A": {
          "people": 0,
          "percentage": 0
        },
        "A-": {
          "people": 3,
          "percentage": 4.1
        },
        "B+": {
          "people": 3,
          "percentage": 4.1
        },
        "B": {
          "people": 7,
          "percentage": 9.5
        },
        "B-": {
          "people": 6,
          "percentage": 8.1
        },
        "C+": {
          "people": 5,
          "percentage": 6.8
        },
        "C": {
          "people": 4,
          "percentage": 5.4
        },
        "C-": {
          "people": 8,
          "percentage": 10.8
        },
        "D": {
          "people": 17,
          "percentage": 23
        },
        "E": {
          "people": 0,
          "percentage": 0
        },
        "X": {
          "people": 0,
          "percentage": 0
        }
      }
    },
    {
      "courseNo": [
        "EE4005301"
      ],
      "teacher": "陳俊良",
      "courseName": "線性代數",
      "time": [
        "R8",
        "R9",
        "W9"
      ],
      "geType": "無向度",
      "people": 60,
      "gpaAvg": 2.99,
      "failPeople": 3,
      "passingRate": 95,
      "grades": {
        "A+": {
          "people": 5,
          "percentage": 8.3
        },
        "A": {
          "people": 5,
          "percentage": 8.3
        },
        "A-": {
          "people": 11,
          "percentage": 18.3
        },
        "B+": {
          "people": 7,
          "percentage": 11.7
        },
        "B": {
          "people": 11,
          "percentage": 18.3
        },
        "B-": {
          "people": 5,
          "percentage": 8.3
        },
        "C+": {
          "people": 4,
          "percentage": 6.7
        },
        "C": {
          "people": 4,
          "percentage": 6.7
        },
        "C-": {
          "people": 5,
          "percentage": 8.3
        },
        "D": {
          "people": 2,
          "percentage": 3.3
        },
        "E": {
          "people": 1,
          "percentage": 1.7
        },
        "X": {
          "people": 0,
          "percentage": 0
        }
      }
    }
  ]
}
```

</details>

## Simple Example

```typescript
import { LoginByAccount, NtustGpaSearch } from 'ntust-gpa-search';

const client = new NtustGpaSearch();

try {
  console.log('Trying to login by account...');
  const loginMethod = new LoginByAccount(USERNAME, PASSWORD);
  await loginMethod.login(client);
} catch {
  console.error('Failed to login');
  process.exit(1);
}

try {
  const userProfile = await client.getUserProfile();
  console.log(userProfile);
} catch {
  console.error('Failed to get user profile');
  process.exit(1);
}

const sessionToken = await client.getSessionToken();
console.log(`sessionToken: ${sessionToken}`);

try {
  const result = await client.query('線性代數');
  console.log(result);
} catch {
  console.error('Failed to query');
  process.exit(1);
}
```

For a more detailed example, see [Example](./example).

> This project was not developed by myNTUST team or National Taiwan University of Science and Technology (NTUST), so please do not try to ask them for help.

> Made with ❤️ by [Hayden](https://github.com/hayd1n)
