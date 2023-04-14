<script>
import formv1 from './FormsF2/formv1.vue';
import formv2 from './FormsF2/formv2.vue';
import formv3 from './FormsF2/formv3.vue';
import formv4 from './FormsF2/formv4.vue';

import { gsap } from "gsap";

export default {
    components: {
        formv1,
        formv2,
        formv3,
        formv4,
    },
    data() {
        return {
            currentForm: 1,
        };
    },
    methods: {
        nextForm() {
            this.currentForm++;
        },
        backForm() {
            this.currentForm--;
        },
        animacionFormulario() {
            const form1 = document.querySelector(".form1");
            const form2 = document.querySelector(".form2");
            const form3 = document.querySelector(".form3");
            const form4 = document.querySelector(".form4");


            const nextbtn1 = document.querySelector(".next-form1");
            const nextbtn2 = document.querySelector(".next-form2");
            const nextbtn3 = document.querySelector(".next-form3");
            const backbtn2 = document.querySelector(".back-form2");
            const backbtn3 = document.querySelector(".back-form3");
            const backbtn4 = document.querySelector(".back-form4");




            var tr1 = gsap.fromTo(form2, {
                x: 500,
            }, {
                duration: 1,
                x: 0,
            })


            nextbtn1.addEventListener("click", function () {
                tr1.restart();
            });


            var tr2 = gsap.fromTo(form3, {
                x: 500,
            }, {
                duration: 1,
                x: 0,
            })
            nextbtn2.addEventListener("click", function () {
                tr2.restart();
            });




            var tr3 = gsap.fromTo(form4, {
                x: 500,
            }, {
                duration: 1,
                x: 0,
            })
            nextbtn3.addEventListener("click", function () {
                tr3.restart();
            });


            var trb2 = gsap.fromTo(form1, {
                x: -500,
            }, {
                x: 0,
                duration: 1,
            });
            backbtn2.addEventListener("click", function () {
                trb2.restart();
            });
            var trb3 = gsap.fromTo(form2, {
                x: -500,
            }, {
                x: 0,
                duration: 1,
            });
            backbtn3.addEventListener("click", function () {
                trb3.restart();
            });


            var trb4 = gsap.fromTo(form3, {
                x: -500,
            }, {
                x: 0,
                duration: 1,
            });
            backbtn4.addEventListener("click", function () {
                trb4.restart();
            });
        }
    },
    mounted() {
        this.animacionFormulario();
    },

}
</script>
<template>
    <div class="bg-FondoPerla">
        <div class="form1" v-show="currentForm === 1">
            <div class="barraavance bg-FondoPerla flex justify-center items-center col-span-4">
                <div class="av1" style="background-color: #E2D6C5;"></div>
                <div class="av2" style="background-color: #F5EDE1;"></div>
                <div class="av3" style="background-color: #F5EDE1;"></div>
                <div class="av4" style="background-color: #F5EDE1;"></div>
            </div>
            <formv1 class="" />
            <div class="envio flex bg-FondoPerla justify-end lg:justify-end py-8">
                <div class="flex justify-end">
                    <button @click="nextForm" class="next-form1  px-4 lg:px-8 rounded-3xl text-white"
                        type="button">Siguiente</button>
                </div>
            </div>
        </div>
        <div class="form2" v-show="currentForm === 2">
            <div class="barraavance bg-FondoPerla flex justify-center items-center col-span-4">
                <div class="av1" style="background-color: #E2D6C5;"></div>
                <div class="av2" style="background-color: #E2D6C5;"></div>
                <div class="av3" style="background-color: #F5EDE1;"></div>
                <div class="av4" style="background-color: #F5EDE1;"></div>
            </div>
            <formv2 class="" />
            <div class="envio flex bg-FondoPerla justify-around lg:justify-between py-8">
                <div class="flex justify-end">
                    <button @click="backForm" class="back-form2 bg-NaranjaOscuroPerla px-4 lg:px-8 rounded-2xl text-white"
                        type="button">Anterior</button>
                </div>
                <div class="flex justify-end">
                    <button @click="nextForm" class="next-form2 bg-NaranjaOscuroPerla px-4 lg:px-8 rounded-2xl text-white"
                        type="button">Siguiente</button>
                </div>
            </div>
        </div>
        <div class="form3" v-show="currentForm === 3">
            <div class="barraavance bg-FondoPerla flex justify-center items-center col-span-4">
                <div class="av1" style="background-color: #E2D6C5;"></div>
                <div class="av2" style="background-color: #E2D6C5;"></div>
                <div class="av3" style="background-color: #E2D6C5;"></div>
                <div class="av4" style="background-color: #F5EDE1;"></div>
            </div>
            <formv3 class="form3" />
            <div class="envio bg-FondoPerla flex justify-around lg:justify-between py-8">
                    <div class="flex justify-end">
                        <button @click="backForm"
                            class="back-form3 bg-NaranjaOscuroPerla px-4 lg:px-8 rounded-2xl text-white"
                            type="button">Anterior</button>
                    </div>
                    <div class="flex justify-end">
                        <button @click="nextForm"
                            class="next-form3 bg-NaranjaOscuroPerla px-4 lg:px-8 rounded-2xl text-white"
                            type="button">Siguiente</button>
                    </div>
                </div>
        </div>
        <div class="form4" v-show="currentForm === 4">
            <div class="barraavance bg-FondoPerla flex justify-center items-center col-span-4">
                <div class="av1" style="background-color: #E2D6C5;"></div>
                <div class="av2" style="background-color: #E2D6C5;"></div>
                <div class="av3" style="background-color: #E2D6C5;"></div>
                <div class="av4" style="background-color: #E2D6C5;"></div>
            </div>
            <formv4 class="" />

            <div class="envio bg-FondoPerla flex justify-start lg:justify-start py-8">
                <div class="flex justify-end">
                    <button @click="backForm" class="back-form4 px-4 lg:px-8 rounded-2xl text-white"
                        type="button">Anterior</button>
                </div>
            </div>

            <div class="bg-FondoPerla">
                <div class="flex termsandcon items-start justify-center">
                    <input class="ckboxperla" type="checkbox">
                    <p class="texto">He leído y acepto los Términos y Condiciones y las Políticas de privacidad</p>
                </div>
                <div class="descicionbtn flex flex-col lg:flex-row lg:justify-around items-center">
                    <button class="btnsub font-TestKarbonMedium" type="submit">ENVIAR POSTULACION</button>
                    <button class="btnesc lg:order-first font-TestKarbonMedium" type="reset">CANCELAR</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.envio {
    padding-left: 5%;
    padding-right: 5%;
}

