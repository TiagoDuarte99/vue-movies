<template>
  <div>
    <MenubarTop></MenubarTop>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import MenubarTop from '@/components/MenuTopBar.vue';
</script>

<style scoped></style>
