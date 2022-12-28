import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
import {getFirestore} from 'firebase/firestore';
import * as process from '@env';

const {API_KEY, AUTH_DOMAIN, PROJECT_ID, DATABASE_URL, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID} =
  process;

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  databaseURL: DATABASE_URL,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

const app = initializeApp(config);
const db = getFirestore(app);
const auth = getAuth(app);
const db_rt = getDatabase(app);

export {app, db, auth, db_rt};
