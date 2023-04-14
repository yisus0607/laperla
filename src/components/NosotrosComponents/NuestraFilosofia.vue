<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    methods: {
        animarFilosofia() {
            if (window.innerWidth > 1024) {
                const tlnf = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".conttrianglegen",
                        start: "top top",
                        end: "+=200% top",
                        scrub: 1.4,
                        //markers: true,
                        pin: true,
                    },
                });
                tlnf.fromTo(".trianglecentral", {
                    opacity: 0,
                    yPercent: -30,
                }, {
                    opacity: 1,
                    yPercent: 0,
                });
                tlnf.fromTo(".imgtrianglenf1", {
                    opacity: 0,
                    yPercent: 30,
                    xPercent: -50,
                }, {
                    opacity: 1,
                    yPercent: 0,
                }, 0);
                tlnf.fromTo(".imgtrianglenf2", {
                    opacity: 0,
                    yPercent: 30,
                    xPercent: 50,
                }, {
                    opacity: 1,
                    yPercent: 0,
                }, 0);
                tlnf.to(".imgtrianglenf2", {
                    delay: 0.2,
                })
            }
        },
    },
    mounted() {
        this.animarFilosofia();
    },
}
</script>
<template>
    <div class="contenedornf bg-FondoPerla overflow-hidden w-full">
        <div class="ttlnf w-full">
            <h1 class="text-AzulPerla font-TestKarbonMedium text-center lg:text-left">NUESTRA FILOSOFIA</h1>
        </div>
        <div class="conttrianglegen relative flex justify-center">
            <div class="trianglecentral flex justify-center items-center">
                <img class="w-full h-full object-cover" src="@/assets/NosotrosAssets/nftriangle(3).svg" alt="">
                <div class="absolute conttritem flex flex-col justify-center items-center">
                    <img class="imgtr" src="@/assets/NosotrosAssets/imgnp1(1).png" alt="">
                    <h1 class="ttlfilosofia">VALORES</h1>
                    <Ul class="text-center">
                        <li>Integridad</li>
                        <li>Respeto</li>
                        <li>Agilidad</li>
                        <li>Mejora continua</li>
                        <li>Excelencia</li>
                    </Ul>
                </div>
            </div>
            <div class="imgtrianglenf1 absolute flex justify-center items-center">
                <img class="w-full h-full object-cover" src="@/assets/NosotrosAssets/nftriangle(1).svg" alt="">
                <div class="absolute conttritem flex flex-col justify-center items-center">
                    <img class="imgtr" src="@/assets/NosotrosAssets/imgnp1(3).png" alt="">
                    <h1 class="ttlfilosofia">VISION</h1>
                    <p class="text-center">Ser una empresa líder en el mercado nacional en la producción y
                        comercialización de alimentos, con
                        exigentes estándares de calidad.</p>
                </div>
            </div>
            <div class="imgtrianglenf2 absolute flex justify-center items-center">
                <img class="w-full h-full object-cover" src="@/assets/NosotrosAssets/nftriangle(2).svg" alt="">
                <div class="absolute conttritem flex flex-col justify-center items-center">
                    <img class="imgtr" src="@/assets/NosotrosAssets/imgnp1(2).png" alt="">
                    <h1 class=" ttlfilosofia">MISION</h1>
                    <p class="text-center ">En base a nuestra trayectoria de crianza de aves desde 1962, ofrecer un
                        producto avícola de alta
                        calidad, contribuyendo a una alimentación nutritiva y saludable para nuestros consumidores.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.conttritem {
    padding-left: 22%;
    padding-right: 23%;
}

.imgtr {
    width: 10vw;
}

.conttritem p {
    font-size: 1.2vw;
}

.conttritem ul {
    font-size: 1.2vw;
}

.ttlnf h1 {
    font-size: 5vw;
    line-height: normal;
}

.conttrianglegen {
    height: 100vh;
    padding-top: 40%;
}

.ttlnf {
    padding-left: 10%;
    padding-right: 10%;
}

.ttlnf h1 {
    font-size: 8vw;
    line-height: normal;
}

.trianglecentral {
    height: 45vh;
}

.imgtrianglenf1 {
    height: 22vh;
    transform: translate(-50%, 22.5vh);
}

.imgtrianglenf2 {
    height: 22vh;
    transform: translate(50%, 22.5vh);
}

@media (min-width: 1024px) {
    .contenedornf {}

    .imgtr {
        padding-top: 15%;
        width: 4.5vw;
    }

    .conttritem {
        padding-left: 22%;
        padding-right: 23%;
    }

    .conttritem h1 {
        font-size: 2vw;
    }

    .conttritem p {
        font-size: 0.8vw;
    }

    .conttritem ul {
        font-size: 0.8vw;
    }

    .ttlnf h1 {
        font-size: 5vw;
        line-height: normal;
    }

    .conttrianglegen {
        height: 100vh;
        padding-top: 6%;
    }

    .trianglecentral {
        height: 80vh;
    }

    .imgtrianglenf1 {
        height: 40vh;
        transform: translate(-50%, 100%);
    }

    .imgtrianglenf2 {
        height: 40vh;
        transform: translate(50%, 100%);
    }
}

@media (min-width: 5120px) {
    /* .trianglecentral {
        height: 81vh;
    } */

    /* .imgtrianglenf1 {
        height: 40vh;
        transform: translate(-13vw, 41vh);
    }

    .imgtrianglenf2 {
        height: 40vh;
        transform: translate(13vw, 41vh);
    } */
}
</style>