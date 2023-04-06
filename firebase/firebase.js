// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import * as firebase from "firebase";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  writeBatch,
  query,
  deleteDoc,
  orderBy,
  limit,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { getFile } from "../utils";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "bleuwater-b535f.firebaseapp.com",
  projectId: "bleuwater-b535f",
  storageBucket: "bleuwater-b535f.appspot.com",
  messagingSenderId: "612325301415",
  appId: "1:612325301415:web:12bd739b5266a3fa82cf82",
  measurementId: "G-KVYNJ5XLL0",
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
// const analytics = getAnalytics(app);

// Initialize Firebase
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// feedback
export const createFeedback = async (feedback) => {
  try {
    await addDoc(collection(db, "feedback"), feedback);
    console.log("saved!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

// waitlists
export const createWaitlist = async ({ id, payload }) => {
  try {
    await setDoc(doc(db, "utils-waitlist", id), payload);
    console.log("Saved!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

// waitlists
export const createElearning = async ({ id, payload }) => {
  try {
    await setDoc(doc(db, "utils-eLearning", id), payload);
    console.log("Saved!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

// nft utilities
export const createUtility = async ({ id, utility }) => {
  try {
    await setDoc(doc(db, "utilities", id), utility);
    console.log("Saved!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createBatchUtility = async ({ id, utility }) => {
  const countPerWrite = 500;
  const numberOfWrites = Math.ceil(id.length / countPerWrite);
  let startIndex = 0;
  let endIndex = startIndex + countPerWrite;
  const paginate = [];
  for (let i = 0; i < numberOfWrites; i += 1) {
    paginate[i] = id.slice(startIndex, endIndex);
    startIndex = endIndex;
    endIndex = startIndex + countPerWrite;
  }

  for (let i = 0; i < paginate.length; i++) {
    const batch = writeBatch(db);
    for (let j = 0; j < paginate[i].length; j++) {
      batch.set(doc(db, "utilities", paginate[i][j]), utility);
    }
    await batch.commit();
  }
  console.log("Saved...");
};

export const getUtility = async (id) => {
  const docRef = doc(db, "utilities", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
};

export const updateUtility = async (id, utility) => {
  try {
    await updateDoc(doc(db, "utilities", id), utility);
  } catch (error) {
    console.log(error);
    return error;
  }
};

// user profile
export const createUserProfile = async (user) => {
  try {
    await setDoc(doc(db, "users", user.account), user);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getUserProfile = async (account) => {
  const docRef = doc(db, "users", account);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const uploadImage = async ({ account, name, file }) => {
  try {
    const imageRef = ref(storage, `users/${account}/${name}.png`);
    uploadBytes(imageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getImage = async ({ account, name }) => {
  try {
    const url = await getDownloadURL(
      ref(storage, `users/${account}/${name}.png`)
    );
    return await getFile(url);
  } catch (error) {
    console.log(error);
  }
};

export const deleteImage = async ({ account, name }) => {
  const imageRef = ref(storage, `users/${account}/${name}.png`);
  await deleteObject(imageRef);
};

// collection

export const createCollectionProfile = async (collection) => {
  try {
    await setDoc(doc(db, "collections", collection.id), collection);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getCollectionProfile = async (id) => {
  const docRef = doc(db, "collections", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const uploadCollectionImage = async ({ id, name, file }) => {
  try {
    const imageRef = ref(storage, `collections/${id}/${name}.png`);
    uploadBytes(imageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getCollectionImage = async ({ id, name }) => {
  try {
    const url = await getDownloadURL(
      ref(storage, `collections/${id}/${name}.png`)
    );
    return await getFile(url);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCollectionImage = async ({ id, name }) => {
  const imageRef = ref(storage, `collections/${id}/${name}.png`);
  await deleteObject(imageRef);
};

// notifications

export const sendNotification = async ({ account, notification }) => {
  try {
    await addDoc(
      collection(db, "notifications", account, "notification"),
      notification
    );
    console.log("Saved!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getNotifications = async ({ account, setNotes }) => {
  const q = query(
    collection(db, "notifications", account, "notification"),
    orderBy("timeStamp", "desc"),
    limit(20)
  );
  console.log("subscribed!");
  return onSnapshot(q, (querySnapshot) => {
    const notifications = [];
    querySnapshot.forEach((doc) => {
      notifications.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setNotes(notifications);
  });
};

export const deleteNotification = async ({ account, nId }) => {
  const docSnap = await getDoc(
    doc(db, "notifications", account, "notification", nId)
  );
  deleteDoc(docSnap.ref);
};

export const deleteAllNotifications = async ({ account }) => {
  const q = query(collection(db, "notifications", account, "notification"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

// message request

export const sendMessageRequest = async ({ admin, user, message }) => {
  try {
    await addDoc(collection(db, "messages", admin, "message"), message);
    await addDoc(
      collection(db, "messages", `${user}-${admin}`, "message"),
      message
    );
    console.log("Saved!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const sendMessage = async ({ admin, user, message }) => {
  try {
    await addDoc(
      collection(db, "messages", `${user}-${admin}`, "message"),
      message
    );
    console.log("Saved!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getMessageRequest = async ({ admin }) => {
  const docRef = collection(db, "messages", admin, "message");
  const querySnapshot = await getDocs(docRef);
  const initialRequest = [];
  querySnapshot.forEach((doc) => {
    initialRequest.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return initialRequest;
};

export const subscribeToSharedMessages = ({ admin, user, setMessages }) => {
  const q = query(
    collection(db, "messages", `${user}-${admin}`, "message"),
    orderBy("timeStamp", "asc"),
    limit(100)
  );
  return onSnapshot(q, (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setMessages(messages);
  });
};
