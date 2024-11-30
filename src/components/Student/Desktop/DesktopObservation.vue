<script setup>
    import DesktopOldOccurence from './DesktopOldObservation.vue'
</script>

<template>
    <div class="container">
        <div class="form">
        <div class="observation">
            <label for="observation">
                <h1>Observações</h1>
            </label>

            <input type="text" id="observation">
        </div>

        <div class="actions">
            <h1>Ação a ser feita</h1>

            <div class="options">
                <span class="check-container">
                    <input type="checkbox" id="family-school" class="text-check" />
                    <label for="family-school" class="custom-check"></label>
                    <label for="family-school">Reunião Família Escola</label>
                </span>
                <span class="check-container">
                    <input type="checkbox" id="study-club" class="text-check" />
                    <label for="study-club" class="custom-check"></label>
                    <label for="study-club">Participação em Grupo de Estudo</label>
                </span>
                <span class="check-container">
                    <input type="checkbox" id="sisae" class="text-check" />
                    <label for="sisae" class="custom-check"></label>
                    <label for="sisae">Reunião SISAE</label>
                </span>
                <span class="check-container">
                    <input type="checkbox" id="course" class="text-check" />
                    <label for="course" class="custom-check"></label>
                    <label for="course">Reunião Coordenação de Curso</label>
                </span>
            </div>
        </div>
        </div>

        <DesktopOldOccurence />
    </div>
</template>

<style scoped>
    .check-container {
        display: flex;
        gap: 0.8vw;
        align-items: center;
        margin: 0.5vh 0;

        & input {
          display: none;
        }

        & input:checked + .custom-check {
          background-color: var(--green);
        }

        .custom-check {
          display: relative;
          width: 15px;
          height: 15px;
          border: 1px solid var(--green);
          display: inline;
        }
    }

    .container {
        padding: 1%;
        margin: auto;
        display: flex;
        flex-direction: column;
        width: 78%;
        height: 90vh;
        color: var(--black);
        border: 1px solid var(--gray);
        border-radius: 10px;
    }

    .observation {
        width: 65%;
        display: flex;
        flex-direction: column;

        & input {
            display: flex;
            justify-self: center;
            width: 95%;
            height: 32vh;
            border: 1px solid var(--gray);
            border-radius: 10px;
        }

        & input:focus {
            outline: none;
        }
    }

    .form {
        display: flex;
    }
</style>