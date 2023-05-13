"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import Login from "@/app/components/Login";

import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { currentUser } = useAuth();
  const router = useRouter();

  // Redirect to dashboard if user is logged in
  useEffect(() => {
    currentUser && router.push("/dashboard");
  }, [currentUser, router]);

  return !currentUser && <Login />;
}
