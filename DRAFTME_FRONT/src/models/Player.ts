import type { HistoricoPlayer } from './HistoricoPlayer'
import type { TeamSum } from './Team'
import type { User } from './User'

export interface PlayerSum {
  id: number
  nombre: string
  apellidos: string
  nacimiento: Date
  posicion: string
  teamId?: number
  team?: TeamSum
  goles: number
  asistencias: number
  minutos: number
  image?: string
}

export interface Player {
  id: number
  nombre: string
  apellidos: string
  nacimiento: Date
  posicion: string
  bibliografia: string
  userId: string
  user: User
  teamId?: number
  team?: TeamSum
  goles: number
  asistencias: number
  minutos: number
  historico: HistoricoPlayer[]
  image?: string
}
