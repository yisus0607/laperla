<script>
//importacion de la aimaciones como scroll triger y el reister del mismo
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: "contOne",
    methods: {
        fijacionSencilla() {
            if (window.innerWidth < 1024) {
                const tlm1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".fondo-onem",
                        start: "top top",
                        //duration: 20,
                        end: "+=350%",
                        scrub: 1.1,
                        //markers: true,
                        pin: true,

                    },
                });
                tlm1.from(".title-contonem, .text-contonem", {
                    paddingTop: 0,
                    opacity: 0,
                    stagger: 0.3,
                    duration: 2,
                });

                tlm1.from(".circle-onem", {
                    opacity: 0,
                    scale: 0,
                    delay: 0.6,
                    duration: 2,
                });
                tlm1.to(".circle-onem", {
                    yPercent: 8,
                    marginTop: 0,
                    marginBottom: 5,
                    scale: 1.1,
                    duration: 2,
                });
                tlm1.to(".cont-imageabsonem", {
                    scale: 0.8,
                    xPercent: -19,
                    yPercent: -7,
                    duration: 2,
                });
                tlm1.from(".contimgdetm", {
                    xPercent: -200,
                    duration: 2,
                });
                tlm1.from(".flecham , .cont-indicadorm", {
                    opacity: 0,
                    xPercent: 200,
                    stagger: 0.3,
                    duration: 2,
                });
                // tlm1.to(
                //     ".title-contonem, .text-contonem, .flecham , .cont-indicadorm, .contimgdetm",
                //     {
                //         delay: 2,
                //         opacity: 0,
                //         duration: 2,
                //     }
                // );
                // tlm1.to(".cont-imageabsonem", {
                //     yPercent: 25,
                //     scale: 6,
                //     duration: 2,
                // });
                // tlm1.to(".circle-onem, .cont-imageabsonem", {
                //     duration: 2,
                //     opacity: 0,
                //     backgroundColor: "transparent",
                // });
            }

            if (window.innerWidth > 1024) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".fondo-one",
                        start: "top top",
                        end: "+=350% top",
                        scrub: 1.2,
                       //markers: true,
                        pin: true,
                        // pinSpacer: true,
                        //pinSpacing: true,
                    },
                });
                tl.fromTo(".circle-one, .cont-imageabsone", {
                    duration: 2,
                    opacity: 0,
                    scale: 5,
                    xPercent: -100,
                    yPercent: 50,
                    backgroundColor: "transparent",
                }, {
                   
                    opacity: 1,
                    scale: 1,
                    backgroundColor: "#ffcd00",
                    xPercent: 0,
                    yPercent: 0,
                })
                // tl.from(".circle-one", {
                //     opacity: 0,
                //     scale: 0,
                // });
                tl.from(".cont-textone", {
                    opacity: 0,
                    scale: 0,
                    yPercent: -100,
                    xPercent: -200,
                });
                tl.to(".cont-imageabsone", {
                    scale: 0.8,
                    xPercent: -19,
                    yPercent: -7,
                }, "1");
                tl.to(".circle-one", {
                    scale: 1.8,
                }, 1);
                tl.from(".contimgdet", {
                    xPercent: -140,
                }, 1);
                tl.from(".flecha, .cont-indicador", {
                    opacity: 0,
                    y: 200,
                    stagger: 0.3,
                });

                tl.to(".cont-textone", {
                    delay: 1.5,
                });
                // tl.to(".cont-imageabsone", {
                //     xPercent: -100,
                //     yPercent: 50,
                //     scale: 5,
                // });
                // tl.to(".circle-one, .cont-imageabsone", {

                //     duration: 3,
                //     //opacity: 0,
                //     backgroundColor: "transparent",
                // });
            }
        },
    },
    mounted() {
        this.fijacionSencilla();
    },
};
</script>
<template>
    <div class="bg-FondoPerla">
        <!-- para mobile -->
        <div class="lg:hidden fondo-onem bg-fondoPerla flex flex-col justify-center items-center overflow-hidden">
            <!-- circulo de la imagen  -->
            <div class="relative h-1/5">
                <p class="title-contonem text-AzulPerla text-center text-5xl md:text-7xl pb-5">
                    IDENTIDAD
                </p>
                <div class="text-contonem  px-10 md:px-20 pb-2">
                    <p class="contdes-textonem text-xl md:text-4xl text-center  text-AzulPerla">
                        Su buen color y voluminosidad es el sello del Pollo Perla.
                    </p>
                </div>
            </div>
            <!-- dos ultimos arreglar -->
            <div class="relative circle-onem rounded-full w-60 h-60 md:w-72 md:h-72">
                <div class="cont-imageabsonem absolute shadow-2xl rounded-full w-5/6 h-5/6">
                    <img class="imgContonem rounded-full shadow-2xl h-full w-full object-cover"
                        src="@/assets/HomeAssets/ContsIter/ImgCont1.png" alt="img" />
                </div>
            </div>
            <!-- texto de contenido -->
            <div class="cont-textonem h-2/5 relative md:scale-125 md:bottom-10">
                <div class="contimgdetm absolute w-72 flex justify-center bottom-5 -left-48">
                    <img class="object-cover" src="@/assets/HomeAssets/ContsIter/carnePolloC1.png" alt="carne" />
                </div>
                <div class="absolute text-AzulPerla cont-indicadorm flex flex-col items-center bottom-2 -right-44">
                    <p class="text-center text-xl">Pechuga</p>
                    <p class="text-center text-7xl">35 %</p>
                    <p class="text-center text-xl">Del Pollo</p>
                </div>
                <div class="flecham absolute h-9 w-9 bottom-20 -left-14">
                    <img class="object-cover" src="@/assets/HomeAssets/ContsIter/Row1.svg" alt="flecha" />
                </div>
            </div>
        </div>
        <!-- para escritorio -->
        <div
            class="hidden fondo-one pt-20 lg:columns-2 lg:flex flex-col justify-center overflow-hidden lg:flex-row lg:justify-evenly lg:items-center lg:px-32 lg:pt-28">
            <!-- circulo de la imagen  -->
            <div class="pt2one flex justify-center lg:break-inside-avoid lg:w-2/4 lg:pb-32 lg:scale-125">
                <!-- dos ultimos arreglar -->
                <div class="circle-one rounded-full w-60 h-60 lg:w-64 lg:h-64 lg:scale-150">
                    <div class="cont-imageabsone relative shadow-2xl rounded-full w-5/6 h-5/6">
                        <img class="imgContone rounded-full shadow-2xl h-full w-full object-cover"
                            src="@/assets/HomeAssets/ContsIter/ImgCont1.png" alt="img" />
                    </div>
                </div>
            </div>
            <!-- texto de contenido -->
            <div
                class="cont-textone pt-20 lg:order-first lg:w-2/4 lg:pt-6 lg:flex lg:flex-col lg:items-center lg:scale-125">
                <p class="title-contone text-AzulPerla text-center text-3xl pb-5 lg:text-7xl">
                    IDENTIDAD
                </p>
                <div class="relative px-2">
                    <p class="contdes-textone relative text-center lg:text-left text-AzulPerla lg:w-8/12 lg:pb-6 lg:pl-2">
                        Su buen color y voluminosidad es el sello del Pollo Perla.
                    </p>
                </div>
                <div class="contimgdet relative w-full flex justify-center -left-14 lg:-left-20 lg:scale-150">
                    <img class="object-cover w-60" src="@/assets/HomeAssets/ContsIter/carnePolloC1.png" alt="carne" />
                </div>
                <div class="relative text-AzulPerla cont-indicador flex flex-col items-center -top-20 left-20">
                    <p class="text-center text-xl">Pechuga</p>
                    <p class="text-center text-7xl">35 %</p>
                    <p class="text-center text-xl">Del Pollo</p>
                </div>
                <div class="flecha relative h-10 w-10 -top-48 left-32 sm:left-60 md:left-80 lg:-left-16">
                    <img class="object-cover" src="@/assets/HomeAssets/ContsIter/Row1.svg" alt="flecha" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.flecha {
    scale: 3;
}

.cont-indicador {
    font-family: "MuseoSans";
}

.title-contone {
    font-family: "TestKarbonMedium";
    -webkit-text-stroke: 1px #471d7c;
}

.contdes-textone {
    font-family: "KarbonRegular";
}

.fondo-one {
    background-color: #fcf5eb;
    height: 100vh;
}

.circle-one {
    background-color: #ffcd00;
}

.cont-imageabsone {
    top: 20%;
    left: 25%;
    background-color: transparent;
}

@media (min-width: 1024px) {
    .fondo-one {
        height: 100vh;
    }
}

.flecham {
    scale: 3;
}

.cont-indicadorm {
    font-family: "MuseoSans";
}

.title-contonem {
    font-family: "TestKarbonMedium";
    -webkit-text-stroke: 1px #471d7c;
}

.contdes-textonem {
    font-family: "KarbonRegular";
}

.fondo-onem {
    height: 100vh;
}

.circle-onem {
    background-color: #ffcd00;
}

.cont-imageabsonem {
    top: 20%;
    left: 25%;
    background-color: transparent;
}

@media (min-width: 5120px) {
    .cont-textone {
        scale: 3;
    }

    .pt2one {
        scale: 3;
    }
}
</style>