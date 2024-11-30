<script setup>
import LogoutVariant from "vue-material-design-icons/LogoutVariant.vue";
</script>
<template>
    <div class="nav-bar">
        <img src="../../../../public/logo-IF.png" alt="">
        <LogoutVariant />
    </div>
</template>
<style scoped>
.nav-bar {
    position: fixed;
    top: 0;
    width: 100vw;
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