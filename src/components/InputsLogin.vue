<script setup>
import { ref } from 'vue'

const valorInput = ref('')
defineExpose({ valorInput })

</script>

<template>
     <input v-model="valorInput" class="bg-gray-100 outline-none p-1 w-[300px] rounded-md" type="text" :placeholder="placeholder" />
</template>