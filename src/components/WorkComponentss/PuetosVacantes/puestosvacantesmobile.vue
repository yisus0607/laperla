<script>
import imgworkpv1 from '@/assets/WorkAssets/imgwork1 (1).png';
import imgworkpv2 from '@/assets/WorkAssets/imgwork1 (2).png';
import imgworkpv3 from '@/assets/WorkAssets/imgwork1 (3).png';
import imgworkpv4 from '@/assets/WorkAssets/imgwork1 (4).png';

import FiltroVac from './FiltroVac.vue';

export default {
    name: "PuestosVacantes",
    data() {
        return {
            jobs: [
                {
                    title: "Analista Senior de Transformacion de Procesos",
                    tipe: "Full Time",
                    desc: "Ejecuta procesos y proyectos de transformación del Molino La Perla, acompañando a las distintas áreas durante el ciclo de vida de la transformación (concepción, diseño, implementación y control), con el objetivo de generar eficiencias y automatizaciones.",
                    img: imgworkpv1,
                },
                {
                    title: "Analista Junior de Estrategia Comercial",
                    tipe: "Full Time",
                    desc: "En el Molino La Perla nos encontramos en búsqueda de talento que aporte con sus conocimientos y experiencia a la posición y sobre todo con optimismo. Contribuye con el desarrollo y ejecución de la estrategia para...",
                    img: imgworkpv2,
                },
                {
                    title: "Operario de Produccion",
                    tipe: "Full Time",
                    desc: "Empresa familiar que inició sus operaciones en el año 1961 criando pollos de carne de excelente calidad, elabora sus productos alimenticios con estándares de optima calidad, está en búsqueda de un operario de producción.",
                    img: imgworkpv3,
                },
                {
                    title: "Practicante de Mesa de Distribución",
                    tipe: "Part Time",
                    desc: "Te invitamos a ser parte del Molino La Perla, empresa avícola con más de 53 años de trayectoria, con presencia en diferentes ciudades del Perú. Como practicante brindarás apoyo en labores administrativas y hacer seguimiento a algunos procesos de producción.",
                    img: imgworkpv4,
                },
            ],
        }
    },
    components: {
        FiltroVac,
    },
};
</script>
<template>
    <div class="bg-FondoPerla">
        <div>
            <p class="ttlperla font-TestKarbonSemiBold text-AzulPerla">Puestos Vacantes</p>
            <div>
                <!-- aqui va el buscador -->
            </div>
        </div>
        <div class="lg:p-5 fvwork">
            <FiltroVac />
        </div>
        <!-- items trabajos -->
        <div class="bg-FondoPerla">
            <div v-for="job in jobs" class="contenedor-jobs">
                <img :src="job.img" alt="">
                <div class="txt-jobs">
                    <p class="jobtitle font-TestKarbonMedium text-AzulPerla text-center">{{ job.title }}</p>
                    <p class="jobtipe font-KarbonRegular text-AzulPerla flex justify-end"><svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.25 22.25">
                            <path id="Icon_material-watch-later" data-name="Icon material-watch-later"
                                d="M14.125,3A11.125,11.125,0,1,0,25.25,14.125,11.158,11.158,0,0,0,14.125,3ZM18.8,18.8l-5.785-3.56V8.562h1.669v5.785l5.006,3Z"
                                transform="translate(-3 -3)" fill="#df9575" />
                        </svg>
                        &nbsp; &nbsp;{{ job.tipe }}</p>
                    <p class="jobdesc font-KarbonRegular text-AzulPerla text-justify">{{ job.desc }}</p>
                </div>
                <div class="flex justify-end">
                    <router-link to="/work/descwork" custom v-slot="{ navigate }">
                        <button @click="navigate" class="btnpostular font-KarbonRegular text-white">Postular</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
svg {
    width: 6%;
}

.ttlperla {
    font-size: 12vw;
    line-height: normal;
    padding-left: 8%;
}

.contenedor-jobs {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 3%;
    margin-bottom: 6%;
    background-color: #FECFAB;
    border-radius: 0vw 0vw 3vw 3vw;
}

.txt-jobs {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 1%;
    padding-bottom: 2%;
}

.jobtitle {
    font-size: 7vw;
    line-height: normal;
    padding-bottom: 2%;
    -webkit-text-stroke: 0.15vw #471D7C;
}

.jobtipe {
    font-size: 5vw;
    line-height: normal;
    -webkit-text-stroke: 0.14vw #471D7C;
    padding-bottom: 4%;
}

.jobdesc {
    font-size: 5vw;
    line-height: normal;
}

.btnpostular {
    font-size: 6vw;
    line-height: normal;
    background-color: #E87A4B;
    padding-left: 4%;
    padding-right: 4%;
    margin: 5%;
    border-radius: 3vw;
}
</style>


