<script >
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function btnAnimado() {
    const showAnim = gsap.from('.btn-desplegar', {
        x: 100,
        border: "1px solid black",
        paused: true,
        duration: 0.3
    }).progress(1);

    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        scrub: 1,
        //markers: true,
        onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
    });
}

function animarDesplegable() {
    // Selecciona el botón
    const botondes = document.querySelector('.btn-desplegar');

    botondes.addEventListener('click', () => {
        gsap.from(".menuitemsg", {
            duration: 0.1,
            x: 100,
        });
    });
}
export default {
    name: 'HeaderMobile',
    data() {
        return {
            showMenu: false,
            hover: false,
        };
    },
    mounted() {
        btnAnimado();
        animarDesplegable();
    },
}

</script>
<template>
    <div class="bg-FondoPerla overflow-hidden">
        <div class="header-mobile flex justify-between">
            <!-- logo -->
            <div class="relative flex justify-center cont-logo  h-24 scale-75 w-40">
                <div class="img-logo absolute">
                    <img class="w-36 h-24" src="@/assets/HeaderS/logolaperla.png" alt="Logo la perla" />
                </div>
                <div class="star-bas absolute">
                    <img class="w-5 h-5" src="@/assets/HeaderS/starperla.png" alt="nn" />
                </div>
            </div>
            <!-- botom -->
            <div class="flex items-center justify-end">
                <button @click="showMenu = !showMenu"
                    class="btn-desplegar fixed px-6 bg-FondoPerla py-3 rounded-l-3xl focus:outline-none">
                    <svg v-if="!showMenu" class="h-8 w-8 fill-current" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z" />
                    </svg>
                    <svg v-else class="w-8 h-8 btn-out" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 16 16">
                        <path
                            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </button>
            </div>
            <!-- menu -->
            <div :class="{ hidden: !showMenu, block: showMenu }"
                class="menuitemsg fixed flex flex-col justify-center w-full h-full text-AzulPerla">
                <div class="flex justify-between bg-FondoPerla">
                    <!-- logo -->
                    <div class="relative flex justify-center cont-logo  h-24 scale-75 w-40">
                        <div class="img-logo absolute">
                            <img class="w-36 h-24" src="@/assets/HeaderS/logolaperla.png" alt="Logo la perla" />
                        </div>
                        <div class="star-bas absolute">
                            <img class="w-5 h-5" src="@/assets/HeaderS/starperla.png" alt="nn" />
                        </div>
                    </div>
                    <!-- botom -->
                    <button @click="showMenu = !showMenu" class="btn-close px-5">
                        <svg class="w-8 h-8 btn-out" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </button>
                </div>
                <router-link to="/" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" href=""  onclick="location.reload()"
                        class="px-8 py-2 sm:px-10 lg:px-5 text-2xl menuitems my-auto">INICIO
                    </a>
                </router-link>
                <router-link to="/nosotros" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" href=""
                        class="px-8 py-2 sm:px-10 lg:px-5 text-2xl menuitems mb-auto">NOSOTROS
                    </a>
                </router-link>
                <router-link to="/recetario" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" href=""
                        class="px-8 py-2 sm:px-10 lg:px-5 text-2xl menuitems mb-auto">RECETARIO
                    </a>
                </router-link>
                <router-link to="/noticias" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" href=""
                        class="px-8 py-2 sm:px-10 lg:px-5 text-2xl menuitems mb-auto">NOTICIAS
                    </a>
                </router-link>
                <router-link to="/work" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" href=""
                        class="px-8 py-2 sm:px-10 lg:px-5 text-2xl menuitems mb-auto">TRABAJA CON NOSOTROS
                    </a>
                </router-link>
                <router-link to="/contact" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" href=""
                        class="px-8 py-2 sm:px-10 lg:px-5 text-2xl menuitems mb-auto">CONTÁCTANOS
                    </a>
                </router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
.star-bas {
    transform: translateX(19px)translateY(0px);
}

.menuitemsg {
    background-color: antiquewhite;
    -webkit-text-stroke: 1px #471d7c;
}
</style>