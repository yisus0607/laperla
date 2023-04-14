<script>
export default {
    name: 'contReceta',
}
</script>

<template>
    <div class="bg-FondoPerla vistacontenidorecetas">
        <div class="pl-5 pt-5 lg:pl-40 lg:pt-16">
            <h1 class="ttlgenRec text-AzulPerla text-6xl">RECETAS</h1>
        </div>
        <div class="lg:columns-2 py-3 contcolumnas">
            <router-link to="/recetario/descrec" custom v-slot="{ navigate }">
                <div @click="navigate" role="link" v-for="i in 6"
                    class="contReceta relativo md:px-32 px-6 py-3 flex items-center justify-center">
                    <img class="ImgRecetaAni transition-all hover:brightness-50" src="@/assets/RecetarioAssets/receta1.png" alt="recta1">
                    <p class="px-24 text-center ttl-recCont absolute text-white text-3xl">POLLO DORADO
                        EN
                        SALSA DE SÉSAMO</p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<style scoped>
.ttl-recCont {
    font-family: "KarbonRegular";
    -webkit-text-stroke: 3px #ffffff;
}

.ttlgenRec {
    font-family: "TestKarbonSemiBold";
}

@media (min-width: 1024px) {
    .vistacontenidorecetas{
        padding-top: 10vh;
    }
    .ttl-recCont{
        font-size: 4vw;
        line-height: normal;
        padding-left: 15%;
        padding-right: 15%;
        -webkit-text-stroke: 0.3vw #ffffff;
    }
    .contReceta {
        width: 100%;
        padding: 5%;
    }

    .contcolumnas {
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 2%;
        padding-bottom: 2%;
    }
    .ttlgenRec{
        font-size: 7vw;
    }
}

/* .ImgRecetaAni:hover {
    
} */

@media (min-width: 5120px) {
    

}
</style>