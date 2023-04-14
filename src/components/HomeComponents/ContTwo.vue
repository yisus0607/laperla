<script>
//importacion de la aimacitwos como scroll triger y el reister del mismo
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//esta funcion si funciona

export default {
    name: 'contTwo',
    methods: {
        fijacionSencilla2() {
            if (window.innerWidth < 1024) {
                const tlm1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".fondo-twom",
                        start: "top top",
                        end: "+=350%",
                        scrub: 1.1,
                        //markers: true,
                        pin: true,

                    },
                });
                tlm1.from(".title-conttwom, .text-conttwom", {
                    paddingTop: 0,
                    opacity: 0,
                    stagger: 0.3,
                    duration: 2,
                });

                tlm1.from(".circle-twom", {
                    opacity: 0,
                    scale: 0,
                    delay: 0.6,
                    duration: 2,
                });
                tlm1.to(".circle-twom", {
                    yPercent: 8,
                    marginTop: 0,
                    marginBottom: 5,
                    scale: 1.1,
                    duration: 2,
                });
                tlm1.to(".cont-imageabstwom", {
                    scale: 0.8,
                    xPercent: 20,
                    yPercent: -7,
                    duration: 2,
                });
                tlm1.from(".contimgdettwom", {
                    xPercent: -220,
                    duration: 2,
                });
                tlm1.from(".flechatwom , .cont-indicadortwom", {
                    opacity: 0,
                    xPercent: 200,
                    stagger: 0.3,
                    duration: 2,
                });
                // tlm1.to(
                //     ".title-conttwom, .text-conttwom, .flechatwom , .cont-indicadortwom, .contimgdettwom",
                //     {
                //         delay: 2,
                //         opacity: 0,
                //         duration: 2,
                //     }
                // );
                // tlm1.to(".cont-imageabstwom", {
                //     yPercent: 25,
                //     scale: 6,
                //     duration: 2,
                // });
                // tlm1.to(".circle-twom, .cont-imageabstwom", {
                //     duration: 2,
                //     opacity: 0,
                //     backgroundColor: "transparent",
                // });
            }

            if (window.innerWidth > 1024) {
                const tl2 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".fondo-two",
                        start: "top top",
                        end: "+=350% top",
                        scrub: 1.2,
                        //markers: true,
                        pin: true,
                    }
                });

                tl2.fromTo(".circle-two, .cont-imageabstwo", {
                    duration: 2,
                    opacity: 0,
                    scale: 5,
                    xPercent: 100,
                    yPercent: 50,
                    backgroundColor: "transparent",
                }, {
                    opacity: 1,
                    scale: 1,
                    backgroundColor: "#FF7439",
                    xPercent: 0,
                    yPercent: 0,
                })

                tl2.from(".cont-texttwo", {
                    opacity: 0,
                    scale: 0,
                    yPercent: -100,
                    xPercent: 200,
                });
                tl2.to(".cont-imageabstwo", {
                    scale: 0.8,
                    xPercent: 20,
                    yPercent: -7,
                }, "1")
                tl2.to(".circle-two", {
                    scale: 1.8,
                }, 1);

                tl2.from(".contimgdettwo", {
                    xPercent: 140,
                }, 1);
                tl2.from(".cont-indicadortwo, .flechatwo", {
                    stagger: 0.3,
                    opacity: 0,
                    y: 200,
                });
                tl2.to(".cont-texttwo", {
                    delay: 1.5,
                    
                });
                // tl2.to(".cont-imageabstwo", {
                //     xPercent: 100,
                //     yPercent: 50,
                //     scale: 5,
                // });
                // tl2.to(".circle-two, .cont-imageabstwo", {
                //     duration: 3,
                //     opacity: 0,
                //     backgroundColor: "transparent",
                // });
            }

        }
    },
    mounted() {
        this.fijacionSencilla2();
    },
}
</script>
<template>
    <div>
        <!-- para mobile -->
        <div class="lg:hidden fondo-twom bg-FondoPerla flex flex-col justify-center items-center overflow-hidden">
            <!-- circulo de la imagen  -->
            <div class="relative h-1/5">
                <p class="title-conttwom text-AzulPerla text-center text-5xl md:text-7xl pb-5">
                    FIRMEZA
                </p>
                <div class="text-conttwom  px-10 md:px-20 pb-2">
                    <p class="contdes-texttwom text-xl md:text-4xl text-center  text-AzulPerla">
                        Carne de buena consistencia y excelente textura y fibra muscular.
                    </p>
                </div>
            </div>

            <!-- dos ultimos arreglar -->
            <div class="relative circle-twom rounded-full w-60 h-60 md:w-72 md:h-72">
                <div class="cont-imageabstwom absolute shadow-2xl rounded-full w-5/6 h-5/6">
                    <img class="imgConttwom rounded-full shadow-2xl h-full w-full object-cover"
                        src="@/assets/HomeAssets/ContsIter/ImgCont2.png" alt="img" />
                </div>
            </div>

            <!-- texto de contenido -->
            <div class="cont-texttwom h-2/5 relative md:scale-125 md:bottom-10">
                <div class="flechatwom absolute h-10 w-10 bottom-52 left-9">
                    <img class="object-cover" src="@/assets/HomeAssets/ContsIter/Row2.svg" alt="flecha" />
                </div>
                <div class="contimgdettwom absolute w-28 flex justify-center bottom-20 -right-16">
                    <img class="object-cover" src="@/assets/HomeAssets/ContsIter/ProteinaC2.svg" alt="carne" />
                </div>
                <div class="absolute text-AzulPerla cont-indicadortwom bottom-4 w-96 -right-48">
                    <p class="text-center text-xl">Gran fuente proteica.</p>
                </div>
            </div>
        </div>
        <!-- para escritorio -->
        <div
            class="hidden fondo-two pt-20 lg:columns-2 lg:flex flex-col justify-center overflow-hidden lg:flex-row lg:justify-evenly lg:items-center lg:px-32 lg:pt-20">
            <!-- circulo de la imagen  -->
            <div class="pttwoimg flex justify-center lg:break-inside-avoid lg:w-2/4 lg:pb-24 lg:scale-125">
                <!-- dos ultimos arreglar -->
                <div class="circle-two relative rounded-full w-60 h-60 lg:w-64 lg:h-64 lg:scale-150">
                    <div class="cont-imageabstwo absolute shadow-2xl rounded-full w-5/6 h-5/6">
                        <img class="imgConttwo absolute rounded-full shadow-2xl h-full w-full object-cover"
                            src="@/assets/HomeAssets/ContsIter/ImgCont2.png" alt="img" />
                    </div>
                </div>
            </div>
            <!-- texto de contenido -->
            <div
                class="cont-texttwo pt-20 lg:order-none lg:w-2/4 lg:flex lg:flex-col lg:items-center relative -right-28 -top-10 lg:scale-125">
                <p class="title-conttwo text-AzulPerla text-center text-3xl pb-5 lg:text-7xl">
                    FIRMEZA
                </p>
                <div class="relative px-2">
                    <p
                        class="contdes-texttwo relative text-center lg:text-right text-AzulPerla lg:w-8/12 lg:pb-6 lg:pl-2 -right-14">
                        Carne de buena consistencia y excelente textura y fibra muscular.
                    </p>
                </div>
                <div class="contimgdettwo relative w-full flex justify-center -left-28 -bottom-5 md:-left-14 lg:scale-75">
                    <img class="object-cover" src="@/assets/HomeAssets/ContsIter/ProteinaC2.svg" alt="carne">
                </div>
                <div class="relative text-AzulPerla cont-indicadortwo flex flex-col items-center -bottom-5 -left-16">
                    <p class="text-center text-xl">Gran fuente proteica.</p>
                </div>
                <div class="flechatwo relative h-10 w-10 bottom-28 -left-44">
                    <img class="object-cover" src="@/assets/HomeAssets/ContsIter/Row2.svg" alt="flechatwo">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.flechatwo {
    scale: 3;
}

