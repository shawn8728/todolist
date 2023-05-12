"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Login from "@/app/components/Login";

import { useAuth } from "@/context/AuthContext";

export default function page() {
  const { currentUser } = useAuth();
  const router = useRouter();

  currentUser && router.push("/dashboard");

  return <Login />;
}
