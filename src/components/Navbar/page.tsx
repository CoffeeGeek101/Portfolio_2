"use client"
import React, { useEffect, useState } from 'react'
import Button from '../reusables/Buttons'
import { useTheme } from 'next-themes'
import { Github, Linkedin, Moon, Rocket, Sun, Twitter } from 'lucide-react'

const Navbar = () => {

    const { setTheme, theme } = useTheme();
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
      setIsHydrated(true);
    }, []);

  return (
    
    <>
        {
        isHydrated &&
        <div className= 'p-5 bg-[#0F3460] bg-gradient-to-tr from-slate-900 via-violet-700 to-slate-900'>
          <div className='w-full h-full flex flex-row items-center bg-blue-100/5 backdrop:blur-lg py-3 px-5 rounded-2xl shadow-xl'>
            
            <div className='flex items-center gap-3 flex-row basis-4/5'>
              <Rocket className='text-[#fff] animate-pulse mix-blend-overlay' />
              <p 
              style={{textShadow:'1px 1px 8px #ffffff78'}}
              className='bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 to-white font-semibold text-3xl'>
                Shoumyadeep.
              </p>
            </div>

            <div className='flex flex-row basis-2/5 justify-end gap-3'>
              <Button className='px-[10px]'>
                <Twitter className='text-[#fff]' size={17}/>
              </Button>
              <Button className='px-[10px]'>
                <Linkedin className='text-[#fff]' size={17}/>
              </Button>
              <Button className='px-[10px]'>
                <Github className='text-[#fff]' size={17}/>
              </Button>
              <Button kind='main' size='bigb' className='text-[#fff]'>
                Contact Me
              </Button>
              <Button 
              onClick={ () => theme === 'dark' ? setTheme('light') : setTheme('dark') }
              kind='main' size='medium'>
                  {theme === 'dark' ? <Sun /> : <Moon className='text-[#fff]'/>}
              </Button>
            </div>
          </div>
        </div>
        }
    </>
  )
}

export default Navbar