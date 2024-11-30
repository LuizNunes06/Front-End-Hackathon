<script setup>
import ClipBoardAlert from "vue-material-design-icons/ClipboardAlert.vue";
import History from "vue-material-design-icons/History.vue";
import Account from "vue-material-design-icons/Account.vue";

import { RouterLink } from "vue-router";
</script>
<template>
  <div class="side-bar">
    <RouterLink class="link" to="/"><ClipBoardAlert size="30" /> Ocorrências</RouterLink>
    <RouterLink class="link" to="/historico"
      ><History size="30" />Histórico de Conselhos</RouterLink
    >
    <RouterLink class="link" to="/turma"><Account size="30" />Consultar Turma</RouterLink>
  </div>
</template>
<style scoped>
.side-bar {
  position: fixed;
  top: 10.3vh;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  padding: 2vh 0;
  align-items: center;
  background-color: white;
  width: 20vw;
  border-right: 2px solid var(--gray);
  height: 89.8vh;
  font-size: larger;
}
.link {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.5rem;
  color: var(--black);
  text-decoration: none;
  padding: 1rem 0.5rem;
  width: 80%;
}
.link:hover {
  background-color: var(--lighter-gray);
  border-radius: 10px;
  cursor: pointer;
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
