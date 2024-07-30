<script setup></script>

<template>
  <div class="btn">
    <svg
      width="24"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.69426 2.04551L5.69427 2.04551L18.3216 11.3355C18.4289 11.4143 18.5157 11.5151 18.5753 11.6302C18.635 11.7453 18.666 11.8718 18.666 11.9999C18.666 12.128 18.635 12.2544 18.5753 12.3696C18.5157 12.4847 18.4289 12.5855 18.3216 12.6643L5.69427 21.9543L5.6946 21.9547L5.69426 21.9543C5.54892 22.0622 5.33381 21.9648 5.33381 21.7885V19.749C5.33381 19.6199 5.39535 19.496 5.50445 19.417L15.5884 12.0003L15.5881 11.9999L15.5878 11.9994L15.587 11.9984L5.50445 4.58279C5.39815 4.50374 5.33381 4.37989 5.33381 4.25079L5.33381 2.21128L5.33381 2.21128C5.33361 2.17184 5.34523 2.13314 5.36733 2.09963C5.38943 2.06612 5.42112 2.03915 5.45876 2.02184C5.49641 2.00452 5.53847 1.99756 5.58013 2.00174C5.62179 2.00593 5.66135 2.0211 5.69426 2.04551Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="0.00111607"
      />
    </svg>
  </div>
</template>

<style scoped>
.btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #3f83f8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0c1b43;
}

.btn:hover {
  background-color: #a4cafe;
}
.btn:active {
  background-color: #1c64f2;
  color: white;
}

.btn[disabled] {
  border: 1px solid #1e429f;
  color: #1e429f;
  background-color: #111928;
  cursor: not-allowed;
}
</style>
