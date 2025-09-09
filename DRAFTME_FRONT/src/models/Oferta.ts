import type { TeamSum } from './Team'

export interface Oferta {
  id: number
  teamId: string
  team: TeamSum
  posicion: string
  descripcion: string
}
