import { createApp } from 'vue';

// TODO: // set up color theming
// https://vuetifyjs.com/en/styles/colors/#material-colors
// import colors from 'vuetify/util/colors';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Components
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
	theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        // Define light theme properties here if needed
      },
      dark: {
        // Define dark theme properties here if needed
        dark: true,
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app');
