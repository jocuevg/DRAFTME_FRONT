<script setup lang="ts">
import { Rol } from '@/enums/Rol'
import PlayerSingin from './PlayerSingin.vue'
import ScouterSingin from './ScouterSingin.vue'

const show = ref(false)
const username = ref<string>()
const contraseña = ref<string>()
const repcontraseña = ref<string>()
const rol = ref<Rol>()
const validationError = ref<string>()
const completo = computed(
  () => !!username.value && !!contraseña.value && !!repcontraseña.value && !!rol.value
)

function showDialog() {
  username.value = undefined
  contraseña.value = undefined
  repcontraseña.value = undefined
  rol.value = undefined
  validationError.value = undefined
  show.value = true
}

function registrar() {
  if (contraseña.value != repcontraseña.value) {
    validationError.value = 'Las contraseñas no coinciden'
    return
  }
  show.value = false
  if (rol.value == Rol.player) {
    playerDialog.value?.showDialog()
    return
  }
  scouterDialog.value?.showDialog()
}

const playerDialog = useTemplateRef('playerDialog')
const scouterDialog = useTemplateRef('scouterDialog')

defineExpose({
  showDialog
})
</script>

<template>
  <v-dialog v-model="show" transition="dialog-bottom-transition">
    <v-card style="width: 30%; align-self: center">
      <v-card-title class="text-center font-weight-bold mt-5" style="color: rgb(5, 0, 40)"
        >REGISTRARSE</v-card-title
      >
      <v-card-text class="d-flex flex-column justify-center text-center pb-0">
        <v-text-field v-model="username" label="Usuario" type="text"></v-text-field>
        <v-text-field v-model="contraseña" label="Contraseña" type="password"></v-text-field>
        <v-text-field
          v-model="repcontraseña"
          label="Repita contraseña"
          type="password"
        ></v-text-field>
        <v-radio-group inline v-model="rol" color="rgb(195,0,0)" class="d-flex justify-center pb-2">
          <v-radio label="Jugador" :value="Rol.player"></v-radio>
          <v-radio label="Ojeador" :value="Rol.scouter"></v-radio>
        </v-radio-group>

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
          class="w-50"
          >CONTINUAR</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
  <PlayerSingin ref="playerDialog"></PlayerSingin>
  <ScouterSingin ref="scouterDialog"></ScouterSingin>
</template>
