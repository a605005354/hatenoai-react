"use client"
import React from 'react'
import styles from './page.module.css'

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutIntro}>
        <h1 className={styles.aboutTitle}>Welcome to HatenoAI</h1> 
        <p className={styles.aboutText}>
          HatenoAI is not just a game; it&apos;s a universe of endless possibilities where you, the player,
          become the creator of your own RPG stories. Imagine weaving tales where every character has a
          life of their own, and each decision you make spins the thread of destiny in new directions.
        </p>
        <p className={styles.aboutText}>
          In HatenoAI, you can:
        </p>
        <ul className={styles.featuresList}>
            <li>Create unique stories set in worlds limited only by your imagination.</li>
            <li>Design characters with complex personalities, backgrounds, and abilities.</li>
            <li>Interact with these characters and watch as they evolve and respond to your choices.</li>
            <li>Utilize advanced AI to bring your narratives to life, creating a dynamic, living world.</li>
        </ul>
        <p className={styles.aboutText}>
          Your journey in HatenoAI is a quest of creation, where every narrative is uniquely yours.
          Craft tales of heroism, adventure, mystery, or romance—the canvas is yours to fill.
          The essence of HatenoAI is to empower you to become a master storyteller, where every
          chapter you write is an echo of your imagination.
        </p>
        <p className={styles.aboutText}>
          Step into the world of HatenoAI, where your words become the bridge between reality and fantasy.
          Create, play, and live the stories you&apos;ve always dreamed of telling. The adventure begins now...
        </p>
    </div>
    </div>
  );

}

export default About