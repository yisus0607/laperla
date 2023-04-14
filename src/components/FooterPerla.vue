<script>
export default {
    name: 'FooterPerla',
    data() {
        return {
            hover: false,
        };
    },
}
</script>
<template>
    <div>
        <!-- footer -->
        <footer class="bg-BlancoFoo footer-contenedor w-full lg:columns-3 lg:py-8 lg:flex lg:items-center overflow-hidden">
            <!-- logo  footer -->
            <div class="logofooterh flex justify-center items-center px-8 pt-8 lg:w-2/4 lg:scale-125">
                <div class="img-footergroup relative w-96">
                    <img class="img-logofoo" @mouseenter="hover = true" @mouseleave="hover = false"
                        :class="{ 'img-logofoovue': hover }" src="@/assets/HeaderS/logoaperlafooter.png" alt="logofoo">
                    <img class="relative star-mor star-basfoo w-8 h-8" :class="{ 'star-basfoovue': hover }"
                        src="@/assets/HeaderS/brillologofooter.png" alt="starfoo">
                    <div class="relative eye-orange ojo-perla rounded-full" :class="{ 'ojo-perlavue': hover }">
                    </div>
                </div>
            </div>
            <!-- links  -->
            <div
                class="links-foo flex flex-col items-center justify-center pb-4 text-AzulPerla lg:break-inside-avoid lg:w-1/4">
                <router-link to="/" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" class="mr-5 py-2 hover:underline" href=""  onclick="location.reload()">INICIO</a>
                </router-link>
                <router-link to="/nosotros" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" class="mr-5 py-2 hover:underline" href="">NOSOTROS</a>
                </router-link>
                <router-link to="/recetario" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" class="mr-5 py-2 hover:underline" href="">RECETARIO</a>
                </router-link>
                <router-link to="/noticias" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" class="mr-5 py-2 hover:underline" href="">NOTICIAS</a>
                </router-link>
                <router-link to="/work" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" class="mr-5 py-2 hover:underline" href="">TRABAJA CON NOSOTROS</a>
                </router-link>
            </div>
            <!-- direcciones -->
            <div class="dir-perla text-AzulPerla lg:w-1/4 flex items-center flex-col lg:items-end lg:pr-16">
                <router-link to="/contact" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" class="links-foo mr-5 py-2 hover:underline" href="">CONTÁCTANOS</a>
                </router-link>
                <div class="flex justify-center">
                    <span class="flex">(044) 234551 &nbsp; &nbsp;</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27.169" height="27.213" viewBox="0 0 27.169 27.213">
                        <path id="Icon_feather-phone" data-name="Icon feather-phone"
                            d="M26.315,20.365v3.492a2.328,2.328,0,0,1-2.537,2.328,23.033,23.033,0,0,1-10.044-3.573A22.7,22.7,0,0,1,6.75,15.628,23.033,23.033,0,0,1,3.177,5.537,2.328,2.328,0,0,1,5.493,3H8.985a2.328,2.328,0,0,1,2.328,2,14.944,14.944,0,0,0,.815,3.27,2.328,2.328,0,0,1-.524,2.456l-1.478,1.478a18.622,18.622,0,0,0,6.983,6.983l1.478-1.478a2.328,2.328,0,0,1,2.456-.524,14.944,14.944,0,0,0,3.27.815,2.328,2.328,0,0,1,2,2.363Z"
                            transform="translate(-1.901 -0.199) rotate(-3)" fill="none" stroke="#471d7c"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2.7" />
                    </svg>

                </div>
                <div class="flex justify-center py-1">
                    <span class="flex">informes@molinolaperla.com &nbsp; &nbsp;</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27.703" height="22.162" viewBox="0 0 27.703 22.162">
                        <path id="Icon_material-mail-outline" data-name="Icon material-mail-outline"
                            d="M27.932,6H5.77A2.767,2.767,0,0,0,3.014,8.77L3,25.392a2.778,2.778,0,0,0,2.77,2.77H27.932a2.778,2.778,0,0,0,2.77-2.77V8.77A2.778,2.778,0,0,0,27.932,6Zm0,19.392H5.77V11.541l11.081,6.926,11.081-6.926ZM16.851,15.7,5.77,8.77H27.932Z"
                            transform="translate(-3 -6)" fill="#471d7c" />
                    </svg>

                </div>
                <div class="flex justify-center">
                    <span class="flex lg:pl-14">John F. Kennedy N° 189 <br> &nbsp; &nbsp; Urb. La Perla - Trujillo &nbsp;
                        &nbsp;</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.642" height="27.073" viewBox="0 0 22.642 27.073">
                        <g id="Icon_feather-map-pin" data-name="Icon feather-map-pin" transform="translate(1.35 1.35)">
                            <path id="Trazado_26" data-name="Trazado 26"
                                d="M24.442,11.471c0,7.755-9.971,14.4-9.971,14.4S4.5,19.226,4.5,11.471a9.971,9.971,0,0,1,19.942,0Z"
                                transform="translate(-4.5 -1.5)" fill="none" stroke="#471d7c" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2.7" />
                            <path id="Trazado_27" data-name="Trazado 27"
                                d="M20.147,13.824A3.324,3.324,0,1,1,16.824,10.5a3.324,3.324,0,0,1,3.324,3.324Z"
                                transform="translate(-6.853 -3.853)" fill="none" stroke="#471d7c" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2.7" />
                        </g>
                    </svg>

                </div>
                <!-- redes sociales -->
                <div class="flex justify-center py-4">
                    <div class="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.39" height="25" viewBox="0 0 13.39 25">
                            <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f"
                                d="M14.122,14.063l.694-4.524H10.475V6.6a2.262,2.262,0,0,1,2.551-2.444H15V.306A24.068,24.068,0,0,0,11.5,0C7.92,0,5.584,2.167,5.584,6.09V9.538H1.609v4.524H5.584V25h4.891V14.063Z"
                                transform="translate(-1.609)" fill="#471d7c" />
                        </svg>

                    </div>
                    <div class="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25.006" height="25" viewBox="0 0 25.006 25">
                            <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram"
                                d="M12.5,8.328a6.41,6.41,0,1,0,6.41,6.41A6.4,6.4,0,0,0,12.5,8.328Zm0,10.577a4.167,4.167,0,1,1,4.167-4.167A4.175,4.175,0,0,1,12.5,18.9ZM20.667,8.066a1.5,1.5,0,1,1-1.5-1.5A1.492,1.492,0,0,1,20.667,8.066Zm4.245,1.517a7.4,7.4,0,0,0-2.019-5.238,7.447,7.447,0,0,0-5.238-2.019c-2.064-.117-8.251-.117-10.315,0A7.437,7.437,0,0,0,2.1,4.339,7.423,7.423,0,0,0,.083,9.578c-.117,2.064-.117,8.251,0,10.315A7.4,7.4,0,0,0,2.1,25.13,7.457,7.457,0,0,0,7.34,27.15c2.064.117,8.251.117,10.315,0a7.4,7.4,0,0,0,5.238-2.019,7.447,7.447,0,0,0,2.019-5.238c.117-2.064.117-8.245,0-10.309ZM22.246,22.107a4.219,4.219,0,0,1-2.376,2.376c-1.646.653-5.551.5-7.369.5s-5.729.145-7.369-.5a4.219,4.219,0,0,1-2.376-2.376c-.653-1.646-.5-5.551-.5-7.369s-.145-5.729.5-7.369A4.219,4.219,0,0,1,5.131,4.992c1.646-.653,5.551-.5,7.369-.5s5.729-.145,7.369.5a4.219,4.219,0,0,1,2.376,2.376c.653,1.646.5,5.551.5,7.369S22.9,20.467,22.246,22.107Z"
                                transform="translate(0.005 -2.238)" fill="#471d7c" />
                        </svg>

                    </div>
                </div>
            </div>
        </footer>
        <!-- final -->
        <div class="drwandoy bg-GrisDr h-16 flex justify-center items-center copy-content">
            <div class="endfoo">&copy; 2023 Wandoy</div>
        </div>
    </div>
