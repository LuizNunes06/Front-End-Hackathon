<script setup>
import { AlertBoxOutline, AccountGroupOutline, History, Menu } from '../../icons/index.js'
</script>

<template>
  <nav>
    <router-link to="/ocorrencias">
      <AlertBoxOutline />
    </router-link>
    <router-link to="/">
      <AccountGroupOutline />
    </router-link>
    <router-link to="/historico">
      <History />
    </router-link>
    <router-link to="/fwefwef">
      <Menu/>
    </router-link>
  </nav>
</template>
<style scoped>
nav {
  position: fixed;
  bottom: 0%;
  background-color: var(--lighter-gray);
  width: 100%;
  height: 8vh;
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
