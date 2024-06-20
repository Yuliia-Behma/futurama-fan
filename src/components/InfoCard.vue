<script setup></script>

<template>
  <div class="augmented-div" data-augmented-ui="br-2-clip-x bl-clip border">
    <slot name="heading"></slot>
    <slot name="parag"></slot>
    <a href="#">Дізнатись більше ></a>
  </div>
</template>

<style scoped>
div .augmented-div {
  width: 552px;
  height: 339px;
  padding: 24px 24px 31px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  --aug-border-all: 2px;
  --aug-border-bg: #1e429f;
  --aug-br-extend2: 430px;
  --aug-br1: 40px;
  --aug-br2: 10px;
  --aug-bl: 10px;
}

a {
  font-family: futurama-bold;
  text-decoration: none;
  color: #3f83f8;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
}

a:hover{
  color: #76A9FA;
}
</style>
