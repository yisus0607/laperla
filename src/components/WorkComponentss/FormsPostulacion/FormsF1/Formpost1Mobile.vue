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
            <div class="inpsel">
                <label for="">¿De dónde eres?</label>
                <select class="perlaselect" name="lugar" id="lugar">
                    <option value="">Selccionar</option>
                    <option value="trujillo">Trujillo</option>
                </select>
            </div>
            <div class="inpsel">
                <label for="">Dosis de vacunación COVID-19</label>
                <select class="perlaselect" name="covid" id="covid">
                    <option value="">Selccionar</option>
                    <option value="1">1</option>
                </select>
            </div>
            <div class="inpsel">
                <label for="">¿Has trabajado con nosotros anteriormente?</label>
                <select class="perlaselect" name="workback" id="workback">
                    <option value="">Selccionar</option>
                    <option value="1">SI</option>
                    <option value="0">NO</option>
                </select>
            </div>
            <div class="flex termsandcon items-start">
                <input class="ckboxperla" type="checkbox">
                <p class="texto">He leído y acepto los Términos y Condiciones y las Políticas de privacidad</p>
            </div>
            <div class="descicionbtn flex flex-col items-center">
                <button class="btnsub font-TestKarbonMedium" type="submit">ENVIAR POSTULACION</button>
                <button class="btnesc font-TestKarbonMedium" type="reset">CANCELAR</button>
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

label,
.texto {
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
} */</style>