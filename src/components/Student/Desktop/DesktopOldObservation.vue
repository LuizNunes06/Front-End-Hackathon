<script setup>
</script>

<template>
    <h1>Observações</h1>
    <div class="container">
        <div class="data">
            <h4>Observação do dia</h4>
            <h4>21/04/2025</h4>
        </div>

        <div class="observacao">
            <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        background-color: var(--white);
        border: 1px solid var(--gray);
        padding: 1%;
        border-radius: 10px;
        width: 35%;
        height: 30vh;
    }

    .data {
        display: flex;
    }

    .observacao {
        display: flex;
    }

    .observacao > p {
        width: 100%;
        word-break: break-all;
        font-size: 0.9rem;
    }
</style>