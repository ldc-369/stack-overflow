'use server'

import { prismaDb } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

// =====================================================
export async function createUser (values, userId) {
  try {
    await prismaDb.user.create({
      data: {
        userId: userId,
        name: values.name,
        userName: values.userName,
        imageUrl: values.imageUrl || '',
        email: values.email || '',
        bio: values.bio,
        portfolioWebsite: values.portfolioWebsite
      }
    })
    revalidatePath('/', 'layout')
  } catch (error) {
    console.log(error)
  }
}

export async function updateUser (values, use) {
  const CurrentUser = await currentUser()
  if (!CurrentUser) return

  try {
    if (use === 'webhook') {
      await prismaDb.user.update({
        where: {
          userId: CurrentUser.id
        },
        data: {
          name: values.name,
          userName: values.userName,
          imageUrl: values.imageUrl || '',
          email: values.email || ''
        }
      })
    } else {
      try {
        await db.user.update({
          where: {
            userId: CurrentUser.id
          },
          data: {
            name: values.name,
            userName: values.userName,
            bio: values.bio,
            portfolioWebsite: values.portfolioWebsite
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
    revalidatePath('/', 'layout')
  } catch (error) {
    console.log(error)
  }
}

export async function DeleteUser (userId) {
  try {
    await prismaDb.user.delete({
      where: {
        userId: userId
      }
    })
    revalidatePath('/', 'layout')
  } catch (error) {
    console.log(error)
  }
}
// ==============================================
