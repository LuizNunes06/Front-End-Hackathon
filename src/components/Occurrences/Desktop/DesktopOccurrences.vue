<script setup>
import OccurrenceContainer from "./OccurrenceContainer.vue";
import AgendaDesktop from "../../LayoutComponents/DesktopLayout/AgendaDesktop.vue";
</script>

<template>
  <div class="conteiner-conteudo">
    <OccurrenceContainer />
    <AgendaDesktop />
  </div>
</template>

<style scoped>
.conteiner-conteudo {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
