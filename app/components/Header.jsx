"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Dropdown } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faUser } from "@fortawesome/free-regular-svg-icons";

import { useAuth } from "@/context/AuthContext";

export default function Header(props) {
  const router = useRouter();
  const { logout, currentUser } = useAuth();

  // Handle sign in and sign out
  async function handleClick() {
    currentUser ? await logout() : router.push("/login");
  }

  return (
    <header>
      <div className="flex flex-wrap justify-between items-center border-b-2 px-4 lg:px-6 py-2.5 mx-auto w-full">
        {/* <!-- Brand --> */}
        <div className="flex items-center justify-start">
          <Link href="/" className="p-2">
            <FontAwesomeIcon icon={faCircleCheck} size="lg" />
            <span className="ml-2 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Todolist
            </span>
          </Link>
        </div>
        {/* <!-- Dropdown menu --> */}
        <div className="flex items-center justify-end">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<FontAwesomeIcon icon={faBars} size="lg" />}
          >
            {currentUser ? (
              <Dropdown.Header>
                <span className="block truncate text-sm font-medium">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="mr-2"
                  />
                  {currentUser.email}
                </span>
              </Dropdown.Header>
            ) : null}
            <Dropdown.Item onClick={handleClick}>
              <FontAwesomeIcon icon={faArrowRightToBracket} className="mr-2" />
              {currentUser ? "Sign Out" : "Sign In"}
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