</template>
<style scoped>
.logofooterh {
    height: 20vh;
}

.drwandoy {
    font-family: 'LeelawadeeRegular';
}

.star-mor {
    top: -5.8rem;
    left: 3.5rem;
}

.eye-orange {
    height: 0.3rem;
    width: 0.3rem;
    top: -6.8rem;
    left: 2.26rem;
}

.svg-redessociales {
    width: 4vh;
}

.links-foo {
    font-family: 'LeelawadeeRegular';
    -webkit-text-stroke: 1px #471d7c;
}

.svg-directions {
    width: 5%;
}

.dir-perla {
    font-family: 'LeelawadeeRegular';
    -webkit-text-stroke: 0.3px #471d7c;
}

.star-basfoo {
    transition: all 0.5s;
}

.star-basfoovue {
    scale: 1.03px;
    transition: all 0.5s;
    transform: translateX(5px) translateY(-15px) rotate(20deg);
}

.ojo-perla {
    transition: all 0.5s;
}

.ojo-perlavue {
    transition: all 0.5s;
    background-color: #ff7439;
    transform: translateX(0px) translateY(3.3px);
}

@media (min-width: 1024px) {
    svg{
        width: 1.2vw;
    }
    .svg-redessociales {
        width: 1vw;
    }

    .svg-directions {
        width: 1vw;
    }

    .star-mor {
        top: -6.5rem;
        left: 4.3rem;
    }

    .links-foo a {
        font-size: 1vw;
        -webkit-text-stroke: 1px #471d7c;
    }

    .dir-perla a {
        font-size: 1vw;
    }

    .dir-perla span {
        font-size: 0.9vw;
    }

    .eye-orange {
        height: 0.4rem;
        width: 0.4rem;
        top: -7.55rem;
        left: 2.6rem;
    }

    .endfoo {
        font-size: 1vw;
    }
}

@media (min-width: 5120px) {
    .img-footergroup {
        transform: scale(3);
    }

    .drwandoy {
        padding: 1.5%;
    }

    .footer-contenedor {
        padding: 2%;
    }
}</style>