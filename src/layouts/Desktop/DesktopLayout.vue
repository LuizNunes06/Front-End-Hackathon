<script setup>
import { AsideDesktop, HeaderDesktop } from "../../components";
</script>

<template>
  <body>
      <HeaderDesktop />
      <AsideDesktop />
      <div class="main-content">
      <RouterView />
      </div>
  </body>
</template>

<style scoped>
.main-content {
  margin: 14vh 0 0 24vw;
}
</style>
