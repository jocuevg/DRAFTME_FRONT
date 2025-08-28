<script setup lang="ts">
const show = ref(false)
const nombre = ref<string>()
const apellidos = ref<string>()
const nacimiento = ref<Date>()
const username = ref<string>()
const password = ref<string>()
const biblio = ref<string>()
const validationError = ref<string>()
const completo = computed(
  () => !!nombre.value && !!apellidos.value && !!nacimiento.value && !!biblio.value
)

function showDialog(user: string, pass: string) {
  nombre.value = undefined
  apellidos.value = undefined
  nacimiento.value = undefined
  biblio.value = undefined
  username.value = user
  password.value = pass
  validationError.value = undefined
  show.value = true
}

function registrar() {}

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
            <v-text-field v-model="username" label="Usuario"></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-textarea label="Bibliografía" v-model="biblio" />
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
