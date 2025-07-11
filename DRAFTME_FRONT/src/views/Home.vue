<script setup lang="ts"></script>

<template>
    <v-app>
        <!-- HEADER -->
        <v-app-bar app flat color="white">
            <v-container class="d-flex align-center justify-space-between">
                <!-- Logo -->
                <div class="d-flex align-center gap-2">
                    <v-img src="/LogoTexto.png" height="40" contain />
                    <span class="text-h6 font-weight-bold">DRAFT ME</span>
                </div>

                <!-- Navegación -->
                <v-row class="d-none d-md-flex" dense>
                    <v-btn text to="#">Categorías</v-btn>
                    <v-btn text to="#">Equipos</v-btn>
                    <v-btn text to="#">Jugadores</v-btn>
                </v-row>

                <!-- Acciones -->
                <div class="d-flex align-center gap-3">
                    <v-btn icon><v-icon>mdi-heart-outline</v-icon></v-btn>
                    <v-btn color="red" variant="flat">Iniciar sesión</v-btn>
                    <v-btn color="red" variant="text">Registrarse</v-btn>
                </div>
            </v-container>
        </v-app-bar>

        <!-- HERO -->
        <v-main class="pa-0">
            <div class="hero-section">
                <div class="overlay" />
                <v-container class="fill-height d-flex flex-column justify-center align-center text-center text-white">
                    <h1 class="text-h3 font-weight-bold mb-3">
                        Encuentra tu próximo equipo.<br />
                        O deja que te encuentren.
                    </h1>
                    <p class="mb-6">Busca por categoria, equipo, posición ...</p>

                    <v-row class="search-bar" align="center" justify="center" dense>
                        <v-col cols="12" md="3">
                            <v-text-field label="Categoría" dense outlined hide-details />
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field label="Equipo" dense outlined hide-details />
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field label="Posición" dense outlined hide-details />
                        </v-col>
                        <v-col cols="12" md="2">
                            <v-btn color="blue-darken-4" block class="text-white">Buscar</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </div>

            <!-- EXPLORA -->
            <v-container class="my-12">
                <h2 class="text-h5 font-weight-bold mb-6">Explora</h2>
                <v-row dense>
                    <!-- Card 1 -->
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-img src="/jugadores.png" height="160" />
                            <v-card-title class="font-weight-bold">Buscar jugadores</v-card-title>
                            <v-card-text>Encuentra futbolistas disponibles de todos los niveles.</v-card-text>
                            <v-card-actions>
                                <v-btn text to="#">Ver jugadores destacados →</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>

                    <!-- Card 2 -->
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-img src="/equipos.png" height="160" />
                            <v-card-title class="font-weight-bold">Ver equipos</v-card-title>
                            <v-card-text>Descubre clubes activos en búsqueda de fichajes.</v-card-text>
                            <v-card-actions>
                                <v-btn text to="#">Ver más →</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>

                    <!-- Card 3 -->
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-img src="/categorias.png" height="160" />
                            <v-card-title class="font-weight-bold">Explorar categorías</v-card-title>
                            <v-card-text>Investiga oportunidades en distintas divisiones de fútbol.</v-card-text>
                            <v-card-actions>
                                <v-btn text to="#">Ver más →</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped>
.hero-section {
    background-image: url('/banner.jpg');
    background-size: cover;
    background-position: center;
    height: 500px;
    position: relative;
}

.overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: 1;
}

.hero-section>.v-container {
    position: relative;
    z-index: 2;
}

.search-bar {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
}
</style>
