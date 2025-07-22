import type { Categoria } from "./Categoria"

export interface TeamSum {
  id: number
  nombre: string
  categoriaId: number
  categoria: Categoria
  clasificacion: number
  escudo?: string
}