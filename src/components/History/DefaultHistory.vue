<script setup>
import { DesktopHistory, MobileHistory } from "./index.js";

import { useScreen } from "../../composables";

const { isMobile } = useScreen();
</script>

<template>
    <MobileHistory v-if="isMobile"/>
    <DesktopHistory v-else/>
</template>

<style scoped></style>