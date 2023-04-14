<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function animacionHeaderEs() {

    let i1 = document.querySelector(".item-nav-uno");
    let i2 = document.querySelector(".item-nav-dos");
    let i3 = document.querySelector(".item-nav-tres");
    let i4 = document.querySelector(".item-nav-cuatro");
    let i5 = document.querySelector(".item-nav-cinco");
    let i6 = document.querySelector(".item-nav-ceis");

    // para item uno
    let animation = gsap.to(".item-nav-uno", {
        paused: true,
        duration: 0.1,
        x: 4,
    });

    let animation11 = gsap.from(".puntito", {
        paused: true,
        scale: 0,
        x: 5,
    });

    i1.addEventListener("mouseenter", () => animation.play());
    i1.addEventListener("mouseleave", () => animation.reverse());
    i1.addEventListener("mouseenter", () => animation11.play());
    i1.addEventListener("mouseleave", () => animation11.reverse());

    // para item 2
    let animation2 = gsap.to(".item-nav-dos", {
        paused: true,
        duration: 0.1,
        x: 4,
    });

    let animation21 = gsap.from(".puntitodos", {
        paused: true,
        scale: 0,
        x: 5,
    });

    i2.addEventListener("mouseenter", () => animation2.play());
    i2.addEventListener("mouseleave", () => animation2.reverse());
    i2.addEventListener("mouseenter", () => animation21.play());
    i2.addEventListener("mouseleave", () => animation21.reverse());

    // para item 3
    let animation3 = gsap.to(".item-nav-tres", {
        paused: true,
        duration: 0.1,
        x: 4,
    });

    let animation31 = gsap.from(".puntitotres", {
        paused: true,
        scale: 0,
        x: 5,
    });

    i3.addEventListener("mouseenter", () => animation3.play());
    i3.addEventListener("mouseleave", () => animation3.reverse());
    i3.addEventListener("mouseenter", () => animation31.play());
    i3.addEventListener("mouseleave", () => animation31.reverse());

    // para item 4
    let animation4 = gsap.to(".item-nav-cuatro", {
        paused: true,
        duration: 0.1,
        x: 4,
    });

    let animation41 = gsap.from(".puntitocuatro", {
        paused: true,
        scale: 0,
        x: 5,
    });

    i4.addEventListener("mouseenter", () => animation4.play());
    i4.addEventListener("mouseleave", () => animation4.reverse());
    i4.addEventListener("mouseenter", () => animation41.play());
    i4.addEventListener("mouseleave", () => animation41.reverse());

    // para item 5
    let animation5 = gsap.to(".item-nav-cinco", {
        paused: true,
        duration: 0.1,
        x: 4,
    });

    let animation51 = gsap.from(".puntitocinco", {
        paused: true,
        scale: 0,
        x: 5,
    });

    i5.addEventListener("mouseenter", () => animation5.play());
    i5.addEventListener("mouseleave", () => animation5.reverse());
    i5.addEventListener("mouseenter", () => animation51.play());
    i5.addEventListener("mouseleave", () => animation51.reverse());

    // para item 6
    let animation6 = gsap.to(".item-nav-ceis", {
        paused: true,
        duration: 0.1,
        x: 4,
    });

    let animation61 = gsap.from(".puntitoceis", {
        paused: true,
        scale: 0,
        x: 5,
    });

    i6.addEventListener("mouseenter", () => animation6.play());
    i6.addEventListener("mouseleave", () => animation6.reverse());
    i6.addEventListener("mouseenter", () => animation61.play());
    i6.addEventListener("mouseleave", () => animation61.reverse());

}
function animationLogo() {
    let logocont = document.querySelector(".img-logoEs");

    let animationL1 = gsap.to(".img-logoEs", {
        paused: true,
        duration: 0.3,
        scale: 1.1,
    });

    let animationL12 = gsap.to(".star-basEs", {
        paused: true,
        duration: 0.3,
        rotate: 30,
        y: -5,
        x: 6,
    });

    logocont.addEventListener("mouseenter", () => animationL1.play());
    logocont.addEventListener("mouseleave", () => animationL1.reverse());
    logocont.addEventListener("mouseenter", () => animationL12.play());
    logocont.addEventListener("mouseleave", () => animationL12.reverse());
}
function animarheadershow() {
    const showAnim = gsap.from('.headerEs', {
        //position: "fixed",
        yPercent: -150,
        paused: true,
        duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
    });
}

