<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref, watch } from 'vue'

const props = defineProps({
  icon: {
    type: [String, Object],  
    required: true, 
  },
  placeholder: {
    type: String,
    default: 'Digite algo...', 
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const valorInput = ref(props.modelValue)

watch(valorInput, (novoValor) => {
  emit('update:modelValue', novoValor)
})
</script>

<template>
  <div class="flex gap-2 items-center justify-center">
    <div class="text-gray-300">
      <font-awesome-icon :icon="props.icon" />
    </div>
    <input 
      v-model="valorInput" 
      class="bg-gray-200 outline-none p-1 h-10 w-[250px] rounded-md" 
      type="text" 
      :placeholder="props.placeholder" 
    />
  </div>
</template>
