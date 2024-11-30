<script setup>
import { ref } from 'vue'

const isVisible = ref(false)

function Selecao() {
    isVisible.value = !isVisible.value

}
</script>

<template>
  <div class="container" >
    <h1>Observações</h1>
    <textarea rows="" cols=""></textarea>
    <div class="observation-form">
      <span class="check-container">
        <input type="checkbox" id="uniform" />
        <label for="uniform" class="check-customizado"></label>
        <label for="uniform">Sem uniforme</label>
      </span>
      <span class="check-container">
        <input type="checkbox" id="lateness" />
        <label for="lateness" class="check-customizado"></label>
        <label for="lateness">Atraso</label>
      </span>
      <span class="check-container">
        <input type="checkbox" id="reunion" />
        <label for="reunion" class="check-customizado"></label>
        <label for="reunion">Reunião no NUPE</label>
      </span>
      <span class="check-container">
        <input type="checkbox" id="text" class="check-texto" />
        <label for="text" class="check-customizado"></label>
        <label for="text">Outro</label>
      </span>
    </div>
    <div class="botao">
      <button>Enviar</button>
    </div>
  </div>


</template>

<style scoped>
.observation-form {
  grid-area: form;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1.5vh;
  font-size: 1.2rem;
  margin-left: -40vw;
}
.check-container {
  display: flex;
  gap: 0.8vw;
  align-items: center;

  & input {
    display: none;
  }

  & input:checked + .check-customizado {
    background-color: var(--green);
  }

  .check-customizado {
    display: relative;
    width: 15px;
    height: 15px;
    border: 1px solid var(--green);
    display: inline;
  }
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 50vh;
  width: 80%;
  border: 2px solid var(--gray);
  border-radius: 10px;
}
h1 {
  color: var(--darker-green);
}

textarea {
  height: 20vh;
  width: 80%;
  resize: none;
  border-color: var(--gray);
  border-radius: 1rem;
  outline: none;
  padding: 1rem;
}
.botao {
  display: flex;
  justify-content: end;
  gap: 1rem;
  width: 80%;
  margin-bottom: 2vh;
}
button{
  width: 30vw;
}
</style>
