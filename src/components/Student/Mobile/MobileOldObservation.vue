<script setup>
</script>

<template>
<main>
  <div class="container">
    <h1>Observações passadas</h1>
    <div class="lista-coment">
      <div class="coment">
        <p><span>Usuário: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iusto tenetur, incidunt delectus quis, modi necessitatibus sint molestiae libero ad deserunt, porro praesentium. Illo, voluptatum? Consequatur itaque exercitationem similique.</p>
      </div>
      <div class="coment">
        <p><span>Usuário: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iusto tenetur, incidunt delectus quis, modi necessitatibus sint molestiae libero ad deserunt, porro praesentium. Illo, voluptatum? Consequatur itaque exercitationem similique.</p>
      </div>
      <div class="coment">
        <p><span>Usuário: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iusto tenetur, incidunt delectus quis, modi necessitatibus sint molestiae libero ad deserunt, porro praesentium. Illo, voluptatum? Consequatur itaque exercitationem similique.</p>
      </div>
      <div class="coment">
        <p><span>Usuário: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus iusto tenetur, incidunt delectus quis, modi necessitatibus sint molestiae libero ad deserunt, porro praesentium. Illo, voluptatum? Consequatur itaque exercitationem similique.</p>
      </div>
    </div>
  </div>
</main>
</template>

<style scoped>
span {
  font-weight: bold;
  color: var(--darker-green);
}
main{
  margin-bottom: 10vh;
}
.lista-coment {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}
h1 {
  color: var(--darker-green);
}
.coment{
  width: 80%;
  border: 2px solid var(--gray);
  height: 20vh;
  border-radius: 10px;
  padding: 2vh;
  font-size: larger;
}
</style>
