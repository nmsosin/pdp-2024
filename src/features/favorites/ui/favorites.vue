<script setup lang="ts">
import Joke from '@/entities/joke/ui';
import { useFavoriteStore } from '@/app/stores/favoriteStore';

const favoriteStore = useFavoriteStore();

</script>

<template>
  <a-flex gap="middle" vertical>
    <a-typography-title :level="2">Favorite jokes</a-typography-title>
    <joke
        v-for="joke in favoriteStore.jokes"
        :setup="joke.setup"
        :punchline="joke.punchline"
        :type="joke.type"
        :id="joke.id"
        :isFavorite="joke.isFavorite"
    />
  </a-flex>
  <a-divider />
</template>