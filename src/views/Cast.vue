<script setup>
import BlueButton from "@/components/BlueButton.vue";
import data from "@/assets/data/cast.json";
import { onMounted, ref } from "vue";

const cast = data.cast;
const index = ref(0);
const fontColor = ref("");
const border = ref(null);
const photo = ref(null);
const rotateAngle = ref(0)

const characterNameParag = ref(null);

onMounted(() => {
  refreshColor();
});

const refreshColor = () => {
  fontColor.value = cast[index.value].fontColor;
  characterNameParag.value.style.color = fontColor.value;
};

const addingClassAppearance = () => {
  photo.value.classList.add("appearance")
  setTimeout(()=>{photo.value.classList.remove("appearance")}, 1000)
}

const rightBorderAnimation = () => {   
  rotateAngle.value += 72;
  document.documentElement.style.setProperty(
    "--rotateAngle",
    rotateAngle.value + "deg"
  )
  addingClassAppearance();
}

const leftBorderAnimation = () => {
  rotateAngle.value -= 72;
  document.documentElement.style.setProperty(
    "--rotateAngle",
    rotateAngle.value + "deg"
  )
  addingClassAppearance();
}

const increment = () => {
  rightBorderAnimation();
  if (index.value < cast.length - 1) {
    index.value++;
    refreshColor();
    console.log(fontColor.value);
  } else {
    index.value = 0;
    refreshColor();
    console.log(fontColor.value);
  }
};

const decrement = () => {
  leftBorderAnimation();
  if (index.value > 0) {
    index.value--;
    refreshColor();
    console.log(fontColor.value);
  } else {
    index.value = cast.length - 1;
    refreshColor();
    console.log(fontColor.value);
  }
};
</script>

<template>
  <div class="first-wraper">
    <img
      class="left-side-icon"
      src="../assets/img/icons3D/star-icon.svg"
      alt="star"
    />
    <div class="heading-block">
      <img src="../assets/img/icons3D/theatre-masks-icon-1.svg" alt="icon" />
      <h2>Актори</h2>
    </div>
    <div class="next-wrapper">
      <img class="decor" src="../assets/img/left-cast-decor.png" alt="decor" />
      <div class="main">
        <div class="cast-block">
          <div class="content-block">
            <BlueButton class="round reverse" @click="decrement"></BlueButton>
            <div class="actor">
                <img
                  ref="border"
                  class="transition-img rotate"
                  src="../assets/img/border.svg"
                  alt="frame"
                />
              <div class="photo">
                <img
                  :src="
                    require(`../assets/img/Actors/${cast[index].actorsPhoto}`)
                  "
                  alt="actor's photo" ref="photo"
                />
              </div>
            </div>
            <BlueButton class="round" @click="increment"></BlueButton>
          </div>
          <div class="details">
            <p class="actor-name">{{ cast[index].actorsName }}</p>
            <p ref="characterNameParag" class="characters-name">
              {{ cast[index].charactersName }}
            </p>
          </div>
        </div>
        <div class="characters-img">
          <img
            :src="
              require(`../assets/img/Characters/${cast[index].charactersImg}`)
            "
            alt="character's image"
          />
        </div>
      </div>
      <img class="decor" src="../assets/img/right-cast-decor.png" alt="decor" />
    </div>
  </div>
</template>

<style scoped>
.next-wrapper {
  width: 100%;
  height: 594px;
  display: flex;
  margin-top: 40px;
  user-select: none;
}

.main {
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  background-color: #0c1b43a3;
  height: 100%;
}

.cast-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 512px;
}

.content-block {
  width: 512px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actor {
  width: 320px;
  height: 320px;
  position: relative;
}

.photo {
  position: absolute;
  top: 49px;
  left: 49px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 4px solid #fdba8c;
  width: 222px;
  height: 222px;
  padding: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.characters-img {
  height: 514px;
  width: 472px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
}

.characters-img img {
  height: 514px;
}

.actor-name {
  font-family: futurama-bold;
  font-size: 30px;
  color: #fff;
  margin: 24px 0 12px;
}

.characters-name {
  margin: 0;
  font-family: futura-medium;
  font-size: 26px;
}

.rotate{
  transform: rotate(var(--rotateAngle));
  transition: all 0.5s ease-in-out;
}

.appearance{
  animation: appearance 0.7s;
}
</style>
