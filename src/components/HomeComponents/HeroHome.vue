<script>

</script>
<template>
    <div class="contenedor-hero flex justify-center items-center w-full overflow-hidden">
        <video muted autoplay loop class="w-full h-full object-cover">
            <source src="@/assets/HomeAssets/HeroVideo.mp4" type="video/mp4">
        </video>
        <h1 class="titleHero absolute font-TestKarbonSemiBold text-white text-right">Pasion que <br> alimenta</h1>
    </div>
</template>
<style scoped>
.contenedor-hero{
    height: 90vh;
}
.titleHero{
    font-size: 8vh;
    bottom: 4%;
    right: 5%;
    line-height: normal;
}
@media (min-width: 1024px) {
    .titleHero{
        font-size: 17vh;
    }
    .contenedor-hero{
    height: 100vh;
}
}
</style>