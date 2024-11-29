<script setup>
import { ref } from 'vue';

import Eye from "vue-material-design-icons/Eye.vue";
import EyeClosed from "vue-material-design-icons/EyeClosed.vue";

const isVisible = ref(false);

const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
    console.log(isVisible)
}

</script>

<template>
    <div class="logo">
        <img src="../../../../public/logoIf.png" alt="">
        <h2>Faça login</h2>
    </div>
    <div class="container">

        <div class="form">
            <label for="email">Email</label>
            <input type="text" id="email">

            <label for="senha">Senha</label>
            <div class="container-senha">
                <input :type="isVisible ? 'text' : 'password'" id="senha">
                <label @click="toggleVisibility">
                    <Eye v-if="isVisible"/>
                    <EyeClosed v-else/>
                </label>
            </div>

            <button>Enviar</button>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 0 2% 0 2%;
        align-content: center;
        text-align: center;
        width: 90%;
        height: 50vh;
        background-color: var(--lighter-gray);
        color : var(--black);
        margin: auto;
        align-self: center;
        border: 1px solid var(--gray);
        border-radius: 10px;
    }

    .form {
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-content: center;
        text-align: center;
    }

    .form > input {
        height: 20%;
        margin-top: 2%;
    }

    .form > label {
        margin-top: 3%;
        display: flex;
    }
    
    
    .container-senha {
        position: relative;
        display: flex;
        width: 100%;
        height: 20%;
    }
    
    .container-senha > input {
        width: 100%;
        border-radius: 6px;

    }
    
    .container-senha > label {
        position: absolute;
        right: 0;
        top: 0;
        width: 10%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    button {
        height: 20%;
        margin-top: 5%;
        border: none;
        border-radius: 6px;
        color: var(--white);
        background-color: var(--darker-green);
        font-size: 0.9rem;
        font-weight: 500;
    }

    input:focus {
        outline: none;
    }

    input {
        border: 1px solid var(--gray);
        border-radius: 6px;
        padding: 0 2%;
        font-size: 0.9rem;
    }

    .logo {
        display: flex;
        align-content: center;
        flex-direction: column;
        text-align: center;
    }

    img {
        margin: auto;
        width: 20%;
    }

</style>