<script setup>

</script>
<template>
  <div class="filtro">
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
  width: 80%;
  border: 1px solid var(--gray);
  border-radius: 10px;
  padding: 1rem;
}

.default-filter {
  width: 100%;
  height: 8vh;
  font-family: 'Poppins';
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  border: 1px solid var(--gray);
}
</style>
