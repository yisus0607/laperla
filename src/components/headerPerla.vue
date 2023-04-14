<script setup>
import HeaderEscritorio from './HeadersVersiones/HeaderEscritorio.vue';
import HeaderMobile from './HeadersVersiones/HeaderMobile.vue';

</script>
<template>
    <div>
        <header-mobile class="lg:hidden relative z-50" />
        <header-escritorio class="hidden lg:flex " />
    </div>
</template>
<style scoped></style>
