import type { Categoria } from "./Categoria"
import type { HistoricoTeam } from "./HistoricoTeam"
import type { PlayerSum } from "./Player"

export interface TeamSum {
  id: number
  nombre: string
  categoriaId: number
  categoria: Categoria
  clasificacion: number
  escudo?: string
}

export interface Team {
  id: number
  nombre: string
  formacion: Date
  numSocios: number
  estadio: string
  categoriaId: number
  categoria: Categoria
  clasificacion: number
  puntos: number
  historico: HistoricoTeam[]
  plantilla: PlayerSum[]
  escudo?: string
}