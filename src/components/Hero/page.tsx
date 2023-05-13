import React from 'react'
import SubHero from '../SubHero/page'
import { AnimatePresence } from 'framer-motion'
import {motion} from 'framer-motion'

const Hero = () => {

  return (
    <div className='w-[100vw] h-[80vh] mt-3 overflow-hidden flex flex-row justify-around'>
        <div className='group  relative transition-all duration-1000 translate-x-[-35px] flex w-[450px] h-[600px] scale-125 rotate-[10deg] flex-row justify-center items-center'>
            <AnimatePresence>
            <motion.img
            initial = {{opacity : 0, x:'-10px'}}
            whileHover={{ opacity : 0.7, x:'0', transition: {type: 'keyframes', duration:'2'}}}
            exit={{opacity : 0, transition:{type : 'just'}}}
            className='absolute w-full h-full object-cover mix-blend-overlay' src='/images/1.jpg'/>
            </AnimatePresence>
            <p 
            style={{textShadow:'1px 1px 60px #b980ff'}}
            className='group-hover:hidden rotate-[-10deg] text-[150px] bg-clip-text text-transparent bg-gradient-to-tr from-slate-950 via-violet-600 to-slate-950 font-semibold'>
                1.
            </p>
            <SubHero />
        </div>
        <div className='group relative transition-all duration-1000 translate-x-[-15px] flex w-[450px] h-[620px] scale-125 rotate-[10deg] flex-row justify-center items-center'>
            <AnimatePresence>
            <motion.img 
            initial = {{opacity : 0, x:'-15px'}}
            whileHover={{ opacity : 1, x:'0', transition: {type: 'keyframes', duration:'2'}}}
            exit={{opacity : 0, transition:{type : 'just'}}}
            className='absolute w-full h-full object-cover mix-blend-overlay' src='/images/2.jpg'/>
            </AnimatePresence>
            <p
            style={{textShadow:'1px 1px 60px #b980ff'}}
            className='group-hover:hidden rotate-[-10deg] text-[180px] bg-clip-text text-transparent bg-gradient-to-tr from-slate-950 via-violet-600 to-slate-950 font-semibold'>
                2.
            </p>
            <SubHero />
        </div>
        <div className='group relative transition-all duration-1000 translate-x-[25px] flex w-[400px] h-[620px] scale-125 rotate-[10deg] flex-row justify-center items-center'>
            <AnimatePresence>
            <motion.img
            initial = {{opacity : 0, x:'15px'}}
            whileHover={{ opacity : 1, x:'0', transition: {type: 'keyframes', duration:'2'}}}
            exit={{opacity : 0, transition:{type : 'just'}}}
            className='absolute w-full h-full object-cover mix-blend-overlay' src='/images/3.jpg'/>
            </AnimatePresence>
            <p 
            style={{textShadow:'1px 1px 60px #b980ff'}}
            className='group-hover:hidden rotate-[-10deg] text-[150px] bg-clip-text text-transparent bg-gradient-to-tr from-slate-950 via-violet-600 to-slate-950 font-semibold'>
                3.
            </p>
            <SubHero />
        </div>
    </div>
  )
}

export default Hero