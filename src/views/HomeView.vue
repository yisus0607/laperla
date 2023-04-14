<script setup>
import FooterPerla from "../components/FooterPerla.vue";
import headerPerla from "../components/headerPerla.vue";
import ContFour from "../components/HomeComponents/ContFour.vue";
import ContOne from "../components/HomeComponents/ContOne.vue";
import ContThree from "../components/HomeComponents/ContThree.vue";
import ContTwo from "../components/HomeComponents/ContTwo.vue";
import HeroHome from "../components/HomeComponents/HeroHome.vue";
import NuestrosProcesos from "../components/HomeComponents/NuestrosProcesos.vue";
import TitleHome from "../components/HomeComponents/TitleHome.vue";
</script>

<template>
  <main>
    <header-perla class="relative z-50" />
    <hero-home class="z-40" />
    <title-home class="z-30" />
    <div class="z-20">
      <cont-one />
      <cont-two />
      <cont-three />
      <cont-four />
    </div>
    <nuestros-procesos class="z-10" />
    <footer-perla class="z-0" />
  </main>
</template>
<style scoped></style>