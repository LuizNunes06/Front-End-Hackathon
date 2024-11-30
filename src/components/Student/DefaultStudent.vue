<script setup>
import MobileStudent from "./Mobile/MobileStudent.vue";
import DesktopStudent from "./Desktop/DesktopStudent.vue";

import { useScreen } from "../../composables";

const { isMobile } = useScreen();
</script>

<template>
  <MobileStudent v-if="isMobile" />
  <DesktopStudent v-else />
</template>
<style scoped>
</style>