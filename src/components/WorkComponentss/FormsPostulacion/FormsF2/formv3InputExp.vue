<script>
export default {
    data() {
        return {
            experiencialab: [{
                estadoest: '',
                titulo: '',
                pais: '',
                institucion: ''
            }],
        }
    },
    methods: {
        agregarexperiencialab() {
            this.experiencialab.push({
                estadoest: '',
                titulo: '',
                pais: '',
                institucion: ''
            });
        },
    },
}
</script>
<template>
    <div class="contenedorformMo bg-FondoPerla">
        <p class="titleform text-AzulPerla font-TestKarbonSemiBold">Experiencia Laboral</p>
        <div class="flex contenedorcbk items-center">
            <input type="checkbox">
            <p class="font-KarbonRegular text-AzulPerla">No tengo Experiencia laboral.</p>
        </div>
        <form action="" v-for="(edu, index) in experiencialab" :key="index" class="contenedorform flex flex-col w-full">
            <div class="contenedorcolumnas lg:columns-2 w-full">
                <div class="break-inside-avoid">
                    <input class="perlainput inptdt w-full" type="text" placeholder="Nombre del puesto">
                    <div class="inpsel">
                        <label for="">Fecha Inicio</label>
                        <div class="flex w-full justify-between">
                            <select class="perlaselect w-full" name="month" id="month">
                                <option value="1">Enero</option>
                            </select>
                            <select class="perlaselect w-full" name="year" id="year">
                                <option value="2000">2000</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex contenedorata">
                        <input type="checkbox">
                        <p class="font-KarbonRegular text-AzulPerla">Actualmente trabajo aqui.</p>
                    </div>
                    <div class="inpsel break-inside-avoid">
                        <label for="">Fecha de Finalización</label>
                        <div class="flex w-full justify-between">
                            <select class="perlaselect w-full" name="month" id="month">
                                <option value="1">Enero</option>
                            </select>
                            <select class="perlaselect w-full" name="year" id="year">
                                <option value="2000">2000</option>
                            </select>
                        </div>
                    </div>
                </div>
                <input class="perlainput inptdt w-full" type="text" placeholder="Nombre de la Empresa/Negocio">
                <div class="inpsel">
                    <label for="">Pais</label>
                    <select class="perlaselect" name="pais" id="pais">
                        <option value="">Seleccionar</option>
                    </select>
                </div>
            </div>
        </form>
        <div class="contenedorbtnanadir flex justify-center lg:justify-start">
            <button class="anadir text-NaranjaPerla" type="button" @click="agregarexperiencialab">+ Añadir
                experiencia</button>
        </div>
    </div>
</template>
<style scoped>
.contenedorata {
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 1%;
}

.contenedorata p {
    font-size: 4vw;
    line-height: normal;
    -webkit-text-stroke: 0.1vw #471D7C;
    padding-left: 2%;
}

.contenedorcbk {
    padding: 5%;
}

.contenedorcbk p {
    font-size: 5.5vw;
    line-height: normal;
    -webkit-text-stroke: 0.1vw #471D7C;
    padding-left: 2%;
}

.contenedorbtnanadir {
    margin-top: 2%;
}

.contenedorform {
    background-color: #f5ede1;
    margin-top: 2%;
    padding: 3%;
    border-radius: 1.5vw;
}

.anadir {
    font-size: 4.5vw;
    line-height: normal;
}

.contenedorformMo {
    padding: 4%;
}

.titleform {
    font-size: 9vw;
    line-height: normal;
}

.inpsel {
    display: flex;
    flex-direction: column;
    padding-top: 5%;
    padding-bottom: 5%;
    width: 100%;
}

.perlaselect {
    font-size: 3.8vw;
    line-height: normal;
    color: #471D7C;
    font-family: "KarbonRegular";
    appearance: none;
    text-align: center;
    margin-top: 1%;
    padding: 1%;
    background-color: #F5EDE1;
    border: solid #6E5B44 0.1vw;
}

label {
    font-family: "KarbonRegular";
    font-size: 4.5vw;
    line-height: normal;
    color: #471D7C;
    -webkit-text-stroke: 0.1vw #471D7C;
}

::placeholder {
    font-family: "KarbonRegular";
    font-size: 4.5vw;
    line-height: normal;
    color: #471D7C;
    -webkit-text-stroke: 0.1vw #471D7C;
}

.perlainput {
    font-size: 3.8vw;
    line-height: normal;
    color: #471D7C;
    font-family: "KarbonRegular";
    margin-top: 1%;
    padding-top: 1%;
    padding-bottom: 1%;
    background-color: #f5ede1;
    border-bottom: solid #6E5B44 0.12vw;
}

.inptdt {
    margin-bottom: 5%;
    margin-top: 5%;
}

@media (min-width: 1024px) {
    .contenedorata {
        padding-top: 2%;
        padding-bottom: 2%;
        padding-left: 1%;
    }

    .contenedorata p {
        font-size: 1.2vw;
        line-height: normal;
        -webkit-text-stroke: 0.04vw #471D7C;
        padding-left: 2%;
    }

    .contenedorcbk {
        padding: 5.5%;
    }

    .contenedorcbk p {
        font-size: 2vw;
        line-height: normal;
        -webkit-text-stroke: 0.04vw #471D7C;
        padding-left: 2%;
    }

    .contenedorcolumnas {
        padding: 3%;
        gap: 13vw;
    }

    .titleform {
        font-size: 4vw;
        line-height: normal;
    }

    .contenedorformMo {
        padding: 4%;
        padding-left: 15%;
        padding-right: 15%;
    }

    label {
        font-family: "KarbonRegular";
        font-size: 1.4vw;
        line-height: normal;
        color: #471D7C;
        -webkit-text-stroke: 0.05vw #471D7C;
    }

    ::placeholder {
        font-family: "KarbonRegular";
        font-size: 1.4vw;
        line-height: normal;
        color: #471D7C;
        -webkit-text-stroke: 0.05vw #471D7C;
    }

    .perlaselect {
        font-size: 1.3vw;
        line-height: normal;
        color: #471D7C;
        font-family: "KarbonRegular";
        appearance: none;
        text-align: center;
        margin-top: 1%;
        padding: 0.5%;
        background-color: #F5EDE1;
        border: solid #6E5B44 0.01vw;
    }

    .perlainput {
        font-size: 1.3vw;
        line-height: normal;
        color: #471D7C;
        font-family: "KarbonRegular";
        margin-top: 1%;
        padding-top: 0.5%;
        padding-bottom: 0.5%;
        border-bottom: solid #6E5B44 0.05vw;
    }

    .anadir {
        font-size: 1.4vw;
        line-height: normal;
    }
}
</style>