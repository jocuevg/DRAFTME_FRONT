<script setup lang="ts">
const { login } = useUser()

const show = ref(false)
const username = ref<string>()
const contraseña = ref<string>()
const validationError = ref<string | undefined>('sdvkjyfbdsrvh')
const completo = computed(() => !!username.value && !!contraseña.value)

function showDialog() {
  username.value = undefined
  contraseña.value = undefined
  validationError.value = undefined
  show.value = true
}

async function iniciar() {
  var res = await login(username.value!,contraseña.value!)
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
  <v-dialog v-model="show" transition="dialog-top-transition">
    <v-card style="width: 30%; align-self: center">
      <v-card-title class="text-center font-weight-bold mt-5" style="color: rgb(5, 0, 40)"
        >INICIAR SESIÓN</v-card-title
      >
      <v-card-text class="d-flex flex-column justify-center text-center pb-0">
        <v-text-field v-model="username" label="Usuario" type="text"></v-text-field>
        <v-text-field v-model="contraseña" label="Contraseña" type="password"></v-text-field>
        <p style="white-space: pre-line; color: red" v-if="validationError != undefined">
          {{ validationError }}
        </p>
      </v-card-text>
      <v-card-actions class="d-flex justify-center mb-5">
        <v-btn
          @click="iniciar"
          color="rgb(195,0,0)"
          variant="elevated"
          :disabled="!completo"
          class="w-50"
          >ENTRAR</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
