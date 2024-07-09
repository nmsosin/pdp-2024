<script setup lang="ts">
import { useSearchStore } from '@/app/stores/searchStore';
import { useFavoriteStore } from '@/app/stores/favoriteStore';

const searchStore = useSearchStore();
const favoriteStore = useFavoriteStore();

import Joke from '@/entities/joke/ui';
import favorites from '@/features/favorites/ui';
import SearchBar from '@/widgets/search-bar/ui';


</script>

<template>
  <search-bar />
  <favorites v-if="favoriteStore.isFavoritesOpen"/>
  <a-flex gap="middle" vertical>
    <a-typography-title :level="2">Jokes</a-typography-title>
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
