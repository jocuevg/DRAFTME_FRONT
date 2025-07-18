<template>
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
            <v-btn icon href="https://www.linkedin.com/in/jose-cuevas-gil-de-gómez-169ba5315"  target="_blank" variant="text"><v-icon>mdi-linkedin</v-icon></v-btn>
            <v-btn icon href="mailto:josecuevasgildegomez@hotmail.com" variant="text"><v-icon>mdi-email</v-icon></v-btn>
            <v-btn icon href="https://github.com/jocuevg"  target="_blank" variant="text"><v-icon>mdi-github</v-icon></v-btn>
          </div>
          <p class="mt-4 text-body-2">
            © {{ new Date().getFullYear() }} DRAFT ME. Todos los derechos reservados.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.v-list .v-list-item--nav:not(:only-child) {
  margin-bottom: 0px;
}

.v-list-item--density-compact.v-list-item--one-line {
  min-height: 33px;
}
</style>
