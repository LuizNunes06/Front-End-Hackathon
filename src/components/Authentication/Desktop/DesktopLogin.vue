<script setup>
import { ref } from 'vue';

// import EyeClosed from "vue-material-design-icons/EyeClosed.vue";

const isVisible = ref(false);

const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
    console.log(isVisible)
}

</script>

<template>
    <div class="logo">
        <img src="" alt="">
    </div>
    <div class="container">
        <h1>Faça login</h1>

        <div class="form">
            <label for="email">Email</label>
            <input type="text" id="email">

            <label for="senha">Senha</label>
            <div class="container-senha">
                <input :type="isVisible ? 'text' : 'password'" id="senha">
                <label @click="toggleVisibility">
                    <!-- <EyeClosed /> -->
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
        width: 20%;
        height: 45vh;
        background-color: var(--gray);
        color : var(--black);
    }

    .form {
        background-color: red;
        height: 55%;
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
        background-color: crimson;
        margin-top: 2%;
        display: flex;
    }

    button {
        height: 20%;
        margin-top: 5%;
        border: none;
        color: var(--white);
        background-color: var(--darker-green);
    }

    .container-senha {
        position: relative;
        display: flex;
        width: 100%;
        height: 22%;
        background-color: aqua;
    }

    .container-senha > input {
        width: 100%;
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
</style>