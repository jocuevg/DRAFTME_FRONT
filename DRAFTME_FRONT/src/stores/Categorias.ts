import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Categoria } from '@/models/Categoria'

export const useCategoriaStore = defineStore('Categoria', () => {
  const categorias = ref<Categoria[]>([])

  function get(id: number): Categoria {
    return categorias.value.find((item) => item.id == id)!
  }

  async function load(cats: Categoria[]) {
    categorias.value = cats
  }

  function quitar(cat: Categoria) {
    categorias.value.splice(
      categorias.value.findIndex((item) => item.id == cat.id),
      1
    )
  }

  return { categorias, quitar, load, get }
})
