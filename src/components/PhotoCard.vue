<script setup></script>

<template>
  <div class="augmented-photo" data-augmented-ui=" tr-clip bl-clip">
    <slot></slot>
  </div>
</template>

<style scoped>
.augmented-photo {
  width: 456px;
  height: 350px;
  box-sizing: border-box;
  background-color: #233876;
  overflow: hidden;
  display: flex;
  align-items: start;
  justify-content: center;
}
</style>
