'use client'

import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ModeToggle } from './ModeToggle'

function Header (props) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // tránh lỗi Hydration khi bọc SignedIn
  if (!isMounted) return null

  return (
    <div className='p-6 w-full fixed z-50 flex justify-between items-center gap-5 bg-light-800 shadow-md dark:dark-gradient dark:shadow-none sm:px-12 '>
      <div className='flex gap-2'>
        <Link href={'/'} className='flex items-center gap-1'>
          <Image src='/favicon.ico' width={23} height={23} alt='Icon' />
          <p className='max-sm:hidden font-spaceGrotesk text-dark-100 dark:text-light-900 h2-bold'>
            Stack
            <span className='text-myPrimary-500'>Overflow</span>
          </p>
        </Link>
      </div>
      <div className='flex justify-between items-center gap-5'>
        <ModeToggle />
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: 'w-8 h-8'
              },
              variables: {
                colorPrimary: '#ff7000'
              }
            }}
          />
        </SignedIn>
      </div>
    </div>
  )
}

export default Header
