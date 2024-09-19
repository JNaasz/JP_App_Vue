import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export default createVuetify({
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
    options: { customProperties: true },
  },
});
