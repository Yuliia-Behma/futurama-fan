<script setup>

</script>

<template>
    <div class="mainContainer">
        <div id="firstImg"><slot name="img1"></slot></div>
        <div class="augmented-div" data-augmented-ui="br-2-clip-x bl-clip border">
            <slot name="heading"></slot>
            <slot name="descr"></slot>
            <a href="#">Дізнатись більше ></a>
        </div>
        <div id="secondImg"><slot name="img2"></slot></div>
        <div id="thirdImg"><slot name="img3"></slot></div>
    </div>
</template>

<style scoped>
.mainContainer{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 388px 390px;
    gap: 24px;
    box-sizing: border-box;
}

div .augmented-div {
grid-column: span 4;
  width: 744px;
  height: 388px;
  padding: 24px 24px 31px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;

  --aug-border-all: 2px;
  --aug-border-bg: #1e429f;
  --aug-br-extend2: 580px;
  --aug-br1: 30px;
  --aug-br2: 15px;
  --aug-bl: 15px;
}

.augmented-div >a{
    margin-top: auto;
}

#firstImg{
    grid-column: span 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #101f49;
}

#secondImg, #thirdImg{
    grid-column: span 3;
    overflow: hidden;
}

a {
  font-family: futurama-bold;
  /* text-decoration: underline; */
  color: #3f83f8;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
}

a:hover{
  color: #76A9FA;
}
</style>