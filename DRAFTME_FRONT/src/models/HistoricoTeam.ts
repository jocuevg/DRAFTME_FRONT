import type { Categoria } from './Categoria'
import type { HistoricoPlayer } from './HistoricoPlayer'
import type { TeamSum } from './Team'

export interface HistoricoTeam {
  id: number
  teamId: number
  team: TeamSum
  temporada: string
  categoriaId: number
  categoria: Categoria
  clasificacion: number
  puntos?: number
  plantilla?: HistoricoPlayer[]
}
