<script setup>
import CommentTextMultipleOutline from 'vue-material-design-icons/CommentTextMultipleOutline.vue'
import FilterMobileComponent from '../../Form/FilterMobileComponent.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
</script>
<template>
  <div class="container">
    <h1>Consultar histórico</h1>
    <FilterMobileComponent />
    <div class="bt-router">
      <CommentTextMultipleOutline fill-color="var(--black)" class="icon" />
      <p>Ir para Comentários</p>
    </div>
    <div class="text-container">
      <p>
        <span class="name-color">Nome do usuário:</span> Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to make
      </p>
    </div>
    <div class="text-container">
      <p>
        <span class="name-color">Nome do usuário:</span> Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to make
      </p>
    </div>
    <div class="text-container">
      <p>
        <span class="name-color">Nome do usuário:</span> Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to make
      </p>
    </div>
  </div>
</template>
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vw;
}

h1 {
  color: var(--darker-green);
  font-size: 1.5em;
  margin-bottom: 8vw;
}

p {
  margin: 2vw 0 0 0;
}

.bt-router {
  display: flex;
  margin: 7vw 0 2vw 0;
  align-items: center;
  padding: 0 4vw;
  gap: 17vw;
  border: solid var(--darker-green) 1px;
  border-radius: 8px;
  width: 100%;
}

.text-container {
  border: 1px solid var(--gray);
  width: 100%;
  padding: 2vw 4vw 1vw 4vw;
  border-radius: 10px;
  line-height: 6vw;
  text-align: justify;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 3vw;
}

.name-color {
  color: var(--darker-green);
}

.icon {
  margin-top: 2vw;
}
</style>
