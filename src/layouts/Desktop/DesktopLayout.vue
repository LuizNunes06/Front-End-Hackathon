<script setup>
import { AsideDesktop, HeaderDesktop } from "../../components";
</script>

<template>
  <body>
    <header>
      <HeaderDesktop />
    </header>
    <main>
      <AsideDesktop />
      <RouterView />
    </main>
  </body>
</template>

<style scoped>
body {
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
