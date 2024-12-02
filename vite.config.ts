import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 将 '@' 映射到 src 目录
      '@components': path.resolve(__dirname, './src/components'), // 设置其他别名
      '@hooks': path.resolve(__dirname, './src/hooks'),
    }
  },
  server: {
    open: true,
  }
})
