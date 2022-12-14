<template>
  <a-layout-sider collapsible theme="dark">
    <div class="logo"></div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark">
      <a-menu-item key="1">
        <user-outlined />
        <router-link :to="{ path: '/home' }">nav 1</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <router-link :to="{ path: '/micro-app-react/index' }">nav 2</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <router-link :to="{ path: '/micro-app-vue/index' }">nav 3</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const selectedKeys = ref<[]>([]);
</script>

<style scoped></style>
