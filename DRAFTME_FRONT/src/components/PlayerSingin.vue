<script setup lang="ts">
import { Rol } from '@/enums/Rol'
import { gruposPorCategoria } from '@/helpers/gruposPorCategoria'
import { hashPassword } from '@/helpers/hasher'
import { posicionesFutbol } from '@/helpers/posicionesFutbol'
import type { TeamSum } from '@/models/Team'
import { useCategoriaStore } from '@/stores/Categorias'
import { storeToRefs } from 'pinia'

const { singin } = useUser()
const { getCategoriaById } = useCategoria()
const CategoriaStore = useCategoriaStore()
const { categorias, listCategorias } = storeToRefs(CategoriaStore)

const show = ref(false)
const nombre = ref<string>()
const apellidos = ref<string>()
const nacimiento = ref<Date>()
const posicion = ref<string>()
const biblio = ref<string>()
const categoria = ref<string>()
const username = ref<string>()
const password = ref<string>()
const teamId = ref<number>()
const goles = ref<number>()
const asistencias = ref<number>()
const minutos = ref<number>()
const image = ref<File>()
const validationError = ref<string>()
const completo = computed(
  () =>
    !!nombre.value &&
    !!apellidos.value &&
    !!nacimiento.value &&
    !!posicion.value &&
    !!biblio.value &&
    goles.value != null &&
  asistencias.value != null &&
  minutos.value != null
)

function showDialog(user: string, pass: string) {
  nombre.value = undefined
  apellidos.value = undefined
  nacimiento.value = undefined
  posicion.value = undefined
  biblio.value = undefined
  username.value = user
  password.value = pass
  teamId.value = undefined
  goles.value = undefined
  asistencias.value = undefined
  minutos.value = undefined
  image.value = undefined
  validationError.value = undefined
  show.value = true
}

const grupo = ref<number>()
const conGrupo = computed(() => {
  return categoria.value ? categoria.value.includes('RFEF') : false
})

watch(categoria, async () => {
  grupo.value = undefined
  teamId.value = undefined
  await loadTeams()
})

watch(grupo, async () => {
  teamId.value = undefined
  await loadTeams()
})

const listGrupos = computed(() => {
  if (!conGrupo.value) return []
  const tipo = categoria.value!.split(' ')[0]
  return gruposPorCategoria[tipo] || []
})

const listEquipos = ref<TeamSum[]>([])
async function loadTeams() {
  let id
  if (!conGrupo.value) {
    id = categorias.value.find((item) => item.nombre == categoria.value)?.id
  } else {
    id = categorias.value.find(
      (item) => item.nombre == categoria.value && item.grupo == grupo.value
    )?.id
  }
  if (id) {
    listEquipos.value = (await getCategoriaById(id, false)).equipos!
  } else {
    listEquipos.value = []
  }
}

async function registrar() {
  var res = await singin({username: username.value!,passwordHash: await hashPassword(password.value!),rol: Rol.player})
  if (res) {
    validationError.value = res
    return
  }
  show.value = false
}

defineExpose({
  showDialog
})
</script>
<template>
  <v-dialog v-model="show" transition="dialog-bottom-transition">
    <v-card style="width: 75%; align-self: center">
      <v-card-title class="text-center font-weight-bold mt-5" style="color: rgb(5, 0, 40)"
        >COMPLETA LOS DATOS</v-card-title
      >
      <v-card-text class="d-flex flex-column justify-center text-center pb-0">
        <v-row dense>
          <v-col cols="12" md="3">
            <v-text-field v-model="nombre" label="Nombre"></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="apellidos" label="Apellidos"></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-date-input
              v-model="nacimiento"
              label="Nacimiento"
              prepend-icon=""
              append-inner-icon="$calendar"
              persistent-placeholder
            ></v-date-input>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              label="Posición"
              hide-details
              :items="posicionesFutbol"
              clearable
              v-model="posicion"
            />
          </v-col>

          <v-col cols="12" :md="conGrupo ? 5 : 6">
            <v-select
              v-model="categoria"
              label="Categoría (opcional)"
              clearable
              hide-details
              :items="listCategorias"
              item-title="nombre"
            />
          </v-col>
          <v-col v-if="conGrupo" cols="12" md="2">
            <v-select v-model="grupo" clearable label="Grupo" hide-details :items="listGrupos" />
          </v-col>
          <v-col cols="12" :md="conGrupo ? 5 : 6">
            <v-select
              :disabled="conGrupo ? !(categoria && grupo) : !categoria"
              v-model="teamId"
              label="Equipo"
              clearable
              hide-details
              :items="listEquipos"
              item-title="nombre"
              item-value="id"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-number-input
              v-model="goles"
              controlVariant="stacked"
              label="Goles"
              class="mt-5"
            ></v-number-input>
          </v-col>
          <v-col cols="12" md="4">
            <v-number-input
              v-model="asistencias"
              controlVariant="stacked"
              label="Asistencias"
              class="mt-5"
            ></v-number-input>
          </v-col>
          <v-col cols="12" md="4">
            <v-number-input
              v-model="minutos"
              controlVariant="stacked"
              label="Minutos"
              class="mt-5"
            ></v-number-input>
          </v-col>
          <v-col cols="12" md="12">
            <v-textarea label="Bibliografía" v-model="biblio" />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="username" label="Usuario" readonly></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-file-input
              v-model="image"
              prepend-icon=""
              prepend-inner-icon="mdi-camera"
              clearable
              accept="image/*"
              label="Foto de perfil (opcional)"
            ></v-file-input>
          </v-col>
        </v-row>
        <p style="white-space: pre-line; color: red" v-if="validationError != undefined">
          {{ validationError }}
        </p>
      </v-card-text>
      <v-card-actions class="d-flex justify-center mb-5">
        <v-btn
          @click="registrar"
          color="rgb(195,0,0)"
          variant="elevated"
          :disabled="!completo"
          class="w-25"
          >ACEPTAR</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
