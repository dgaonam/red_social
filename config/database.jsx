import { getDatabase, ref, set, get, child,databaseOff,databaseOnValue } from "firebase/database";

const writeUserData = (document, id, email, fullName,avatar_url) => {
  const dbCurso = getDatabase();
  console.log(id);
  let created = false;
  try {
    set(ref(dbCurso, document + '/' + id), {
      email: email,
      fullName: fullName,
      avatar_url: avatar_url
    });
    created = true;
  } catch (e) {
    console.log(e);
    created = false;
  }
  return created;
}

const writePostData = async(document, {id="",author={},type="",picture_url="",like=0,place=""}) => {
  const dbCurso = getDatabase();
  console.log(like);
  try {
    set(ref(dbCurso, document + '/' + id), {
      id,
      author: {userId: author.userId,fullName: author.fullName,avatar_url: author.avatar_url},
      type: type,
      picture_url: picture_url,
      like: like,
      place:place,
    
    });
    return true;
  } catch (e) {
    console.log("Firbase: ",e);
    return false;
  }
}

const writeNotificationData = async(document, {id="",avatar_url,type,message}) => {
  const dbCurso = getDatabase();
  console.log(id);
  try {
    set(ref(dbCurso, document + '/' + id), {
      id,
      avatar_url: avatar_url,
      type: type,
      message: message,
    });
    return true;
  } catch (e) {
    console.log("Firbase: ",e);
    return false;
  }
}

const readUserData = async (document, userId) => {
  const dbRef = ref(getDatabase());
  const resultado = await get(child(dbRef, document + `/${userId}`)).then((resultado) => {
    return (resultado.val());
  });
  return resultado;
}

const readPostData =  async(document) => {
  const dbRef = ref(getDatabase());
  const resultado = await  get(child(dbRef, document )).then((posts)=>{
    return posts.val();
  })
  return resultado;
}

export { writeUserData, writePostData, writeNotificationData, readUserData,readPostData };