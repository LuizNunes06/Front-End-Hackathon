<script setup></script>

<template>
  <div class="container">
    <div class="info">
      <h2>Boletim anual</h2>
      <div class="ano">
        <button class="btn-ano">2024</button>
        <button class="btn-ano">2023</button>
        <button class="btn-ano">2022</button>
      </div>
    </div>
    <table>
      <tr>
        <th>Matéria</th>
        <th>Trimestre 1</th>
        <th>Trimestre 2</th>
        <th>Trimestre 3</th>
      </tr>
      <tr>
        <th>Matéria Hipotética 1</th>
        <th>X,X</th>
        <th>X,X</th>
        <th>X,X</th>
      </tr>
      <tr>
        <th>Matéria Hipotética 1</th>
        <th>X,X</th>
        <th>X,X</th>
        <th>X,X</th>
      </tr>
      <tr>
        <th>Matéria Hipotética 1</th>
        <th>X,X</th>
        <th>X,X</th>
        <th>X,X</th>
      </tr>
      <tr>
        <th>Matéria Hipotética 1</th>
        <th>X,X</th>
        <th>X,X</th>
        <th>X,X</th>
      </tr>
      <tr>
        <th>Matéria Hipotética 1</th>
        <th>X,X</th>
        <th>X,X</th>
        <th>X,X</th>
      </tr>
      <tr>
        <th>Matéria Hipotética 1</th>
        <th>X,X</th>
        <th>X,X</th>
        <th>X,X</th>
      </tr>
      <tr>
        <th>Matéria Hipotética 1</th>
        <th>X,X</th>
        <th>X,X</th>
        <th>X,X</th>
      </tr>
      <tr>
        <th>Matéria Hipotética 1</th>
        <th>X,X</th>
        <th>X,X</th>
        <th>X,X</th>
      </tr>
      <tr>
        <th>Matéria Hipotética 1</th>
        <th>X,X</th>
        <th>X,X</th>
        <th>X,X</th>
      </tr>
      <tr>
        <th>Matéria Hipotética 1</th>
        <th>X,X</th>
        <th>X,X</th>
        <th>X,X</th>
      </tr>
      <tr>
        <th>Matéria Hipotética 1</th>
        <th>X,X</th>
        <th>X,X</th>
        <th>X,X</th>
      </tr>
      <tr>
        <th>Matéria Hipotética 1</th>
        <th>X,X</th>
        <th>X,X</th>
        <th>X,X</th>
      </tr>
      <tr>
        <th>Matéria Hipotética 1</th>
        <th>X,X</th>
        <th>X,X</th>
        <th>X,X</th>
      </tr>
      <tr>
        <th>Matéria Hipotética 1</th>
        <th>X,X</th>
        <th>X,X</th>
        <th>X,X</th>
      </tr>
      <tr>
        <th>Matéria Hipotética 1</th>
        <th>X,X</th>
        <th>X,X</th>
        <th>X,X</th>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.ano{
    margin: 0 auto;
}
.container {
  padding: 2vh 1vw;
  width: 50vw;
  height: 90vh;
  font-size: 1.2rem;
  color: var(--black);
  border: 1px solid var(--gray);
  border-radius: 10px;
  margin: 0 1vw;
}

table {
  width: 100%;
  height: 85%;
}

th {
  border: none;
}

tr:nth-child(odd) {
  background-color: var(--lighter-gray);
}

tr:nth-child(even) {
  background-color: var(--white);
}

.btn-ano {
  background-color: var(--white);
  color: var(--black);
  width: auto;
  height: auto;
  border: 1px solid var(--gray);
  border-radius: 0;
}

.btn-ano:first-child {
  border-top-left-radius: 10px;
}

.btn-ano:last-child {
  border-top-right-radius: 10px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 4vh;
}
</style>
