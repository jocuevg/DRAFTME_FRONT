import type { TeamSum } from "./Team"

export interface Categoria {
  id: number
  nombre: string
  grupo: number
  logo: string
  equipos?: TeamSum[]
}

export interface CreateCategoria {
  nombre: string
  grupo: number
  logo: File
}

export interface UpdateCategoria {
  id: number
  nombre: string
  grupo: number
  logo: File
}
