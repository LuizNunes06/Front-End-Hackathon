<script setup>
import TshirtCrewOutline from 'vue-material-design-icons/TshirtCrewOutline.vue';
import ClockAlertOutline from 'vue-material-design-icons/ClockAlertOutline.vue';
import CalendarAlertOutline from 'vue-material-design-icons/CalendarAlertOutline.vue';
import FileDocumentAlertOutline from 'vue-material-design-icons/FileDocumentAlertOutline.vue';
</script>
<template>
    <main>
        <div class="container">
            <div class="top">
                <h1>Consulta de Turma</h1>
                <div class="Filter" v-if="!isVisible">
                    <select name="Turmas" id="" class="default-filtro">
                        <option value="" selected>Filtro</option>
                        <option value="Turma">3info1</option>
                        <option value="Turma">3info2</option>
                        <option value="Turma">3info3</option>
                    </select>
                </div>
                <div class="type-occurences">
                    <div class="column1">
                        <p>
                        <div class="line-icon"></div>Notas acima de 6</p>
                        <p>
                        <div class="line-icon-bad"></div> Notas abaixo de 6</p>
                        <p>
                            <TshirtCrewOutline /> Sem uniforme
                        </p>
                    </div>
                    <div class="column2">
                        <p>
                            <ClockAlertOutline /> Atrasos
                        </p>
                        <p>
                            <CalendarAlertOutline /> Reunião no NUPE
                        </p>
                        <p>
                            <FileDocumentAlertOutline /> Outro
                        </p>
                    </div>
                </div>
            </div>
            <div class="lista-aluno">
                <div class="aluno">
                    <div class="info-icon">
                        <p><TshirtCrewOutline/>1</p>
                        <p><ClockAlertOutline/>2</p>
                        <p><CalendarAlertOutline/>1</p>
                        <p><FileDocumentAlertOutline/>3</p>
                    </div>
                    <div class="info-aluno">
                        <p class="matricula">matricula</p>
                        <p class="nome">nome</p>
                        <p class="comobirdade">comorbidade</p>
                        <p class="gmail">gmail</p>
                        <router-link to="/aluno">
                            <button>Ver detalhe</button>
    
                        </router-link>
                        <router-link to="/ocorrencias">
                            <button>Registrar Ocorrência</button>
    
                        </router-link>
                    </div>
                </div>
                <div class="aluno1">
                    <div class="info-icon">
                        <p><TshirtCrewOutline/>1</p>
                        <p><ClockAlertOutline/>2</p>
                        <p><CalendarAlertOutline/>1</p>
                        <p><FileDocumentAlertOutline/>3</p>
                    </div>
                    <div class="info-aluno">
                        <p class="matricula">matricula</p>
                        <p class="nome">nome</p>
                        <p class="comobirdade">comorbidade</p>
                        <p class="gmail">gmail</p>
                        <router-link to="/aluno">
                            <button>Ver detalhe</button>
    
                        </router-link>
                        <router-link to="/ocorrencias">
                            <button>Registrar Ocorrência</button>
    
                        </router-link>
                    </div>
                </div>
                <div class="aluno">
                    <div class="info-icon">
                        <p><TshirtCrewOutline/>1</p>
                        <p><ClockAlertOutline/>2</p>
                        <p><CalendarAlertOutline/>1</p>
                        <p><FileDocumentAlertOutline/>3</p>
                    </div>
                    <div class="info-aluno">
                        <p class="matricula">matricula</p>
                        <p class="nome">nome</p>
                        <p class="comobirdade">comorbidade</p>
                        <p class="gmail">gmail</p>
                        <router-link to="/aluno">
                            <button>Ver detalhe</button>
    
                        </router-link>
                        <router-link to="/ocorrencias">
                            <button>Registrar Ocorrência</button>
    
                        </router-link>
                    </div>
                </div>
                <div class="aluno1">
                    <div class="info-icon">
                        <p><TshirtCrewOutline/>1</p>
                        <p><ClockAlertOutline/>2</p>
                        <p><CalendarAlertOutline/>1</p>
                        <p><FileDocumentAlertOutline/>3</p>
                    </div>
                    <div class="info-aluno">
                        <p class="matricula">matricula</p>
                        <p class="nome">nome</p>
                        <p class="comobirdade">comorbidade</p>
                        <p class="gmail">gmail</p>
                        <router-link to="/aluno">
                            <button>Ver detalhe</button>
    
                        </router-link>
                        <router-link to="/ocorrencias">
                            <button>Registrar Ocorrência</button>
    
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
.info-icon{
    display: flex;
    flex-direction: column;
    margin-left: -3vw;
}
.info-icon p{
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.3rem;
}
.nome{
    font-size: larger;
    font-weight: bold;
}
.comobirdade{
    font-size: large;
    color:  var(--darker-green);
}
.aluno{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 45vw;
    border: 2px solid var(--gray);
    border-radius: 10px;
    padding: 2vh;
    margin-top: 5vh;
}
.aluno1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 45vw;
    border: 2px solid var(--red);
    border-radius: 10px;
    padding: 2vh;
    margin-top: 5vh;
}
.info-aluno {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
}
.info-aluno p{
    margin: 0;
}
.top{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

}

h1 {
    font-family: 'Poppins';
    color: var(--darker-green);

}

.Filter {
    display: flex;
    justify-content: center;
    width: 80%;
    border: 2px solid var(--gray);
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 1rem;
}

.default-filtro {
    width: 100%;
    height: 6vh;
    font-family: 'Poppins';
    font-size: 18px;
    border: 2px solid var(--gray);
}

.type-occurences {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4rem;
    width: 90%;
    border-bottom: 2px solid var(--gray);
    padding-bottom: 2vh;

}

.type-occurences p {
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0;
    font-size: 16px;
    gap: 0.8rem;
    font-family: 'Poppins';
    font-size: 14px;
}

.line-icon {
    width: 1.5rem;
    height: 0.15rem;
    background-color: var(--black);
}

.line-icon-bad {
    width: 1.5rem;
    height: 0.15rem;
    background-color: var(--red);
}

.column1 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.column2 {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}


</style>