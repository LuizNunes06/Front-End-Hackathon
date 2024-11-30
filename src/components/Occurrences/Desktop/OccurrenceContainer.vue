<script setup></script>
<template>
  <div class="container">
    <div class="head-container">
      <h1>Cadastrar ocorrência</h1>
      <div class="filtro-container">
        <select name="Curso" id="" placeholder="Curso" class="default-filtro">
          <option value="" disabled selected>Curso</option>
        </select>
        <select name="Turma" id="" class="default-filtro">
          <option value="" disabled selected>Turma</option>
        </select>
      </div>
    </div>
    <div class="list-container">
      <span class="card-aluno">
        <input type="checkbox" id="studant" />
        <label class="studant-name" for="studant">Isadora Alcantara Xavier da Silva</label>
      </span>
    </div>
    <div class="occurence-form">
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

      <textarea rows="" cols=""></textarea>
      <button class="send-button">Enviar</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: var(--darker-green);
  font-weight: 600;
}

.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 3fr;
  grid-template-areas:
    "head head"
    "list form";
  border: 1px solid var(--gray);
  width: 55vw;
  height: 80vh;
  border-radius: 10px;
}

.filtro-container {
  display: flex;
  gap: 1vw;
}

.head-container {
  grid-area: head;
  border-bottom: 1px solid var(--gray);
  gap: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.list-container {
  grid-area: list;
  border-right: 1px solid var(--gray);
  width: 100%;

  & .card-aluno {
    display: block;
    max-width: 100%;
    padding: 0.5rem;
  }

  & input {
    display: none;
  }

  & input:checked + label {
    background-color: var(--lighter-gray);
    transition: all 0.2s ease-in-out;
  }
}

.occurence-form {
  grid-area: form;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1.5vh;
  font-size: 1.2rem;
}

textarea {
  height: 15vw;
  width: calc(100% - 2rem);
  resize: none;
  border-color: var(--gray);
  border-radius: 1rem;
  outline: none;
  padding: 1rem;
}

.send-button {
  display: flex;
  justify-content: center;
  align-self: self-end;
  background-color: var(--darker-green);
  width: 25%;
}

.check-container {
  display: flex;
  gap: 0.8vw;
  align-items: center;
  font-size: .8em;

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

.studant-name {
  height: 5vh;
  border-radius: 10px;
  display: flex !important;
  padding-left: 0.7vw;
  align-items: center;
}

.studant-name:hover {
  background-color: var(--lighter-gray);
}
</style>
