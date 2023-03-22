import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteEslint from 'vite-plugin-eslint'
import viteStylelint from 'vite-plugin-stylelint'
import autoprefixer from 'autoprefixer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vite集成eslint
    viteEslint(),
    // vite集成stylelint
    viteStylelint({
      exclude: "/node_modules/"
    }),
    // 自动引入naive-ui组件
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  },
  resolve: {
    // 路径别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
