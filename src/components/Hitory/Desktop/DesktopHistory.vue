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
                    <select name="Curso" id="">
                        <option value="">Curso</option>
                    </select>
                    <select name="Turma" id="">
                        <option value="">Turma</option>
                    </select>
                </div>
                <div class="Lista">
                    <select name="Ano" id="">
                        <option value="">Ano</option>
                    </select>
                    <select name="Trimestre" id="">
                        <option value="">Trimestre</option>
                    </select>
                </div>
            </div>
            <div class="Botoes">
                <button>Comentários</button>
                <SwapHorizontal size="30" />
                <button>Sugestões</button>
            </div>
            <hr>
            <div class="ListaComent">
                <div class="Comentario">
                    <p><span>Nome de Usuário:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat temporibus fugit tempora
                            nobis? Perferendis veniam nobis qui ipsum ipsam perspiciatis, praesentium possimus vel rerum
                            totam eaque quod a, temporibus assumenda.</p>
                </div>
                    <div class="Comentario">
                        <p><span>Nome de Usuário:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat temporibus fugit tempora
                            nobis? Perferendis veniam nobis qui ipsum ipsam perspiciatis, praesentium possimus vel rerum
                            totam eaque quod a, temporibus assumenda.</p>
                    </div>
                    <div class="Comentario">
                        <div class="container partial"><span>Nome de Usuário:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat temporibus fugit tempora
                            nobis? Perferendis veniam nobis qui ipsum ipsam perspiciatis, praesentium possimus vel rerum
                            totam eaque quod a, temporibus assumenda.
                        </div>
                        <span @click="expand" class="txt-more"></span>
                    </div>
                    <div class="Comentario">
                        <div class="container partial"><span>Nome de Usuário:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat temporibus fugit tempora
                            nobis? Perferendis veniam nobis qui ipsum ipsam perspiciatis, praesentium possimus vel rerum
                            totam eaque quod a, temporibus assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo cumque eaque suscipit magnam veritatis ut inventore dolores incidunt et autem nulla dolorum possimus, delectus minus culpa tempore ratione quis?
                        </div>
                        <span @click="expand" class="txt-more"></span>
                    </div>
                
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
}

.Comentario > .txt-more {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
}

.Comentario > .partial {
    height: 10vh; 
    overflow: hidden;
}

.Comentario > span::before {
    content: "Ocultar"
}

.Comentario > span.txt-more::before {
    content: "... Mostrar mais"
}

p{
    margin: 0;
}
.ListaComent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 10rem 1rem;  
    overflow-y: auto;

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

hr {
    width: 100%;
    border: 1px solid var(--gray);
}

.Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 80vh;
    border: 2px solid var(--gray);
    border-radius: 10px;
    font-family: 'Poppins';
}

.Top {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1rem;
}
</style>