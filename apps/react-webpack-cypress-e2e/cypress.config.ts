import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run react-webpack-cypress:serve',
        production: 'nx run react-webpack-cypress:preview',
      },
      ciWebServerCommand: 'nx run react-webpack-cypress:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
