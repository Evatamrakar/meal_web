// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  app :{
    head : {
      link : [
        {
          rel : "stylesheet",
          href :"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
      ],
    },
  },
}); 