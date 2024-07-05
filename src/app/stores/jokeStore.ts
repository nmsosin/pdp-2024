import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useJokeStore = defineStore('jokeStore', () => {
  const loader = ref(false);
  const favoriteJokes= ref<any>([]);

  const deleteFromFavorites = (id: number) => {
    (favoriteJokes as any).value = favoriteJokes.value.filter((el: any) => el.id !== id);
  }

  return {
    loader,
    favoriteJokes,
    deleteFromFavorites,
  }
})
