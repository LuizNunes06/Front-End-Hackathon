<script setup>
</script>

<template>
    <h1>Observações</h1>
    <div class="container">
        <div class="date">
            <h4>Observação do dia</h4>
            <h4>21/04/2025</h4>
        </div>

        <div class="observation">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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

    .date {
        display: flex;
    }

    .observation {
        display: flex;
    }

    .observation > p {
        width: 100%;
        word-break: break-all;
        font-size: 0.9rem;
    }
</style>