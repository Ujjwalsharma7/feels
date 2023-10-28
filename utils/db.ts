import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prismas: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prismas ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismas = prisma
