<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    methods: {
        animaciontimeline() {
            const tltime = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contenedortles",
                    start: "top top",
                    end: "+=400% top",
                    scrub: 1.3,
                    //markers: true,
                    pin: true,
                },
            });
            tltime.fromTo(".flechatles", {
                xPercent: -1300,
                yPercent: 100,
                opacity: 0,
            }, {
                yPercent: 0,
                opacity: 1,
            });
            tltime.to(".flechatles", {
                xPercent: 0,
            }, "1");
            tltime.from(".imgtles", {
                delay: 0.5,
                opacity: 0,
                xPercent: -500,
                scale: 3,
            }, 1);
            tltime.from(".contenedortextoes", {
                delay: 0.7,
                opacity: 0,
                xPercent: -500,
                scale: 1.3,
            }, 1);
        },

    },
    mounted() {
        this.animaciontimeline();
    },
}
</script>
<template>
    <div class="bg-FondoPerla overflow-hidden">
        <p class="titletlm text-right font-TestKarbonMedium text-MarronPerla">NUESTRA HISTORIA</p>
        <div class="contenedortles relative h-screen w-full flex justify-center items-center overflow-hidden">
            <div class="absolute flechatles flex flex-col justify-center items-center my-auto">
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
            <div class="contenedoritems flex justify-center items-center">
                <div class="contenedortextoes">
                    <p class="titleitemtl  font-KarbonRegular text-MarronPerla text-right">MEJOR POLLO DEL NORTE</p>
                    <p class="contiteml text-MarronPerla font-KarbonRegular text-right">Todo este esfuerzo permitió
                        convertirnos en el mejor pollo que se produce en Trujillo distribuyéndonos
                        diariamente en las zonas Barranca, Casma, Huarmey, Chimbote, Chiclayo, Piura y Cajamarca. Y también
                        es
                        llevado por compradores particulares hasta la ciudad de Lima.</p>
                </div>
                <div class="imgtles">
                    <img class="object-cover w-full h-full shadow-2xl" src="@/assets/NosotrosAssets/imgtimel1.png"
                        alt="imgtles">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.titletlm {
    padding-right: 3%;
    font-size: 5.5vw;
    line-height: normal;
    -webkit-text-stroke: 0.2vw #463725;
}

.flechatles {
    right: 20%;
}

.svgtriangle {
    width: 2.2vw;
    transform: translateY(2.5vh);
}

.svgcircle {
    width: 3vw;
}

.verticalline {
    background-color: #D4531D;
    height: 80vh;
    width: 0.6vw;
    border-radius: 1vw;
}

.yearitem {
    font-size: 3.8vw;
    line-height: normal;
    -webkit-text-stroke: 0.1vw #471D7C;
    transform: translateY(-0.7vh)translateX(7vw);
}

.contenedoritems {
    padding-left: 5%;
    padding-right: 30%;
}

.contenedortextoes {
    padding-right: 10%;
}

.titleitemtl {
    padding-bottom: 5vh;
    font-size: 2.3vw;
    line-height: normal;
    -webkit-text-stroke: 0.05vw #463725;
}

.imgtles {
    width: 50vw;
}

.contiteml {
    padding-left: 15%;
    font-size: 2.5vh;
    line-height: normal;
}
</style>