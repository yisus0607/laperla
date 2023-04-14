<script>
export default {
    name: "formContact",
}
</script>
<template>
    <div class="generalformulriocon"></div>
    <div class="cont-form m-4 lg:mb-10 lg:mt-0 lg:mx-24 overflow-hidden shadow-2xl">
        <div
            class="h-full lg:mx-auto lg:my-auto lg:px-24 py-10 lg:py-8 flex flex-col justify-around lg:justify-center items-center lg:block">
            <h1 class="ttl-form  text-AzulPerla">CONTACTANOS</h1>
            <form action="" class="formulario">
                <div class="lg:columns-2 lg:gap-20">
                    <input class="input-formc lg:order-1" required type="text" placeholder="NOMBRES">
                    <input class="input-formc lg:order-2" required type="email" placeholder="EMAIL">
                    <input class="input-formc lg:order-4" required type="text" placeholder="CIUDAD">
                    <input class="input-formc lg:order-5" required type="text" placeholder="TELEFONO"
                        pattern="[9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]">
                    <input class="input-formc lg:order-3" type="text" placeholder="MENSAJE">
                </div>
                <div class="cont-btn flex justify-center">
                    <button type="submit"
                        class="btnsubmit bg-NaranjaPerla rounded-xl text-white font-TestKarbonMedium ">ENVIAR</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.cont-form {
    background-color: #FFFBF3;
    height: auto;
    border-radius: 30px;
}

.ttl-form {
    font-family: "TestKarbonSemibold";
    font-size: 8vw;
}

.formulario {
    padding: 7%;
}

.input-formc {
    width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-top: 3%;
    margin-bottom: 3%;
    background-color: #FFFBF3;
    border-bottom: solid #471D7C 1px;
    font-family: "KarbonRegular";
    font-size: 6vw;
}

.input-formc:focus {
    outline: none;
}

::placeholder {
    color: #471D7C;
    font-family: "KarbonRegular";
    font-size: 6vw;
    -webkit-text-stroke: 0.2vw #471D7C;
}

.cont-btn {
    padding-top: 10%;
}

.btnsubmit {
    padding: 2%;
    padding-left: 8%;
    padding-right: 8%;
    font-size: 5.5vw;
}

@media (min-width: 1024px) {
    .generalformulriocon{
        padding-top: 10%;
    }
    .formulario {
        padding: 3%;
        padding-left: 5%;
        padding-right: 5%;
    }

    .cont-form {
        border-radius: 134px;
    }

    .input-formc {
        width: 100%;
        padding-top: 2%;
        padding-bottom: 2%;
        margin-top: 3%;
        margin-bottom: 3%;
        background-color: #FFFBF3;
        border-bottom: solid #471D7C 1px;
        font-family: "KarbonRegular";
        font-size: 1.8vw;
    }

    .input-formc:focus {
        outline: none;
    }

    ::placeholder {
        font-size: 1.5vw;
        -webkit-text-stroke: 0.05vw #471D7C;
    }

    .cont-btn {
        padding-top: 5%;
    }

    .btnsubmit {
        padding-top: 0%;
        padding-bottom: 0%;
        padding-left: 5%;
        padding-right: 5%;
        font-size: 1.5vw;
    }

    .btnsubmit :hover{

        background: #000;

    }

}

@media (min-width: 5120px) {
    .cont-form {
        border-radius: 250px;
    }
}
</style>