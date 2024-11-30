<script setup>
import MobileStudentCard from './MobileStudentCard.vue';
import MobileObservation from './MobileObservation.vue';
</script>
<template>
    <main>
        <h1>Consultar Aluno</h1>
        <MobileStudentCard />
        <MobileObservation />
    </main>
</template>
<style scoped>
main{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-bottom: 10vh;
    gap: 1rem;
}
h1{
    color: var(--darker-green);
}
</style>
