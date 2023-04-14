<template>
    <headerPerla class="relitive z-50"/>
    <div class="overflow-hidden bg-FondoPerla">
        <!-- hero -->
        <div class="descnot">
            <img class="object-cover w-full h-full" src="@/assets/NoticiasAssets/imgHeroDescNotica.png" alt="imgnotid" />
        </div>
        <!-- desc -->
        <div class="dscnot5k p-2 md:p-4">
            <!-- ttl -->
            <div class="ttls-descnot lg:p-4 lg:px-14">
                <p class="ttls-descnot1 text-MarronPerla md:text-4xl">NOTICIAS</p>
                <p class="text-AzulPerla ttlcentraldesnot text-5xl">DÍA DEL TRABAJADOR</p>
                <p class="ttls-descnot2 text-AzulPerla md:text-4xl">05 de mayo de 2023</p>
            </div>
            <div class="lg:columns-2 p-5 h-auto lg:flex lg:items-center">
                <!-- texto centrado-->
                <div
                    class="textodesnot text-justify p-4 text-AzulPerla break-inside-avoid lg:py-16 lg:px-10 lg:text-left lg:w-2/4">
                    <p class="text-2xl lg:text-xl">{{ textcont }}</p>
                </div>
                <!-- swiper -->
                <div class="flex justify-center items-center lg:w-2/4">
                    <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }" :pagination="{ clickable: true, }" :navigation="true" :modules="modules" class="mySwiper">
                        <swiper-slide v-for="i in 5"><img class="object-cover w-full"
                                src="@/assets/NoticiasAssets/imgCar1.png" alt=""></swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
    <footerPerla />
</template>
<script>
import headerPerla from '../headerPerla.vue';
import footerPerla from '../footerPerla.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default {
    name: "descripcionNoticia",
    data() {
        return {
            textcont:
                "Los orígenes del Día Internacional de los Trabajadores se remontan al año 1886, en Estados Unidos. En esa época los trabajadores iniciaron una lucha para reducir la jornada laboral a 8 horas. El único límite que existía era el no hacer trabajar a una persona más de 18 horas sin causa justificada y la consecuencia era una multa de 25 dólares. El sindicato mayoritario inició una huelga ,a partir del 1 de mayo de 1886. En Chicago, los enfrentamientos entre la policía y los trabajadores fueron especialmente duros y sangrientos. Tras varios días de huelga, el 4 de mayo se convocó una concentración en la plaza de Haymarket, con una tensión creciente. Ese día un artefacto explotó en la plaza, resultando muerto un policía. Hubo muchos detenidos, de los cuáles cinco de ellos fueron condenados a la horca: tres periodistas, un tipógrafo y un carpintero. Se les conoce como (los mártires de Chicago). En honor a la lucha por la jornada laboral de 8 horas y en memoria de los trabajadores de Haymarket, el 1 de mayo se celebra el Día Internacional de los Trabajadores.",
        };
    },
    components: {
        headerPerla,
        footerPerla,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
};
</script>
<style>
.ttls-descnot {
    font-family: "KarbonRegular";
}

.ttlcentraldesnot {
    font-family: "GilroyBold";
}

.textodesnot {
    font-family: "KarbonRegular";
}



@media (min-width: 5120px) {
    .ttls-descnot1 {
        font-size: 3vh;
        line-height: normal;
    }

    .ttlcentraldesnot {
        font-size: 5vh;
        line-height: normal;
    }

    .ttls-descnot2 {
        font-size: 3vh;
        line-height: normal;
    }

    .textodesnot p {
        font-size: 2.5vh;
        line-height: normal;
    }
    .dscnot5k{
        padding-left: 3%;
        padding-top: 2%;
    }
}
</style>
