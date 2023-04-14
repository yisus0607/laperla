<script setup>
import PuestosVacantesMo from './PuetosVacantes/puestosvacantesmobile.vue'
import PuestosVacantesEs from './PuetosVacantes/puestosvacantesEs.vue'
</script>
<template>
  <div class="cntpv">
    <PuestosVacantesMo class="lg:hidden"/>
    <PuestosVacantesEs class="hidden lg:block"/>
  </div>
</template>
<style scoped>
.cntpv{
padding-top: 5%;
}
</style>