import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: {
        main: resolve(__dirname, 'src/index.ts'),
        components: resolve(__dirname, 'src/components/index.ts'),
        hooks: resolve(__dirname, 'src/hooks/index.ts')
      },
      name: 'MyReactUi',
      fileName: (format, entryName) => {
        return `${entryName}.js`
      },
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  }
})
