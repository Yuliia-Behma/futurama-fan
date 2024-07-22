<script setup>
import GalleryCharacterCard from "@/components/GalleryCharacterCard.vue";
import data from "../assets/data/characters.json";

const [fry, leela, bender, emy, professor, hermes, zoidberg] = data.characters;

</script>

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
          <div id="fry" class="characterItem">
            <img
              src="../assets/img/Characters/Screen_Fry/Fry-HD.png"
              alt="fry"
            />
          </div>
          <div id="leela" class="characterItem">
            <img
              src="../assets/img/Characters/Screen_Leela/Leela-HD.png"
              alt="leela"
            />
          </div>
          <div id="bender" class="characterItem">
            <img
              src="../assets/img/Characters/Screen_Bender/Bender-HD.png"
              alt="bender"
            />
          </div>
          <div id="professor" class="characterItem">
            <img
              src="../assets/img/Characters/Screen_Professor/P-Farnswort-HD.png"
              alt="professor"
            />
          </div>
          <div id="emy" class="characterItem">
            <img
              src="../assets/img/Characters/Screen_Emy/Emy-HD.png"
              alt="emy"
            />
          </div>
          <div id="hermes" class="characterItem">
            <img
              src="../assets/img/Characters/Screen_Hermes/Hermes-HD.png"
              alt="hermes"
            />
          </div>
          <div id="zoidberg" class="characterItem">
            <img
              src="../assets/img/Characters/Screen_Zoidberg/Zoidberg-HD.png"
              alt="zoidberg"
            />
          </div>
        </div>
      </tab>
      <tab name="Фрай">
        <GalleryCharacterCard>
          <template v-slot:img1>
            <img
              class="personImg1"
              src="../assets/img/Characters/Screen_Fry/Fry-HD.png"
              alt="fry main picture"
            />
          </template>
          <template v-slot:heading>
            <h4 class="slot-heading">{{ fry.name }}</h4>
          </template>
          <template v-slot:descr>
            <p class="slot-descr">{{ fry.descriptions }}</p>
          </template>
          <template v-slot:img2>
            <img
              class="personImg2"
              src="../assets/img/Characters/Screen_Fry/Fry-screen-1.jpg"
              alt="fry in the city"
            />
          </template>
          <template v-slot:img3>
            <img
              class="personImg2"
              src="../assets/img/Characters/Screen_Fry/Fry-screen-2.jpg"
              alt="fry in the city"
            />
          </template>
        </GalleryCharacterCard>
      </tab>
      <tab name="Ліла">
        <GalleryCharacterCard>
          <template v-slot:img1>
            <img
              class="personImg1"
              src="../assets/img/Characters/Screen_Leela/Leela-HD.png"
              alt="fry main picture"
            />
          </template>
          <template v-slot:heading>
            <h4 class="slot-heading">{{ leela.name }}</h4>
          </template>
          <template v-slot:descr>
            <p class="slot-descr">{{ leela.descriptions }}</p>
          </template>
          <template v-slot:img2>
            <img
              class="personImg2"
              src="../assets/img/Characters/Screen_Leela/Leela-screen-1.jpg"
              alt="fry in the city"
            />
          </template>
          <template v-slot:img3>
            <img
              class="personImg2"
              src="../assets/img/Characters/Screen_Leela/Leela-screen-2.jpg"
              alt="fry in the city"
            />
          </template>
        </GalleryCharacterCard>
      </tab>
      <tab name="Бендер">
        <GalleryCharacterCard>
          <template v-slot:img1>
            <img
              class="personImg1"
              src="../assets/img/Characters/Screen_Bender/Bender-HD.png"
              alt="fry main picture"
            />
          </template>
          <template v-slot:heading>
            <h4 class="slot-heading">{{ bender.name }}</h4>
          </template>
          <template v-slot:descr>
            <p class="slot-descr">{{ bender.descriptions }}</p>
          </template>
          <template v-slot:img2>
            <img
              class="personImg2"
              src="../assets/img/Characters/Screen_Bender/Bender-screen-1.jpg"
              alt="fry in the city"
            />
          </template>
          <template v-slot:img3>
            <img
              class="personImg2"
              src="../assets/img/Characters/Screen_Bender/Bender-screen-2.jpg"
              alt="fry in the city"
            />
          </template>
        </GalleryCharacterCard>
      </tab>
      <tab name="Емі">
        <GalleryCharacterCard>
          <template v-slot:img1>
            <img
              class="personImg1"
              src="../assets/img/Characters/Screen_Emy/Emy-HD.png"
              alt="fry main picture"
            />
          </template>
          <template v-slot:heading>
            <h4 class="slot-heading">{{ emy.name }}</h4>
          </template>
          <template v-slot:descr>
            <p class="slot-descr">{{ emy.descriptions }}</p>
          </template>
          <template v-slot:img2>
            <img
              class="personImg2"
              src="../assets/img/Characters/Screen_Emy/Emy-screen-1.jpg"
              alt="fry in the city"
            />
          </template>
          <template v-slot:img3>
            <img
              class="personImg2"
              src="../assets/img/Characters/Screen_Emy/Emy-screen-2.jpg"
              alt="fry in the city"
            />
          </template>
        </GalleryCharacterCard>
      </tab>
      <tab name="Гермес">
        <GalleryCharacterCard>
          <template v-slot:img1>
            <img
              class="personImg1"
              src="../assets/img/Characters/Screen_Hermes/Hermes-HD.png"
              alt="fry main picture"
            />
          </template>
          <template v-slot:heading>
            <h4 class="slot-heading">{{ hermes.name }}</h4>
          </template>
          <template v-slot:descr>
            <p class="slot-descr">{{ hermes.descriptions }}</p>
          </template>
          <template v-slot:img2>
            <img
              class="personImg2"
              src="../assets/img/Characters/Screen_Hermes/Hermes-screen-1.jpg"
              alt="fry in the city"
            />
          </template>
          <template v-slot:img3>
            <img
              class="personImg2"
              src="../assets/img/Characters/Screen_Hermes/Hermes-screen-2.jpg"
              alt="fry in the city"
            />
          </template>
        </GalleryCharacterCard>
      </tab>
      <tab name="Професор Фарнсворт">
        <GalleryCharacterCard>
          <template v-slot:img1>
            <img
              class="personImg1"
              src="../assets/img/Characters/Screen_Professor/P-Farnswort-HD.png"
              alt="fry main picture"
            />
          </template>
          <template v-slot:heading>
            <h4 class="slot-heading">{{ professor.name }}</h4>
          </template>
          <template v-slot:descr>
            <p class="slot-descr">{{ professor.descriptions }}</p>
          </template>
          <template v-slot:img2>
            <img
              class="personImg2"
              src="../assets/img/Characters/Screen_Professor/Professor-screen-1.jpg"
              alt="fry in the city"
            />
          </template>
          <template v-slot:img3>
            <img
              class="personImg2"
              src="../assets/img/Characters/Screen_Professor/Professor-screen-2.jpg"
              alt="fry in the city"
            />
          </template>
        </GalleryCharacterCard>
      </tab>
      <tab name="Джон Зойдберґ">
        <GalleryCharacterCard>
          <template v-slot:img1>
            <img
              class="personImg1"
              src="../assets/img/Characters/Screen_Zoidberg/Zoidberg-HD.png"
              alt="fry main picture"
            />
          </template>
          <template v-slot:heading>
            <h4 class="slot-heading">{{ zoidberg.name }}</h4>
          </template>
          <template v-slot:descr>
            <p class="slot-descr">{{ zoidberg.descriptions }}</p>
          </template>
          <template v-slot:img2>
            <img
              class="personImg2"
              src="../assets/img/Characters/Screen_Zoidberg/Zoidberg-screen-1.jpg"
              alt="fry in the city"
            />
          </template>
          <template v-slot:img3>
            <img
              class="personImg2"
              src="../assets/img/Characters/Screen_Zoidberg/Zoidberg-screen-2.jpg"
              alt="fry in the city"
            />
          </template>
        </GalleryCharacterCard>
      </tab>
    </tabs>
  </div>
