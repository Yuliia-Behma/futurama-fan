<script setup>
import InfoCard from "@/components/InfoCard.vue";
import PhotoCard from "@/components/PhotoCard.vue";
import data from "@/assets/data/characters.json";
import { onMounted, ref } from "vue";

const firstCharacters = ref([]);
onMounted(() => {
  for (let i = 0; i < 2; i++) {
    firstCharacters.value.push(data.characters[i]);
    console.log(data.characters[i]);
  }
});
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
      <div
        v-for="character in firstCharacters"
        :key="character.name"
        class="character-block"
      >
        <InfoCard>
          <template v-slot:heading>
            <h4 class="slot-heading">{{ character.name }}</h4>
          </template>
          <template v-slot:parag>
            <p class="slot-parag">
              {{ character.descriptions }}
            </p>
          </template>
        </InfoCard>
        <PhotoCard>
          <img
            class="slot-photo-fry"
            :src="require(`../assets/img/Characters/${character.picture}`)"
            :alt="character.name"
          />
        </PhotoCard>
      </div>
    </div>
    <div class="link-div">
      <a href="#gallery"
        >Усі головні персонажі
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.24525 2.20462L5.24525 2.20462L15.7681 9.94625C15.8574 10.0119 15.9297 10.0959 15.9794 10.1918C16.0292 10.2878 16.055 10.3931 16.055 10.4999C16.055 10.6066 16.0292 10.712 15.9794 10.8079C15.9297 10.9038 15.8574 10.9878 15.7681 11.0535L5.24525 18.7951L5.24558 18.7956L5.24525 18.7951C5.12418 18.885 4.94502 18.8038 4.94502 18.657V16.9574C4.94502 16.8499 4.99629 16.7467 5.08718 16.6809L5.08685 16.6804L5.08718 16.6809L13.4905 10.5003L13.4902 10.4999L13.4898 10.4994L13.489 10.4984L5.08718 4.31888C5.08718 4.31888 5.08718 4.31888 5.08718 4.31887C4.99861 4.25301 4.94502 4.14984 4.94502 4.04229L4.94502 2.34269L4.94502 2.34269C4.94485 2.30984 4.95453 2.27761 4.97293 2.2497C4.99134 2.22179 5.01774 2.19933 5.04909 2.18491C5.08044 2.17048 5.11548 2.16468 5.15018 2.16817C5.18488 2.17166 5.21783 2.18429 5.24525 2.20462Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0.00111607"
          /></svg></a>
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

.character-block:nth-child(even) {
  flex-direction: row-reverse;
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
  line-height: 125%;
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
.slot-photo-leela {
  width: 100%;
}

.link-div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.link-div a {
  display: flex;
  align-items: center;
}

.link-div a svg {
  margin-left: 8px;
}

a {
  font-family: futurama-bold;
  text-decoration: underline;
  color: #3f83f8;
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.02em;
  text-decoration-skip-ink: none;
}

a:hover {
  color: #76a9fa;
}
</style>
