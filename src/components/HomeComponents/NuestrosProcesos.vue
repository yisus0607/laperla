<script>
import imagen1 from "@/assets/HomeAssets/NpAss/npImg1.png";
import imagen2 from "@/assets/HomeAssets/NpAss/npImg2.png";
import imagen3 from "@/assets/HomeAssets/NpAss/npImg3.png";
import imagen4 from "@/assets/HomeAssets/NpAss/npImg4.png";
import imagen5 from "@/assets/HomeAssets/NpAss/npImg5.png";
import imagen6 from "@/assets/HomeAssets/NpAss/npImg5.png";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: "NuestrosProcesos",
    data() {
        return {
            nuestrosPro: [
                {
                    title: "Etapa 1",
                    subtitle: "Reproducción",
                    text: "Nuestras granjas reproductoras están construidas en lugares ideales, aislados con temperatura moderada y cuentan con alta bioseguridad que ayudarán a tener un huevo fértil de calidad.",
                    image: imagen1,
                    alt: "imagen 1",
                },
                {
                    title: "Etapa 2",
                    subtitle: "Incubación",
                    text: "Contamos con una sala de incubación, en la cual los huevos son colocados en bandejas y supervisados constantemente para su correcto desarrollo.",
                    image: imagen2,
                    alt: "imagen 2",
                },
                {
                    title: "Etapa 3",
                    subtitle: "Alimentación",
                    text: "Producimos su alimento con equipos de alta tecnología, utilizando materias primas e insumos rigurosamente seleccionados.",
                    image: imagen3,
                    alt: "imagen 3",
                },
                {
                    title: "Etapa 4",
                    subtitle: "Pollo de Engorde",
                    text: "Le proveemos a nuestras aves alimentos nutritivos para su crecimiento y desarrollo, obteniendo un pollo de excelente rendimiento y buena calidad.",
                    image: imagen4,
                    alt: "imagen 4",
                },
                {
                    title: "Etapa 5",
                    subtitle: "Centro de Beneficio",
                    text: "El proceso final de nuestras aves es una etapa muy importante para garantizar la calidad de nuestro producto.",
                    image: imagen5,
                    alt: "imagen 5",
                },
                {
                    title: "Etapa 6",
                    subtitle: "Distribución",
                    text: "Contamos con una moderna flota de camiones para la distribución del pollo Perla, para estar siempre atentos a las necesidades de nuestros clientes.",
                    image: imagen6,
                    alt: "imagen 6",
                },
            ],
        };
    },
    methods: {
        animatioenNp(obj) {

            if (window.innerWidth > 1024) {
                //animacion independiente
                var i;

                for (i = 0; i < obj; i++) {
                    const tlnp = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".npani" + i,
                            start: "+=80% bottom",
                            end: "+=180% +=140%",
                            toggleActions: "restart none none none",
                            scrub: 1.2,
                            //markers: true,
                        },
                    });

                    if (i % 2 == 0) {
                        tlnp.from(".npimgani" + i, {
                            duration: 8,
                            //opacity: 0,
                            xPercent: -500,
                            //stagger: 2,

                        });
                    } else {
                        tlnp.from(".npimgani" + i, {
                            duration: 8,
                            //opacity: 0,
                            xPercent: 500,
                            //stagger: 2,
                        });
                    }


                    //segunda timeline
                    const tlnp2 = gsap.timeline();

                    tlnp.add(tlnp2, 0);

                    if (i % 2 == 0) {
                        tlnp2.from(".nptextani" + i, {
                            duration: 8,
                            xPercent: 500,
                            opacity: 0,
                            //stagger: 2,
                        });
                    } else {
                        tlnp2.from(".nptextani" + i, {
                            duration: 8,
                            xPercent: -500,
                            opacity: 0,
                            //stagger: 2,
                        });
                    };
                };
            }
        },
        animacionMobile(obj) {
            //animacion independiente
            var U;
            //console.log("Animacion cargada correctamente")
            for (U = 0; U < obj; U++) {
                const tlnp = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".npani" + U,
                        start: "top center",
                        end: "+=100% bottom",
                        toggleActions: "restart none none none",
                        scrub: 1,
                        //markers: true,
                        //pin: true,
                    },
                });

                if (U % 2 == 0) {
                    tlnp.from(".npimgani" + U, {
                        duration: 2,
                        opacity: 0,
                        translateX: -200,
                        //stagger: 2,
                    });
                } else {
                    tlnp.from(".npimgani" + U, {
                        duration: 2,
                        opacity: 0,
                        translateX: 200,
                        //stagger: 2,
                    });
                }

                // //segunda timeline
                const tlnp2 = gsap.timeline();


                tlnp.add(tlnp2, 0);

                if (U % 2 == 0) {
                    tlnp2.from(".nptextani" + U, {
                        duration: 2,
                        translateX: 200,
                        //stagger: 2,
                    });
                } else {
                    tlnp2.from(".nptextani" + U, {
                        duration: 2,
                        translateX: -200,
                        //stagger: 2,
                    });
                };

            }
        }
    },
    mounted() {
        var inobj = this.nuestrosPro.length;
        this.animatioenNp(inobj);
        this.animacionMobile(inobj);
    },
};
</script>
<template>
    <div class="block overflow-hidden">
        <!-- contenido del titulo -->
        <div class="cont-ttlnp bg-AzulPerla  flex items-center  lg:justify-end">
            <h1 class="text-FondoPerla text-4xl pl-4 md:text-7xl lg:pr-20 lg:text-8xl xl:text-9xl">
                NUESTRO PROCESO
            </h1>
        </div>

        <!-- items de nuestros procesos -->

        <!-- Items Iteractivos -->
        <div v-for="(npro, index) in nuestrosPro" :key="index" class="item-np lg:flex " :class="{
            'bg-FondoNp1': index % 2 == 0,
            'bg-FondoNp2': index % 2 == 1,
        }, 'npani' + index">
            <!-- imagen -->
            <div class="cont-imgnp h-auto flex justify-center bg-gray-400 lg:w-1/2" :class="'npimgani' + index">
                <img class="h-full w-full object-cover" :src="npro.image" :alt="npro.alt" />
            </div>
            <!-- contenido cuerpo -->
            <div class="cont-textnp p-14 flex flex-col justify-center lg:w-2/4 lg:px-24" :class="{
                'lg:order-none': index % 2 == 0,
                'lg:order-first': index % 2 == 1,
            }, 'nptextani' + index">
                <div class="ttlnpe text-NaranjaPerla text-3xl lg:text-4xl break-words">
                    <p class="md:text-6xl" :class="{
                        'text-right': index % 2 == 0,
                        'text-left': index % 2 == 1,
                    }">
                        {{ npro.title }}
                    </p>
                </div>
                <div class="ttlnpp text-AzulPerla text-5xl md:text-8xl py-5 lg:text-7xl break-words"
                    :class="{ 'text-right': index % 2 == 0, 'text-left': index % 2 == 1 }">
                    {{ npro.subtitle }}
                </div>
                <div class="ttlnpd text-AzulPerla text-xl">
                    <p class="text-justify md:text-5xl lg:text-xl" :class="{
                        'lg:text-right': index % 2 == 0,
                        'lg:text-left': index % 2 == 1,
                        'lg:pl-28': index % 2 == 0,
                        'lg:pr-28': index % 2 == 1,
                    }">
                        {{ npro.text }}
                    </p>
                </div>
            </div>
            <div class="w-1" :class="{ 'hidden': index != 2, }"><img class="img-decor relative"
                    src="@/assets/HomeAssets/NpAss/starnpR.png" alt=""></div>
            <div class="w-1" :class="{ 'hidden': index != 4, }"><img class="img-decor2 relative"
                    src="@/assets/HomeAssets/NpAss/starnpR.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.cont-ttlnp h1 {
    font-family: "TestKarbonSemiBold";
}

