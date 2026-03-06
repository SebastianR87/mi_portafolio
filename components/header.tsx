"use client"

import React from 'react'
import MotionTransition from './transition-component'
import Link from 'next/link'
import { socialNetworks } from '@/data'
import { LogOut } from 'lucide-react'

const Header = () => {
  return (
    <MotionTransition position='bottom' className='absolute z-40 inline-block w-full'>
      <header>
        <div className='container justify-between max-w-6xl mx-auto md:flex'>
          <Link href="/">
            <h1 className="my-3 text-4xl font-bold text-center md:text-left bg-white/20 backdrop-blur-sm">
  SEBASTIAN RONDO
  <span className="text-secondary">-DEV</span>
</h1>
          </Link>
          <div className='flex items-center justify-center gap-7'>
            {socialNetworks.map(({logo, src, id}) => (
                <Link 
                key={id}
                href={src}
                target='_blank'
                className='transition-all duration-300 hover:text-secondary'
                >
                {logo}
                </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  )
}

export default Header
