<script setup>
import headerPerla from '../components/headerPerla.vue';
import HeroWork from '../components/WorkComponentss/HeroWork.vue'
import FooterPerla from '../components/FooterPerla.vue';
import PresentacionWork from '../components/WorkComponentss/PresentacionWork.vue'
import CodigoEtica from '../components/WorkComponentss/CodigoEtica.vue'
import PuestosVacantes from '../components/WorkComponentss/PuestosVacantes.vue'

</script>
<template>
  <main class="bg-FondoPerla">
    <header-perla class="relative z-50" />
    <hero-work />
    <presentacion-work class="pptworkview" />
    <codigo-etica />
    <puestos-vacantes />
    <footer-perla />
  </main>
</template>
<style scoped>

</style>
