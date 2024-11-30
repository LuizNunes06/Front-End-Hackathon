<script setup>
import { AsideDesktop, HeaderDesktop } from "../../components";
</script>

<template>
      <HeaderDesktop />
      <AsideDesktop />
      <main>
      <RouterView />
    </main>
</template>

<style scoped>
.body {
  display: grid;
  grid-template-areas:
    "header header"
    "main main";
}

header {
  grid-area: header;
}

main {
  display: flex;
  grid-area: main;
  gap: 2vw;  
}
</style>
