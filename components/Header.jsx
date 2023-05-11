"use client";

import React from "react";
import { Dropdown } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <div className="flex flex-wrap justify-between items-center border-b-2 px-4 lg:px-6 py-2.5 mx-auto w-full">
        {/* <!-- Brand --> */}
        <div className="flex items-center justify-start">
          <a href="/" className="p-2">
            <FontAwesomeIcon icon={faClipboardCheck} size="lg" />
            <span className="ml-2 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Todolist
            </span>
          </a>
        </div>
        {/* <!-- Dropdown menu --> */}
        <div className="flex items-center justify-end">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<FontAwesomeIcon icon={faBars} size="lg" />}
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
