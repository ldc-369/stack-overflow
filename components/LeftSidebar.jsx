'use client'

import { sidebarItems } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'
import { PiSignInBold } from 'react-icons/pi'
import { TbLogin } from 'react-icons/tb'

function LeftSidebar () {
  const { isSignedIn, user, isLoaded } = useUser()
  const pathname = usePathname()
  const router = useRouter()

  // if (!isLoaded || !isSignedIn) {
  //   return null
  // }

  return (
    <div className='p-6 pt-32 h-screen sticky left-0 top-0 flex flex-col justify-between overflow-y-auto bg-light-800 shadow-lg dark:dark-gradient lg:w-[266px] max-sm:hidden light-border custom-scrollbar '>
      <div className='flex flex-col flex-1 gap-6'>
        {sidebarItems.map(sidebarItem => {
          let path = sidebarItem.path

          const isActive =
            pathname.includes(path) /* && sidebarItem.path.length > 1 */ /* ||
                pathname === sidebarItem.path; */
          const Icon = isActive ? sidebarItem.ActiveIcon : sidebarItem.Icon

          if (path === '/profile' && user?.id) {
            path = `${path}/${user.id}`
          } else if (path === '/profile' && !user?.id) {
            path = '/login'
          }

          return (
            <Link
              href={path}
              key={path}
              className={cn(
                'rounded-lg p-4 flex items-center justify-start gap-4 bg-transparent hover:primary-gradient hover:text-light-900 ',
                isActive
                  ? 'primary-gradient rounded-lg text-light-900'
                  : 'text-dark300_light900'
              )}
            >
              <Icon className='size-8' />

              <p
                className={cn(
                  'max-lg:hidden',
                  isActive ? 'base-bold' : 'base-medium'
                )}
              >
                {sidebarItem.label}
              </p>
            </Link>
          )
        })}
      </div>
      <SignedOut>
        <div className='flex flex-col gap-3'>
          <Button
            onClick={() => router.push('/sign-in')}
            className='rounded-lg px-4 py-3 w-full min-h-[41px] shadow-none small-medium btn-secondary text-light400_light500 '
          >
            <PiSignInBold className='size-7 lg:hidden' />
            <span className='max-lg:hidden primary-text-gradient '>
              Sign In
            </span>
          </Button>

          <Button
            onClick={() => router.push('/sign-up')}
            className='rounded-lg px-4 py-3 w-full min-h-[41px] shadow-none small-medium btn-secondary text-light400_light500 '
          >
            <TbLogin className='size-7 lg:hidden' />
            <span className='max-lg:hidden primary-text-gradient  '>
              Sign Up
            </span>
          </Button>
        </div>
      </SignedOut>
    </div>
  )
}

export default LeftSidebar
