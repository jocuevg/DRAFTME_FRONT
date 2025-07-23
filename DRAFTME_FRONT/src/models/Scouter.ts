import type { User } from "./User"

export interface Scouter {
  id: number
  nombre: string
  apellidos: string
  nacimiento: Date
  bibliografia: string
  userId: string
  user: User
}