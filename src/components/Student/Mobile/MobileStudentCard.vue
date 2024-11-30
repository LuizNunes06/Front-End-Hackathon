<script setup>
import FileMultipleOutline from 'vue-material-design-icons/FileMultipleOutline.vue'


</script>

<template>
<div class="container">
    <div class="foto">
        <img src="../../../../public/logo.png" alt="">
    </div>
    <div class="aluno-info">
        <p class="matricula">12234567865</p>
        <p class="nome">Ana Clara Alves de Andrade Hahn</p>
        <p class="comobirdade">Ansiedade</p>
        <p class="turma">3info1</p>
        <p class="gmail">aluno@gmail.com</p>
    </div>
</div>
<div class="botao">

  <router-link to="/obsantigas" class="link">  <button><FileMultipleOutline size="25"/> Observações passadas</button></router-link>


</div>
</template>

<style scoped>
.botao button{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border: 3px solid var(--darker-green);
  border-radius: 10px;
  color: var(--black);
  gap: 1rem;
  width: 100%;
  font-size: larger;

}
.link{
  text-decoration: none;
}
.botao{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
    outline: none;

}
.container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 20vh;
    width: 80%;
    border: 2px solid var(--gray);
    border-radius: 10px;
    padding: 2vh;
}
.nome{
    font-size: larger;
    font-weight: bold;
}
.comobirdade{
    font-size: large;
    color:  var(--darker-green);
    font-weight: bold;
}
.aluno-info{
    margin-left: 2vw;
}

</style>
