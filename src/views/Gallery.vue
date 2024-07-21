<script setup></script>

<template>
  <div class="first-wraper">
    <div class="heading-block">
      <img src="../assets/img/icons3D/photo-camera-icon.svg" alt="icon" />
      <h2>Галерея</h2>
    </div>
    <img
      class="right-side-icon"
      src="../assets/img/icons3D/photo-camera-icon-1.svg"
      alt="camera"
    />
    <tabs>
      <tab name="Усі">
        <div class="allWrapper">
            <div id="fry" class="characterItem"><img src="../assets/img/Characters/Screen_Fry/Fry-HD.png" alt="fry"></div>
            <div id="leela" class="characterItem"><img src="../assets/img/Characters/Screen_Leela/Leela-HD.png" alt="leela"></div>
            <div id="bender" class="characterItem"><img src="../assets/img/Characters/Screen_Bender/Bender-HD.png" alt="bender"></div>
            <div id="professor" class="characterItem"><img src="../assets/img/Characters/Screen_Professor/P-Farnswort-HD.png" alt="professor"></div>
            <div id="emy" class="characterItem"><img src="../assets/img/Characters/Screen_Emy/Emy-HD.png" alt="emy"></div>
            <div id="hermes" class="characterItem"><img src="../assets/img/Characters/Screen_Hermes/Hermes-HD.png" alt="hermes"></div>
            <div id="zoidberg" class="characterItem"><img src="../assets/img/Characters/Screen_Zoidberg/Zoidberg-HD.png" alt="zoidberg"></div>
        </div>
      </tab>
      <tab name="Фрай"> Hello Fri </tab>
      <tab name="Ліла"> I am Leela\ </tab>
      <tab name="Бендер"></tab>
      <tab name="Емі"></tab>
      <tab name="Гермес"></tab>
      <tab name="Професор Фарнсворт"></tab>
      <tab name="Джон Зойдберг"></tab>
    </tabs>
  </div>
</template>

<style scoped>
.allWrapper{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: repeat(6, 1fr);
    gap: 24px;
    
}

.characterItem{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}

#fry{
    grid-row: span 3;
    background-color: #101F49;
}

#fry >img{
    height: 388px;
}

#emy{
    grid-row: span 3;
    background-color: #233876;
}

#emy >img{
    height: 388px;
}

#bender{
    grid-row: span 2;
    background-color: #101F49;
}

#bender >img {
    height: 250px;
}

#professor{
    grid-row: span 2;
    background-color: #233876;
}

#professor >img {
    height: 250px;
}

#zoidberg{
    grid-row: span 2;
    background-color: #101F49;
}

#zoidberg >img {
    height: 250px;
}

#hermes{
    grid-row: span 2;
    background-color: #101F49;
}

#hermes >img {
    height: 250px;
}

#leela{
    grid-row: span 4;
    background-color: #233876;
}

#leela >img {
    height: 520px;
}
</style>
