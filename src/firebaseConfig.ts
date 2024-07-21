import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFunctions, httpsCallable } from 'firebase/functions';

// Function to fetch Firebase configuration using a callable function
const fetchFirebaseConfig = async () => {
  const functions = getFunctions();
  const getConfig = httpsCallable(functions, 'getFirebaseConfig');
  const result = await getConfig();
  return result.data;
};

// Initialize Firebase asynchronously
fetchFirebaseConfig()
  .then((firebaseConfig) => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const database = getDatabase(app);

    // Set Auth persistence
    setPersistence(auth, browserLocalPersistence).catch(console.error);

    // Export the initialized services
    export { auth, database };
  })
  .catch(console.error);
