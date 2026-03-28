import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Categoria } from '@/models/Categoria'

export const useCategoriaStore = defineStore('Categoria', () => {
  const categorias = ref<Categoria[]>([])

  const listCategorias = computed(() => {
    const aux: string[] = []
    categorias.value.forEach((item) => {
      if (!aux.includes(item.nombre)) aux.push(item.nombre)
    })
    return aux
  })

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

  return { categorias, listCategorias, quitar, load, get }
})
