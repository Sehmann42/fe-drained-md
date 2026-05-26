import { defineConfig, loadEnv } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  // https://vite.dev/config/
  return defineConfig({
    base: env.VITE_BASE,
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] })
    ],
  })
}


