<script setup lang="ts"></script>

<template>
  <main class="container min-w-screen min-h-screen">
    <hero-home
      title="Veterinary Support Initiative"
      subtitle="Saving Pets | Training Vets"
      msg="Veterinary Engagement, Training and Support"
    >
      <div class="text-gray-100/50 text-center">
        <Footer />
      </div>
      <div>
        <router-view />
      </div>
      <div>
        <slot></slot>
      </div>
    </hero-home>
  </main>
</template>
