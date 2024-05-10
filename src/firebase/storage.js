import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './config';

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
        const storageRef = ref(storage, fileName); // Assuming 'storage' is properly defined

        const snapshot = await uploadBytes(storageRef, blob);

        // We're done with the blob, close and release it
        blob.close();

        return await getDownloadURL(snapshot.ref);
    } catch (error) {
        console.log('dsfdsf' + error);
        throw error;
    }
}

export { uploadImageAsync };
