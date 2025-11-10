import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base:"https://github.com/youngFrontendDeveloper/products-for-whole-family",
    optimizeDeps: {
        include: ['react-redux']
    },
    resolve: {
        dedupe: ['react', 'react-dom', 'react-redux']
    }
})
