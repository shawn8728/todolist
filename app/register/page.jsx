"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import Register from "@/app/components/Register";

import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const { currentUser } = useAuth();
  const router = useRouter();

  // Redirect to dashboard if user is logged in
  useEffect(() => {
    currentUser && router.push("/dashboard");
  }, [currentUser, router]);

  return <Register />;
}
