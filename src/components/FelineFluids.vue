<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/dog/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <div class="py-2" />

  <div class="bg-hex-121212 m-5 p-5 align-content-center text-center shadow-xl">
    <p class="text-5xl text-gray-100">
      <mdi-cat class="inline-block" />
    </p>
    <p class="text-4xl text-gray-100">
      {{ t('CatFluids.title') }}
    </p>
    <p class="text-2xl">
      <em class="text-sm text-gray-100/50">
        {{ t('CatFluids.subtitle') }}
      </em>
    </p>

    <div class="py-2" />

    <input
      id="input"
      v-model="name"
      :placeholder="t('CatFluids.petname')"
      :aria-label="t('CatFluids.petname')"
      type="text"
      autocomplete="false"
      class="text mx-auto my-auto px-4 py-2 w-250px text-center border-rounded border-gray-100 bg-gray-100 outline-none active:{text-gray-900 border-2 border-green-400}"
      @keydown.enter="go"
    >
    <label class="hidden" for="input">{{ t('CatFluids.petname') }}</label>
    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
