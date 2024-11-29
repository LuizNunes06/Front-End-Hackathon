<script setup>
import MobileHistory from "./Mobile/MobileHistory.vue";
import DesktopHistory from "./Desktop/DesktopHistory.vue";

import { useScreen } from "../../composables";

const { isMobile } = useScreen();
</script>

<template>
    <MobileHistory v-if="isMobile"/>
    <DesktopHistory v-else/>
</template>

<style scoped></style>