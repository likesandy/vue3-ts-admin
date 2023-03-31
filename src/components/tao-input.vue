<template>
  <div class="tao-input">
    <input
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  placeholder: string
  modelValue: string
  name: string
}>()
</script>

<style lang="scss" scoped></style>
