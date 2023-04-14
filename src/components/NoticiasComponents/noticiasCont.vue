<script>
import ingNot1 from '@/assets/NoticiasAssets/imgNot1(2).png'
import ingNot2 from '@/assets/NoticiasAssets/imgNot1(1).png'
import ingNot3 from '@/assets/NoticiasAssets/imgNot1(3).png'
import ingNot4 from '@/assets/NoticiasAssets/imgNot1(4).png'

import StartButton from './StartButton.vue';

export default {
    name: "noticiasCont",
    data() {
        return {
            noticias: [
                {
                    id: "1",
                    titulo: "DÍA DEL TRABAJADOR",
                    img: ingNot1,
                    desc: "En Molino La Perla conmemoramos a nivel mundial al movimiento obrero y la fuerza laboral, como movimiento reivindicativo de diferentes causas relacionadas con el trabajo.",
                },
                {
                    id: "2",
                    img: ingNot2,
                    titulo: "DÍA DE LA MUJER",
                    desc: "Conmemoramos el 8 de marzo de 1908, un suceso transcendental que marcó la historia del trabajo y la lucha sindical en el mundo entero: 129 mujeres murieron en un incendio en la fábrica Cotton, de Nueva York.",
                },
                {
                    id: "3",
                    img: ingNot3,
                    titulo: "DÍA DEL AGRADECIMIENTO AL GALPONERO",
                    desc: "Celebramos a nuestros granjeros de Molino La Perla y de nuestra nación, y el importante papel que desempeñan en nuestra vida diaria.",
                },
                {
                    id: "4",
                    img: ingNot4,
                    titulo: "DÍA DEL CAMPESINO",
                    desc: "El campesino, agricultor o ganadero, hace producir con su trabajo y esfuerzo la tierra y los animales, recursos que nos fueron brindados y que son mundialmente conocidos, porque representan una mayor fuente de riqueza.",
                }
            ]
        }
    },
    components: {
        StartButton,
    }
};
</script>
  
<template>
    <div class="not-component p-10 lg:pt-20">
        <div class="title pb-4">
            <h1 class="title-noticias text-5xl lg:text-9xl lg:text-right lg:pr-10 lg:py-8">NOTICIAS</h1>
        </div>
        <!-- imagen a la izquierda -->
        <router-link to="/noticias/descnot" custom v-slot="{ navigate }">
            <div v-for="(not, index) in noticias" @click="navigate" role="link"
                class="cont-noticia rounded-xl lg:flex my-10 transition-all">
                <div class="lg:w-3/6 h-auto">
                    <img class="lg:w-full h-full object-cover hover:scale-x-105 transition-all" :src="not.img" alt="nn"
                        :class="{ 'hover:translate-x-4, hover:rounded-l-xl': index % 2 == 0, 'hover:-translate-x-4, hover:rounded-r-xl': index % 2 == 1 }" />
                </div>
                <div class="cont-text flex flex-col justify-center p-5 lg:w-3/5 md:p-14 lg:px-32" :class="{
                    'lg:order-none': index % 2 == 0,
                    'lg:order-first': index % 2 == 1,
                }">
                    <div class="icon-noticiasvg flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                            class="bi bi-journals" viewBox="0 0 16 16">
                            <path
                                d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                            <path
                                d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                        </svg>
                    </div>
                    <h1 class="text-xl py-2 text-center md:text-5xl lg:text-4xl lg:py-8">{{ not.titulo }}</h1>
                    <p class="p-2 text-justify md:text-3xl lg:text-xl lg:text-center">
                        {{ not.desc }}
                    </p>
                </div>
            </div>
        </router-link>

        <StartButton class="" />
    </div>
</template>
<style scoped>
.not-component {
    color: #471D7C;
}

.cont-noticia {
    background-color: #F5EBDC;
}

.cont-noticia :hover {
    background-color: #E5D9C9;
}

.title {
    font-family: "TestKarbonSemiBold";
    color: #471D7C;
}

.cont-text {
    font-size: "KarbonRegular";
}

.cont-text h1 {
    -webkit-text-stroke: 1px #471d7c;
}

@media (min-width: 1024) {
    .title {}
}

@media (min-width: 5120px) {

    .title-noticias {
        font-size: 10vh;
        padding: auto;
        line-height: normal;
    }

    .icon-noticiasvg svg {
        height: 100px;
        width: 100px;
        padding: auto;
    }

    .cont-text h1 {
        font-size: 5vh;
        line-height: normal;
    }

    .cont-text p {
        font-size: 3vh;
        line-height: normal;
    }

    .not-component {
        padding-top: 12vh;
        padding-right: 350px;
        padding-left: 350px;

    }
}
</style>
  
