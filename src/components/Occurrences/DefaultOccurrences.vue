<script setup>
import MobileOccurrences from "./Mobile/MobileOccurrences.vue";
import DesktopOccurrences from "./Desktop/DesktopOccurrences.vue";

import { useScreen } from "../../composables";

const { isMobile } = useScreen();
</script>

<template>
  <MobileOccurrences v-if="isMobile" />
  <DesktopOccurrences v-else />
</template>

<style scoped></style>
