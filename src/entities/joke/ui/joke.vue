<script setup lang="ts">
// import { useSearchStore } from '../../../app/stores/searchStore';
import { computed, ref } from 'vue';

const checked = ref<boolean>(false);

defineProps<{
  id?: number;
  setup: string;
  punchline: string;
  type: string;
  isFavorite?: boolean;
}>()

// const searchStore = useSearchStore();

const categoryColors = {
  'programming': 'blue',
  'general': 'red',
  'knock-knock': 'orange',
  'dad': 'green',
};

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
            <a-switch v-model:checked="checked" />
          </a-flex>
        </a-flex>
      </a-collapse-panel>
    </a-collapse>

  </a-flex>
  
</template>