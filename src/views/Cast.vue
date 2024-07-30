<script setup>
import RoundButton from '@/components/RoundButton.vue';
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
        <img src="../assets/img/left-cast-decor.png" alt="decor">
        <div class="main">
          <div class="cast-block">
            <RoundButton class="reverse"></RoundButton>
            <!-- cast content block -->
            <RoundButton></RoundButton>
          </div>
          <img src="" alt="">
        </div>
        <img src="../assets/img/right-cast-decor.png" alt="decor">
    </div>
  </div>
</template>

<style scoped>
.next-wrapper{
    width: 100%;
    height: 594px;
    display: flex;
    margin-top: 40px;
}

.main{
    flex-grow: 1;
    background-color: #0c1b43a3;
}

.cast-block{
  display: flex;
  justify-content: center;
  align-items: center;
}

.reverse{
  transform: rotateY(180deg);
}
</style>
