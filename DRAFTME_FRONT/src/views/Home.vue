<script setup lang="ts">
</script>

<template>
  <v-app>
    <!-- HEADER -->
    <v-app-bar scroll-behavior="elevate" color="white">
      <v-container class="d-flex align-center justify-space-between">
        <!-- Logo -->
        <div class="d-flex align-center gap-2 mr-10">
          <v-img src="/LogoTexto.png" width="100" onclick="" style="cursor: pointer" />
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
          <v-btn color="rgb(195,0,0)" variant="flat">Iniciar sesión</v-btn>
          <v-btn color="rgb(195,0,0)" variant="text">Registrarse</v-btn>
        </div>
      </v-container>
    </v-app-bar>

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
          <v-col cols="12" md="3">
            <v-text-field label="Nombre" hide-details />
          </v-col>
          <v-col cols="12" md="2">
            <v-select label="Categoría" hide-details />
          </v-col>
          <v-col cols="12" md="3">
            <v-select label="Equipo" hide-details />
          </v-col>
          <v-col cols="12" md="3">
            <v-select label="Posición" hide-details />
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
            <v-img src="/jugadores.png" height="160" />
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
            <v-img src="/equipos.png" height="160" />
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
            <v-img src="/categorias.png" height="160" />
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
    <v-footer color="rgb(255,255,255)">
      <v-container>
        <v-row class="text-left">
          <!-- Sección 1: Logo y descripción -->
          <v-col cols="12" md="4">
            <v-img src="/LogoTexto.png" width="120" class="mb-4" />
            <p class="text-body-2">
              Conecta jugadores con equipos de todas las categorías. Nuestra misión es facilitar el
              fichaje en el mundo del fútbol amateur y profesional.
            </p>
          </v-col>

          <!-- Sección 2: Enlaces -->
          <v-col cols="12" md="4">
            <h3 class="text-subtitle-1 font-weight-bold mb-2">Navegación</h3>
            <v-list density="compact" nav>
              <v-list-item link title="Categorías" />
              <v-list-item link title="Equipos" />
              <v-list-item link title="Jugadores" />
              <v-list-item link title="Iniciar sesión" />
              <v-list-item link title="Registrarse" />
            </v-list>
          </v-col>

          <!-- Sección 3: Contacto o redes -->
          <v-col cols="12" md="4">
            <h3 class="text-subtitle-1 font-weight-bold mb-2">Síguenos</h3>
            <div class="d-flex align-center">
              <v-btn icon :href="'#'" variant="text"><v-icon>mdi-linkedin</v-icon></v-btn>
              <v-btn icon :href="'#'" variant="text"><v-icon>mdi-instagram</v-icon></v-btn>
              <v-btn icon :href="'#'" variant="text"><v-icon>mdi-email</v-icon></v-btn>
            </div>
            <p class="mt-4 text-body-2">
              © {{ new Date().getFullYear() }} DRAFT ME. Todos los derechos reservados.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style scoped>
.hero-section {
  background-image: url('/banner.jpg');
  background-size: cover;
  background-position: center;
  height: 500px;
  margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-tooltip > ::v-deep(.v-overlay__content) {
  background: rgb(255, 214, 214);
  color: rgb(195, 0, 0);
}

.v-list .v-list-item--nav:not(:only-child) {
     margin-bottom: 0px; 
}

.v-list-item--density-compact.v-list-item--one-line {
    min-height: 33px; 
}
</style>
