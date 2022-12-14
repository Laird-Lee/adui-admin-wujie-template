<template>
  <a-layout>
    <v-header />
    <a-layout>
      <sider />
      <a-layout>
        <v-content />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
  import Sider from '@/layout/Sider.vue';
  import VContent from '@/layout/Content.vue';
  import VHeader from '@/layout/Header.vue';
</script>

<style lang="less" scoped>
  .ant-layout {
    height: 100%;
  }
</style>
