<script setup>
import { SquareRoundedOutline, TshirtCrewOutline, ClockAlertOutline, CalendarAlert, FileDocumentAlertOutline } from "@/components/icons";
</script>

<template>
  <div class="container">
    <div class="top">
      <h1>Consulta de Turma</h1>
      <div class="filters">
        <div class="selection">
          <div class="filter">
            <select name="course" id="" class="default-filter">
              <option value="">Cursp</option>
            </select>
            <select name="turma" id="" class="default-filter">
              <option value="">Turma</option>
            </select>
          </div>
          <div class="specification">
            <input type="text" class="Nome" placeholder="Nome" />
            <div class="check-list">
              <span class="check-container">
                <input type="checkbox" id="text" class="text-check" />
                <label for="text" class="custom-check"></label>
                <label for="text">Nota Baixa</label>
              </span>
              <span class="check-container">
                <input type="checkbox" id="text" class="text-check" />
                <label for="text" class="custom-check"></label>
                <label for="text">Com Ocorrência</label>
              </span>
            </div>
          </div>
        </div>
        <div class="caption">
          <p><SquareRoundedOutline size="20" />Notas Acima de 6</p>
          <p><SquareRoundedOutline size="20" fill-color="red" />Notas Abaixo de 6</p>
          <p><TshirtCrewOutline size="20" class="wrong-1" />Sem uniforme</p>
          <p><ClockAlertOutline size="20" class="wrong" />Atraso</p>
          <p><CalendarAlert size="20" />Reunião no Nupe</p>
          <p><FileDocumentAlertOutline size="20" class="wrong" />Outros</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="list">
      <div class="student-1">
        <div class="icon-info"></div>
        <div class="text-info">
          <p><span class="bold">Nome do aluno</span></p>
          <p>Matricula: 12312231223</p>
          <p>Email: aluno@gmail.com</p>
          <button>Ver Detalhes</button>
          <button>Registrar Ocorrência</button>
        </div>
      </div>
      <div class="student">
        <div class="icon-info">
          <p><TshirtCrewOutline />1</p>
          <p><ClockAlertOutline />5</p>
          <p><CalendarAlert />1</p>
          <p><FileDocumentAlertOutline />2</p>
        </div>
        <div class="text-info">
          <p><span class="bold">Nome do student</span></p>
          <p>Matricula: 12312231223</p>
          <p>Email: aluno@gmail.com</p>
          <button>Ver Detalhes</button>
          <button>Registrar Ocorrência</button>
        </div>
      </div>
      <div class="student">
        <div class="icon-info">
          <p><TshirtCrewOutline />1</p>
          <p><ClockAlertOutline />5</p>
          <p><CalendarAlert />1</p>
          <p><FileDocumentAlertOutline />2</p>
        </div>
        <div class="text-info">
          <p><span class="bold">Nome do student</span></p>
          <p>Matricula: 12312231223</p>
          <p>Email: aluno@gmail.com</p>
          <button>Ver Detalhes</button>
          <button>Registrar Ocorrência</button>
        </div>
      </div>
      <div class="student-1">
        <div class="icon-info">
          <p><TshirtCrewOutline />1</p>
          <p><ClockAlertOutline />5</p>
          <p><CalendarAlert />1</p>
          <p><FileDocumentAlertOutline />2</p>
        </div>
        <div class="text-info">
          <p><span class="bold">Nome do student</span></p>
          <p>Matricula: 12312231223</p>
          <p>Email: aluno@gmail.com</p>
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
  .wrong-1 {
    margin-left: -2vh;
  }
  .wrong {
    margin-left: -5.2vh;
  }
  .icon-info {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  .student {
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

  .student-1 {
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

  .text-info {
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

  .list {
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

    & input:checked + .custom-check {
      background-color: var(--green);
    }

    .custom-check {
      display: relative;
      width: 15px;
      height: 15px;
      border: 1px solid var(--green);
      display: inline;
    }
  }

  .specification {
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

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    height: 80vh;
    border: 2px solid var(--gray);
    border-radius: 10px;
    font-family: "Poppins";
  }

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 2vh;
    gap: 1rem;
  }

  .filters {
    display: flex;
    flex-direction: row;
    gap: 4rem;
  }

  .caption {
    display: flex;
    flex-direction: column;
    height: 15vh;
    font-size: x-small;
    border-left: 2px solid var(--gray);
    justify-content: left;
  }

  .caption p {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    margin: 0;
    margin-left: 2vw;
  }

  .selection {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .filter {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
</style>
