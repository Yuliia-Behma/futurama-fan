<script setup>
import InfoCard from "@/components/InfoCard.vue";
import PhotoCard from "@/components/PhotoCard.vue";
</script>

<template>
  <div class="first-wraper">
    <img
      class="left-side-icon"
      src="../assets/img/icons3D/globes-icon.svg"
      alt="globe"
    />
    <div class="heading-block">
      <img src="../assets/img/icons3D/passports-icon.svg" alt="icon" />
      <h2>Знайомство</h2>
    </div>
    <div class="character-wraper">
      <div class="character-block">
        <InfoCard>
          <template v-slot:heading>
            <h4 class="slot-heading">Філіп Джей Фрай</h4>
          </template>
          <template v-slot:parag>
            <p class="slot-parag">
              Відомий як Фрай, народився 14 серпня 1974 року. Заморозив себе в
              кріогенній камері за кілька секунд до 2000 року. Розморозився
              наприкінці 2999 року і надалі став кур'єром у компанії
              «Міжпланетний Експрес».
            </p>
          </template>
        </InfoCard>
        <PhotoCard>
          <img
            class="slot-photo-fry"
            src="../assets/img/Characters/Character_Fry.png"
            alt="fry"
          />
        </PhotoCard>
      </div>
      <div class="character-block">
        <PhotoCard>
          <img
            class="slot-photo-leela"
            src="../assets/img/Characters/Character_Leela.png"
            alt="leela"
          />
        </PhotoCard>
        <InfoCard>
          <template v-slot:heading>
            <h4 class="slot-heading">Туранга Ліла</h4>
          </template>
          <template v-slot:parag>
            <p class="slot-parag">
              Є капітаном корабля Planet Express, cтверджує, що є єдиним
              представником інопланетної раси на Землі, але насправді Ліла
              мутант, якого в самому ранньому дитинстві підкинули в у притулок.
            </p>
          </template>
        </InfoCard>
      </div>
    </div>
    <div class="link-div">
      <a href="#">Усі головні персонажі ></a>
    </div>
  </div>
</template>

<style scoped>
.character-wraper {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 24px;
  margin-bottom: 42px;
}

.character-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.slot-heading {
  font-family: futurama-bold;
  font-size: 30px;
  font-weight: 700;
  color: #e3a008;
  margin: 0 0 8px;
}

.slot-parag {
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 4%;
  color: #d1d5db;
  margin: 0;
}

.slot-photo-fry {
  width: 73%;
}
.slot-photo-leela{
  width: 100%;
}

.link-div{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 82px;
}

a {
  font-family: futurama-bold;
  text-decoration: none;
  color: #3f83f8;
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
}

a:hover {
  color: #76a9fa;
}
</style>
