import type { HistoricoTeam } from "./HistoricoTeam"
import type { PlayerSum } from "./Player"

export interface HistoricoPlayer {
  id: number
  playerId: number
  player: PlayerSum
  temporada: string
  goles: number
  asistencias: number
  minutos: number
  historicoTeamId?: number
  historicoTeam?: HistoricoTeam[]
}