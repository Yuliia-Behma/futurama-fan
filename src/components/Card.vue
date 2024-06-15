<template>
  <div class="augmented-div" data-augmented-ui="br-2-clip-x bl-clip border"></div>
</template>

<script>
export default {
  name: 'Card',
  
}
</script>


<style scoped>
div .augmented-div{
  background-color: rgb(30, 30, 30);
  margin-bottom: 20px;
  
  width: 300px;
  height: 200px;
  
  --aug-border-all: 2px;
  --aug-border-bg:#1E429F; 
  --aug-br-extend2: 200px;
  --aug-br1: 20px;
  --aug-br2: 10px;
  --aug-bl: 10px;
}
</style>
