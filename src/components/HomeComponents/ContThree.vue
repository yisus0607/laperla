<script>
//importacion de la aimaciones como scroll triger y el reister del mismo
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default {
    name: 'contThree',
    methods: {
        fijacionSencilla3() {

            if (window.innerWidth < 1024) {
                const tlm1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".fondo-three",
                        start: "top top",
                        end: "+=350% bottom",
                        scrub: 1.1,
                        //markers: true,
                        pin: true,
                    }
                });
                tlm1.from(".title-contthree, .contdes-textthree", {
                    opacity: 0,
                    stagger: 0.3,
                    duration: 2,
                })

                tlm1.from(".circle-three", {
                    opacity: 0,
                    scale: 0.2,
                    delay: 0.6,
                    duration: 2,
                })
                tlm1.to(".circle-three", {
                    marginTop: 25,
                    marginBottom: 20,
                    scale: 1.3,
                    duration: 2,
                })
                tlm1.to(".cont-imageabsthree", {
                    scale: 0.8,
                    xPercent: -19,
                    yPercent: -7,
                    duration: 2,
                })
                // tlm1.to(".cont-textthree", {
                //     opacity: 0,
                //     delay: 3,
                //     duration: 2,
                // })
                // tlm1.to(".cont-imageabsthree", {
                //     duration: 3,
                //     yPercent: 25,
                //     scale: 6,
                // })
                // tlm1.to(".circle-three, .cont-imageabsthree", {
                //     duration: 4,
                //     opacity: 0,
                //     backgroundColor: "transparent",
                // })
            }

            if (window.innerWidth > 1024) {
                const tl3 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".fondo-three",
                        start: "top top",
                        end: "+=450% bottom",
                        scrub: 1,
                        //markers: true,
                        pin: true,
                    }
                });
                tl3.fromTo(".circle-three, .cont-imageabsthree", {
                    duration: 5,
                    opacity: 0,
                    scale: 4,
                    backgroundColor: "transparent",
                }, {
                    opacity: 1,
                    scale: 1,
                    backgroundColor: "#8A67BF",
                })
                tl3.from(".cont-textthree", {
                    opacity: 0,
                    scale: 0,
                    yPercent: -100,
                    xPercent: -200,
                }, "1")
                tl3.to(".cont-imageabsthree", {
                    scale: 0.8,
                    xPercent: -19,
                    yPercent: -7,
                }, 1)
                tl3.to(".circle-three", {
                    scale: 1.8,
                }, 1);
                tl3.to(".cont-imageabsthree", {
                    delay: 1,
                })
                
            }

        }

    },
    mounted() {
        this.fijacionSencilla3();
    }
}
</script>
<template>
    <div
        class="fondo-three bg-FondoPerla lg:columns-2 flex flex-col justify-center overflow-hidden lg:flex-row lg:justify-evenly lg:items-center lg:px-32 lg:pt-20">
        <!-- circulo de la imagen  -->
        <div class="contimgthreeinu flex justify-center lg:break-inside-avoid lg:w-2/4 lg:pb-28 lg:scale-125">
            <!-- dos ultimos arreglar -->
            <div class="circle-three rounded-full w-60 h-60 md:w-96 md:h-96 lg:w-64 lg:h-64 lg:scale-150">
                <div class="cont-imageabsthree relative shadow-2xl rounded-full w-5/6 h-5/6">
                    <img class="imgContthree rounded-full shadow-2xl h-full w-full object-cover"
                        src="@/assets/HomeAssets/ContsIter/ImgCont3.png" alt="img" />
                </div>
            </div>
        </div>
        <!-- texto de contenido -->
        <div
            class="cont-textthree relative h-1/5 order-first lg:w-2/4 lg:flex lg:justify-center lg:items-center lg:flex-col">
            <p
                class="lg:relative title-contthree text-AzulPerla text-center text-5xl md:text-7xl pb-5 lg:-top-32 lg:-left-10">
                JUGOSIDAD
            </p>
            <div class="text-contthree lg:absolute px-10 md:px-20 pb-2">
                <p class="contdes-textthree text-xl md:text-4xl text-center lg:text-left  text-AzulPerla lg:pr-20">
                    Satisfaciendo el gusto más exigente por su suavidad y jugosidad.
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.title-contthree {
    font-family: 'TestKarbonMedium';
    -webkit-text-stroke: 1px #471d7c;
}

.contdes-textthree {
    font-family: 'KarbonRegular';
}

.fondo-three {
    height: 100vh;
}

.circle-three {
    background-color: #8A67BF;
}

.cont-imageabsthree {
    top: 20%;
    left: 25%;
    background-color: transparent;
}

@media (min-width: 5120px) {
    .cont-textthree {
        scale: 3;
    }

    .contimgthreeinu {
        scale: 3;
    }

    .contdes-textthree {
        padding-right: 20%;
        padding-left: 25%;
    }
}
</style>