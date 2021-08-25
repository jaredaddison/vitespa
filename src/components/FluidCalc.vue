<template>
  <div>
    <h1 class="text-center text-2xl text-center">
      Feline
    </h1>
    <input v-model="cat.weight" />
    <input v-model="cat.dehydration" />
    <input v-model="cat.ongoingLoss" />
    <input v-model="cat.bolusNumber" />
    <p v-text="cat.maintRate" />ml/h Maintenance Rate
    <p v-text="cat.bolusVolume" />ml Bolus over 20minutes
    <p v-text="cat.bolusNumber" />Bolus' have been provided
    <p v-text="cat.initialRate" />ml/h initial rate for the first 6h
    <p v-text="cat.ongoingRate" />ml/h ongoing rate after the first 6h
    <h1 class="text-center text-2xl text-center">
      Canine
    </h1>
    <input v-model="dog.weight" />
    <input v-model="dog.dehydration" />
    <input v-model="dog.ongoingLoss" />
    <input v-model="dog.bolusNumber" />
    <p v-text="dog.maintRate" />ml/hr Maintenance Rate
    <p v-text="dog.bolusVolume" />ml Bolus over 15minutes
    <p v-text="dog.bolusNumber" />bolus' have been provided
    <p v-text="dog.initialRate" />ml/hr initial rate for the first 6h
    <p v-text="dog.ongoingRate" />ml/hr ongoing rate after the first 6h
  </div>
</template>

<script setup lang="ts">
import { dog, cat } from '@/logic'
</script>
