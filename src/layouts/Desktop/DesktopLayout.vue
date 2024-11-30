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
main {
  margin: 14vh 0 0 25vw;
}
</style>
