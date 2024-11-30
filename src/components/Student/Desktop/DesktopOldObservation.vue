<script setup></script>

<template>
  <h1>Observações</h1>
  <div class="slider-container">
    <div class="container">
      <div class="data">
        <h4>Observação do dia 21/04/2025</h4>
      </div>
      <div class="observacao">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam corporis ipsum qui
          necessitatibus similique odio quae beatae facilis sapiente deserunt voluptas
          quam nihil amet deleniti omnis quasi repudiandae, veritatis laudantium.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="data">
        <h4>Observação do dia 21/04/2025</h4>
      </div>
      <div class="observacao">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam corporis ipsum qui
          necessitatibus similique odio quae beatae facilis sapiente deserunt voluptas
          quam nihil amet deleniti omnis quasi repudiandae, veritatis laudantium.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="data">
        <h4>Observação do dia 21/04/2025</h4>
      </div>
      <div class="observacao">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam corporis ipsum qui
          necessitatibus similique odio quae beatae facilis sapiente deserunt voluptas
          quam nihil amet deleniti omnis quasi repudiandae, veritatis laudantium.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="data">
        <h4>Observação do dia 21/04/2025</h4>
      </div>
      <div class="observacao">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam corporis ipsum qui
          necessitatibus similique odio quae beatae facilis sapiente deserunt voluptas
          quam nihil amet deleniti omnis quasi repudiandae, veritatis laudantium.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="data">
        <h4>Observação do dia 21/04/2025</h4>
      </div>
      <div class="observacao">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam corporis ipsum qui
          necessitatibus similique odio quae beatae facilis sapiente deserunt voluptas
          quam nihil amet deleniti omnis quasi repudiandae, veritatis laudantium.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1{
    margin: 6vh 0 4vh 0;
}

.slider-container{
    display: flex;
    gap: 2vw;
    max-width: 100%;
    overflow-x: auto;
}

.container {
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border: 1px solid var(--gray);
  padding: 1%;
  border-radius: 10px;
  min-width: 15vw;
  height: 30vh;
}

.data {
  display: flex;
}

.observacao {
  display: flex;
}

.observacao > p {
  width: 100%;
  word-break: break-all;
  font-size: 0.9rem;
}
</style>
