<script setup lang="ts">
import { ref } from 'vue';

import { useSearchStore } from '@/app/stores/searchStore';

const searchStore = useSearchStore();

const searchId = ref<number>();
const searchType = ref<string>();

const handleClickRandomOne = () => {
  searchStore.getRandomJoke();
};

const handleClickRandomTen = () => {
  searchStore.getRandomTen();
};

const handleClickRandomOneByType = () => {
  if (searchType.value) {
    searchStore.getJokeByType(searchType.value);
    searchType.value = undefined;
  };
};

const handleClickRandomTenByType = () => {
  if (searchType.value) {
    searchStore.getTenByType(searchType.value);
    searchType.value = undefined;
  };
};

const handleClickSearchById = () => {
  if (searchId.value) {
    searchStore.getById(searchId.value);
    searchId.value = undefined;
  };
};
</script>

<template>
  <a-flex gap="middle" justify="center">
    <a-flex gap="middle" align="center">
      Find by type:
      <a-select
        addonBefore="Choose a type"
        ref="select"
        v-model:value="searchType"
        allowClear
        style="width: 120px"
      >

        <a-select-option value="general" >general</a-select-option>
        <a-select-option value="knock-knock">knock-knock</a-select-option>
        <a-select-option value="programming">programming</a-select-option>
        <a-select-option value="dad">dad</a-select-option>
      </a-select>
    </a-flex>

    <a-flex gap="middle" align="center">
      Find by ID:
      <a-input-number id="inputNumber" v-model:value="searchId" :min="1" />
    </a-flex>
  </a-flex>

  <a-divider />
  <a-flex gap="middle" justify="center">
    <a-flex gap="middle" vertical>
      <a-button 
      ghost
      @click="handleClickRandomOne">
        Grab random 1
      </a-button>
      <a-button 
      ghost
      @click="handleClickRandomTen">
        Grab random 10
      </a-button>
    </a-flex>
    <a-flex gap="middle" vertical>
      <a-button 
        ghost
        :disabled="!searchType"
        @click="handleClickRandomOneByType"
      >
        Grab by type 1
      </a-button>
      <a-button 
        ghost
        :disabled="!searchType"
        @click="handleClickRandomTenByType"
      >
        Grab by type 10
      </a-button>
    </a-flex>
    <a-flex gap="middle" vertical>
      <a-button 
        ghost
        :disabled="!searchId"
        @click="handleClickSearchById"
      >
        Grab by id
      </a-button>
      <a-button type="primary">
        Show favorites
      </a-button>
    </a-flex>
  </a-flex>

  <a-divider />
</template>