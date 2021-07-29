<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div
    class="dark:bg-gradient-to-tr from-hex-121212/100 via-hex-121212/50 to-hex-121212/25 min-h-screen min-w-screen relative overflow-hidden"
  >
    <div class="hidden sm:block sm:absolute sm:h-full sm:w-full sm:inset-y-0">
      <div class="h-full mx-auto max-w-7xl relative">
        <svg
          class="right-full transform translate-y-1/4 translate-x-1/4 absolute lg:translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
              animate="ease-in"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-400"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
          />
        </svg>
        <svg
          class="left-full transform -translate-y-3/4 -translate-x-1/4 absolute md:-translate-y-1/2 lg:-translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-400"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
          />
        </svg>
      </div>
    </div>
    <div class="pt-3 pb-12 relative sm:pb-20">
      <header class="mx-auto mt-16 max-w-5xl px-4 sm:mt-24">
        <div class="text-center">
          <h1
            class="font-extrabold tracking-tight text-4xl text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span
              class="text-gray-400 text-5xl block xl:inline xl:mx-5 l:mx-6 md:mx-4 sm:mx-1"
            >{{ t('HeroHome.title') }}</span>
            <br />
            {{ " " }}
            <span class="text-4xl text-gray-700/75 block xl:inline">
              {{ t('HeroHome.subtitle') }}
            </span>
          </h1>
          <p
            class="mx-auto max-w-md mt-3 text-base text-gray-500 sm:text-lg md:text-xl md:mt-5 md:max-w-3xl"
          >
            {{ t('HeroHome.about') }}
          </p>
        </div>
      </header>
      <div class="shadow-xl">
        <slot></slot>>
      </div>
      <div class="shadow-xl">
      </div>
    </div>
  </div>
</template>
