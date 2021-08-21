<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'VetSupport',
  meta: [
    { name: 'description', content: 'Saving Pets | Training Vets' },
  ],
})
</script>

<template>
  <router-view />
</template>
