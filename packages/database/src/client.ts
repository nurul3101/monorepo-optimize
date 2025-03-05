import { PrismaClient } from "../generated/client";
import { withOptimize } from "@prisma/extension-optimize";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const apiKey = process.env.OPTIMIZE_API_KEY || "";
console.log("API KEY", apiKey);

export const prisma = new PrismaClient().$extends(
  withOptimize({ apiKey: apiKey })
);

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
