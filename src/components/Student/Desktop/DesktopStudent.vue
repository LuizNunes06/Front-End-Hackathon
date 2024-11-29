<script setup>
import { DesktopGrades, DesktopOccurence, DesktopStudentCard } from "../index"

</script>

<template>
    <main>
        <div class="info">
            <DesktopOccurence />
            <DesktopGrades />
        </div>
        <div class="student-card">
            <DesktopStudentCard />
        </div>
    </main>
</template>

<style scoped>
    .info {
        margin-top: 2%;
        display: flex;
        gap: 2vw;
        flex-direction: column;
    }

    .student-card {
        display: flex;
        justify-content: center;
        margin: 2% 2% 0 0;
        height: 40vh;
        width: 45%;
    }

</style>