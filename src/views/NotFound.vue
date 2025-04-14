<template>
  <div class="flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-9xl font-extrabold text-red-600">404</h1>
      <p class="text-xl text-gray-800 mt-4">Página não encontrada</p>
      <p class="text-md text-gray-600 mt-2">Desculpe, não conseguimos encontrar o que você está procurando. Talvez a URL esteja incorreta.</p>
      <router-link to="/" class="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg hover:bg-blue-600 transition duration-200">
        Voltar para a página inicial
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Não é necessário adicionar lógica aqui, apenas exibir a mensagem de erro.
</script>

<style scoped>
/* Não é necessário adicionar mais estilos com Tailwind CSS */
</style>
