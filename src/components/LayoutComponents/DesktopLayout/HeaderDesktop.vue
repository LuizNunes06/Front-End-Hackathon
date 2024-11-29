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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

img {
    height: 8vh;
}
</style>