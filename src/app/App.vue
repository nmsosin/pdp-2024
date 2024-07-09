<script setup lang="ts">
  import MainPage from '@/pages/main-page/ui';
</script>

<template>
  <div class="App">
    <a-flex gap="middle" justify="center" align="center">
      <a-image
        :width="100"
        :preview="false"
        src="src/shared/assets/Logo.png"
      />
      <div>
        <a-typography-title>Get a random joke</a-typography-title>
        <p>Grab some jokes randomly or choose a theme</p>
      </div>
    </a-flex>

    <a-divider />
    
    <main-page />
    <img
      class="meme"
      src="@/shared/assets/meme.png"
      alt="meme"
    />
  </div>
</template>

<style scoped>
.App {
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.meme {
  width: 300px;
  position: absolute;
  right: 200px;
  bottom: 0;
  z-index: -1;
}
</style>
