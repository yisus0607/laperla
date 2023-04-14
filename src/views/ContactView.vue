<script setup>
import headerPerla from '../components/headerPerla.vue';
import formContact from '../components/ContactComponents/formContact.vue'
import MapaContact from '../components/ContactComponents/MapaContact.vue'
import DirectionsContact from '../components/ContactComponents/DirectionsContact.vue'
</script>
<template>
  <div class="bg-FondoPerla ">
    <header-perla />
    <form-contact />
    <mapa-contact />
    <directions-contact />
    <div class="h-16 flex justify-center items-center copy-content">
      <div class="drwan">&copy; 2023 Wandoy</div>
    </div>
  </div>
</template>
<style scoped>
.copy-content {
  background-color: #dedede;
}

@media (min-width: 5120px) {
  .drwan {
    font-size: 1.5vw;
    line-height: normal;
  }

  .copy-content {
    height: 5vh;
  }
}
</style>

