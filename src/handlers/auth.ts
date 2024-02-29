import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase.config';

const provider = new GoogleAuthProvider();

const FirebaseAuth = {
  signIn: (): Promise<any> => {
    return new Promise((resolve, reject) => {
      signInWithPopup(auth, provider)
        .then((result) => {
          resolve(result.user);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  },
  signOut: (): Promise<void> => {
    return new Promise((resolve, reject) => {
      signOut(auth)
        .then(() => {
          console.log('user logged out');
          resolve();
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  },
  getCurrentUser: (): Promise<any> => {
    return new Promise((resolve) => {
      return auth.onAuthStateChanged(resolve);
    });
  },
};

export default FirebaseAuth;
