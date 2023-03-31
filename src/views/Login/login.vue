<template>
  <div class="Login">
    <div class="bg-white font-family-karla h-screen">
      <div class="w-full flex flex-wrap">
        <div class="w-full md:w-1/2 flex flex-col">
          <loginLogo />
          <div
            class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
          >
            <p class="text-center text-3xl">Welcome.</p>
            <loginForm :form-data="formData" />
          </div>
        </div>
        <loginRight />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import loginLogo from './login-logo.vue'
import loginForm from './login-form.vue'
import loginRight from './login-right.vue'

import { reactive } from 'vue'
const formData = reactive({
  account: 'tao',
  password: '123456'
})
</script>

<style lang="scss" scoped>
@import url(@/assets/font/login.css);
</style>
