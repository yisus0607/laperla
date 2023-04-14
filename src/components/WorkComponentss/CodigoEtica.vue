<template>
  <div class="cont-ce h-96 flex flex-col items-center justify-center">
    <div class="texto p-20 text-center text-xl lg:text-2xl text-white">Conoce Sobre La Filosofia De Molino La Perla</div>
    <router-link to="/work/ce" custom v-slot="{ navigate }">
      <button type="button" @click="navigate" role="link"
        class="btn-laperla py-2 px-16 mr-2 text-letraPerla mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg border">
        CODIGO DE ETICA
      </button>
    </router-link>
  </div>
</template>
<style>
.cont-ce {
  background-image: url("@/assets/WorkAssets/imgCe.png");
  background-size: cover;
  background-repeat: no-repeat;
  /* background: transparent linear-gradient(0deg, #46372500 0%, #471D7C 87%, #471D7C 100%) 0% 0% no-repeat padding-box;
  mix-blend-mode: multiply; */
}
@media (min-width: 5120px) {
  .cont-ce {
    height: 30vh;
  }

  .texto {
    font-size: 1.5vw;
  }

  .btn-laperla {
    font-size: 1vw;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
  }
}
</style>

<script>
export default {
  name: "CodigoEtica",
};
</script>
