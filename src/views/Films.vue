<script setup>
import BlueButton from "@/components/BlueButton.vue";
</script>

<template>
  <div class="first-wraper">
    <img
      class="right-side-icon"
      src="../assets/img/icons3D/laptop-icon.svg"
      alt="laptop"
    />
    <div class="heading-block heading-with-btns">
      <div class="heading-item">
        <img src="../assets/img/icons3D/laptop-icon-1.svg" alt="icon" />
        <h2>Серiї фiльми</h2>
      </div>
      <div class="heading-item buttons">
        <BlueButton class="reverse"></BlueButton>
        <BlueButton></BlueButton>
      </div>
    </div>
    <div class="carrousel">
      <div class="carrousel-item first" data-augmented-ui="r-clip-y bl-clip" ></div>
      <div class="carrousel-item second" data-augmented-ui="tl-clip-y tr-clip-y br-clip-y bl-clip-y"></div>
      <div class="carrousel-item third" data-augmented-ui="tr-clip-y br-clip-y l-clip-y"></div>
      <div class="carrousel-item fourth" data-augmented-ui="br-clip l-clip-y"></div>
    </div>
    <div
      class="describe-augmented-block"
      data-augmented-ui="br-2-clip-x bl-clip border"
    >
      <h4 class="title">TEST</h4>
      <p class="info">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        autem tempora maxime minus perspiciatis blanditiis temporibus a adipisci
        illum aut, quibusdam voluptates cupiditate, quae sit officia eaque at
        dolorum. Iste molestiae voluptatum illo cupiditate quas dolore fugit
        explicabo aut at.
      </p>
      <a class="watch-link" href="#"
        >Дивитись
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.74525 1.70475L4.74525 1.70475L15.2681 9.44637C15.3574 9.51203 15.4297 9.59602 15.4794 9.69196C15.5292 9.78789 15.555 9.89324 15.555 9.99999C15.555 10.1067 15.5292 10.2121 15.4794 10.308C15.4297 10.404 15.3574 10.4879 15.2681 10.5536L4.74525 18.2952L4.74558 18.2957L4.74525 18.2952C4.62418 18.3851 4.44502 18.304 4.44502 18.1572V16.4576C4.44502 16.35 4.49629 16.2468 4.58718 16.181L4.58685 16.1805L4.58718 16.181L12.9905 10.0004L12.9902 9.99999L12.9898 9.99954L12.989 9.99848L4.58718 3.819C4.58718 3.819 4.58718 3.819 4.58718 3.819C4.49861 3.75314 4.44502 3.64996 4.44502 3.54241L4.44502 1.84282L4.44502 1.84281C4.44485 1.80996 4.45453 1.77773 4.47293 1.74982C4.49134 1.72191 4.51774 1.69945 4.54909 1.68503C4.58044 1.67061 4.61548 1.6648 4.65018 1.66829C4.68488 1.67178 4.71783 1.68442 4.74525 1.70475Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0.00111607"
          /></svg></a>
    </div>
  </div>
</template>

<style scoped>
.heading-with-btns {
  justify-content: space-between;
}

.heading-item {
  display: flex;
}

.buttons {
  gap: 24px;
}

.carrousel {
  margin: 22px 0 24px;
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: space-between;
}

.carrousel-item{
    width: 264px;
    height: 100%;
    background-color: #233876;
}

.first{
    --aug-bl: 16px;
    --aug-r-extend1: 30px;
    --aug-r1: 8px;
}

.second{
    --aug-tl1: 8px;
    --aug-bl1: 8px;
    --aug-tl-inset2: 157px;
    --aug-bl-inset1: 157px;
    --aug-tr-inset1: 157px;
    --aug-br-inset2: 157px;
    --aug-tr1: 8px;
    --aug-br1: 8px;
}

.third{
    --aug-l1: 8px;
    --aug-l-extend1: 30px;
    --aug-tr-inset1: 157px;
    --aug-br-inset2: 157px;
    --aug-tr1: 8px;
    --aug-br1: 8px;
}

.fourth{
    --aug-l1: 8px;
    --aug-l-extend1: 30px;
    --aug-br1: 16px;
}

.describe-augmented-block {
  width: 100%;
  height: 264px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 16px 40px;

  --aug-border-all: 2px;
  --aug-border-bg: #1e429f;
  --aug-br-extend2: 958px;
  --aug-br1: 40px;
  --aug-br2: 16px;
  --aug-bl: 16px;
}

.title {
  font-family: futurama-bold;
  font-size: 30px;
  font-weight: 700;
  color: #e3a008;
  margin: 0;
  line-height: 125%;
}

.info {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #d1d5db;
}

.watch-link {
  font-family: futurama-bold;
  text-decoration: underline;
  color: #3f83f8;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  text-decoration-skip-ink: none;
}

.watch-link:hover {
  color: #76a9fa;
}

.watch-link svg {
  margin-left: 8px;
}
</style>
