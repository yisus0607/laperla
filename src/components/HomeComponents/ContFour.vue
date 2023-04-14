<script>
//importacion de la aimaciones como scroll triger y el reister del mismo
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//esta funcion si funciona

export default {
    name: 'contFour',
    methods: {
        fijacionSencilla4() {
            if (window.innerWidth < 1024) {
                const tlm1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".fondo-four",
                        start: "top top",
                        end: "+=350% bottom",
                        scrub: 1.1,
                        //markers: true,
                        pin: true,
                    }
                });
                tlm1.from(".title-contfour, .contdes-textfour", {
                    duration: 2,
                    opacity: 0,
                    stagger: 0.3,
                })

                tlm1.from(".circle-four", {
                    opacity: 0,
                    scale: 0.2,
                    delay: 0.6,
                    duration: 2,
                })
                tlm1.to(".circle-four", {
                    marginTop: 25,
                    marginBottom: 20,
                    scale: 1.3,
                    duration: 2,
                })
                tlm1.to(".cont-imageabsfour", {
                    scale: 0.8,
                    xPercent: 19,
                    yPercent: -7,
                    duration: 2,
                })
                // tlm1.to(".cont-textfour", {
                //     opacity: 0,
                //     duration: 2,
                //     delay: 2,
                // })
                // tlm1.to(".cont-imageabsfour", {
                //     yPercent: 25,
                //     scale: 6,
                //     duration: 2,
                // })
                // tlm1.to(".circle-four, .cont-imageabsfour", {
                //     opacity: 0,
                //     backgroundColor: "transparent",
                //     duration: 2,
                // })
            }


            if (window.innerWidth > 1024) {
                const tl4 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".fondo-four",
                        start: "top top",
                        end: "+=450% bottom",
                        scrub: 1.2,
                        //markers: true,
                        pin: true,
                    }
                });
                tl4.fromTo(".circle-four, .cont-imageabsfour", {
                    duration: 3,
                    opacity: 0,
                    scale: 4,
                    backgroundColor: "transparent",
                }, {
                    opacity: 1,
                    scale: 1,
                    backgroundColor: "#EBDAC0",
                })
                tl4.from(".cont-textfour", {
                    opacity: 0,
                    scale: 0,
                    yPercent: -100,
                    xPercent: 200,
                }, "1")
                tl4.to(".cont-imageabsfour", {
                    scale: 0.8,
                    xPercent: 20,
                    yPercent: -7,
                }, 1)
                tl4.to(".circle-four", {
                    scale: 1.8,
                },1)
                tl4.to(".cont-imageabsfour", {
                    delay: 1,
                })
            }
        }
    },
    mounted() {
        this.fijacionSencilla4();
    }
}
</script>
<template>
    <div
        class="fondo-four bg-FondoPerla lg:columns-2 flex flex-col justify-center overflow-hidden lg:flex-row lg:justify-evenly lg:items-center lg:px-32 lg:pt-20">
        <!-- circulo de la imagen  -->
        <div class="pptimgresapifour flex justify-center lg:break-inside-avoid lg:w-2/4 lg:pb-32 lg:scale-125">
            <!-- dos ultimos arreglar -->
            <div class="circle-four rounded-full w-60 h-60 md:w-96 md:h-96 lg:w-64 lg:h-64 lg:scale-150">
                <div class="cont-imageabsfour relative shadow-2xl rounded-full w-5/6 h-5/6">
                    <img class="imgContfour rounded-full shadow-2xl h-full w-full object-cover"
                        src="@/assets/HomeAssets/ContsIter/ImgCont4.png" alt="img" />
                </div>
            </div>
        </div>
        <!-- texto de contenido -->
        <div
            class="order-first relative lg:-right-10 cont-textfour pb-10 lg:order-none lg:w-2/4 lg:pt-0 lg:flex lg:flex-col lg:pb-32 lg:items-center lg:scale-125">
            <p class="title-contfour text-AzulPerla text-center md:text-7xl text-5xl pb-5 lg:text-7xl">
                SABOR Y <br> AROMA
            </p>
            <div class="relative px-10 lg:right-20 lg:px-0 md:py-5 pb-2">
                <p
                    class="text-2xl md:text-4xl lg:text-3xl contdes-textfour relative text-center lg:text-right text-AzulPerla lg:w-12/12 lg:pb-6 lg:pl-72 lg:right-20">
                    Su sabor único permite preparar variedad de potajes deleitando tu paladar.
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.title-contfour {
    font-family: 'TestKarbonMedium';
    -webkit-text-stroke: 1px #471d7c;
}

.contdes-textfour {
    font-family: 'KarbonRegular';
}

.fondo-four {
    height: 100vh;
}

.circle-four {
    background-color: #EBDAC0;
}

.cont-imageabsfour {
    top: 20%;
    left: -10%;
    /* transform: translateX(19%) translateY(23%); */
    background: transparent;

}

@media (min-width: 5120px) {
    .pptimgresapifour {
        scale: 3;
    }

    .cont-textfour {
        scale: 3;
    }

    .contdes-textfour {
        padding-right: 20%;
        margin-left: 20%;
    }
}
</style>