export default {
    name: 'HeaderEscritorio',
    mounted() {
        animacionHeaderEs();
        animationLogo();
        animarheadershow();
    },
}
</script>

<template>
    <div class="headerEs bg-FondoPerla fixed z-50 overflow-hidden p-4 flex items-center w-full">
        <div class="navCont flex w-2/5 justify-between pt-5">
            <router-link to="/" custom v-slot="{ navigate }">
                <a @click="navigate" role="link" class="item-nav-uno mr-5 py-2 lg:px-4 lg:flex lg:text-center" href="" onclick="location.reload()">
                    <p class="famText puntito">●</p>
                    <p class="famText item-nav-uno">INICIO</p>
                </a>
            </router-link>
            <router-link to="/nosotros" custom v-slot="{ navigate }">
                <a @click="navigate" role="link" class="mr-5 py-2 lg:px-4 lg:flex lg:text-center" href="">
                    <p class="famText puntitodos">●</p>
                    <p class="famText item-nav-dos">NOSOTROS</p>
                </a>
            </router-link>
            <router-link to="/recetario" custom v-slot="{ navigate }">
                <a @click="navigate" role="link" class="item-nav-tres mr-5 py-2 lg:px-4 lg:flex lg:text-center" href="">
                    <p class="famText puntitotres">●</p>
                    <p class="famText item-nav-tres">RECETARIO</p>
                </a>
            </router-link>
        </div>
        <div class="flex w-1/5 justify-center items-center">
            <div class="relative flex justify-center items-center cont-logoEs ">
                <div class="img-logoEs">
                    <img class="w-28 object-cover" src="@/assets/HeaderS/logolaperla.png" alt="Logo la perla" />
                </div>
                <div class="star-basEs absolute -top-1 right-8">
                    <img class="w-5 h-5" src="@/assets/HeaderS/starperla.png" alt="nn" />
                </div>
            </div>
        </div>
        <div class="navCont flex w-2/5 justify-between pt-5">
            <router-link to="/noticias" custom v-slot="{ navigate }">
                <a @click="navigate" role="link" class="mr-5 py-2 lg:px-4 lg:flex lg:text-center" href="">
                    <p class="famText puntitocuatro">●</p>
                    <p class="famText item-nav-cuatro">NOTICIAS</p>
                </a>
            </router-link>
            <router-link to="/work" custom v-slot="{ navigate }">
                <a @click="navigate" role="link" class="mr-5 py-2 lg:px-4 lg:flex lg:text-center" href="">
                    <p class="famText puntitocinco">●</p>
                    <p class="famText item-nav-cinco">TRABAJA CON NOSOTROS</p>
                </a>
            </router-link>
            <router-link to="/contact" custom v-slot="{ navigate }">
                <a @click="navigate" role="link" class="mr-5 py-2 lg:px-4 lg:flex lg:text-center" href="">
                    <p class="famText puntitoceis">●</p>
                    <p class="famText item-nav-ceis">CONTÁCTANOS</p>
                </a>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.headerEs {
    min-height: 80px;
    height: 14vh;
    box-shadow: 0px 2px 2px -1px rgba(110, 91, 68, 0.292);
    -webkit-box-shadow: 0px 2px 2px -1px rgba(110, 91, 68, 0.324);
    -moz-box-shadow: 0px 2px 2px -1px rgba(110, 91, 68, 0.39);
}

.cont-logoEs {
    transform: scale(0.9);
}

.famText {
    font-family: "KarbonRegular";
    color: #471D7C;
    -webkit-text-stroke: 0.06vw #471d7c;
    font-size: 1vw;
}

.navCont {
    padding-left: 1.7vw;
    padding-right: 1.7vw;
}

@media (min-width: 5120px) {
    .navCont {
        padding-left: 6vw;
        padding-right: 6vw;
    }

    .cont-logoEs {
        transform: scale(3.5);
    }

    .headerEs {
        min-height: 80px;
        height: 14vh;
        box-shadow: 0px 10px 10px -1px rgba(110, 91, 68, 0.292);
        -webkit-box-shadow: 0px 10px 10px -1px rgba(110, 91, 68, 0.324);
        -moz-box-shadow: 0px 10px 10px -1px rgba(110, 91, 68, 0.39);
    }
}
</style>