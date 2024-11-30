<script setup>
import { ref } from 'vue'

const isVisible = ref(false)

function Selecao() {
  isVisible.value = !isVisible.value
}
</script>
<template>
  <div class="filtro" v-if="!isVisible">
    <select name="Turmas" id="" class="default-filter">
      <option value="" selected>Filtro</option>
      <option value="Turma">3info1</option>
      <option value="Turma">3info2</option>
      <option value="Turma">3info3</option>
    </select>
  </div>
</template>
<style scoped>
.filtro {
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid var(--gray);
  border-radius: 10px;
  padding: 1rem;
}

.default-filter {
  width: 100%;
  height: 5vh;
  font-family: 'Poppins';
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  border: 1px solid var(--gray);
}
</style>
