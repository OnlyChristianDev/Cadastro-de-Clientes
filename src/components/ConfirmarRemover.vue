<script setup>
 
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  usuario: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['confirmar', 'cancelar']);

const confirmarExclusao = () => {
  emit('confirmar', props.usuario.id); 
};

const cancelarExclusao = () => {
  emit('cancelar'); 
};
</script>



<template>
    <div class="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded-md w-full max-w-lg text-center">
        
        <p class="text-lg font-semibold mb-4">Tem certeza que deseja excluir este cliente?</p>
 
        <p class="text-gray-600 mb-6">Essa ação não pode ser desfeita.</p>
        
        <div class="flex justify-center space-x-4">
          <button @click="confirmarExclusao" class="bg-red-500 cursor-pointer text-white px-6 py-2 rounded hover:bg-red-700">
            Confirmar Exclusão
          </button>
          <button @click="cancelarExclusao" class="bg-gray-500 cursor-pointer text-white px-6 py-2 rounded hover:bg-gray-700">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </template>
  