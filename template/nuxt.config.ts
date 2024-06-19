// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

import { defineNuxtConfig } from "nuxt/config";
import { InputConfig } from "c12";

const inputConfig: InputConfig = {
  app: {
    head: {
      "charset": 'utf-8',
      "viewport": 'width=device-width, initial-scale=1',
      "title": "Шаблон Nuxt | 1.0.0"
    },
    pageTransition: true
  },
  css: [
    '@/assets/styles/global.scss'
  ],
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    '@nuxtjs/device'
  ],
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore']
    ]
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: "prefix_except_default",
    locales: [
      {
        code: 'ru',
        iso: 'ru',
        name: "Русский",
        file: 'ru.json'
      }
    ],
    defaultLocale: 'ru',
  },
  vite: {
    plugins: [
      svgLoader(),
    ]
  },
  devServer: {
    port: import.meta.env.VITE_APP_PORT
  },
  devtools: { enabled: true }
}
export default defineNuxtConfig(inputConfig);
