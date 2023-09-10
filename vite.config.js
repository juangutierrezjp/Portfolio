import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupInputOptions: {
    plugins: [
      {
        name: 'svgr',
        transform: (code, id) => {
          if (id.endsWith('.svg')) {
            const { code: transformedCode } = require('@svgr/webpack?-svgo,+titleProp,+ref![file]!' + id);
            return transformedCode;
          }
          return code;
        },
      },
    ],
  },
})
