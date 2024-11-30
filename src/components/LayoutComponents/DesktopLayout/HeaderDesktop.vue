<script setup>
import { LogoutVariant } from "@/components/icons";
</script>

<template>
  <div class="nav-bar">
    <img src="../../../../public/logo-IF.png" alt="" />
    <div class="logout-button">
      <LogoutVariant size="34" />
    </div>
  </div>
</template>

<style scoped>
  .nav-bar {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0;
    background-color: var(--lighter-gray);
    height: 10vh;
    width: 100vw;
    border-bottom: 2px solid var(--gray);
  }

  .logout-button{
      margin: 0 1vw;

      & span{
          display: flex;
          align-items: center;
      }
  }

  .logout-button:hover{
      transition: all .2s ease-in-out;
      color: var(--darker-green);
  }

  img {
    height: 8vh;
    margin: 0 1vw;
  }
</style>