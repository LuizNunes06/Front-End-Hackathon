<script setup>
import HistoryContainer from "./HistoryContainer.vue";
import AgendaDesktop from "../../LayoutComponents/DesktopLayout/AgendaDesktop.vue";
</script>
<template>
  <div class="conteiner-conteudo">
    <HistoryContainer />
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