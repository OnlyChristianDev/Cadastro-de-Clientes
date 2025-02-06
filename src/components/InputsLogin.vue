<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  placeholder: String,
})

const valorInput = ref('')

</script>

<template>
  <input
    v-model="valorInput"
    class="bg-gray-100 outline-none p-1 w-[300px] rounded-md"
    type="text"
    :placeholder="props.placeholder"
    @input="$emit('update:modelValue', valorInput)"
  />
</template>
