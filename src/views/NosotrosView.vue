<script setup>
import headerPerla from '../components/headerPerla.vue';
import FooterPerla from '../components/FooterPerla.vue';
import PresentancionNosotros from '../components/NosotrosComponents/PresentancionNosotros.vue';
import TimeLine from '../components/NosotrosComponents/TimeLine.vue';
import NuestraFilosofia from '../components/NosotrosComponents/NuestraFilosofia.vue';
import CulturaOrganizacional from '../components/NosotrosComponents/CulturaOrganizacional.vue';

</script>
<template>
    <main class="overflow-hidden nosotrosviewnn">
        <header-perla class="relative z-50" />
        <presentancion-nosotros class="stark"/>
        <time-line/>
        <nuestra-filosofia class="z-20" />
        <cultura-organizacional class="z-10" />
        <footer-perla class="z-0" /> 
    </main>
</template>
<style scoped>
@media (min-width: 1024) {

}
</style>