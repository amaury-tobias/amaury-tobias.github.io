<template lang="pug">
.animated.fadeIn.font-light.pb-24
  #head.mx-auto.px-12.md_px-32.lg_px-40
    .min-h-screen.flex.justify-center.items-center.flex-col
      h1.uppercase.text-4xl Amaury.
      h2 DESARROLLADOR WEB

  #about.mx-auto.px-12.md_px-32.lg_px-40
    .min-h-screen.flex.items-stretch.justify-center.items-start.flex-col
      .text-left.mb-4
        p.text-3xl.uppercase.title Acerca de mi
      .text-left
        .flex.flex-col
          p.my-2 Mi interés por la programación comenzó durante el bachillerato con las tecnologías de Java y TurboPascal2000, llevadas de manera curricular, y más adelante aprendí a crear pequeñas aplicaciones para Windows Mobile de manera autodidacta.
          p.my-2 Actualmente curso el Séptimo semestre de la Licenciatura en Multimedia y Animación Digital (LMAD) en la Universidad Autónoma de Nuevo León (UANL), en donde de manera tanto individual como en colaboración con mis compañeros desarrollo proyectos con fines educativos y de uso propio.

  #eduexp.mx-auto.px-12.md_px-32.lg_px-40
    .min-h-screen
      .flex.items-stretch.justify-center.items-start.flex-col
        .flex.flex-col.items-stretch.justify-center.items-center
          .text-left.mb-4
            p.text-3xl.uppercase.title Educación
          .my-2
            span.text-base.uppercase 2016 - Presente
            br
            span UANL, FCFM: Multimedia y Animación Digital
            br
            span San Nicolás de los Garza, Nuevo León
          .my-2
            span.text-base.uppercase Febrero 2018 - Septiembre 2018
            br
            span IOS Development Lab UANL
            br
            span Swift, iOS App Development
          .my-2
            span.text-base.uppercase 2012 - 2015
            br
            span Colegio de Bachilleres. Cedral, SLP
        .flex.flex-col.items-stretch.justify-center.items-center.mt-4
          .text-left.mb-4
            p.text-3xl.uppercase.title Experiencia
          .my-2
              span.text-base.uppercase 11/2019 - actual
              br
              span Desarrollador Full Stack @ Grupo GarSa
              br
              a(href='http://www.grupogarsa.com').link-active http://www.grupogarsa.com
          .my-2
              span.text-base.uppercase 01/2018 - 09/2019
              br
              span Desarrollador Full Stack @ Centro de Servicios en Informática
              br
              a(href='http://www.csi.uanl.mx/').link-active http://www.csi.uanl.mx/

  #proyectos.mx-auto.px-12.md_px-32.lg_px-40
    .min-h-screen.flex.items-stretch.justify-center.items-start.flex-col
      .text-left.mb-4
        p.text-3xl.uppercase.title Proyectos personales
      .my-2.text-center
        a(href='https://amaury-tobias.github.io/v-avatar/').text-2xl.flex.flex-col.items-center
          span v-avatar
          img(src='~assets/images/v-avatar-1.PNG')
      .my-2.text-center
        a(href='https://amaury-tobias.github.io/v-github-activity/').text-2xl.flex.flex-col.items-center
          span v-github-activity
          img(src='~assets/images/v-github-activity.png')

  #skills.mx-auto.px-12.md_px-32.lg_px-40
    .min-h-screen.flex.items-stretch.justify-center.items-start.flex-col
      .text-left.mb-4
        p.text-3xl.uppercase.title Habilidades
      .my-2
        span.text-2xl CSS:&nbsp;
        span.text-sm CSS3 · SASS · POSTCSS
        //progress.progress(value='20' max='100') 15%
      .my-2
        span.text-2xl DOCKER:&nbsp;
        span.text-sm Docker · Docker-compose
        //progress.progress.is-dark(value='20' max='100') 15%
      .my-2
        span.text-2xl JVM:&nbsp;
        span.text-sm Spring · Android
        //progress.progress.is-dark(value='20' max='100') 15%
      .my-2
        span.text-2xl JS:&nbsp;
        span.text-sm Typescript · NodeJS · Express · Koa
        //progress.progress.is-dark(value='20' max='100') 15%
      .my-2
        span.text-2xl VUE:&nbsp;
        span.text-sm Vuex · Vue Router · Nuxt
        //progress.progress.is-dark(value='20' max='100') 15%
      .my-2
        span.text-2xl SWIFT:&nbsp;
        span.text-sm iOS · Cocoapods · Carthage
        //progress.progress.is-dark(value='20' max='100') 15%
      .my-2
        span.text-2xl DB:&nbsp;
        span.text-sm MySQL · MongoDB · MSSQL
        //progress.progress.is-dark(value='20' max='100') 15%
      .my-2
        span.text-2xl TOOLS:&nbsp;
        span.text-sm Nginx · Git · BASH · VIM
      .my-2
        span.text-2xl CI/CD:&nbsp;
        span.text-sm Travis CI · Github Actions

  #github.mx-auto.px-0.md_px-32.lg_px-40.my-4
    github-feed(login='amaury-tobias')

  footer.footer
    div
      strong.text-xl CONTACTO
      p Monterrey, México.
      p amaury.tobiasqr@gmail.com
    p Hecho con el ♥️ y Vue.js + Nuxt.
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style lang="postcss" scoped>
#github {
  @apply bg-gray-100;
}
.footer {
  @apply mt-6;
  @apply mb-4;
  @apply mx-auto;
  @apply text-center;
}
li {
  @apply list-inside;
}
</style>
