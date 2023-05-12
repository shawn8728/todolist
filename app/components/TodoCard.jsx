"use client";

import { React, useState } from "react";

import { TextInput } from "flowbite-react";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ToDoCard(props) {
  const { handleDelete, handleEdit, name, id } = props;

  const [edit, setEdit] = useState(false);
  const [edittedValue, setEdittedValue] = useState(name);

  async function handleDeleteClick() {
    try {
      handleDelete(id);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleEditClick() {
    if (edit) {
      try {
        handleEdit(id, edittedValue);
        setEdit(false);
      } catch (err) {
        console.error(err);
      }
    } else {
      setEdit(true);
    }
  }

  return (
    <div className="p-2 relative flex items-stretch border border-solid border-gray shadow-md rounded-md ">
      <div className="flex-1">
        {edit ? (
          <TextInput
            type="text"
            className="bg-inherit p-2"
            value={edittedValue}
            onChange={(e) => setEdittedValue(e.target.value)}
          />
        ) : (
          <div className="p-2 ml-35">{edittedValue}</div>
        )}
      </div>
      <div className="flex items-center gap-4 p-2">
        {edit ? (
          <FontAwesomeIcon
            icon={faCheck}
            onClick={handleEditClick}
            className="hover:scale-125 cursor-pointer"
            size="lg"
          />
        ) : (
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={handleEditClick}
            className="hover:scale-125 cursor-pointer"
            size="lg"
          />
        )}
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={handleDeleteClick}
          className="hover:scale-125 cursor-pointer"
          size="lg"
        />
      </div>
    </div>
  );
}
