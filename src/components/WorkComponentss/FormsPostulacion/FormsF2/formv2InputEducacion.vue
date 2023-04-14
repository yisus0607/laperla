<script>
export default {
    data() {
        return {
            educacion: [{
                estadoest: '',
                titulo: '',
                nivelest: '',
                institucion: ''
            }],
        }
    },
    methods: {
        agregarEducacion() {
            this.educacion.push({
                estadoest: '',
                titulo: '',
                nivelest: '',
                institucion: ''
            });
        },
    },
}
</script>
<template>
    <div class="contenedorformMo bg-FondoPerla">
        <p class="titleform text-AzulPerla font-TestKarbonSemiBold">Educacion</p>
        <form action="" v-for="(edu, index) in educacion" :key="index" class="contenedorform flex flex-col w-full">
            <div class="contenedorcolumnas lg:columns-2 w-full">
                <div class="inpsel">
                    <label for="">Estado de estudio</label>
                    <select class="perlaselect" name="estadoest" id="estadoest">
                        <option value="">Seleccionar</option>
                    </select>
                </div>
                <input class="perlainput inptdt w-full" type="text" placeholder="Titulo">
                <div class="inpsel">
                    <label for="">Nivel de estudio</label>
                    <select class="perlaselect" name="nivelest" id="nivelest">
                        <option value="">Seleccionar</option>
                    </select>
                </div>
                <input class="perlainput inptdt w-full" type="text" placeholder="Institucion">
            </div>
        </form>
        <div class="contenedorbtnanadir flex justify-center lg:justify-start">
            <button class="anadir text-NaranjaPerla" type="button" @click="agregarEducacion">+ Añadir Educacion</button>
        </div>
    </div>
</template>
<style scoped>
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