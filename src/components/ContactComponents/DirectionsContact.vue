<script>
export default {
  name: "DirectionsContact",
};
</script>
<template>
  <div class="lg:columns-2 p-20 cont-dir bg-FondoPerla font-bold overflow-hidden">
    <div v-for="i in 9" :key="i"
      class="dir-contactuno py-2 text-center text-AzulPerla flex flex-col break-inside-avoid md:text-3xl lg:text-xl">
      <p>Trujillo</p>
      <p>Jhon F. Kennedy N° 189-Urb. La Perla</p>
      <p>Telefono: 044 221355</p>
    </div>
  </div>
</template>
<style scoped> 
.cont-dir {
   font-family: "KarbonRegular";
   -webkit-text-stroke: 0.4px #471d7c;
 }

 .dir-contactuno {
   padding: 2%;
 }

 .dir-contactuno p {
   font-size: 2.5vh;
   line-height: normal;
 }
</style>