.envio button {
    color: #6E5B44;
    font-size: 5vw;
    background-color: #F5EDE1;
    border: solid 0.04vw#6E5B44;
}

.barraavance {
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;
    height: 8vh;
}


.av1,
.av2,
.av3,
.av4 {
    margin: 1%;
    height: 35%;
    width: 25%;
}

.termsandcon {
    padding-top: 5%;
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 5%;
}

.termsandcon p {
    padding-left: 4%;
}

.descicionbtn {
    padding-top: 5%;
    padding-bottom: 5%;
}

.btnsub {
    font-size: 4.5vw;
    line-height: normal;
    background-color: #E97B4D;
    color: white;
    width: 75%;
    border-radius: 1.5vw;
    padding-top: 1%;
    padding-bottom: 1%;
}

.btnesc {
    margin-top: 2%;
    color: #471D7C;
    font-size: 4vw;
}

.texto {
    font-family: "KarbonRegular";
    font-size: 4.5vw;
    line-height: normal;
    color: #471D7C;
    -webkit-text-stroke: 0.1vw #471D7C;
}

@media (min-width: 1024px) {
    .barraavance {
        padding-left: 15%;
        padding-right: 15%;
        width: 100%;
        height: 8vh;
    }

    .envio {
        padding-left: 18%;
        padding-right: 18%;
    }

    .envio button {
        font-size: 1.5vw;
    }

    .termsandcon {
        padding-top: 3%;
        padding-left: 2%;
        padding-right: 2%;
        padding-bottom: 3%;
    }

    .termsandcon p {
        padding-left: 4%;
    }

    .descicionbtn {
        padding-top: 5%;
        padding-bottom: 5%;
    }

    .btnsub {
        font-size: 1.5vw;
        line-height: normal;
        background-color: #E97B4D;
        color: white;
        width: 30%;
        border-radius: 1.5vw;
        padding-top: 0.5%;
        padding-bottom: 0.5%;
    }

    .btnesc {
        margin-top: 2%;
        color: #471D7C;
        font-size: 1.2vw;
    }

    .texto {
        font-family: "KarbonRegular";
        font-size: 1.4vw;
        line-height: normal;
        color: #471D7C;
        -webkit-text-stroke: 0.05vw #471D7C;
    }
}
</style>