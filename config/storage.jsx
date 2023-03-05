import { async } from "@firebase/util";
import { getStorage, ref, uploadString, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const storage = getStorage();

const upload = async (document, type, file, name) => {
    const imageRef = ref(storage, document + "/" + name + ".jpg");
    const localFile = await fetch(file.uri);
    const fileBlob = await localFile.blob();
    return await uploadBytesResumable(imageRef, fileBlob) //,{ contentType: file.type }
        .then((snapshot) => {

            return getDownloadURL(snapshot.ref).then((url) => {
                return url;
            });
        }).catch((error) => {
            console.error('Upload failed', error);
            // ...
        });
}

const download = async (document,name) => {
    const starsRef = ref(storage, document + '/'+name);

    // Get the download URL
    getDownloadURL(starsRef)
        .then((url) => {
            // Insert url into an <img> tag to "download"
        })
        .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    break;
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
            }
        });
}

export { upload };