<script setup>
import ClipBoardAlert from "vue-material-design-icons/ClipboardAlert.vue";
import History from "vue-material-design-icons/History.vue";
import Account from "vue-material-design-icons/Account.vue";

import { RouterLink } from "vue-router";
</script>
<template>
  <div class="side-bar">
      <RouterLink class="link" to="/"
        ><ClipBoardAlert size="30" /> Ocorrências</RouterLink
      >
      <RouterLink class="link" to="/historico"
        ><History size="30" />Histórico de Conselhos</RouterLink
      >
      <RouterLink class="link" to="/turma"
        ><Account size="30" />Consultar Turma</RouterLink
      >
    </div>
</template>
<style scoped>
.side-bar {
  position: fixed;
  top: 10.3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 20vw;
  border-right: 2px solid var(--gray);
  height: 100%;
  font-size: larger;
  padding-top: 4vh;
  gap: 1.6vh;
}

.link {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.5rem;
  color: var(--black);
  text-decoration: none;
  padding: 0.5vw;
  width: 16vw;
  
  & span {
      display: flex;
      align-items: center;
    }
}
.link:hover {
    background-color: var(--lighter-gray);
    border-radius: 10px;
    cursor: pointer;
    scale: 1.006;
    transition: 0.2s ease-in-out;
}

.router-link-exact-active {
  background-color: var(--lighter-gray);
  border-radius: 10px;
  padding: 0.5vw;
}

.router-link-exact-active:hover {
  background-color: var(--gray);
  border-radius: 10px;
  padding: 0.5vw;
}
</style>
