<script setup lang="ts">
import { useHead } from '@vueuse/head';
import ToolCard from '../components/ToolCard.vue';
import { useToolStore } from '@/tools/tools.store';

const toolStore = useToolStore();

useHead({ title: 'IT-Dev Tools - Useful online tools for developers' });
const { t } = useI18n();
</script>

<template>
  <div class="pt-50px">
    <div class="grid-wrapper">
      <transition name="height">
        <div v-if="toolStore.favoriteTools.length > 0">
          <h3 class="mb-5px mt-25px font-500 text-neutral-400">
            {{ $t('home.categories.favoriteTools') }}
          </h3>
          <div class="grid grid-cols-1 gap-12px lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
            <ToolCard v-for="tool in toolStore.favoriteTools" :key="tool.name" :tool="tool" />
          </div>
        </div>
      </transition>

      <div v-if="toolStore.newTools.length > 0">
        <h3 class="mb-5px mt-25px font-500 text-neutral-400">
          {{ t('home.categories.newestTools') }}
        </h3>
        <div class="grid grid-cols-1 gap-12px lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
          <ToolCard v-for="tool in toolStore.newTools" :key="tool.name" :tool="tool" />
        </div>
      </div>

      <h3 class="mb-5px mt-25px font-500 text-neutral-400">
        {{ $t('home.categories.allTools') }}
      </h3>
      <div class="grid grid-cols-1 gap-12px lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
        <ToolCard v-for="tool in toolStore.tools" :key="tool.name" :tool="tool" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.height-enter-active,
.height-leave-active {
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  max-height: 495px;
}

.height-enter-from,
.height-leave-to {
  max-height: 39px;
  overflow: hidden;
  opacity: 0;
  margin-bottom: 0;
}
</style>
