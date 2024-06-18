<template>
  <div class="navigation-container">
    <div class="logo-box">
      <img src="~@/assets/img/leading-icon.svg" alt="logo" />
      <h2>Футурама фан</h2>
    </div>
    <nav class="navigation">
      <ul>
        <li>Трейлери</li>
        <li>Галерея</li>
        <li>Акторський склад</li>
        <li>Сезони</li>
      </ul>
    </nav>
  </div>
  <Header id="header"></Header>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@font-face {
  font-family: futurama-bold;
  src: url("~@/assets/fonts/Futurama Bold Font.ttf");
}
@font-face {
  font-family: futura-medium;
  src: url("~@/assets/fonts/Futura-font-Medium-Cyrillic.otf");
}
@font-face {
  font-family: futurama-title;
  src: url("~@/assets/fonts/Futurama Title Font.ttf");
}

body {
  background-color: #1e1e1e;
  margin: 0;
  width: 100%;
}

.navigation-container {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  padding: 12px 16px;
  z-index: 10;
  background-color: #0c1b43cc;
  display: flex;
}
.logo-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo-box > h2 {
  margin: 0 0 0 8px;
  color: #a4cafe;
  font-family: futurama-bold;
  font-size: 24px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: left;
  text-wrap: nowrap;
}
.navigation {
  display: flex;
  align-items: center;
}
.navigation > ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
}

.navigation > ul li {
  padding: 10px 16px;
  text-wrap: nowrap;
  color: #3f83f8;
  font-family: futurama-bold;
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.08em;
}
</style>
