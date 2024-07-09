import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Joke } from "../../entities/joke/model";

export const useFavoriteStore = defineStore('jokeStore', () => {
  const loader = ref(false);
  const isFavoritesOpen = ref(false);
  const jokes= ref<Joke[]>([]);

  const addToFavorites = (joke: Joke) => {
    jokes.value.push(joke);
  }

  const deleteFromFavorites = (id: number) => {
    jokes.value = jokes.value.filter((joke) => joke.id !== id);
  }

  const toggleFavorites = () => {
    isFavoritesOpen.value = !isFavoritesOpen.value;
  }

  return {
    loader,
    isFavoritesOpen,
    jokes,
    addToFavorites,
    toggleFavorites,
    deleteFromFavorites,
  }
})
