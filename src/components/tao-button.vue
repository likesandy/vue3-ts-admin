<template>
  <div class="tao-button">
    <button
      type="button"
      class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 w-full"
    >
      {{ btnValue }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  btnValue: string
}>()
</script>

<style lang="scss" scoped></style>
