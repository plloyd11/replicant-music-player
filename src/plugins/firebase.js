import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCyTf6LrImqOfNcTqJWFE6HJcKz9zogJPY',
    authDomain: 'replicant-player.firebaseapp.com',
    projectId: 'replicant-player',
    storageBucket: 'replicant-player.appspot.com',
    messagingSenderId: '313297548269',
    appId: '1:313297548269:web:5beb8ed22dcc1349e36de4'
};

// initialize firebase
initializeApp(firebaseConfig);

// initialize firebase auth
const auth = getAuth();

export { auth };
