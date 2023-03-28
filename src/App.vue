<template>
  <div class="home bg-slate-600">
    <h2>home</h2>
  </div>
</template>

<script setup lang="ts">
import * as test from '@/mock/test'

const res = await test.testInfo()
</script>

<style lang="scss" scoped></style>
