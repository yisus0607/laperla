<script>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: "PresentacionWork",
    methods: {
        animacionPpt() {
            if (window.innerWidth >= 5120) {
                const tlppt1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".ppt-work",
                        start: "-=10% top",
                        // markers: true,
                        toggleActions: "restart none none none",
                        onEnter: () => {
                            document.body.style.overflow = "hidden"; // deshabilitar el scroll al entrar al trigger
                        },
                        onLeaveBack: () => {
                            document.body.style.overflow = "auto"; // habilitar el scroll al salir del trigger
                        },
                    },
                });
                console.log("stark")
                tlppt1.fromTo(".ttl-pptn1", {
                    opacity: 0,
                    scale: 0.3,
                    y: 0,
                }, {
                    opacity: 1,
                    scale: 1,
                    y: -300,
                });
                tlppt1.fromTo(".ttl-pptn2", {
                    scale: 0,
                    opacity: 0,
                    y: 0,
                }, {
                    opacity: 1,
                    scale: 1,
                    y: -50,
                });
                tlppt1.fromTo(".ttl-pptn3", {
                    scale: 0,
                    opacity: 0,
                    y: 0,
                }, {
                    scale: 1,
                    opacity: 1,
                    y: 300,
                    onComplete: () => {
                        document.body.style.overflow = "auto"; // habilitar el scroll al completar la animación
                    },
                });
            } else if (window.innerWidth >= 1024) {
                const tlppt1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".ppt-work",
                        start: "-=10% top",
                        end: "bottom",
                        //markers: true,
                        toggleActions: "restart none none none",
                        onEnter: () => {
                            document.body.style.overflow = "hidden"; // deshabilitar el scroll al entrar al trigger
                        },
                        onLeaveBack: () => {
                            document.body.style.overflow = "auto"; // habilitar el scroll al salir del trigger
                        },
                    },
                });
                tlppt1.fromTo(".ttl-pptn1", {
                    opacity: 0,
                    scale: 0.3,
                    y: 0,
                }, {
                    opacity: 1,
                    scale: 1,
                    y: -100,
                });
                tlppt1.fromTo(".ttl-pptn2", {
                    scale: 0,
                    opacity: 0,
                }, {
                    opacity: 1,
                    scale: 1,
                });
                tlppt1.fromTo(".ttl-pptn3", {
                    scale: 0,
                    opacity: 0,
                }, {
                    scale: 1,
                    opacity: 1,
                    onComplete: () => {
                        document.body.style.overflow = "auto"; // habilitar el scroll al completar la animación
                    },
                });
            }
        },
        animacionPpt2() {
            if (window.innerWidth >= 5120) {
                const tlppt21 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".ppt-work",
                        start: "top top",
                        end: "+=450% bottom",
                        scrub: 2,
                        //markers: true,
                        pin: true,
                        // toggleActions: "restart none none none"
                    },
                });

                tlppt21.fromTo(".ttl-pptn3", {
                    y: 350,
                    opacity: 1,
                    x: 0,
                }, {
                    y: 600,
                    opacity: 0,
                    x: 0,
                });
                tlppt21.fromTo(".ttl-pptn2", {
                    y: 50,
                    opacity: 1,
                    x: 0,
                }, {
                    y: 600,
                    opacity: 0,
                    x: 0,
                }, 0);
                tlppt21.fromTo(".ttl-pptn1", {
                    y: -100,
                }, {
                    y: 0,
                    fontSize: 280,
                    fontFamily: "TestKarbonMedium"
                }, 0);
                tlppt21.fromTo(".imgpptn1", {
                    scale: 0,
                }, {
                    scale: 1
                }, "1");
                tlppt21.fromTo(".cont-b1", {
                    y: 400,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                }, 1);
                tlppt21.fromTo(".bloque1", {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                }, {
                    y: 200,
                    scale: 0,
                    opacity: 0,
                }, "2");
                tlppt21.fromTo(".ttl-pptn2", {
                    opacity: 0,
                    x: -800,
                    y: 0,
                }, {
                    delay: 0.4,
                    opacity: 1,
                    x: 0,
                    y: 0,
                    fontSize: 280,
                    fontFamily: "TestKarbonMedium",
                }, 2)
                tlppt21.fromTo(".imgpptn2", {
                    scale: 0,
                }, {
                    scale: 1
                }, "3");
                tlppt21.fromTo(".cont-b2", {
                    y: 400,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                }, 3);
                tlppt21.fromTo(".bloque2", {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                }, {
                    y: 200,
                    scale: 0,
                    opacity: 0,
                }, "4");
                tlppt21.fromTo(".ttl-pptn3", {
                    opacity: 0,
                    x: -800,
                    y: 0,
                }, {
                    delay: 0.4,
                    opacity: 1,
                    x: 0,
                    y: 0,
                    fontSize: 280,
                    fontFamily: "TestKarbonMedium",
                }, 4);
                tlppt21.fromTo(".imgpptn3", {
                    scale: 0,
                }, {
                    scale: 1
                }, "5");
                tlppt21.fromTo(".cont-b3", {
                    y: 400,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                }, 5);
            } else if (window.innerWidth >= 1024) {
                const tlppt21 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".ppt-work",
                        start: "top top",
                        end: "+=900% bottom",
                        scrub: 2,
                        //markers: true,
                        pin: true,
                        // toggleActions: "restart none none none"
                    },
                });
                tlppt21.fromTo(".ttl-pptn3", {
                    y: 100,
                    opacity: 1,
                    x: 0,
                }, {
                    y: 400,
                    opacity: 0,
                    x: 0,
                });
                tlppt21.fromTo(".ttl-pptn2", {
                    y: 0,
                    opacity: 1,
                    x: 0,
                }, {
                    y: 400,
                    opacity: 0,
                    x: 0,
                }, 0);
                tlppt21.fromTo(".ttl-pptn1", {
                    y: -100,
                }, {
                    y: 0,
                    fontSize: 80,
                    fontFamily: "TestKarbonMedium"
                }, 0);
                tlppt21.fromTo(".imgpptn1", {
                    scale: 0,
                }, {
                    scale: 1
                }, "1");
                tlppt21.fromTo(".cont-b1", {
                    y: 400,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                }, 1);
                tlppt21.fromTo(".bloque1", {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                }, {
                    y: 200,
                    scale: 0,
                    opacity: 0,
                }, "2");
                tlppt21.fromTo(".ttl-pptn2", {
                    opacity: 0,
                    x: -500,
                    y: 0,
                }, {
                    delay: 0.4,
                    opacity: 1,
                    x: 0,
                    y: 0,
                    fontSize: 80,
                    fontFamily: "TestKarbonMedium",
                }, 2)
                tlppt21.fromTo(".imgpptn2", {
                    scale: 0,
                }, {
                    scale: 1
                }, "3");
                tlppt21.fromTo(".cont-b2", {
                    y: 400,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                }, 3);
                tlppt21.fromTo(".bloque2", {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                }, {
                    y: 200,
                    scale: 0,
                    opacity: 0,
                }, "4");
                tlppt21.fromTo(".ttl-pptn3", {
                    opacity: 0,
                    x: -500,
                    y: 0,
                }, {
                    delay: 0.4,
                    opacity: 1,
                    x: 0,
                    y: 0,
                    fontSize: 80,
                    fontFamily: "TestKarbonMedium",
                }, 4);
                tlppt21.fromTo(".imgpptn3", {
                    scale: 0,
                }, {
                    scale: 1
                }, "5");
                tlppt21.fromTo(".cont-b3", {
                    y: 400,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                }, 5);
            } else if (window.innerWidth < 1024) {
                const tlppt21 = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".ppt-work",
                        start: "top top",
                        end: "+=900% bottom",
                        scrub: 2,
                        //markers: true,
                        pin: true,
                        // toggleActions: "restart none none none"
                    }
                });

                tlppt21.fromTo(".ttl-pptn3", {
                    y: 100,
                    opacity: 1,
                    x: 0,
                }, {
                    y: 300,
                    opacity: 0,
                    x: 0,
                });
                tlppt21.fromTo(".ttl-pptn2", {
                    y: 0,
                    opacity: 1,
                    x: 0,
                }, {
                    y: 300,
                    opacity: 0,
                    x: 0,
                }, 0);
                tlppt21.fromTo(".ttl-pptn1", {
                    y: -100,
                }, {
                    y: 0,
                    fontSize: 40,
                    fontFamily: "TestKarbonMedium"
                }, 0);
                tlppt21.fromTo(".imgpptn1", {
                    scale: 0,
                }, {
                    scale: 1
                }, "1");
                tlppt21.fromTo(".cont-b1", {
                    y: 400,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                }, 1);
                tlppt21.fromTo(".bloque1", {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                }, {
                    y: 200,
                    scale: 0,
                    opacity: 0,
                }, "2");
                tlppt21.fromTo(".ttl-pptn2", {
                    opacity: 0,
                    x: -500,
                    y: 0,
                }, {
                    delay: 0.4,
                    opacity: 1,
                    x: 0,
                    y: 0,
                    fontSize: 40,
                    fontFamily: "TestKarbonMedium",
                }, 2)
                tlppt21.fromTo(".imgpptn2", {
                    scale: 0,
                }, {
                    scale: 1
                }, "3");
                tlppt21.fromTo(".cont-b2", {
                    y: 400,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                }, 3);
                tlppt21.fromTo(".bloque2", {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                }, {
                    y: 200,
                    scale: 0,
                    opacity: 0,
                }, "4");
                tlppt21.fromTo(".ttl-pptn3", {
                    opacity: 0,
                    x: -500,
                    y: 0,
                }, {
                    delay: 0.4,
                    opacity: 1,
                    x: 0,
                    y: 0,
                    fontSize: 40,
                    fontFamily: "TestKarbonMedium",
                }, 4);
                tlppt21.fromTo(".imgpptn3", {
                    scale: 0,
                }, {
                    scale: 1
                }, "5");
                tlppt21.fromTo(".cont-b3", {
                    y: 400,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                }, 5);
            }



        },
    },
    mounted() {
        this.animacionPpt();
        this.animacionPpt2();
    },
}
</script>
<template>
    <div class="">
        <!-- escritorio -->
        <div class="ppt-work  h-screen bg-AzulPerla flex relative justify-center items-center text-white overflow-hidden">
            <div class="bloque1 absolute flex flex-col justify-center items-center lg:w-2/4">
                <img class="imgpptn1 object-cover w-40" src="@/assets/WorkAssets/imgppt1.png" alt="Imgb1">
                <h1 class="text-center ttl-pptn1">Te estamos buscando</h1>
                <p class="cont-b1 text-center px-10 lg:px-24 text-lg">Queremos que tu talento se sume a Molinos La Perla,
                    donde
                    juntos
                    tendremos la posibilidad de continuar
                    sirviendo a nuestro país, teniendo como objetivo que los peruanos mantengan una alimentación saludable y
                    beneficiosa.</p>
            </div>
            <div class="bloque2 absolute flex flex-col justify-center items-center lg:w-2/4">
                <img class="imgpptn2 object-cover w-40" src="@/assets/WorkAssets/imgppt2.png" alt="Imgb2">
                <h1 class="text-center ttl-pptn2">Para crecer contigo</h1>
                <p class="cont-b2 text-center lg:px-10 px-24 text-lg">Tendrás la oportunidad de desarrollarte y crecer
                    profesionalmente
                    a través de un aprendizaje continuo,
                    conocimientos, habilidades y experiencias nuevas.</p>
            </div>
            <div class="bloque3 absolute flex flex-col justify-center items-center lg:w-2/4">
                <img class="imgpptn3 object-cover w-40" src="@/assets/WorkAssets/imgppt3.png" alt="Imgb3">
                <h1 class="text-center ttl-pptn3">Y cuidar de ti</h1>
                <p class="cont-b3 px-10 text-center md:px-28 lg:px-24 text-lg">Nos preocupamos por el bienestar y cuidado de
                    nuestro equipo,
                    ofreciéndoles beneficios a su medida y
                    asegurando el mejor ambiente laboral.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bloque1 h1 {
    font-size: "TestKarbonMedium";
    font-size: 220%;
}

