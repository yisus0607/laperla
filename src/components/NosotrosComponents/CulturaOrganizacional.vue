<script>
import imagenCo1 from "@/assets/NosotrosAssets/ImgCultura1.png";
import imagenCo2 from "@/assets/NosotrosAssets/ImgCultura2.png";
import imagenCo3 from "@/assets/NosotrosAssets/ImgCultura3.png";
import imagenCo4 from "@/assets/NosotrosAssets/ImgCultura4.png";
import imagenCo5 from "@/assets/NosotrosAssets/ImgCultura5.png";
import imagenCo6 from "@/assets/NosotrosAssets/ImgCultura6.png";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default {
    name: 'culturaOrg',
    data() {
        return {
            cultOrg: [
                {
                    texto: "Compromiso con la calidad de servicio.",
                    img: imagenCo1,
                    altimg: "ImgCultura1",
                },
                {
                    texto: "Comprometidos con la norma y políticas de la empresa y respeto a las leyes vigentes.",
                    img: imagenCo2,
                    altimg: "ImgCultura2",
                },
                {
                    texto: "Nuestros clientes y proveedores son considerados nuestros socios y por ende son parte de nuestra organización.",
                    img: imagenCo3,
                    altimg: "ImgCultura3",
                },
                {
                    texto: "Nos motiva elevar la calidad de vida intraorganizacional y extraorganizacional.",
                    img: imagenCo4,
                    altimg: "ImgCultura4",
                },
                {
                    texto: "Actitud de servicio, trabajo en equipo, responsabilidad compartida y honestidad.",
                    img: imagenCo5,
                    altimg: "ImgCultura5",
                },
                {
                    texto: "Nos adaptamos a los cambios internos y externos en paralelo a la flexibilidad productiva y comercial.",
                    img: imagenCo6,
                    altimg: "ImgCultura1",
                },
            ]
        }
    },
    methods: {
        animationCo(obj1) {
            if (window.innerWidth > 1024) {
                //animacion independiente
                var i;

                for (i = 0; i < obj1; i++) {
                    const tlnp = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".ncoani" + i,
                            start: "top bottom",
                            end: "center center",
                            toggleActions: "restart none none none",
                            scrub: 1,
                           // markers: true,
                        },
                    });
                    if (i % 2 == 0) {
                        tlnp.from(".coimage" + i, {
                            duration: 8,
                            //opacity: 0,
                            xPercent: -500,
                            //stagger: 2,

                        });
                    } else {
                        tlnp.from(".coimage" + i, {
                            duration: 8,
                            //opacity: 0,
                            xPercent: 500,
                            //stagger: 2,
                        });
                    }

                    const tlnp2 = gsap.timeline();

                    tlnp.add(tlnp2, 0);

                    if (i % 2 == 0) {
                        tlnp2.from(".cotextani" + i, {
                            duration: 8,
                            xPercent: 500,
                            opacity: 0,
                            //stagger: 2,
                        });
                    } else {
                        tlnp2.from(".cotextani" + i, {
                            duration: 8,
                            xPercent: -500,
                            opacity: 0,
                            //stagger: 2,
                        });
                    };
                };
            }
        },
        animationCoMobile(obj1) {
            //animacion independiente
            var U;
            //console.log("Animacion cargada correctamente")
            for (U = 0; U < obj1; U++) {
                const tlnp = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".ncoani" + U,
                        start: "+=200% center",
                        end: "+=100% bottom",
                        toggleActions: "restart none none none",
                        scrub: 1,
                        markers: true,
                        //pin: true,
                    },
                });

                if (U % 2 == 0) {
                    tlnp.from(".coimage" + U, {
                        duration: 2,
                        opacity: 0,
                        translateX: -200,
                        //stagger: 2,
                    });
                } else {
                    tlnp.from(".coimage" + U, {
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
                    tlnp2.from(".cotextani" + U, {
                        duration: 2,
                        translateX: 200,
                        //stagger: 2,
                    });
                } else {
                    tlnp2.from(".cotextani" + U, {
                        duration: 2,
                        translateX: -200,
                        //stagger: 2,
                    });
                };

            }
        }
    },
    mounted() {
        var objco = this.cultOrg.length;
        this.animationCo(objco);
       // this.animationCoMobile(objco);
    }
}
</script>
<template>
    <div class="bg-FondoPerla py-10 lg:px-40 lg:py-24">
        <!-- title cult -->
        <div class="ttlcult py-4 px-14 lg:py-16">
            <h1 class="text-MarronPerla text-2xl md:text-5xl lg:text-6xl">CULTURA ORGANIZACIONAL</h1>
        </div>
        <!-- contenido de cultura ORGANIZACIONAL -->
        <div v-for="(cultitm, index) in cultOrg" :key="index"
            class="cont-cult mx-14 flex items-center flex-col lg:flex-row lg:justify-center lg:px-14 lg:h-96" :class="{
                'bg-FondoCul2': index % 2 == 1,
                'bg-FondoCul1': index % 2 == 0,
                // 'border-b-4': index % 2 == 1,
            }, 'ncoani' + index">
            <div class="p-2 scale-50"><img class="img-itemco object-cover md:w-72 lg:w-96" :class="'coimage' + index"
                    :src="cultitm.img" :alt="cultitm.altimg">
            </div>
            <div class="p-4 lg:w-2/4 text-MarronPerla text-center text-lg md:text-4xl lg:text-2xl lg:px-20" :class="{
                'lg:order-first': index % 2 == 1,
                'lg:order-none': index % 2 == 0,
            }, 'cotextani' + index">
                <p class="txtcon">{{ cultitm.texto }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.ttlcult {
    font-family: "KarbonRegular";
    -webkit-text-stroke: 1px #463725;
}

.ttlcult h1 {
    font-size: 6.3vw;
}

.cont-cult {
    font-family: "KarbonRegular";
}

.txtcon {
    font-size: 5vw;
    line-height: normal;
}

@media (min-width: 1024px) {
    .txtcon {
        font-size: 2vw;
        line-height: normal;
    }
}

@media (min-width: 5120px) {
    .ttlcult h1 {
        font-size: 5vw;
        line-height: normal;
        -webkit-text-stroke: 0.2vw #463725;
    }

    .txtcon {
        font-size: 1.5vw;
        line-height: normal;
    }

    .cont-cult {
        padding-top: 8%;
        padding-bottom: 8%;
    }

    .img-itemco {
        width: 20vw;
    }
}
</style>