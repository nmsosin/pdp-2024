<script setup lang="ts">
  import MainPage from '../pages/main-page/ui';
</script>

<template>
  <div class="App">
    <a-flex gap="middle" justify="center" align="center">
      <a-image
        :width="100"
        :preview="false"
        src="../../public/Logo.png"
      />
      <div>
        <a-typography-title>Get a random joke</a-typography-title>
        <p>Grab some jokes randomly or choose a theme</p>
      </div>
    </a-flex>

    <a-divider />
    
    <main-page />
  </div>
</template>

<style scoped>
.App {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
../pages/main-page/ui