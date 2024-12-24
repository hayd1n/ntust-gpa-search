import dotenv from 'dotenv';

import { LoginByAccount, LoginBySessionToken, NtustGpaSearch } from '../src';

dotenv.config();
const { SESSION_TOKEN, USERNAME, PASSWORD } = process.env;

const client = new NtustGpaSearch();
if (SESSION_TOKEN !== undefined) {
  console.log('Trying to login by session token...');
  const loginMethod = new LoginBySessionToken(SESSION_TOKEN);
  await loginMethod.login(client);
} else if (USERNAME !== undefined && PASSWORD !== undefined) {
  console.log('Trying to login by account...');
  const loginMethod = new LoginByAccount(USERNAME, PASSWORD);
  await loginMethod.login(client);
} else {
  throw new Error('Account or password not found in .env file');
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