.ttlnpe {
    font-family: "TestKarbonRegular";
}

.ttlnpp {
    font-family: "KarbonRegular";
    -webkit-text-stroke: 1px #471d7c;
}

.ttlnpd {
    font-family: "TestKarbonRegular";
}

.img-decor {
    scale: 40;
    left: -180vh;
    top: -0.3%;
}

.img-decor2 {
    scale: 40;
    left: -25vh;
    top: -0.3%;
}

.cont-ttlnp {
    height: 15vh;
}

@media (min-width:1024px) {
    .cont-ttlnp h1 {
        font-size: 7vw;
    }

    .cont-ttlnp {
        height: 30vh;
    }
}

@media (min-width: 5120px) {
    .cont-textnp {
        padding: 4%;
    }

    .cont-ttlnp {
        height: 800px;
        line-height: normal;
    }

    .ttlnpe p {
        font-size: 9vh;
        line-height: normal;
    }

    .ttlnpp {
        font-size: 12vh;
        line-height: normal;
    }

    .ttlnpd p {
        font-size: 4vh;
        line-height: normal;
    }

    .img-decor {
        scale: 150;
        left: -90vw;
        top: -0.3%;
    }

    .img-decor2 {
        scale: 150;
        left: -10vw;
        top: -0.25%;
    }
}
</style>