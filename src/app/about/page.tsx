"use client"
import React from 'react'
import styles from './page.module.css'
import { AuthProvider } from '@/utils/authContext';

function About() {
    return (
      <div>
        <p>result</p>
        <div>Welcome to the homepage</div>
      </div>
    );

  // return (
  //   <div className={styles.container}>
  //       About
  //   </div>
  // )
}

export default About