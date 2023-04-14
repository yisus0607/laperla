<script>
export default {
  name: "HeroWork",
};
</script>
<template>
  <div class="contpadding">
    <div class="cont-hero h-auto w-full bg-fondoPerla relative">
      <img class="imgherowork object-cover w-full" src="@/assets/WorkAssets/imgHeroWork.png" alt="hero">
      <div class="gradient absolute bottom-0 w-full"></div>
      <p class="ttl-herowork text-xl absolute bottom-12 md:text-5xl right-8 lg:text-6xl font-bold text-white">¡SE PARTE DE
        NUESTRO EQUIPO!</p>
    </div>
  </div>
</template>

<style scoped>
.gradient {
  height: 40vh;
  background: transparent linear-gradient(180deg, #46372500 0%, #471D7C 87%, #471D7C 100%) 0% 0% no-repeat padding-box;
  mix-blend-mode: multiply;
}

.cont-hero {
  height: 80vh;
}

.ttl-herowork {
  font-family: "TestKarbonMedium";
}

.imgherowork {
  height: 80vh;
}
/* para padding falta aun */
@media (min-width: 1024) {
  .contpadding {
    padding-top: 10%;
  }
}

@media (min-width: 5120px) {
  .ttl-herowork {
    font-size: 4vw;
  }
}
</style>


