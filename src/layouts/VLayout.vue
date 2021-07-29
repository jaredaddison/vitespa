<script setup lang="ts"></script>

<template>
  <hero-home
    title="Veterinary Support Initiative"
    subtitle="Saving Pets | Training Vets"
    msg="Veterinary Engagement, Training and Support"
  >
    <main class="container min-w-screen min-h-screen">
      <div class="text-gray-100/50 text-center">
        <Footer />
      </div>
      <div>
        <router-view />
      </div>
      <div>
      </div>
    </main>
  </hero-home>
</template>
