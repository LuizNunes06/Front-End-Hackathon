<script setup>
import { DesktopGrades, DesktopOccurence, DesktopStudentCard, MobileGrades, MobileOccurence, MobileStudentCard } from "./index"
import DesktopStudent from "./Desktop/DesktopStudent.vue";

import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
    <component :is="isMobile ? MobileStudentCard : DesktopStudent"/>
    <!-- <component :is="isMobile ? MobileStudentCard : DesktopStudentCard"/>
    <component :is="isMobile ? MobileGrades : DesktopGrades" />
    <component :is="isMobile ? MobileOccurence : DesktopOccurence" /> -->
</template>

<style scoped>
</style>