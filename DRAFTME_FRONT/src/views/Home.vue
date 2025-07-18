<script setup lang="ts"></script>

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
    <Footer></Footer>
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
</style>