.cont-b1 {
    font-family: "KarbonRegular";
}

.bloque2 h1 {
    font-family: "TestKarbonMedium";
    -webkit-text-stroke: 0.6px #ffffff;
    font-size: 200%;
}

.cont-b2 {
    font-family: "KarbonRegular";
}

.bloque3 h1 {
    font-family: "TestKarbonMedium";
    -webkit-text-stroke: 0.6px #ffffff;
    font-size: 200%;
}

.cont-b3 {
    font-family: "KarbonRegular";
}

@media (min-width: 1024px) {
    .bloque1 h1 {
        font-family: "TestKarbonMedium";
        font-size: 500%;
    }

    .cont-b1 {
        font-family: "KarbonRegular";
    }

    .bloque2 h1 {
        font-family: "TestKarbonRegular";
        -webkit-text-stroke: 0.6px #ffffff;
        font-size: 420%;
    }

    .cont-b2 {
        font-family: "KarbonRegular";
    }

    .bloque3 h1 {
        font-family: "TestKarbonRegular";
        -webkit-text-stroke: 0.6px #ffffff;
        font-size: 420%;
    }

    .cont-b3 {
        font-family: "KarbonRegular";
    }

}

@media (min-width: 5120px) {

    .bloque1 h1 {
        font-size: "TestKarbonMedium";
        font-size: 1500%;
        line-height: normal;
    }

    .bloque1 img {
        width: 700px;
    }

    .cont-b1 {
        font-family: "KarbonRegular";
        font-size: 500%;
        line-height: normal;
    }

    .bloque2 h1 {
        font-size: "TestKarbonMedium";
        font-size: 1500%;
        line-height: normal;
    }

    .bloque2 img {
        width: 700px;
    }

    .cont-b2 {
        font-family: "KarbonRegular";
        font-size: 500%;
        line-height: normal;
    }

    .bloque3 h1 {
        font-size: "TestKarbonMedium";
        font-size: 1500%;
        line-height: normal;
    }

    .bloque3 img {
        width: 700px;
    }

    .cont-b3 {
        font-family: "KarbonRegular";
        font-size: 500%;
        line-height: normal;
    }
}
</style>