</template>

<style scoped>
.allWrapper {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: repeat(6, 1fr);
  gap: 24px;
}

.characterItem {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

#fry {
  grid-row: span 3;
  background-color: #101f49;
}

#fry > img {
  height: 388px;
}

#emy {
  grid-row: span 3;
  background-color: #233876;
}

#emy > img {
  height: 388px;
}

#bender {
  grid-row: span 2;
  background-color: #101f49;
}

#bender > img {
  height: 250px;
}

#professor {
  grid-row: span 2;
  background-color: #233876;
}

#professor > img {
  height: 250px;
}

#zoidberg {
  grid-row: span 2;
  background-color: #101f49;
}

#zoidberg > img {
  height: 250px;
}

#hermes {
  grid-row: span 2;
  background-color: #101f49;
}

#hermes > img {
  height: 250px;
}

#leela {
  grid-row: span 4;
  background-color: #233876;
}

#leela > img {
  height: 520px;
}

.personImg1 {
  height: 388px;
}

.personImg2 {
  width: 100%;
}

.slot-heading {
  font-family: futurama-bold;
  font-size: 30px;
  font-weight: 700;
  color: #e3a008;
  margin: 0 0 8px;
}

.slot-descr {
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 4%;
  color: #d1d5db;
  margin: 0;
}
</style>
