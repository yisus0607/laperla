<script>

</script>
<template>
    <div class="contenedorformMo bg-FondoPerla">
        <p class="titleform text-AzulPerla font-TestKarbonSemiBold">Datos Personales</p>
        <form action="" class="flex flex-col w-full">
            <div class="inpsel">
                <label for="">Documento de indentidad</label>
                <select class="perlaselect" name="docid" id="docid">
                    <option value="dni">DNI</option>
                </select>
            </div>
            <input class="perlainput inptdt" type="text" placeholder="Número de documento de indentidad">
            <input class="perlainput inptdt" type="text" placeholder="Nombre">
            <input class="perlainput inptdt" type="text" placeholder="Apellidos">
            <div class="inpsel">
                <label for="">Celular</label>
                <div class="flex w-full">
                    <select class="perlaselect w-2/5" name="codcountry" id="codcountry">
                        <option value="pe">
                            <p>🇵🇪</p> +51
                        </option>
                    </select>
                    <input class="perlainput pl-4 w-full" type="text">
                </div>
            </div>
            <input class="perlainput inptdt" type="email" placeholder="Email">
            <div class="inpsel">
                <label for="">Fecha de nacimiento</label>
                <div class="flex w-full justify-between">
                    <select class="perlaselect w-full" name="day" id="day">
                        <option value="1">1</option>
                    </select>
                    <select class="perlaselect w-full" name="month" id="month">
                        <option value="1">Enero</option>
                    </select>
                    <select class="perlaselect w-full" name="year" id="year">
                        <option value="2000">2000</option>
                    </select>
                </div>
            </div>
            <div class="inpsel">
                <label for="">Genero</label>
                <select class="perlaselect" name="genero" id="genero">
                    <option value="">Selccionar</option>
                    <option value="m">M/F</option>
                </select>
            </div>
            <div class="inpsel">
                <label for="">Nacionalidad</label>
                <select class="perlaselect" name="nacionality" id="nacionality">
                    <option value="">Selccionar</option>
                    <option value="per">Peruan@</option>
                </select>
            </div>
            <div class="inpsel">
                <label for="">Pais de residencia</label>
                <select class="perlaselect" name="residencia" id="residencia">
                    <option value="">Selccionar</option>
                    <option value="1">1</option>
                </select>
            </div>
            <div class="inpsel">
                <label for="">Provincia</label>
                <select class="perlaselect" name="provincia" id="provincia">
                    <option value="">Selccionar</option>
                    <option value="1">SI</option>
                    <option value="0">NO</option>
                </select>
            </div>
            <div class="inpsel">
                <label for="">Localidad</label>
                <select class="perlaselect" name="localidad" id="localidad">
                    <option value="">Selccionar</option>
                    <option value="1">SI</option>
                    <option value="0">NO</option>
                </select>
            </div>
        </form>
    </div>
</template>
<style scoped>
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

.inptdt {
    margin-bottom: 5%;
    margin-top: 5%;
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

.perlainput {
    font-size: 3.8vw;
    line-height: normal;
    color: #471D7C;
    font-family: "KarbonRegular";
    margin-top: 1%;
    padding-top: 1%;
    padding-bottom: 1%;
    background-color: #FCF5EB;
    border-bottom: solid #6E5B44 0.12vw;
}

/* 
arreglar
input[type=checkbox] {
  transform: scale(1.5vw);
} */
</style>