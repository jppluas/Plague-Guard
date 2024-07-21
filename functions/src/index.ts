import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const firebaseConfig = {
  apiKey: functions.config().myconfig.api_key,
  authDomain: functions.config().myconfig.auth_domain,
  databaseURL: functions.config().myconfig.database_url,
  projectId: functions.config().myconfig.project_id,
  storageBucket: functions.config().myconfig.storage_bucket,
  messagingSenderId: functions.config().myconfig.messaging_sender_id,
  appId: functions.config().myconfig.app_id,
};

admin.initializeApp(firebaseConfig);

export const getFirebaseConfig = functions.https.onCall((data, context) => {
  return firebaseConfig;
});
