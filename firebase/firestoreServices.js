import { v4 as uuidv4 } from "uuid";

import {
  doc,
  collection,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";

export async function addTodo(todo, uid) {
  const createdTime = new Date().getTime();

  const taskId = uuidv4();
  const todoData = {
    name: todo,
    createdTime: createdTime,
  };

  const docRef = doc(db, "users", uid, "todos", taskId);

  try {
    // Add a new document with a generated id
    await setDoc(docRef, todoData, { merge: true });

    return { todoData: todoData, taskId: taskId };
  } catch (err) {
    console.error(err);
  }
}

export async function fetchTodo(uid) {
  const userRef = collection(db, "users", uid, "todos");
  const q = query(userRef, orderBy("createdTime"));
  try {
    const querySnapshot = await getDocs(q);
    const fetchedData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return fetchedData;
  } catch (err) {
    console.error(err);
  }
}

export async function updateTodo(edittedValue, uid, id) {
  const docRef = doc(db, `users/${uid}/todos`, id);

  try {
    // Update the todo that matches the id
    await updateDoc(docRef, {
      name: edittedValue,
    });
  } catch (err) {
    console.error(err);
  }
}

export async function deleteTodo(uid, id) {
  const docRef = doc(db, `users/${uid}/todos`, id);

  try {
    // Delete the todo that matches the id
    await deleteDoc(docRef);
  } catch (err) {
    console.error(err);
  }
}