.cont-indicadortwo {
    font-family: 'MuseoSans';
}

.title-conttwo {
    font-family: 'TestKarbonMedium';
    -webkit-text-stroke: 1px #471d7c;
}

.contdes-texttwo {
    font-family: 'KarbonRegular';
}

.fondo-two {
    background-color: #FCF5EB;
    height: 100vh;
}

.circle-two {
    background-color: #FF7439;
}

.cont-imageabstwo {
    top: 20%;
    left: -10%;
    background-color: transparent;
}

@media screen and (max-height: 750px) {
    .fondo-two {
        height: 100vh;
    }
}

@media (min-width: 1024px) {
    .fondo-two {
        height: 100vh;
    }
}


.flechatwom {
    scale: 3;
    transform: rotate(95deg);
}

.title-conttwom {
    font-family: "TestKarbonMedium";
    -webkit-text-stroke: 1px #471d7c;
}

.contdes-texttwom {
    font-family: "KarbonRegular";
}

.fondo-twom {
    height: 100vh;
}

.circle-twom {
    background-color: #FF7439;
}

.cont-imageabstwom {
    top: 20%;
    left: -10%;
    background-color: transparent;
}

@media (min-width: 5120px) {
    .cont-texttwo {
        scale: 3.5;
    }

    .pttwoimg {
        scale: 3;
    }
}
</style>