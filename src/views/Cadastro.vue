<script setup>
import { ref } from 'vue'
import PessoaJuridica from '../components/PessoaJuridica.vue';
import PessoaFisica from '../components/PessoaFisica.vue';

const tipoCliente = ref('pf')

</script>

<template>
    <div class="w-full h-screen flex justify-center items-center">
        <div class="max-w-2xl mx-auto p-6 rounded-lg shadow-lg w-[900px]">
            <h2 class="text-xl font-semibold mb-4">Cadastro de Cliente</h2>
                
            <div class="mb-4">
            <label class="block font-medium">Tipo de Cliente</label>
            <select v-model="tipoCliente" class="w-full cursor-pointer p-2 border rounded">
                <option value="pf">Pessoa Física</option>
                <option value="pj">Pessoa Jurídica</option>
            </select>
            </div>
            <div>
                <PessoaFisica v-if="tipoCliente === 'pf'" />
                <PessoaJuridica v-if="tipoCliente === 'pj' " />
            </div>
        </div>
    </div>
    
</template>