import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import{
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCA_DpPVgRUE8B5eiCqKyqr4PcWvErqtyY",
    authDomain: "crwn-project-304cd.firebaseapp.com",
    projectId: "crwn-project-304cd",
    storageBucket: "crwn-project-304cd.appspot.com",
    messagingSenderId: "14764666819",
    appId: "1:14764666819:web:2d1daa78a0e00e7146d776"
  };
  

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid) //firebase method: doc(database, collection, identifier)
    //uid = unique identifier
    console.log("firebase",userAuth);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot)
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()){
        const { displayName, email } = userAuth
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch(error){
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef
}
