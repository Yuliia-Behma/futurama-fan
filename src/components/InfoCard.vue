<script setup></script>

<template>
  <div class="augmented-div" data-augmented-ui="br-2-clip-x bl-clip border">
    <slot name="heading"></slot>
    <slot name="parag"></slot>
    <a href="#">Дізнатись більше <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.74525 1.70462L4.74525 1.70462L15.2681 9.44625C15.3574 9.51191 15.4297 9.5959 15.4794 9.69184C15.5292 9.78777 15.555 9.89312 15.555 9.99987C15.555 10.1066 15.5292 10.212 15.4794 10.3079C15.4297 10.4038 15.3574 10.4878 15.2681 10.5535L4.74525 18.2951L4.74558 18.2956L4.74525 18.2951C4.62418 18.385 4.44502 18.3038 4.44502 18.157V16.4574C4.44502 16.3499 4.49629 16.2467 4.58718 16.1809L4.58685 16.1804L4.58718 16.1809L12.9905 10.0003L12.9902 9.99987L12.9898 9.99942L12.989 9.99836L4.58718 3.81888C4.58718 3.81888 4.58718 3.81888 4.58718 3.81887C4.49861 3.75301 4.44502 3.64984 4.44502 3.54229L4.44502 1.84269L4.44502 1.84269C4.44485 1.80984 4.45453 1.77761 4.47293 1.7497C4.49134 1.72179 4.51774 1.69933 4.54909 1.68491C4.58044 1.67048 4.61548 1.66468 4.65018 1.66817C4.68488 1.67166 4.71783 1.68429 4.74525 1.70462Z" fill="currentColor" stroke="currentColor" stroke-width="0.00111607" />
</svg></a>
  </div>
</template>

<style scoped>
div .augmented-div {
  width: 552px;
  height: 364px;
  padding: 24px 24px 31px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  --aug-border-all: 2px;
  --aug-border-bg: #1e429f;
  --aug-br-extend2: 400px;
  --aug-br1: 30px;
  --aug-br2: 10px;
  --aug-bl: 10px;
}

a {
  display: flex;
  align-items: center;
  font-family: futurama-bold;
  text-decoration: underline;
  color: #3f83f8;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.02em;
  text-decoration-skip-ink: none;
}
a svg{
  margin-left: 8px;
}

a:hover{
  color: #76A9FA;
}
</style>
