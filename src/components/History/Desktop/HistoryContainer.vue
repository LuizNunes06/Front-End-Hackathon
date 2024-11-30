<script setup>
import SwapHorizontal from "vue-material-design-icons/SwapHorizontal.vue";
function expand(e) {
  const container = e.target.parentNode.querySelector(".container");
  container.classList.toggle("partial");
  e.target.classList.toggle("txt-more");
}
</script>
<template>
  <div class="Container">
    <div class="Top">
      <h1>Consultar Histórico</h1>
      <div class="Filtros">
        <div class="Lista">
          <select class="default-filter" name="Curso" id="">
            <option value="">Curso</option>
          </select>
          <select class="default-filter" name="Turma" id="">
            <option value="">Turma</option>
          </select>
        </div>
        <div class="Lista">
          <select class="default-filter" name="Ano" id="">
            <option value="">Ano</option>
          </select>
          <select class="default-filter" name="Trimestre" id="">
            <option value="">Trimestre</option>
          </select>
        </div>
      </div>
      <div class="Botoes">
        <button>Comentários</button>
        <SwapHorizontal size="30" />
        <button>Sugestões</button>
      </div>
    </div>
    <div class="ListaComent">
      <div class="Comentario">
        <p>
          <span>Nome de Usuário: </span>Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugiat temporibus fugit tempora nobis? Perferendis veniam nobis qui ipsum
          ipsam perspiciatis, praesentium possimus vel rerum totam eaque quod a,
          temporibus assumenda.
        </p>
      </div>
      <div class="Comentario">
        <p>
          <span>Nome de Usuário: </span>Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugiat temporibus fugit tempora nobis? Perferendis veniam nobis qui ipsum
          ipsam perspiciatis, praesentium possimus vel rerum totam eaque quod a,
          temporibus assumenda.
        </p>
      </div>
      <div class="Comentario">
        <span>Nome de Usuário: </span>Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fugiat temporibus fugit tempora nobis? Perferendis veniam nobis qui ipsum
        ipsam perspiciatis, praesentium possimus vel rerum totam eaque quod a, temporibus
        assumenda.
      </div>
      <div class="Comentario">
        <span>Nome de Usuário: </span>Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fugiat temporibus fugit tempora nobis? Perferendis veniam nobis qui ipsum
        ipsam perspiciatis, praesentium possimus vel rerum totam eaque quod a, temporibus
        assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo cumque
        eaque suscipit magnam veritatis ut inventore dolores incidunt etLorem ipsum dolor
        sit amet consectetur adipisicing elit. Fugiat temporibus fugit tempora nobis?
        Perferendis veniam nobis qui ipsum ipsam perspiciatis, praesentium possimus vel
        rerum totam eaque quod a, temporibus assumenda. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ad illo cumque eaque suscipit magnam veritatis ut
        inventore dolores incidunt etLorem ipsum dolor sit amet consectetur adipisicing
        elit. Fugiat temporibus fugit tempora nobis? Perferendis veniam nobis qui ipsum
        ipsam perspiciatis, praesentium possimus vel rerum totam eaque quod a, temporibus
        assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo cumque
        eaque suscipit magnam veritatis ut inventore dolores incidunt et
      </div>
    </div>
  </div>
</template>
<style scoped>
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

span {
  font-weight: bold;
  color: var(--darker-green);
}

h1 {
  color: var(--darker-green);
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
