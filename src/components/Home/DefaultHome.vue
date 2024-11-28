<script setup>
import MobileHome from "./Mobile/MobileHome.vue";
import DesktopHome from "./Desktop/DesktopHome.vue";

import { useScreen } from "../../composables";

const { isMobile } = useScreen();
</script>

<template>
    <MobileHome v-if="isMobile"/>
    <DesktopHome v-else/>
</template>

<style scoped></style>
