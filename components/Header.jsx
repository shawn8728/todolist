'use client';

import React from "react";
import { Dropdown } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <div className="flex flex-wrap justify-between items-center border-b-2 px-4 lg:px-6 py-2.5 mx-auto max-w-screen-xl w-full">
        {/* <!-- Brand --> */}
        <a href="/" className="flex items-center">
          <FontAwesomeIcon icon={faClipboardCheck} />
          <span className="ml-2 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Todolist
          </span>
        </a>
        {/* <!-- Dropdown menu --> */}
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={<FontAwesomeIcon icon={faBars} />}
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
    </header>
  );
}
