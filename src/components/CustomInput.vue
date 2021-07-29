<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const props = defineProps<{ name: string }>()
const { t } = useI18n()
const p: any = reactive({
  p1: '',
  p2: '',
  oL: '',
  bN: '1',
  //
  cB: computed(() => Math.round(p.p1 * 10)),
  cM: computed(() => Math.round(p.p1 ** 0.75 * 80 / 24)),
  cD: computed(() => Math.round(p.p1 * p.p2 * 10)),
  c6: computed(() => Math.round((p.cD - (p.cB * p.bN)) / 2 / 6 + p.cM + p.oL)),
  c18: computed(() => Math.round((p.cD - (p.cB * p.bN)) / 2 / 18 + p.cM + p.oL)),
  //
  dB: computed(() => Math.round(p.p1 * 20)),
  dM: computed(() => Math.round(p.p1 ** 0.75 * 132 / 24)),
  dD: computed(() => Math.round(p.p1 * p.p2 * 10)),
  d6: computed(() => Math.round((p.dD - (p.dB * p.bN)) / 2 / 6 + p.dM + p.oL)),
  d18: computed(() => Math.round((p.dD - (p.dB * p.bN)) / 2 / 18 + p.dM + p.oL)),
})
</script>

<template>
  <div class="bg-gray-50 pt-12 sm:pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {{ t('CustomInput.title') }}
        </h2>
        <p class="mt-3 text-xl text-gray-500 sm:mt-4">
          {{ t('CustomInput.subtitle', {name: props.name}) }}
        </p>
      </div>
    </div>
    <div class="mt-10 pb-12 bg-white sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-50"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  kg <br /> Bodyweight
                </dt>
                <input
                  v-model="p.p1"
                  type="number"
                  placeholder=""
                  class="order-1 text-5xl font-extrabold text-indigo-600"
                />
              </div>
              <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  % <br /> Dehydration
                </dt>
                <input
                  v-model="p.p2"
                  type="number"
                  placeholder=""
                  class="order-1 text-5xl font-extrabold text-indigo-600"
                />
              </div>
              <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  ml/Hr <br /> Ongoing Loss
                </dt>
                <input
                  v-model="p.oL"
                  type="number"
                  placeholder=""
                  class="order-1 text-5xl font-extrabold text-indigo-600"
                />
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
