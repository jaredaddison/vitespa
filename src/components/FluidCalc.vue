<template>
  <section>
    <div>
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Feline Fluid Plan
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        The following is provided as a guide only
      </p>
    </div>
    <div class="mt-5 border-t border-gray-200">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt class="text-sm font-medium text-gray-500">
            Weight (kg)
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <input v-model.number="cat.weight" type="number" placeholder="Weight" />
          </dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt class="text-sm font-medium text-gray-500">
            Dehydration (%)
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <input v-model.number="cat.dehydration" type="number" placeholder="Dehydration" />
          </dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt class="text-sm font-medium text-gray-500">
            Ongoing Loss (ml/hr)
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <input v-model.number="cat.ongoingLoss" type="number" placeholder="Ongoing Loss" />
          </dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt class="text-sm font-medium text-gray-500">
            Bolus' Provided (Total)
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <input v-model.number="cat.bolusNumber" type="number" placeholder="Bolus' Provided" />
          </dd>
        </div>
      </dl>
    </div>
    <!---->
    <div>
      <div class="mt-6">
        <ul role="list" class="-my-5 divide-y divide-gray-200">
          <li class="py-5">
            <div class="relative focus-within:ring-2 focus-within:ring-indigo-500">
              <h3 class="text-sm font-semibold text-gray-800" v-text="cat.maintRate" />
              <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                This is the maintenance fluid rate
              </p>
            </div>
          </li>
          <li class="py-5">
            <div class="relative focus-within:ring-2 focus-within:ring-indigo-500">
              <h3 class="text-sm font-semibold text-gray-800" v-text="cat.bolusVolume" />
              <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                Total volume to be provided over a 15-20minute interval
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
<!--
  <p v-text="cat.bolusNumber" />Bolus' have been provided
  <p v-text="cat.initialRate" />ml/h initial rate for the first 6h
  <p v-text="cat.ongoingRate" />ml/h ongoing rate after the first 6h
  <h1 class="text-center text-2xl text-center">
    Canine
  </h1>
  <input v-model.number="dog.weight" type="number" placeholder="Weight" />
  <input v-model.number="dog.dehydration" type="number" placeholder="Dehydration" />
  <input v-model.number="dog.ongoingLoss" type="number" palceholder="Ongoing Loss" />
  <input v-model.number="dog.bolusNumber" type="number" placeholder="Bolus' Provided" />
  <p v-text="dog.maintRate" />ml/hr Maintenance Rate
  <p v-text="dog.bolusVolume" />ml Bolus over 15minutes
  <p v-text="dog.bolusNumber" />bolus' have been provided
  <p v-text="dog.initialRate" />ml/hr initial rate for the first 6h
  <p v-text="dog.ongoingRate" />ml/hr ongoing rate after the first 6h -->
</template>

<script setup lang="ts">
import { dog, cat } from '@/logic'
</script>
