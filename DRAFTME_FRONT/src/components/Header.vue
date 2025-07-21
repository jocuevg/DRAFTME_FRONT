<script setup lang="ts">
import router from '@/router'

function goHome() {
  router.push({
    name: 'home'
  })
}
</script>

<template>
  <v-app-bar scroll-behavior="elevate" color="white">
    <v-container class="d-flex align-center justify-space-between">
      <!-- Logo -->
      <div class="d-flex align-center gap-2 mr-10">
        <v-img src="@/images/LogoTexto.png" width="100" @click="goHome" style="cursor: pointer" />
      </div>

      <!-- Navegación -->
      <v-row class="d-none d-md-flex" dense>
        <v-btn variant="text" class="text-body-1 text-uppercase">Categorías</v-btn>
        <v-btn variant="text" class="text-body-1 text-uppercase">Equipos</v-btn>
        <v-btn variant="text" class="text-body-1 text-uppercase">Jugadores</v-btn>
      </v-row>

      <!-- Acciones -->
      <div class="d-flex align-center gap-3">
        <v-btn icon class="mr-5">
          <v-icon color="rgb(195,0,0)">mdi-heart-outline</v-icon>
          <v-tooltip activator="parent" location="left">Favoritos</v-tooltip>
        </v-btn>
        <template v-if="true">
          <v-btn color="rgb(195,0,0)" variant="flat">Iniciar sesión</v-btn>
        <v-btn color="rgb(195,0,0)" variant="text">Registrarse</v-btn>
        </template>
        <template v-else="true">
          <v-btn icon>
            <v-icon color="rgb(195,0,0)">mdi-account</v-icon>
            <v-tooltip activator="parent" location="right">Mi perfil</v-tooltip>
          </v-btn>
        </template>        
      </div>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.v-tooltip > ::v-deep(.v-overlay__content) {
  background: rgb(255, 214, 214);
  color: rgb(195, 0, 0);
}
</style>
