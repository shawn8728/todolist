"use client";

import React, { useState, useEffect } from "react";

import ToDoCard from "@/app/components/TodoCard";
import CreateArea from "@/app/components/CreateArea";

import { useRouter } from "next/navigation";

import {
  addTodo,
  fetchTodo,
  updateTodo,
  deleteTodo,
} from "@/firebase/firestoreServices";

import { useAuth } from "@/context/AuthContext";

export default function DashBoard() {
  const [todolist, setTodolist] = useState([]);
  const { currentUser } = useAuth();
  const router = useRouter();

  const uid = currentUser?.uid;

  async function handleAdd(todo) {
    try {
      const { todoData, taskId } = await addTodo(todo, uid);

      setTodolist((prev) => [...prev, { ...todoData, id: taskId }]);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleEdit(id, edittedValue) {
    try {
      await updateTodo(edittedValue, uid, id);

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
      await deleteTodo(uid, id);

      // Filter out the todo that matches the id
      setTodolist((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchData() {
    try {
      const fetchedData = await fetchTodo(uid);

      setTodolist(fetchedData);
    } catch (err) {
      console.error(err);
    }
  }

  // Fetch data when the component mounts, and redirect to home page if user is not logged in
  useEffect(() => {
    currentUser ? fetchData() : router.push("/");
  }, [currentUser, router]);

  return (
    currentUser && (
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
    )
  );
}
