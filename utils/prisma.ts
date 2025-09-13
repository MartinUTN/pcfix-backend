import { PrismaClient } from "@prisma/client";

// Evita que se creen múltiples instancias de Prisma en el entorno de desarrollo
// debido al hot-reloading de Fresh.
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (Deno.env.get("DENO_ENV") !== "production") {
  globalForPrisma.prisma = prisma;
}

