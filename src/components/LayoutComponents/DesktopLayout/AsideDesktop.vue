<script setup>
import ClipBoardAlert from "vue-material-design-icons/ClipboardAlert.vue";
import History from "vue-material-design-icons/History.vue";
import Account from "vue-material-design-icons/Account.vue";  
import AccountGroup from "vue-material-design-icons/AccountGroup.vue";  

import { RouterLink } from "vue-router";

</script>
<template>
    <aside>
        <div class="Conselho">
            <button>+ Criar conselho</button>
        </div>
        <div class="Acoes">
            <RouterLink class="link" to="/"><ClipBoardAlert size="30"/> Ocorrências</RouterLink>
            <RouterLink class="link" to="/sadasd"><History size="30"/>Histórico de Conselhos</RouterLink>
            <RouterLink class="link" to="/sadasd"><Account size="30"/>Consultar Turma</RouterLink>
            <RouterLink class="link" to="/sadasd"><AccountGroup size="30"/>Consultar Aluno</RouterLink>
        </div>
    </aside>
</template>
<style scoped>
aside{
    display: flex;
    flex-direction: column;
    align-items: left;
    background-color: white;
    width: 20vw;
    border-right: 2px solid var(--gray);
    height: 90vh;
    font-size: larger;
}
.Conselho{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
}
.Acoes{
    font-family: 'Poppins';
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    margin-right:2vw ;
    gap: 1rem;
}
button{
    background-color: var( --darker-green);
    height: 4vh;
    width: 15vw;
    border: none;
    color: white;
    border-radius: 10px;
    font-size: larger;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2vh;
    gap: 0.5rem;
}
button:hover{
    cursor: pointer;
    filter: drop-shadow(0 1px 10px var(--gray));}

p{   
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Poppins';
    margin-left: 2vw;
    padding: 1vh;
    
}
p:hover{
    background-color: var(--dark);
    border-radius: 10px;
    cursor: pointer;
    scale: 1.1;
    padding: 0.5vw;
    transition: 0.2s ease-in-out;
}
.link{   
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Poppins';
    margin-left: 2vw;
    color: var(--black);
    text-decoration: none;
}
.link:hover{
    background-color: var(--lighter-gray);
    border-radius: 10px;
    cursor: pointer;
    scale: 1;
    padding: 0.5vw;
    transition: 0.2s ease-in-out;
}

.router-link-exact-active{
    background-color: var(--gray);
    border-radius: 10px;
    padding: 0.5vw;

}
</style>