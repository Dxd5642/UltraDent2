import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 5642,
        strictPort: false
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        assetsInlineLimit: 4096,
    },
    base: '/dentalcare.stom-tum/',
    assetsInclude: ['**/*.svg']
})
