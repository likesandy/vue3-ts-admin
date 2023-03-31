<template>
  <Form class="flex flex-col pt-3 md:pt-8" @submit="onSubmit">
    <div class="flex flex-col pt-4">
      <label for="email" class="text-lg">Account</label>
      <Field class="tao-input" placeholder="Account name" name="account" />
    </div>

    <div class="flex flex-col pt-4">
      <label for="password" class="text-lg">Password</label>
      <Field class="tao-input" placeholder="Password" name="password" />
    </div>
    <div>
      <taoButton btnValue="Log in" />
    </div>
  </Form>
</template>

<script setup lang="ts">
import taoButton from '@/components/tao-button.vue'
import taoInput from '@/components/tao-input.vue'
import { useForm, Form, Field } from 'vee-validate'
defineProps<{
  formData: {
    account: string
    password: string
  }
}>()

const simpleSchema = {
  email(value: any) {
    console.log(value)
  },
  password(value: any) {
    console.log(value)
  }
}

const onSubmit = (values: any) => {
  console.log(values)
}

useForm({
  validationSchema: simpleSchema
})
</script>

<style lang="scss" scoped></style>
