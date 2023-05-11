import React from "react";
import ToDoCard from "@/components/ToDoCard";

export default function HomePage() {
  return (
    <div className="py-8 px-4 mx-auto w-full max-w-prose">
      <div className="grid gap-8">
        <ToDoCard />
      </div>
    </div>
  );
}
