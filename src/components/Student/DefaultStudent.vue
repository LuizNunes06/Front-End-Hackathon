<script setup>
import { DesktopGrades, DesktopOccurences, MobileGrades, MobileOccurences } from "./index"

import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
    <component :is="isMobile ? MobileGrades : DesktopGrades" />
    <component :is="isMobile ? MobileOccurences : DesktopOccurences" />
</template>

<style scoped>
</style>