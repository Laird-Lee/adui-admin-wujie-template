<template>
  <wujie-vue width="100%" height="100%" name="micro-app-vue" :url="url"/>
</template>

<script lang="ts" setup>
import WujieVue from 'wujie-vue3';
import {useRoute} from 'vue-router';
import {watch} from 'vue';

const route = useRoute();
const url = `//localhost:8810/${route.params.path}`;
watch(
    () => route.params.path,
    (value, oldValue, onCleanup) => {
      WujieVue.bus.$emit('sub-route-change', `/${value}`);
    },
);
</script>

<style scoped>

</style>
