<script setup>
import NavMobile from '@/components/LayoutComponents/MobileLayout/NavMobile.vue'
</script>

<template>
  <main>
    <RouterView />
  </main>
  <NavMobile />
</template>

<style scoped>
main{
  padding-bottom: 2vh;
}
</style>
