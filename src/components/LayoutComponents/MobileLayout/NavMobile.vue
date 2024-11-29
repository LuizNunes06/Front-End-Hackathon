<script setup>
import { AlertBoxOutline, AccountGroupOutline, History, Menu } from '../../icons/index'
</script>
<template>
  <nav>
    <router-link to="#">
      <AlertBoxOutline />
    </router-link>
    <router-link to="#">
      <AccountGroupOutline />
    </router-link>
    <router-link to="#">
      <History />
    </router-link>
    <router-link to="#">
      <Menu />
    </router-link>
  </nav>
</template>
<style scoped>
nav {
  position: absolute;
  bottom: 0%;
  background-color: var(--lighter-gray);
  width: 100%;
  height: 15vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

a {
   color: var(--black);
}

.router-link-exact-active {
  background-color: var(--darker-green-opacity);
  color: var(--darker-green);
  width: 15vw;
  height: 8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;

  span {
    margin-top: 1.5vw;
  }
}
</style>
