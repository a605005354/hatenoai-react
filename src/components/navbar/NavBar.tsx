"use client"
import React, { useState, useEffect } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { useAuth } from '@/utils/authContext'

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "My Village",
    url: "/myvillage",
  },
]

function NavBar() {
  const [username, setUsername] = useState('');
  const { isAuthenticated, logoutAuth } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username')
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [])

  const handleLogout = () => {
    logoutAuth();
    setShowDropdown(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.hatenoHeading}>Hateno.ai</h1>
      </div>
      <div className={styles.links}>
        {links.map(link => (
          <Link className={styles.link} key={link.id} href={link.url}>{link.title}</Link>
        ))}
        {isAuthenticated && (
          <div className={styles.userSection}>
            <Link className={styles.link} href={"/myvillage"}>{username}</Link>
            <Link className={styles.link} onClick={handleLogout} href={"/"}>Log Out</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar

