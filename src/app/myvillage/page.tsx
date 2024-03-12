"use client"
import React, {useEffect, useState} from 'react'
import { useAuth } from '@/utils/authContext' // Adjust the import path as necessary
import { useRouter } from 'next/navigation';
import styles from './page.module.css'

const MyVillage = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [isComponentMounted, setIsComponentMounted] = useState(false);
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);

  useEffect(() => {
    setIsComponentMounted(true);
  }, []);

  useEffect(() => {
    // Redirect user to login page if not authenticated
    if (!isAuthenticated) {
      setShowRedirectMessage(true)
      setTimeout(() => {
        router.push('/login'); // Redirect after 3 seconds
      }, 3000); // 3000 milliseconds = 3 seconds
    }
  }, [router, isAuthenticated]);

  // Optionally show loading state or null while checking auth state
  if (!isAuthenticated) {
    return (
      <div >
        {showRedirectMessage && <div className={styles.fadeOut}>You're not logged in, redirecting to login...</div>}
      </div>
    )
  }
  return (
    <div>Welcome to My Village! You are logged in.</div>
  );
};

export default MyVillage
