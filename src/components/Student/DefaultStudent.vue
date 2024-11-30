<script setup>
import DesktopStudent from "./Desktop/DesktopStudent.vue";

import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
    <DesktopStudent />
</template>

<style scoped>
</style>