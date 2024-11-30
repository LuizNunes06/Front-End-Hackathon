<script setup>
import { DesktopOccurences, MobileOccurences } from "./index.js";

import { useScreen } from "../../composables";

const { isMobile } = useScreen();
</script>

<template>
  <MobileOccurrences v-if="isMobile" />
  <DesktopOccurrences v-else />
</template>

<style scoped></style>
