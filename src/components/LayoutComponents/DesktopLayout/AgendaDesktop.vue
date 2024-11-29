<script setup>
import MapMarkerOutline from 'vue-material-design-icons/MapMarkerOutline.vue'
import CalendarMonthOutline from 'vue-material-design-icons/CalendarMonthOutline.vue'
</script>

<template>

<div class="Agenda">
    <div class="Titulo">
    <h1>Agenda de conselho</h1>
    
</div>
<div class="Conselho">
    <p>Conselho com a Turma 3info1</p> 
    <div class="Info">
      <p> <MapMarkerOutline size="25"/> E-304</p>
      <p> <CalendarMonthOutline size="25"/>16/06/2024 - 13:00</p> 
    </div>
</div>

</div>

</template>

<style scoped>
.Agenda{
    display: flex;
    flex-direction: column;
    justify-self: self-start;
    height: 80vh;
    font-family: 'Poppins';
    width: 24vw;
    text-align: center;
    align-items: center;
    margin-top: 5vh;
    position: absolute;
    right: 1vw;
    border: 2px solid var(--gray);
    border-radius: 10px;    

}
.Conselho{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    border-bottom: 2px solid var(--gray);
    gap: 1rem;
}
.Titulo{
    width: 100%;
    font-weight: bold;
    border-bottom: 2px solid var(--gray);
    padding-top: 2rem ;
    color: var(--darker-green);
}
.Info{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 2rem;
    
}
p{
    display: flex;
    justify-content: center;
    margin :0;
    font-size: 18px;
    color: var(--black);
}


</style>