<template>
    <div>
        <headerPerla class="relitive z-50"/>
        <div class="p-5 cont-workdes lg:p-16 ">
            <div class="lg:columns-2 lg:flex lg:items-center">
                <div class="imagen-round bg-violet-400 rounded-full h-52 w-52 md:h-96 md:w-96 m-auto">
                    <img class="h-full w-full rounded-full" src="@/assets/WorkAssets/ImgDescWork.png"
                        alt="imagen circular" />
                </div>
                <div class="ttl-work lg:w-2/4">
                    <div class="font-bold py-4">
                        <h1 class="ttl-work1 text-2xl text-center py-3 md:text-5xl lg:text-4xl lg:text-right">Analista
                            Senior de
                            Transformacion de Procesos</h1>
                        <div class="ind-tipo flex lg:py-4 items-center justify-end pr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.25" height="22.25" viewBox="0 0 22.25 22.25">
                                <path id="Icon_material-watch-later" data-name="Icon material-watch-later"
                                    d="M14.125,3A11.125,11.125,0,1,0,25.25,14.125,11.158,11.158,0,0,0,14.125,3ZM18.8,18.8l-5.785-3.56V8.562h1.669v5.785l5.006,3Z"
                                    transform="translate(-3 -3)" fill="#df9575" />
                            </svg>

                            &nbsp; FullTime/PartTime
                        </div>
                    </div>
                    <div class="obj-work">
                        <h1 class="underline font-bold text-xl text-left py-2 md:text-3xl lg:text-2xl">Objetivo del puesto
                        </h1>
                        <p class="text-justify md:text-2xl lg:text-xl pr-5">
                            Ejecutar procesos y proyectos de transformación del banco,
                            acompañando a las distintas áreas durante el ciclo de vida de la
                            transformación (concepción, diseño, implementación y control), con
                            el objetivo de generar eficiencias y automatizaciones.
                        </p>
                    </div>
                    <div class="funciones-work px-8">
                        <h1 class="font-bold text-xl text-left py-2 md:text-3xl lg:text-2xl">Funciones</h1>
                        <ul class="text-left md:text-2xl lg:text-xl list-disc pl-5">
                            <li>
                                Liderar proyectos de mejora (mediano plazo) y proyectos de
                                transformación (largo plazo), principalmente de carácter
                                tecnológico, acompañando al negocio durante el todo el ciclo de
                                vida (concepto, propuesta de diseño, implementación, resultados,
                                seguimiento). Se puede tener más de 1 proyecto simultáneamente.
                            </li>
                            <li>
                                Ejecutar relevamientos, entrevistas, medición de tiempos en
                                proyectos de mejora y proyectos de transformación.
                            </li>
                            <li>
                                Ejecutar proyectos de mejora y transformación, de acuerdo a la
                                asignación del jefe.
                            </li>
                            <li>
                                Atender pedidos, formalizaciones o miniproyectos (menor duración).
                            </li>
                            <li>Atender pedidos y formalizaciones.</li>
                            <li>
                                Realizar Mentoring a los Analistas Junior y Middle como guía de
                                proyectos.
                            </li>
                        </ul>
                    </div>
                    <div class="requisitos-work px-8">
                        <h1 class="font-bold text-xl text-left py-2 md:text-3xl lg:text-2xl">Requisitos</h1>
                        <ul class="text-left md:text-2xl lg:text-xl list-disc pl-5">
                            <li>
                                Bachiller de Ingeniería Industrial, Ingeniería empresarial,
                                Ingeniería de sistemas, Administración o carreras afines.
                            </li>
                            <li>
                                Mínimo 3 años de experiencia realizando funciones similares en
                                áreas de procesos, proyectos, innovación, transformación, producto
                                o tecnología.
                            </li>
                            <li>Conocimientos en Lean Six Sigma y PMI.</li>
                            <li>
                                Conocimientos en Scrum, Agile, Design Thinking y Design Sprint.
                            </li>
                            <li>Manejo de Microsoft Office a nivel avanzado.</li>
                        </ul>
                    </div>
                    <div class="p-5">
                        <p class="salary-work text-right font-bold text-xl md:text-3xl lg:text-2xl">Sueldo: S/.8600</p>
                    </div>
                </div>
            </div>
            <div @click="mostrarform = true" class="text-white md:text-4xl font-bold flex justify-center">
                <button
                    class="bg-NaranjaPerla px-5 py-1 rounded-lg border-2 lg:text-xl lg:px-20 btn-postular">POSTULACION</button>
            </div>
        </div>
        <!-- <FormPost1Vue v-show="mostrarform" /> -->
        <form-post-2 v-show="mostrarform"/>
        <footerPerla />
    </div>
</template>
<style scoped>
.cont-workdes {
    background-color: #FCF5EB;
}

.ttl-work {
    color: #471D7C;
    font-family: "KarbonRegular";
    -webkit-text-stroke: 0.3px #471d7c;
}

.ttl-work1 {
    font-family: "TestKarbonSemiBold";
    -webkit-text-stroke: 0.3px #471d7c;
}

.ind-tipo {
    color: #C95C2D;
}

@media (min-width: 1024px) {
    .cont-workdes{
        padding-top: 8%;
    }
    .imagen-round {
        width: 600px;
        height: 600px;
    }
}

@media (min-width: 5120px) {
    .ttl-work1 {
        font-size: 5vh;
        line-height: normal;
    }

    .obj-work h1 {
        font-size: 3vh;
        line-height: normal;
    }

    .obj-work p {
        font-size: 2.5vh;
        line-height: normal;
    }

    .funciones-work h1 {
        font-size: 3vh;
        line-height: normal;
    }

    .funciones-work ul {
        font-size: 2.5vh;
        line-height: normal;
    }

    .requisitos-work h1 {
        font-size: 3vh;
        line-height: normal;
    }

    .requisitos-work ul {
        font-size: 2.5vh;
        line-height: normal;
    }

    .salary-work {
        font-size: 4vh;
        line-height: normal;
    }

    .imagen-round {
        scale: 3.8;
    }

    .btn-postular {
        font-size: 3vh;
        padding: 1%;
        padding-left: 2%;
        padding-right: 2%;
        border-radius: 50px;
    }

    .ind-tipo {
        font-size: 2.5vh;
        line-height: normal;
    }

    .ind-tipo svg {
        height: 60px;
        width: 60px;
    }

}
</style>
<script>
import FormPost1Vue from './FormsPostulacion/FormPost1.vue';
import headerPerla from '../headerPerla.vue';
import footerPerla from '../FooterPerla.vue';
import FormPost2 from './FormsPostulacion/FormPost2.vue';

export default {
    name: "DescripcionWork",
    data() {
        return {
            mostrarform: false,
        }
    },
    components: {
        FormPost1Vue,
        headerPerla,
        footerPerla,
        FormPost2,
    }
};
</script>
