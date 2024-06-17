<template>
  <div class="navigation-container">
    <div class="logo-box">
      <img src="~@/assets/img/Logo-Futurama.svg" alt="logo">
      <h2>Футурама фан</h2>
    </div>
    <nav></nav>
  </div>
  <Header id="header"></Header>
  
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
@font-face {
  font-family: futurama-bold;
  src: url('~@/assets/fonts/Futurama Bold Font.ttf');
}
@font-face {
  font-family: futura-medium;
  src: url('~@/assets/fonts/Futura-font-Medium-Cyrillic.otf');
}
@font-face {
  font-family: futurama-title;
  src: url('~@/assets/fonts/Futurama Title Font.ttf');
}

body{
  background-color: #1e1e1e;
  margin: 0;
  width: 100%;
}

.navigation-container{
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  padding: 12px 16px;
  z-index: 10;
  background-color: #0C1B43CC;
  display: flex;
}
.logo-box{
  display: flex;
  flex-direction: row;
}
.logo-box > h2{
  margin: 0;
  color: #A4CAFE;
font-family: futurama-bold;
font-size: 24px;
font-weight: 700;
line-height: 150%;
letter-spacing: 0%;
text-align: left;
}
</style>
