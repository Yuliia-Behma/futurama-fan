<script setup>
import BlueButton from "@/components/BlueButton.vue";
import data from "@/assets/data/films.json";
import { onMounted, ref } from "vue";

const filmsArr = data.films;
const activeIndex = ref(0);
const isLeftDisabled = ref(true);
const isRightDisabled = ref(false)

onMounted(() => {
    checkActiveItem();
})

const decrement = () => {
    if (activeIndex.value > 0) {
        if (isRightDisabled.value === true) {
            isRightDisabled.value = false;
        }

        activeIndex.value--;

        if (activeIndex.value == 0) {
            isLeftDisabled.value = true;
        }
        checkActiveItem();
    } else {
        isLeftDisabled.value = true;
        checkActiveItem();
  }
}

const increment = () => {
    if (activeIndex.value < filmsArr.length - 1) {
        if (isLeftDisabled.value === true) {
            isLeftDisabled.value = false;
        }

        activeIndex.value++;

        if (activeIndex.value === filmsArr.length - 1) {
            isRightDisabled.value = true;
        } 
        checkActiveItem();
    }
}

const checkActiveItem = () => {
    filmsArr.forEach((film) => (activeIndex.value === film.id) ? film.isActive = true : film.isActive = false)
}

const clickEvent = (e) => {
    console.log(e);
    activeIndex.value = +e.target.name;
    switch (e.target.name) {
        case "0":
            isLeftDisabled.value = true;
            isRightDisabled.value = false;
            break;
        case "1":
        case "2":
            isLeftDisabled.value = false;
            isRightDisabled.value = false;
            break;
        case "3":
            isLeftDisabled.value = false;
            isRightDisabled.value = true;
            break;
    }
    checkActiveItem();
}
</script>

<template>
  <div class="first-wraper">
    <img
      class="right-side-icon"
      src="../assets/img/icons3D/laptop-icon.svg"
      alt="laptop"
    />
    <div class="heading-block heading-with-btns">
      <div class="heading-item">
        <img src="../assets/img/icons3D/laptop-icon-1.svg" alt="icon" />
        <h2>Серi<span class="special-font">ї</span> фiльми</h2>
      </div>
      <div class="heading-item buttons">
        <BlueButton :disabled="isLeftDisabled" class="reverse" @click="decrement"></BlueButton>
        <BlueButton :disabled="isRightDisabled" @click="increment"></BlueButton>
      </div>
    </div>
    <div class="carrousel">
      <div class="carrousel-item first" :class="{'active-carrousel-item': filmsArr[0].isActive === true}" data-augmented-ui="r-clip-y bl-clip" >
        <div class="poster"><img name="0" @click="clickEvent" src="../assets/img/Films/Movie-1.jpg" alt="movie 1"></div>
      </div>
      <div class="carrousel-item second" :class="{'active-carrousel-item': filmsArr[1].isActive === true}" data-augmented-ui="tl-clip-y tr-clip-y br-clip-y bl-clip-y">
        <div class="poster"><img name="1" @click="clickEvent" src="../assets/img/Films/Movie-2.jpg" alt="movie 2"></div>
      </div>
      <div class="carrousel-item third" :class="{'active-carrousel-item': filmsArr[2].isActive === true}" data-augmented-ui="tr-clip-y br-clip-y l-clip-y">
        <div class="poster"><img name="2" @click="clickEvent" src="../assets/img/Films/Movie-3.jpg" alt="movie 3"></div>
      </div>
      <div class="carrousel-item fourth" :class="{'active-carrousel-item': filmsArr[3].isActive === true}" data-augmented-ui="br-clip l-clip-y">
        <div class="poster"><img name="3" @click="clickEvent" src="../assets/img/Films/Movie-4.jpg" alt="movie 4"></div>
      </div>
    </div>
    <div
      class="describe-augmented-block"
      data-augmented-ui="br-2-clip-x bl-clip border"
    >
      <h4 class="title">{{ filmsArr[activeIndex].title }}</h4>
      <p class="info">
        {{ filmsArr[activeIndex].info }}
      </p>
      <a class="watch-link" target="_blank" :href="filmsArr[activeIndex].link"
        >Дивитись
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.74525 1.70475L4.74525 1.70475L15.2681 9.44637C15.3574 9.51203 15.4297 9.59602 15.4794 9.69196C15.5292 9.78789 15.555 9.89324 15.555 9.99999C15.555 10.1067 15.5292 10.2121 15.4794 10.308C15.4297 10.404 15.3574 10.4879 15.2681 10.5536L4.74525 18.2952L4.74558 18.2957L4.74525 18.2952C4.62418 18.3851 4.44502 18.304 4.44502 18.1572V16.4576C4.44502 16.35 4.49629 16.2468 4.58718 16.181L4.58685 16.1805L4.58718 16.181L12.9905 10.0004L12.9902 9.99999L12.9898 9.99954L12.989 9.99848L4.58718 3.819C4.58718 3.819 4.58718 3.819 4.58718 3.819C4.49861 3.75314 4.44502 3.64996 4.44502 3.54241L4.44502 1.84282L4.44502 1.84281C4.44485 1.80996 4.45453 1.77773 4.47293 1.74982C4.49134 1.72191 4.51774 1.69945 4.54909 1.68503C4.58044 1.67061 4.61548 1.6648 4.65018 1.66829C4.68488 1.67178 4.71783 1.68442 4.74525 1.70475Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0.00111607"
          /></svg></a>
    </div>
  </div>
