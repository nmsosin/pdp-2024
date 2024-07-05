<script setup lang="ts">
import { useSearchStore } from '@/app/stores/searchStore';

const searchStore = useSearchStore();

import Joke from '@/entities/joke/ui';
import SearchBar from '@/widgets/search-bar/ui';


</script>

<template>
  <search-bar />
  <a-flex gap="middle" vertical>
    <joke
      v-for="joke in searchStore.jokes"
      :setup="joke.setup"
      :punchline="joke.punchline"
      :type="joke.type"
      :id="joke.id"
      :isFavorite="joke.isFavorite"
    />
  </a-flex>

</template>

<style scoped>
</style>
