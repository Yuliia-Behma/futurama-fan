<script setup>
import RoundButton from "@/components/RoundButton.vue";
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
      <img src="../assets/img/left-cast-decor.png" alt="decor" />
      <div class="main">
        <div class="cast-block">
          
          <div class="content-block">
            <RoundButton class="reverse" disabled></RoundButton>
            <div class="actor">
              <img src="../assets/img/cast-big-frame.svg" alt="frame">
              <div class="photo">
                <img src="" alt="">
              </div>
            </div>
            <RoundButton></RoundButton>
          </div>
          <div class="details">
            <p class="actor-name"></p>
            <p class="characters-name"></p>
          </div>
          
        </div>
        <img src="" alt="" />
      </div>
      <img src="../assets/img/right-cast-decor.png" alt="decor" />
    </div>
  </div>
</template>

<style scoped>
.next-wrapper {
  width: 100%;
  height: 594px;
  display: flex;
  margin-top: 40px;
}

.main {
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
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

.reverse {
  transform: rotateY(180deg);
}

.content-block{
  width: 512px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.actor{
  width:320px;
  height: 320px;
  position: relative;
}

.photo{
  position: absolute;
  top: 33px;
  left: 33px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 6px solid #fdba8c;
  width: 254px;
  height: 254px;
  padding: 10px;
  overflow: hidden;
}
</style>
