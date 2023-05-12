import React from "react";
import Link from "next/link";

export default async function HomePage() {
  return (
    <div className="my-8 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Start creating your own todolist
      </h1>
      <p className="mb-8 text-2xl font-normal text-gray-500 lg:text-2xl sm:px-16 xl:px-48 dark:text-gray-400">
        🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
      </p>
      <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <Link
          href="/login"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
