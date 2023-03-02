import { getDatabase, ref, set, get, child } from "firebase/database";

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

const writeContacData = (document, id, userId, email, firstName, lastName, phone) => {
  const dbCurso = getDatabase();
  console.log(id);
  try {
    set(ref(dbCurso, document + '/' + id), {
      userId: userId,
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phone
    });
    alert("Se registro de forma correcta");
  } catch (e) {
    console.log(e);
  }
}

const readUserData = async (document, userId) => {
  const dbRef = ref(getDatabase());
  const resultado = await get(child(dbRef, document + `/${userId}`)).then((resultado) => {
    return (resultado.val());
  });
  return resultado;
}
export { writeUserData, writeContacData, readUserData };