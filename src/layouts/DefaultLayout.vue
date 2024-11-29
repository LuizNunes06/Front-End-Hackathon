<script setup>
import MobileLayout from "./Mobile/MobileLayout.vue";
import DesktopLayout from "./Desktop/DesktopLayout.vue";

import { useScreen } from "../composables";

const { isMobile } = useScreen();
</script>

<template>
  <MobileLayout v-if="isMobile" />
  <DesktopLayout v-else />
</template>

<style scoped></style>
