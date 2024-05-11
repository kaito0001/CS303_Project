import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from './config';
import { getDocFunc, updateDocFunc } from './firestore';
import { updateDoc } from "firebase/firestore";

async function uploadImageAsync(uri) {
    try {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
        });

        const fileName = uri.substring(uri.lastIndexOf("/") + 1);
        const storageRef = ref(storage, fileName);

        const snapshot = await uploadBytes(storageRef, blob);

        // We're done with the blob, close and release it
        blob.close();

        return await getDownloadURL(snapshot.ref);
    } catch (error) {
        console.log('dsfdsf' + error);
        throw error;
    }
}

async function uploadUserImage(uri, user) {
    try {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
        });

        const fileName = uri.substring(uri.lastIndexOf("/") + 1);
        const storageRef = ref(storage, fileName);

        const snapshot = await uploadBytes(storageRef, blob);

        // We're done with the blob, close and release it
        blob.close();

        const downloadURL =  await getDownloadURL(snapshot.ref);
        console.log(downloadURL);
        const userData = await getDocFunc('users', user);
        if (userData) {
            console.log(userData);
            const updatedUserData = {...userData, image: downloadURL};
            await updateDocFunc('users', user, updatedUserData);
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { uploadImageAsync, uploadUserImage };
