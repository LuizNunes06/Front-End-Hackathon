<script setup>
import LogoutVariant from "vue-material-design-icons/LogoutVariant.vue";
</script>
<template>
    <header>
        <img src="../../../../public/logoIf.png" alt="">
        <LogoutVariant />
    </header>
</template>
<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vh;
    background-color: var(--lighter-gray);
    height: 10vh;
    border-bottom: 2px solid var(--gray);
}

img {
    height: 8vh;
}
</style>