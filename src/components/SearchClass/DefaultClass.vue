<script setup>
import { DesktopClass, MobileClass } from "./index.js"

import { useScreen } from "../../composables";

const { isMobile } = useScreen();
</script>

<template>
    <MobileClass v-if="isMobile"/>
    <DesktopClass v-else/>
</template>

<style scoped>
</style>