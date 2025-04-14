<template>
  <Menubar :model="items" class="sticky top-0 w-full z-50 mb-8">
    <template #item="{ item, props, hasSubmenu }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon"></span>
          <span>{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon"></span>
        <span>{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down"></span>
      </a>
    </template>
  </Menubar>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
{
  label: 'Polular Movies',
  icon: 'pi pi-star',
  route: '/'
},
{
  label: 'Top Movies',
  icon: 'pi pi-trophy',
  route: '/topmovies'

},
]);
</script>

<style scoped>

</style>