</template>

<style scoped>
.special-font{
    font-family: futura-medium;
}

.heading-with-btns {
  justify-content: space-between;
}

.heading-item {
  display: flex;
}

.buttons {
  gap: 24px;
}

.carrousel {
  margin: 22px 0 24px;
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: space-between;
  user-select: none;
}

.carrousel-item{
    width: 264px;
    height: 100%;
    background-color: #233876;
}

.first{
    --aug-bl: 16px;
    --aug-r-extend1: 32px;
    --aug-r1: 4px;
}

.second{
    --aug-tl1: 3px;
    --aug-bl1: 3px;
    --aug-tl-inset2: 160px;
    --aug-bl-inset1: 160px;
    --aug-tr-inset1: 160px;
    --aug-br-inset2: 160px;
    --aug-tr1: 3px;
    --aug-br1: 3px;
}

.third{
    --aug-l1: 4px;
    --aug-l-extend1: 32px;
    --aug-tr-inset1: 160px;
    --aug-br-inset2: 160px;
    --aug-tr1: 3px;
    --aug-br1: 3px;
}

.fourth{
    --aug-l1: 4px;
    --aug-l-extend1: 32px;
    --aug-br1: 16px;
}

.poster{
    width: 232px;
    height: 100%;
    box-sizing: border-box;
    padding: 8px 0;
    margin: 0 auto;
}

.poster img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.64;
}

.active-carrousel-item{
    background-color: #1A56DB;
}

.active-carrousel-item>div>img{
    opacity: 1;
}

.describe-augmented-block {
  width: 100%;
  height: 314px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px 16px 40px;

  --aug-border-all: 2px;
  --aug-border-bg: #1e429f;
  --aug-br-extend2: 958px;
  --aug-br1: 40px;
  --aug-br2: 16px;
  --aug-bl: 16px;
}

.title {
  font-family: futurama-bold;
  font-size: 30px;
  font-weight: 700;
  color: #e3a008;
  margin: 0 0 16px;
  line-height: 125%;
}

.info {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #d1d5db;
  margin: 0 0 16px;
}

.watch-link {
  font-family: futurama-bold;
  text-decoration: underline;
  color: #3f83f8;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  text-decoration-skip-ink: none;
  margin-top:auto;
}

.watch-link:hover {
  color: #76a9fa;
}

.watch-link svg {
  margin-left: 8px;
}
</style>
