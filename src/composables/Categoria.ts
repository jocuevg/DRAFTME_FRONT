import { toFormData } from '@/helpers/toFormData'
import type { Categoria, CreateCategoria, UpdateCategoria } from '@/models/Categoria'
import instance from '@/services/api'
import { useCategoriaStore } from '@/stores/Categorias'
import { storeToRefs } from 'pinia'

export const useCategoria = () => {
  const CategoriaStore = useCategoriaStore()
  const { categorias } = storeToRefs(CategoriaStore)

  async function getCategoriaById(id: number, forceLoad: boolean = false): Promise<Categoria> {
    const cat = (await instance.get<Categoria>(`Categoria/${id}`)).data

    if (!forceLoad) return cat

    const loadedCat = categorias.value.find((item) => item.id == cat.id)
    if (loadedCat) {
      loadedCat.nombre = cat.nombre
      loadedCat.grupo = cat.grupo
      loadedCat.logo = cat.logo
      loadedCat.equipos = cat.equipos
    } else {
      categorias.value.push(cat)
    }
    return cat
  }

  async function loadCategorias(forceRefresh: boolean = false) {
    if (categorias.value.length > 0 && !forceRefresh) {
      return
    }
    CategoriaStore.load((await instance.get<Categoria[]>('Categoria/All')).data)
  }

  async function quitar(cat: Categoria) {
    await instance.delete(`Categoria/${cat.id}`)
    CategoriaStore.quitar(cat)
  }

  async function agregar(cat: CreateCategoria): Promise<string | undefined> {
    let errors: string | undefined = undefined
    await instance
      .post<Categoria>('Categoria', toFormData(cat), {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        categorias.value.push({
          id: response.data.id,
          nombre: response.data.nombre,
          grupo: response.data.grupo,
          logo: response.data.logo
        })
        return undefined
      })
      .catch((error) => {
        errors = error.response.data.description
      })
    return errors
  }

  async function modificar(cat: UpdateCategoria): Promise<string | undefined> {
    let errors: string | undefined = undefined
    await instance
      .put<Categoria>(`Author/${cat.id}`, toFormData(cat), {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        const categoriaAEditar = categorias.value.find((item) => item.id == cat.id)!
        categoriaAEditar.nombre = response.data.nombre
        categoriaAEditar.grupo = response.data.grupo
        categoriaAEditar.logo = response.data.logo
        return undefined
      })
      .catch((error) => {
        errors = error.response.data.description
      })
    return errors
  }

  return { getCategoriaById, loadCategorias, quitar, agregar, modificar }
}
