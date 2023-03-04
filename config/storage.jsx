import { async } from "@firebase/util";
import { getStorage, ref, uploadString,uploadBytesResumable, getDownloadURL } from "firebase/storage";

const storage = getStorage();

const upload = async(document,type, file, name ) => {
    console.log("storage",file);
    const imageRef = ref(storage, document + "/"+name+".jpg");
    const localFile = await fetch(file.uri);
    console.info("localfile ",localFile);
    const fileBlob = await localFile.blob();
    console.info("fileblob ",localFile);
    return await uploadBytesResumable(imageRef, fileBlob) //,{ contentType: file.type }
        .then((snapshot) => {
            console.log('Uploaded', snapshot.totalBytes, 'bytes.');
            console.log('File metadata:', snapshot.metadata);
            return getDownloadURL(snapshot.ref).then((url) => {
                console.log('File available at', url);
                return url;
            });
        }).catch((error) => {
            console.error('Upload failed', error);
            // ...
        });
}

export { upload };