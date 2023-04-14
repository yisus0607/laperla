<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    methods: {
        animaciontimelinemo() {
            const tltime = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contenedortl",
                    start: "top top",
                    end: "+=450% top",
                    scrub: 1.2,
                    //markers: true,
                    pin: true,
                },
            });
            tltime.fromTo(".flechatl", {
                xPercent: -500,
                yPercent: 100,
                opacity: 0,
            }, {
                yPercent: 0,
                opacity: 1,
            });
            tltime.to(".flechatl", {
                xPercent: 0,
            }, "1");
            tltime.from(".titleitemtlmo", {
                delay: 0.1,
                opacity: 0,
                xPercent: -100,
                scale: 1.3,
            }, 1);
            tltime.from(".imgtl", {
                delay: 0.4,
                opacity: 0,
                xPercent: -200,
                scale: 3,
            }, 1);
            tltime.from(".contitemlmo", {
                delay: 0.65,
                opacity: 0,
                xPercent: -100,
            }, 1);
        },

    },
    mounted() {
        this.animaciontimelinemo();
    },
}
</script>
<template>
    <div class="bg-FondoPerla overflow-hidden">
        <p class="titletlm text-center font-TestKarbonMedium text-MarronPerla">NUESTRA HISTORIA</p>
        <div class="contenedortl relative h-screen w-full flex justify-center items-center overflow-hidden">
            <div class="absolute flechatl flex flex-col justify-center items-center my-auto">
                <svg class="svgtriangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 28.453">
                    <path id="Trazado_63" data-name="Trazado 63" d="M15.5,0,31,28.453,15.5,19.886,0,28.453Z"
                        fill="#d4531d" />
                </svg>
                <div class="verticalline"></div>
                <svg class="svgcircle absolute" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 49">
                    <defs>
                        <filter id="Elipse_22" x="0" y="0" filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feFlood flood-opacity="0.259" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                        </filter>
                    </defs>
                    <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Elipse_22)">
                        <circle id="Elipse_22-2" data-name="Elipse 22" cx="15.5" cy="15.5" r="15.5"
                            transform="translate(9 6)" fill="#ff7439" />
                    </g>
                </svg>
                <p class="absolute font-KarbonRegular text-AzulPerla yearitem ">2001</p>
            </div>
            <div class="contenedoritems flex flex-col justify-center items-center">
                <p class="titleitemtlmo  font-KarbonRegular text-MarronPerla">MEJOR POLLO DEL NORTE</p>
                <div class="imgtl">
                    <img class="object-cover w-full h-full shadow-2xl" src="@/assets/NosotrosAssets/imgtimel1.png"
                        alt="imgtl">
                </div>
                <p class="contitemlmo text-MarronPerla font-KarbonRegular text-justify">Todo este esfuerzo permitió
                    convertirnos en el mejor pollo que se produce en Trujillo distribuyéndonos
                    diariamente en las zonas Barranca, Casma, Huarmey, Chimbote, Chiclayo, Piura y Cajamarca. Y también es
                    llevado por compradores particulares hasta la ciudad de Lima.</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.titletlm {
    font-size: 9vw;
    line-height: normal;
    -webkit-text-stroke: 0.2vw #463725;
}

.flechatl {
    right: 4%;
}

.svgtriangle {
    width: 8vw;
    transform: translateY(1.7vh);
}

.svgcircle {
    width: 20vw;
}

.verticalline {
    background-color: #D4531D;
    height: 85vh;
    width: 2.5vw;
    border-radius: 1vw;
}

.yearitem {
    font-size: 5.4vw;
    line-height: normal;
    -webkit-text-stroke: 0.2vw #471D7C;
    transform: translateY(-0.7vh);
}

.contenedoritems {
    padding-left: 5%;
    padding-right: 18%;
}

.titleitemtlmo {
    padding-bottom: 5vh;
    font-size: 6vw;
    line-height: normal;
    -webkit-text-stroke: 0.2vw #463725;
}

.imgtl {
    width: 75vw;
    height: 35vh;
}

.imgtl img {
    border-radius: 5%;
}

.contitemlmo {
    padding-top: 5vh;
    font-size: 2.8vh;
    line-height: normal;
}
</style>