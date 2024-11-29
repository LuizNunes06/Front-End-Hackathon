<script setup>
    import DesktopLogin from "./Desktop/DesktopLogin.vue";
    import MobileLogin from "./Mobile/MobileLogin.vue";

    import { useScreen } from "@/composables/screen/screen.js";

    const { isMobile } = useScreen();
</script>

<template>
    <MobileLogin v-if="isMobile"/>
    <DesktopLogin v-else/>
</template>

<style scoped></style>