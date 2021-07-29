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
  cSx: computed(() => Math.round(p.p1 * 5)),
  c6: computed(() => Math.round((p.cD - (p.cB * p.bN)) / 2 / 6 + p.cM + p.oL)),
  c18: computed(() => Math.round((p.cD - (p.cB * p.bN)) / 2 / 18 + p.cM + p.oL)),
  //
  dB: computed(() => Math.round(p.p1 * 20)),
  dM: computed(() => Math.round(p.p1 ** 0.75 * 132 / 24)),
  dD: computed(() => Math.round(p.p1 * p.p2 * 10)),
  dSx: computed(() => Math.round(p.p1 * 5)),
  d6: computed(() => Math.round((p.dD - (p.dB * p.bN)) / 2 / 6 + p.dM + p.oL)),
  d18: computed(() => Math.round((p.dD - (p.dB * p.bN)) / 2 / 18 + p.dM + p.oL)),
})
</script>

<template>
  <div class="bg-gray-50 pt-12 sm:pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {{ t('CustomInput.title', {name: props.name}) }}
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
            <dl class="rounded-lg bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 shadow-xl sm:grid sm:grid-cols-3">
              <div class="flex flex-col border-1 border-gray-100 p-6 text-center shadow-xl sm:border-0 sm:border-l">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500/75">
                  kg <br /> Bodyweight
                </dt>
                <input
                  v-model="p.p1"
                  type="number"
                  placeholder=""
                  class="rounded order-1 text-5xl font-extrabold text-indigo-600 shadow-xl text-center"
                />
              </div>
              <div class="flex flex-col border-1 border-gray-100 p-6 text-center shadow-xl sm:border-0 sm:border-l">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500/75">
                  % <br /> Dehydration
                </dt>
                <input
                  v-model="p.p2"
                  type="number"
                  placeholder=""
                  class="rounded order-1 text-5xl font-extrabold text-indigo-600 shadow-xl text-center"
                />
              </div>
              <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500/75">
                  ml/hr <br /> Ongoing Loss
                </dt>
                <input
                  v-model="p.oL"
                  type="number"
                  placeholder=""
                  class="rounded order-1 text-5xl font-extrabold text-indigo-600 shadow-xl text-center"
                />
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto pb-12 bg-transparent sm:pb-16">
      <div class="relative">
        <h3 class="text-xl leading-6 font-bold uppercase text-gray-900">
          Recommendations
        </h3>
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">
              Bolus over 15min
            </dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">
              {{ p.dB }} <span class="text-base">ml/hr</span>
            </dd>
          </div>

          <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">
              First 6-Hours
            </dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">
              {{ p.d6 }} <span class="text-base">ml/hr</span>
            </dd>
          </div>

          <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">
              Following 18-Hours
            </dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">
              {{ p.d18 }} <span class="text-base">ml/hr</span>
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="container mx-auto pb-12 bg-transparent sm:pb-16">
      <div class="relative">
        <h3 class="text-xl leading-6 font-bold uppercase text-gray-900">
          Fluid Related Information
        </h3>
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">
              Maintenance Rate
            </dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">
              {{ p.dM }} <span class="text-base">ml/hr</span>
            </dd>
          </div>

          <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">
              Total Deficit
            </dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">
              {{ p.dD }} <span class="text-base">ml</span>
            </dd>
          </div>

          <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt class="text-sm font-medium text-gray-500 truncate">
              Surgical Rate
            </dt>
            <dd class="mt-1 text-3xl font-semibold text-gray-900">
              {{ p.dSx }} <span class="text-base">ml/hr</span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
