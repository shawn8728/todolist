import React from "react";
import ToDoCard from "@/components/ToDoCard";
import CreateArea from "@/components/CreateArea";

export default function HomePage() {
  return (
    <div className="py-8 px-4 mx-auto w-full max-w-prose">
      <div className="grid gap-8">
        <CreateArea />
        <ToDoCard />
      </div>
    </div>
  );
}
