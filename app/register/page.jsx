'use client';

import React from 'react'
import { useRouter } from 'next/navigation';

import { useAuth } from '@/context/AuthContext';

import Register from '@/app/components/Register'

export default function page() {
  const { currentUser } = useAuth();
  const router = useRouter();

  currentUser && router.push('/dashboard');

  return (
    <Register />
  )
}