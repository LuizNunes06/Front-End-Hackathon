<script setup>
    import { DesktopLogin, MobileLogin } from "./index.js"

    import { useScreen } from "@/composables/screen/screen.js";

    const { isMobile } = useScreen();
</script>

<template>
    <MobileLogin v-if="isMobile"/>
    <DesktopLogin v-else/>
</template>

<style scoped></style>