import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository"
import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository"
import { CheckInUseCase } from "../check-in"

export function makeCheckInUseCase() {
  const prismaCheckInsRepository = new PrismaCheckInsRepository()
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new CheckInUseCase(prismaCheckInsRepository, gymsRepository)

  return useCase
}