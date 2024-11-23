import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis

export const prismaDb = globalForPrisma.prismaDb || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaDb = prismaDb
