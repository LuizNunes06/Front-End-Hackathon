<script setup>
import { DesktopOccurrences, MobileOccurrences } from "./index.js";

import { useScreen } from "../../composables";

const { isMobile } = useScreen();
</script>

<template>
  <MobileOccurrences v-if="isMobile" />
  <DesktopOccurrences v-else />
</template>

<style scoped></style>
