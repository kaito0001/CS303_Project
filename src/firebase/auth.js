import { auth } from './config';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    sendPasswordResetEmail
} from 'firebase/auth';

async function signup ( email, password ) {
    return await createUserWithEmailAndPassword( auth, email, password );
}

async function signin ( email, password ) {
    return await signInWithEmailAndPassword( auth, email, password );
}

async function resetPassword ( email ) {
    await sendPasswordResetEmail( auth, email );
}

export { signup, signin, resetPassword };