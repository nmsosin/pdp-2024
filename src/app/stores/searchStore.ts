import { defineStore } from 'pinia';
import { ref } from 'vue';
import instance from '@/shared/api/agent';

export const useSearchStore = defineStore('searchStore', () => {
  const loader = ref(false);
  const jokes= ref<any>([]);

  const getRandomJoke = async() => {
    loader.value = true;
    const res = await instance.get<string, any>('/jokes/random');
    jokes.value = [{
      ...res.data,
    }];

    loader.value = false;
  };

  const getRandomTen = async() => {
    loader.value = true;
    const res = await instance.get<string, any>('/jokes/ten');
    jokes.value = JSON.parse(JSON.stringify(res.data));

    loader.value = false;
  };

  const getJokeByType = async(type: string) => {
    loader.value = true;
    const res = await instance.get<string, any>(`/jokes/${type}/random`);
    jokes.value = [{
      ...res.data[0],
    }];

    loader.value = false;
  };

  const getTenByType = async(type: string) => {
    loader.value = true;
    const res = await instance.get<string, any>(`/jokes/${type}/ten`);
    jokes.value = JSON.parse(JSON.stringify(res.data));

    loader.value = false;
  };

  const getById = async(id: number) => {
    loader.value = true;
    const res = await instance.get<string, any>(`/jokes/${id}`);
    jokes.value = [res.data];

    loader.value = false;
  };

  return {
    loader,
    jokes,
    getRandomJoke,
    getRandomTen,
    getJokeByType,
    getTenByType,
    getById,
  }
})
