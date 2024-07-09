<script setup lang="ts">
import { useFavoriteStore } from '@/app/stores/favoriteStore';
import { ref, watchEffect } from 'vue';
import categoryColors from '../config';
import type { Joke } from '@/entities/joke/model';

const isFavorite = ref<boolean>(false);
  const activeKey = ref([]);

const props = defineProps({
  id: Number,
  setup: String,
  punchline: String,
  type: String,
  isFavorite: Boolean,
})

const favoriteStore = useFavoriteStore();

watchEffect(() => {
  if(favoriteStore.jokes.find(joke => joke.id === props.id)) {
    isFavorite.value = true;
  } else {
    isFavorite.value = false;
  }
})

const handleAddToFavorites = (joke: Joke) => {
  favoriteStore.addToFavorites(joke);
}

const handleDeleteFromFavorites = (id: number) => {
  favoriteStore.deleteFromFavorites(id);
}

const toggleFavoriteStatus = (status: boolean) => {
  if (status) {
    handleAddToFavorites({
      id: props.id,
      setup: props.setup,
      punchline: props.punchline,
      type: props.type,
      isFavorite: props.isFavorite,
    })
  } else {  
    handleDeleteFromFavorites(props.id);
  }
}

const tagColorByType = (type: string) => categoryColors[type as keyof Object];

</script>

<template>
  <a-flex gap="middle" vertical>
    <a-collapse
    v-model:activeKey="activeKey"
    :bordered="false"
    style="background: rgb(255, 255, 255)"
  >
      <a-collapse-panel key="1" :header="setup">
        <a-flex justify="space-between">
          <a-flex vertical justify="center">
            <a-flex gap="middle">
              <a-typography-text disabled>ID</a-typography-text>
              <a-tag :bordered="false">{{ id }}</a-tag>
              <a-typography-text disabled>Type</a-typography-text>
              <a-tag :color="tagColorByType(type)">{{ type }}</a-tag>
            </a-flex>
          <a-typography-title :level="5">Punchline:</a-typography-title>
            {{ punchline }}
          </a-flex>
          <a-flex vertical justify="flex-end" align="center">
            <a-typography-text disabled>Add to favorites</a-typography-text>
            <a-switch v-model:checked="isFavorite" @change="toggleFavoriteStatus($event)"/>
          </a-flex>
        </a-flex>
      </a-collapse-panel>
    </a-collapse>

  </a-flex>
  
</template>