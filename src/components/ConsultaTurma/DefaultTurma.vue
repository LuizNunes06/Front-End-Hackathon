<script setup>
import MobileTurma from "./Mobile/MobileTurma.vue";
import DesktopTurma from "./Desktop/DesktopTurma.vue";

import { useScreen } from "../../composables";

const { isMobile } = useScreen();
</script>

<template>
    <MobileTurma v-if="isMobile"/>
    <DesktopTurma v-else/>
</template>

<style scoped></style>