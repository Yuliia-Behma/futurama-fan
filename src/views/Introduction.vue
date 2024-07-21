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
      <a href="#gallery">Усі головні персонажі ></a>
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
