"use client";

import { React, useState } from "react";
import { Card, Label, TextInput, Button } from "flowbite-react";

export default function CreateArea(props) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.handleAdd(todo);
    setTodo("");
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="item" value="New task" />
          </div>
          <TextInput
            id="item"
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="Enter task name 📝"
            required={true}
          />
        </div>
        <Button type="submit">Add</Button>
      </form>
    </Card>
  );
}
