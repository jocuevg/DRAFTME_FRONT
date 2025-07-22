<script setup lang="ts">
import { gruposPorCategoria } from '@/helpers/gruposPorCategoria'
import { posicionesFutbol } from '@/helpers/posicionesFutbol'
import type { TeamSum } from '@/models/Team'
import { useCategoriaStore } from '@/stores/Categorias'
import { storeToRefs } from 'pinia'

const { loadCategorias, getCategoriaById } = useCategoria()
const CategoriaStore = useCategoriaStore()
const { categorias } = storeToRefs(CategoriaStore)

onBeforeMount(async () => {
  loadCategorias(true)
})

const listCategorias = computed(() => {
  const aux: string[] = []
  categorias.value.forEach((item) => {
    if (!aux.includes(item.nombre)) aux.push(item.nombre)
  })
  return aux
})

const currectCategoria = ref<string>()
const currectPosicion = ref<string>()
const currectGrupo = ref<number>()
const currectTeam = ref<string>()
const conGrupo = computed(() => {
  return currectCategoria.value ? currectCategoria.value.includes('RFEF') : false
})

watch(currectCategoria, async () => {
  currectGrupo.value = undefined
  currectTeam.value = undefined
  await loadTeams()
})

watch(currectGrupo, async () => {
  currectTeam.value = undefined
  await loadTeams()
})

const listGrupos = computed(() => {
  if (!conGrupo.value) return []
  const tipo = currectCategoria.value!.split(' ')[0]
  return gruposPorCategoria[tipo] || []
})

const listEquipos = ref<TeamSum[]>([])
async function loadTeams() {
  let id
  if (!conGrupo.value) {
    id = categorias.value.find((item) => item.nombre == currectCategoria.value)?.id
  } else {
    id = categorias.value.find(
      (item) => item.nombre == currectCategoria.value && item.grupo == currectGrupo.value
    )?.id
  }
  if (id) {
    listEquipos.value = (await getCategoriaById(id, false)).equipos!
  } else {
    listEquipos.value = []
  }
}
</script>

<template>
  <v-app>
    <!-- HEADER -->
    <Header></Header>

    <!-- HERO -->
    <div class="hero-section">
      <v-sheet
        rounded="xl"
        color="rgba(255, 255, 255, 0.7)"
        :elevation="24"
        height="400"
        width="1200"
        class="d-flex flex-column justify-center align-center text-center"
        style="color: rgb(5, 0, 40)"
      >
        <h1 class="text-h3 font-weight-bold ma-10">
          Encuentra tu próximo equipo<br />
          O deja que te encuentren
        </h1>
        <p class="ma-6">Busca por nombre, categoria, equipo o posición</p>

        <v-row justify="center" dense style="width: 95%">
          <v-col cols="12" :md="conGrupo ? 2 : 3">
            <v-text-field label="Nombre" hide-details />
          </v-col>
          <v-col cols="12" md="2">
            <v-select
              v-model="currectCategoria"
              label="Categoría"
              clearable
              hide-details
              :items="listCategorias"
              item-title="nombre"
            />
          </v-col>
          <v-col v-if="conGrupo" cols="12" md="2">
            <v-select
              v-model="currectGrupo"
              clearable
              label="Grupo"
              hide-details
              :items="listGrupos"
            />
          </v-col>
          <v-col cols="12" :md="conGrupo ? 2 : 3">
            <v-select
              :disabled="conGrupo ? !(currectCategoria && currectGrupo) : !currectCategoria"
              v-model="currectTeam"
              label="Equipo"
              hide-details
              :items="listEquipos"
              item-title="nombre"
            />
          </v-col>
          <v-col cols="12" :md="conGrupo ? 2 : 3">
            <v-select
              label="Posición"
              hide-details
              :items="posicionesFutbol"
              clearable
              v-model="currectPosicion"
            />
          </v-col>
          <v-col cols="12" md="1">
            <v-btn
              color="rgb(195,0,0)"
              class="text-white"
              style="height: 56px; width: 56px"
              icon="mdi mdi-magnify"
            ></v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </div>

    <!-- EXPLORA -->
    <v-container class="my-12">
      <h2 class="text-h5 font-weight-bold mb-6">Explora</h2>
      <v-row dense>
        <!-- Card 1 -->
        <v-col cols="12" md="4">
          <v-card hover class="h-100 pt-2 d-flex flex-column">
            <v-img src="@/images/jugadores.png" height="160" />
            <v-card-title class="font-weight-bold">Buscar jugadores</v-card-title>
            <v-card-text class="flex-grow-1"
              >Encuentra futbolistas disponibles de todos los niveles.</v-card-text
            >
            <v-card-actions>
              <v-btn variant="outlined" block to="#">Ver más →</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Card 2 -->
        <v-col cols="12" md="4">
          <v-card hover class="h-100 pt-2 d-flex flex-column">
            <v-img src="@/images/equipos.png" height="160" />
            <v-card-title class="font-weight-bold">Ver equipos</v-card-title>
            <v-card-text class="flex-grow-1"
              >Descubre clubes activos en búsqueda de fichajes.</v-card-text
            >
            <v-card-actions>
              <v-btn variant="outlined" block to="#">Ver más →</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Card 3 -->
        <v-col cols="12" md="4">
          <v-card hover class="h-100 pt-2 d-flex flex-column">
            <v-img src="@/images/categorias.png" height="160" />
            <v-card-title class="font-weight-bold">Explorar categorías</v-card-title>
            <v-card-text class="flex-grow-1"
              >Investiga oportunidades en distintas divisiones de fútbol.</v-card-text
            >
            <v-card-actions class="bottom-0">
              <v-btn variant="outlined" block to="#">Ver más →</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- FOOTER -->
    <Footer></Footer>
  </v-app>
</template>

<style scoped>
.hero-section {
  background-image: url('@/images/banner.jpg');
  background-size: cover;
  background-position: center;
  height: 500px;
  margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
