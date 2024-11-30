<script setup>
import CalendarTextOutline from "vue-material-design-icons/CalendarTextOutline.vue";
import { ref } from "vue";
import NavMobile from "@/components/LayoutComponents/MobileLayout/NavMobile.vue";

const isVisible = ref(false);
const Others = ref(false);
const SelectOccurrence = ref(false);

function SelectIt() {}

function Selecao() {
  isVisible.value = !isVisible.value;
}

function OtherCheckbox() {
  Others.value = !Others.value;
}
</script>

<template>
  <main>
    <h1>Cadastrar Ocorrência</h1>
    <div class="Filtro" v-if="!isVisible">
      <select name="Turmas" id="" class="default-filtro">
        <option value="" disabled selected>Curso</option>
        <option value="Turma">info</option>
        <option value="Turma">agro</option>
        <option value="Turma">quimi</option>
      </select>
      <select name="Turmas" id="" class="default-filtro">
        <option value="" disabled selected>Turma</option>
        <option value="Turma">3info1</option>
        <option value="Turma">3info2</option>
        <option value="Turma">3info3</option>
      </select>
    </div>
    <div class="tipo-ocorrencia" @click="Selecao" v-if="!isVisible">
      <CalendarTextOutline size="30" />
      <P> Selecionar tipo de ocorrência</P>
    </div>
    <div class="Alunos" v-if="!isVisible">
      <p>Ana Clara Alves de Andrade Hahn</p>
      <p>Bruno</p>
      <p>Isadora Alcantara</p>
      <p>José Pinto</p>
      <p>Luis Bombado</p>
      <p>Matheus *****</p>
    </div>

    <div class="tipo-ocorrencia" @click="Selecao" v-if="isVisible">
      <CalendarTextOutline size="30" />
      <P> Selecionar Aluno</P>
    </div>
    <div class="selecao-ocorrencia" v-if="isVisible">
      <div class="aluno-info">
        <p>Nome do Aluno</p>
        <p>3info1</p>
      </div>
      <div class="container-selecao">
        <span class="check-container">
          <input type="checkbox" id="uniform" />
          <label for="uniform">Sem uniforme</label>
        </span>
        <span class="check-container">
          <input type="checkbox" id="lateness" />
          <label for="lateness">Atraso</label>
        </span>
        <span class="check-container">
          <input type="checkbox" id="reunion" />
          <label for="reunion">Reunião no NUPE</label>
        </span>
        <span class="check-container">
          <input type="checkbox" id="text" class="check-texto" @click="OtherCheckbox" />
          <label for="text">Outro</label>
        </span>
        <textarea rows="" cols="" v-if="Others"></textarea>
        <div class="Enviar">
          <button>Enviar</button>
        </div>
      </div>
    </div>

    <NavMobile />
  </main>
</template>

<style scoped>
.Filtro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2vh;
  width: 80%;
  border: 2px solid var(--gray);
  border-radius: 10px;
  padding: 1rem;
}

.default-filtro {
  width: 100%;
  min-height: 50px;
  height: 6vh;
  font-family: "Poppins";
  font-size: 18px;
  border: 2px solid var(--gray);
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 5vh;
  width: 100%;
  margin-bottom: 12vh;
}

h1 {
  font-family: "Poppins";
  color: var(--darker-green);
}

.tipo-ocorrencia {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 80%;
  padding: 0 1rem;
  border: 2px solid var(--gray);
  border-radius: 10px;
  font-family: "Poppins";
  font-size: 18px;

  & span {
    display: flex;
    align-items: center;
  }
}

.tipo-ocorrencia p {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.tipo-ocorrencia:hover {
  border: 2px solid var(--darker-green);
  cursor: pointer;
  scale: 1;
  padding: 0.5vw;
  transition: 0.2s ease-in-out;
}

.Alunos {
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 1rem;
  width: 80%;
  border: 2px solid var(--gray);
  border-radius: 10px;
  font-family: "Poppins";
  font-size: 18px;
  height: 32vh;
  overflow-y: auto;
}

.Alunos p {
  padding: 0.5rem;
  margin: 0.1vh 0;
}

.Alunos p:hover {
  background-color: var(--lighter-gray);
  border-radius: 10px;
}
.selecao-ocorrencia {
  border: 2px solid var(--gray);
  border-radius: 10px;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: normal;
  width: 80%;
  padding: 1rem;
  padding-top: 0.3rem;
}
.aluno-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 22px;
}
.container-selecao {
  gap: 1rem;
}
textarea {
  height: 100%;
  width: calc(100% - 2rem);
  resize: none;
  border-color: var(--gray);
  border-radius: 1rem;
  outline: none;
  padding: 1rem;
}
.Enviar {
  display: flex;
  justify-content: right;
  padding: 7px;
  width: 100%;
}
button {
  width: 25%;
}
.check-container {
  display: flex;
  gap: 8vw;
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
</style>
