<template>
  <div class="navigation-container">
    <div class="logo-box">
      <img src="~@/assets/img/leading-icon.svg" alt="logo" />
      <h2><a href="#header">Футурама фан</a></h2>
    </div>
    <nav class="navigation">
      <a href="#introduction">Персонажі</a>
      <a href="#">Трейлери</a>
      <a href="#gallery">Галерея</a>
      <a href="#cast">Актори</a>
      <a href="#">Сезони</a>
    </nav>
    <div class="icon-box">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6667 10.6667H1.33337V13.3333H22.6667V10.6667Z"
          fill="#3F83F8"
        />
        <path d="M22.6667 4H1.33337V6.66667H22.6667V4Z" fill="#3F83F8" />
        <path d="M22.6667 17.3333H1.33337V20H22.6667V17.3333Z" fill="#3F83F8" />
      </svg>
    </div>
  </div>
  <Header id="header"></Header>
  <main>
    <Introduction id="introduction"></Introduction>
    <Gallery id="gallery"></Gallery>
    <Cast id="cast"></Cast>
    <Footer></Footer>
  </main>
</template>

<script>
import Header from "./views/Header.vue";
import Introduction from "./views/Introduction.vue";
import Gallery from "./views/Gallery.vue"
import Cast from "./views/Cast.vue";
import Footer from "./views/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Introduction,
    Gallery,
    Cast,
    Footer
  },
};
</script>

<style>
/* ------------------- */
.navigation-container {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  padding: 12px 16px;
  z-index: 10;
  background-color: #0c1b43cc;
  display: flex;
  width: 1128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo-box > h2 {
  margin: 0;
}
.logo-box > h2 a {
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
.navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
}

.navigation a {
  padding: 10px 16px;
  text-wrap: nowrap;
  color: #3f83f8;
  font-family: futurama-bold;
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.08em;
}

.navigation a:hover {
  color: #a4cafe;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.icon-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.icon-box > svg:first-of-type {
  margin-right: 16px;
}
.icon-box > svg:last-of-type {
  margin: 8px;
}

a {
  text-decoration: none;
}
</style>
