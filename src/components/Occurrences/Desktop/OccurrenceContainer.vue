<script setup>
</script>
<template>
  <div class="Container">
    <div class="Top">
      <h1>Cadastrar Ocorrência</h1>
      <div class="Filtros">
        <div class="Lista">
          <select class="default-filter" name="Curso" id="">
            <option value="">Curso</option>
          </select>
          <select class="default-filter" name="Turma" id="">
            <option value="">Turma</option>
          </select>
        </div>
      </div>
    </div>
    <div class="edit-ocorrencia">
      <div class="list-nome">
        <p>Ana Clara</p>
        <p>Ana Clara</p>
        <p>Ana Clara</p>
        <p>Ana Clara</p>
        <p>Ana Clara</p>
        <p>Ana Clara</p>
        <p>Ana Clara</p>
        <p>Ana Clara</p>
        <p>Ana Clara</p>
        <p>Ana Clara</p>
        <p>Ana Clara</p>
      </div>
      <div class="cadastro">
        <div class="check-list">
          <span class="check-container">

            <input type="checkbox" id="Uniforme" class="check-texto" />
            <label for="Uniforme" class="check-customizado"></label>
            <label for="Uniforme">Sem Uniforme</label>
          </span>
          <span class="check-container">
            <input type="checkbox" id="Atraso" class="check-texto" />
            <label for="Atraso" class="check-customizado"></label>
            <label for="Atraso">Atraso</label>
          </span>
          <span class="check-container">
            <input type="checkbox" id="Nupe" class="check-texto" />
            <label for="Nupe" class="check-customizado"></label>
            <label for="Nupe">Reunião no Nupe</label>
          </span>
          <span class="check-container">
            <input type="checkbox" id="outro" class="check-texto" />
            <label for="outro" class="check-customizado"></label>
            <label for="outro">Outro</label>
          </span>
        </div>
        <div class="coment">
          <textarea rows="" cols=""></textarea>
        </div>
        <button>Enviar</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
button{
  width: 10vw;
}
.check-list{
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
.edit-ocorrencia {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.cadastro {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
}

.list-nome {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 20%;
  height: 58vh;
  border-right: 2px solid var(--gray);
  padding: 3vh;
}

.list-nome p {
  margin: 0;
}

.check-container {
  display: flex;
  gap: 0.8vw;
  align-items: center;

  & input {
    display: none;
  }

  & input:checked+.check-customizado {
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

.Comentario {
  width: 90%;
  border: 1px solid var(--gray);
  border-radius: 10px;
  gap: 0.3rem;
  padding: 1rem;
  position: relative;
  height: auto;
}

p {
  margin: 0;
}

.ListaComent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1rem;
  overflow-y: auto;
  max-height: 100%;
}

.ListagemComent::-webkit-scrollbar {
  height: 5px;
}

.ListagemFilm::-webkit-scrollbar-thumb {
  background-color: var(--darker-green);
}

h1 {
  margin-top: 2vh;
  color: var(--darker-green);
  margin-bottom: 2vh;
}

.Botoes {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.Lista {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.Filtros {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
}

.Container {
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 80vh;
  border: 1px solid var(--gray);
  border-radius: 10px;
  gap: 1vh;
  margin-left: -25vw;
  margin-top: -7vh;
}

.Top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--gray);
  padding-bottom: 3vh;
  width: 100%;
  height: auto;
  gap: 1rem;
}
</style>
