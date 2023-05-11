"use client";

import { React, useState } from "react";
import { Card, Label, TextInput, Button } from "flowbite-react";

export default function CreateArea(props) {
  const [todo, setTodo] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault();
    setTodo("");
  }

  return (
    <Card>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="item" value="New item" />
          </div>
          <TextInput
            id="item"
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="New item..."
            required={true}
          />
        </div>
        <Button onClick={handleSubmit} type="submit">Add</Button>
      </form>
    </Card>
  );
}
