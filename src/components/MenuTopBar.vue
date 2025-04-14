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
    <template #end>
      <div class="top-0 w-full flex gap-2 sm:gap-6">
        <FloatLabel variant="on" class="sm:w-auto w-full">
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText id="on_label" v-model="search" autocomplete="off" class="sm:w-auto w-full" />
          </IconField>
          <label for="on_label">Search</label>
        </FloatLabel>
        <Button icon="pi pi-search" aria-label="Search" class="sm:text-base text-sm" @click="shearchMovie()"></Button>
      </div>
    </template>
  </Menubar>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
  {
    label: 'Popular Movies',
    icon: 'pi pi-star',
    route: '/'
  },
  {
    label: 'Top Movies',
    icon: 'pi pi-trophy',
    route: '/topmovies'
  },
]);

const search = ref('');

const shearchMovie = async () => {
  if (!search.value.trim()) return;
  console.log()
  router.push({ name: 'ShearchMovie', query: { q: search.value } });
};
</script>

<style scoped></style>
