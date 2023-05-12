"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import Login from "@/app/components/Login";

import { useAuth } from "@/context/AuthContext";

export default function page() {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    currentUser && router.push("/dashboard");
  }, [currentUser, router]);

  return <Login />;
}
