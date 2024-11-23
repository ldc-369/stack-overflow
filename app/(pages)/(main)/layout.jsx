import Header from '@/components/Header'
import LeftSidebar from '@/components/LeftSidebar'
import RightSidebar from '@/components/RightSidebar'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

function Layout ({ children }) {
  return (
    <div className='relative background-light850_dark100'>
      <Header />
      <div className='flex'>
        <LeftSidebar />
        <div className='max-md:pb-14 px-6 pb-6 pt-36 min-h-screen flex flex-col flex-1 sm:px-14'>
          <div className='mx-auto w-full max-w-5xl'>{children}</div>
        </div>
        <RightSidebar />
      </div>
    </div>
  )
}

export default Layout
