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

const writePostData = async(document, {id="",userId="", author="", avatar_url="",type="",picture_url="",like=0,description="",place=""}) => {
  const dbCurso = getDatabase();
  console.log(id);
  try {
    set(ref(dbCurso, document + '/' + id), {
      userId: userId,
      author: author,
      avatar_url: avatar_url,
      type: type,
      picture_url: picture_url,
      like: like,
      description:description,
      place:place,
    
    });
    return true;
  } catch (e) {
    console.log(e);
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
export { writeUserData, writePostData, readUserData,readPostData };