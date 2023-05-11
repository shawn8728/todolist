"use client";

import { React, useState } from "react";
import { Card } from "flowbite-react";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ToDoCard(props) {
  return (
    <Card>
      <div className="flex-1">{props.value}</div>
      <div className="flex justify-end items-end mt-4 gap-5">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="hover:scale-125 cursor-pointer"
          size="lg"
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="hover:scale-125 cursor-pointer"
          size="lg"
        />
      </div>
    </Card>
  );
}
