"use client"
import React, { useState } from 'react'
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
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const username = localStorage.getItem('username')
  const {logoutAuth, isAuthenticated} = useAuth()

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
          <div className={styles.userSection} onMouseLeave={() => setShowDropdown(false)}>
            <button className={styles.usernameBtn} onClick={toggleDropdown}>
              {username}
            </button>
            {showDropdown && (
              <div className={`${styles.dropdown} ${showDropdown ? 'show' : ''}`}>
                {/* <button onClick={logoutAuth} className={styles.logoutBtn}>Log Out</button> */}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar