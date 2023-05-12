"use client";

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import ToDoCard from "../components/TodoCard";
import CreateArea from "@/app/components/CreateArea";

import { useRouter } from "next/navigation";

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

import { useAuth } from "@/context/AuthContext";

export default function DashBoard() {
  const [todolist, setTodolist] = useState([]);
  const { currentUser } = useAuth();
  const router = useRouter();

  const uid = currentUser?.uid;

  async function handleAdd(todo) {
    try {
      // create a new key according to current time
      const createdTime = new Date().getTime();

      const taskId = uuidv4();
      const todoData = {
        name: todo,
        createdTime: createdTime,
      };

      const docRef = doc(db, "users", uid, "todos", taskId);
      await setDoc(docRef, todoData, { merge: true });
      setTodolist((prev) => [...prev, { ...todoData, id: taskId }]);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleEdit(id, edittedValue) {
    try {
      const docRef = doc(db, `users/${uid}/todos`, id);
      await updateDoc(docRef, {
        name: edittedValue,
      });
      setTodolist((prev) =>
        prev.map((todo) => {
          if (todo.id === id) {
            return { ...todo, name: edittedValue };
          } else {
            return todo;
          }
        })
      );
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete(id) {
    try {
      const docRef = doc(db, `users/${uid}/todos`, id);
      await deleteDoc(docRef);
      setTodolist((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchData() {
    try {
      const userRef = collection(db, "users", uid, "todos");
      const q = query(userRef, orderBy("createdTime"));

      const querySnapshot = await getDocs(q);
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTodolist(fetchedData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    currentUser ? fetchData() : router.push("/");
  }, [currentUser, router]);


  return (
    <div className="py-8 px-4 mx-auto w-full max-w-prose">
      <div className="grid gap-8">
        <CreateArea handleAdd={handleAdd} />
        {todolist &&
          todolist.map((todo) => (
            <ToDoCard
              key={todo.id}
              id={todo.id}
              name={todo.name}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
}
