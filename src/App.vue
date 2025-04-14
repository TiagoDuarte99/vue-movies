<template>
  <div>
    <MenuTopBar />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import MenuTopBar from '@/components/MenuTopBar.vue';
</script>

<style scoped></style>
