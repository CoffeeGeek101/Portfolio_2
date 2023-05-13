"use client"
import React from 'react'
import Navbar from '../Navbar/page'
import { ThemeProvider } from 'next-themes'
import Hero from '../Hero/page'

const LandingPage = () => {
  return (
    <ThemeProvider attribute='class'>
        <div className='w-[100wv] h-[100vh]'>
            <Navbar/>
            <Hero/>
        </div>
    </ThemeProvider>
  )
}

export default LandingPage