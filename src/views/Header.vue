<script setup></script>

<template>
  <div class="header-container">
    <h1 class="main-heading">Футурама</h1>
    <button class="adventure-btn" data-augmented-ui="tl-clip br-clip">
       <a href="#introduction">Пригоди чекають</a>
    </button>
    <img
      class="bottom-decor"
      src="../assets/img/header-bottom-decoration.png"
      alt="decoration"
    />
  </div>
</template>

<style scoped>
.header-container {
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
      180deg,
      rgba(12, 27, 67, 0) 80%,
      rgb(12, 27, 67) 100%
    ),
    url("../assets/img/Picture_back.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
}

.adventure-btn {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translate(-50%);
  width: 253px;
  height: 64px;
  border: none;
  background-color: #e3a008;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.adventure-btn>a{
  display: block;
  text-decoration: none;
  color: #0c1b43;
  width: 100%;
  height: 100%;
  font-family: futurama-bold;
  font-size: 18px;
  font-weight: 700;
  line-height: 62px;
  letter-spacing: 8%;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.adventure-btn:hover {
  background-color: #faca15;
  color: #633112;
}

.adventure-btn>a:hover{
  background-color: #faca15;
  color: #633112;
}

.adventure-btn:active {
  background-color: #c27803;
  color: #ffffff;
}
.adventure-btn>a:active{
  background-color: #c27803;
  color: #ffffff;
}

.main-heading {
  position: absolute;
  margin: 0;
  top: 120px;
  left: 50%;
  transform: translate(-50%);

  background-image: linear-gradient(180deg, rgb(239, 30, 42), rgb(177, 41, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: futura-medium;
  font-weight: 400;
  line-height: 68px;
  letter-spacing: 0.08em;
  text-align: center;
  text-transform: uppercase;
  filter: drop-shadow(4px 4px 0 #000);
  -webkit-text-stroke: 1.5px #fee472;
  font-size: 96px;
}

.bottom-decor {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
