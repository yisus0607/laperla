<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

export default {
    name: 'CarruselReceta',
    data() {
        return {
            images: ["Receta1", "Receta2", "Receta3", "Receta4", "Receta5", "Receta6", "Receta7"],
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    }
}
</script>
<template>
    <div class="carrusel-cont">
        <div class="p-2 flex justify-end lg:p-8">
            <h1 class="pr-2 pt-2 title-carrusel font-semibold text-2xl lg:font-bold lg:text-5xl lg:pr-4">RECETAS
                RELACIONADAS</h1>
        </div>
        <div>
            <swiper :watchSlidesProgress="true" :slidesPerView="4" class="mySwiper">
                <swiper-slide v-for="i in 8" class=" swcarrec m-2 lg:m-10 hover:rounded-3xl">
                    <img class="hover:rounded-3xl" src="@/assets/RecetarioAssets/receta1.png" alt="">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<style scoped>
.carrusel-cont {
    background-color: #EEDDC7;
}

.title-carrusel {
    color: #471D7C;
}

.swcarrec {
    
}

@media (min-width: 5120px) {
    .title-carrusel {
        font-size: 6vh;
        line-height: normal;
    }

    .swcarrec {
        padding: 150px;
    }

}
</style>

