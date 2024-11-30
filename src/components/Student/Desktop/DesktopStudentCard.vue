<script setup>
</script>

<template>
    <div class="container">
        <div class="foto-perfil">
            <img src="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2023/05/23/1456119290-vin-diesel-e-dwayne-johnson-3.jpeg"/>
        </div>

        <div class="infos">
            <p>2054365235</p>
            <p>2AGRO3</p>
            <h2>Cleiton Rasta</h2>
            <p>cleiton.rasta@gmail.com</p>
        </div>
    </div>
</template>

<style scoped>

    .container {
        padding: 4vh 2vw;
        display: flex;
        height: 50vh;
        width: 20vw;
        align-items: center;
        text-align: center;
        flex-direction: column;
        background-color: var(--white);
        border-radius: 10px;
        border: 1px solid var(--gray);
    }

    .foto-perfil > img {
        width: 60%;
    }
</style>
