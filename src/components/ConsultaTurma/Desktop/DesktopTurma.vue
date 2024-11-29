<script setup>
import ConsultaContainer from "./ConsultaContainer.vue";
import AgendaDesktop from "../../LayoutComponents/DesktopLayout/AgendaDesktop.vue";
</script>

<template>
  <div class="conteiner-conteudo">
    <ConsultaContainer />
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
