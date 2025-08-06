'use client'
import Link from 'next/link'
import styles from './page.module.css'
import React from 'react'

export default function Home() {
  return (
    <>
    
    <div className={styles.main}
    onClick={() => alert('hi')}
    >
      hi
    </div>
    <Link href='/card'>Card Section</Link>
      </>
  )
} 
