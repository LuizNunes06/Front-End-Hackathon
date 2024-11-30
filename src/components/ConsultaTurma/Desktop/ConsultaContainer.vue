<script setup>
import SquareRoundedOutline from "vue-material-design-icons/SquareRoundedOutline.vue";
import TshirtCrewOutline from "vue-material-design-icons/TshirtCrewOutline.vue";
import ClockAlertOutline from "vue-material-design-icons/ClockAlertOutline.vue";
import CalendarAlert from "vue-material-design-icons/CalendarAlert.vue";
import FileDocumentAlertOutline from "vue-material-design-icons/FileDocumentAlertOutline.vue";
</script>
<template>
  <div class="Container">
    <div class="Top">
      <h1>Consulta de Turma</h1>
      <div class="Filtros">
        <div class="Selecao">
          <div class="filtro">
            <select name="curso" id="" class="default-filter">
              <option value="">Curso</option>
            </select>
            <select name="turma" id="" class="default-filter">
              <option value="">Turma</option>
            </select>
          </div>
          <div class="Especificacao">
            <input type="text" class="Nome" placeholder="Nome" />
            <div class="check-list">
              <span class="check-container">
                <input type="checkbox" id="text" class="check-texto" />
                <label for="text" class="check-customizado"></label>
                <label for="text">Nota Baixa</label>
              </span>
              <span class="check-container">
                <input type="checkbox" id="text" class="check-texto" />
                <label for="text" class="check-customizado"></label>
                <label for="text">Com Ocorrência</label>
              </span>
            </div>
          </div>
        </div>
        <div class="Legenda">
          <p><SquareRoundedOutline size="20" />Notas Acima de 6</p>
          <p><SquareRoundedOutline size="20" fill-color="red" />Notas Abaixo de 6</p>
          <p><TshirtCrewOutline size="20" class="Torto1" />Sem uniforme</p>
          <p><ClockAlertOutline size="20" class="Torto" />Atraso</p>
          <p><CalendarAlert size="20" />Reunião no Nupe</p>
          <p><FileDocumentAlertOutline size="20" class="Torto" />Outros</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="Lista">
      <div class="Aluno1">
        <div class="IconInfo"></div>
        <div class="TextInfo">
          <p><span class="bold">Nome do Aluno</span></p>
          <p>Matricula: 12312231223</p>
          <p>Email: Aluno@gmail.com</p>
          <button>Ver Detalhes</button>
          <button>Registrar Ocorrência</button>
        </div>
      </div>
      <div class="Aluno">
        <div class="IconInfo">
          <p><TshirtCrewOutline />1</p>
          <p><ClockAlertOutline />5</p>
          <p><CalendarAlert />1</p>
          <p><FileDocumentAlertOutline />2</p>
        </div>
        <div class="TextInfo">
          <p><span class="bold">Nome do Aluno</span></p>
          <p>Matricula: 12312231223</p>
          <p>Email: Aluno@gmail.com</p>
          <button>Ver Detalhes</button>
          <button>Registrar Ocorrência</button>
        </div>
      </div>
      <div class="Aluno">
        <div class="IconInfo">
          <p><TshirtCrewOutline />1</p>
          <p><ClockAlertOutline />5</p>
          <p><CalendarAlert />1</p>
          <p><FileDocumentAlertOutline />2</p>
        </div>
        <div class="TextInfo">
          <p><span class="bold">Nome do Aluno</span></p>
          <p>Matricula: 12312231223</p>
          <p>Email: Aluno@gmail.com</p>
          <button>Ver Detalhes</button>
          <button>Registrar Ocorrência</button>
        </div>
      </div>
      <div class="Aluno1">
        <div class="IconInfo">
          <p><TshirtCrewOutline />1</p>
          <p><ClockAlertOutline />5</p>
          <p><CalendarAlert />1</p>
          <p><FileDocumentAlertOutline />2</p>
        </div>
        <div class="TextInfo">
          <p><span class="bold">Nome do Aluno</span></p>
          <p>Matricula: 12312231223</p>
          <p>Email: Aluno@gmail.com</p>
          <button>Ver Detalhes</button>
          <button>Registrar Ocorrência</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
span.bold {
  font-weight: bold;
}
.Torto1 {
  margin-left: -2vh;
}
.Torto {
  margin-left: -5.2vh;
}
.IconInfo {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.Aluno {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 20vw;
  height: 25vh;
  border: 1px solid var(--gray);
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  margin: 2vh auto;}

.Aluno1 {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 20vw;
  height: 25vh;
  border: 1px solid var(--red);
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  margin: 2vh auto;
}

.TextInfo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

p {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.Lista {
  display: grid;
  grid-template-columns: 1fr 1fr;
  -ms-grid-column-align: stretch;
  flex-wrap: wrap;
  width: 100%;
  max-height: 50vh;
  overflow-y: auto;
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

.Nome {
  outline: none;
  width: 10vw;
  padding: 0.6rem 0.2rem;
  color: var(--darker-gray);
  border: var(--gray) 1px solid;
  background-color: var(--white);
  border-radius: 0.3rem;
  height: 2vh;
}

.Especificacao {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

h1 {
  color: var(--darker-green);
}

hr {
  width: 100%;
  border: 1px solid var(--gray);
}

.Container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  height: 80vh;
  border: 2px solid var(--gray);
  border-radius: 10px;
  font-family: "Poppins";
}

.Top {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 2vh;
  gap: 1rem;
}

.Filtros {
  display: flex;
  flex-direction: row;
  gap: 4rem;
}

.Legenda {
  display: flex;
  flex-direction: column;
  height: 15vh;
  font-size: x-small;
  border-left: 2px solid var(--gray);
  justify-content: left;
}

.Legenda p {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  margin: 0;
  margin-left: 2vw;
}

.Selecao {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.filtro {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>
