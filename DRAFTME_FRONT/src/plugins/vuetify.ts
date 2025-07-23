import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import { VDateInput } from 'vuetify/labs/VDateInput'
import { es } from 'vuetify/locale'
import * as directives from 'vuetify/directives'
import { components } from 'vuetify/dist/vuetify-labs.js'
import * as labsComponents from 'vuetify/labs/components'


export default createVuetify({
  locale: {
    locale: 'es',
    messages: { es },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#173962',
          background: '#f6f6f6',
        },
      },
    },
  },
  directives,
  components: {
    ...components,
    ...labsComponents,
  },
})
