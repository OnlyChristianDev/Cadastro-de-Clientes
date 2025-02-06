<script setup>
import { ref, onMounted } from "vue";  
import axios from "axios";

const pessoasFisicas = ref([]);  
const pessoasJuridicas = ref([]); 

const buscarPessoasFisicas = async () => {
  try {
    const response = await axios.get("http://localhost:3000/user/listarpf");
    pessoasFisicas.value = response.data;  
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
};

const buscarPessoasJuridicas = async () => {
  try {
    const response = await axios.get("http://localhost:3000/user/listarpj");
    pessoasJuridicas.value = response.data;  
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
};


onMounted(() => {
  buscarPessoasFisicas();
  buscarPessoasJuridicas();
});
</script>

<template>
  <div class="flex flex-col w-full h-screen">

    <div class="bg-blue-800 text-white p-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Painel Principal</h1>
      <div class="flex space-x-4">
        <a href="#" class="flex items-center space-x-2 hover:text-gray-300">
          
          <span>Clientes</span>
        </a>
        <a href="#" class="flex items-center space-x-2 hover:text-gray-300">
        
          <span>Prospecção</span>
        </a>
        <a href="#" class="flex items-center space-x-2 hover:text-gray-300">
         
          <span>Relatórios</span>
        </a>
      </div>
    </div>


    <div class="flex gap-10 p-6 overflow-auto">

      <div class="w-1/2">
        <h2 class="text-xl font-bold mb-4">Lista de Pessoas Físicas</h2>
        <div v-if="pessoasFisicas.length > 0" class="space-y-4">
          <div v-for="pf in pessoasFisicas" :key="pf.id" class="bg-white p-4 rounded-lg shadow-md">
            <div class="text-lg font-semibold">{{ pf.nomeCompleto }}</div>
            <div><strong class="font-semibold">CPF:</strong> {{ pf.cpf }}</div>
            <div><strong class="font-semibold">Email:</strong> {{ pf.email }}</div>
            <div><strong class="font-semibold">Telefone:</strong> {{ pf.telefone }}</div>
            <div><strong class="font-semibold">Endereço:</strong> {{ pf.endereco }}</div>
          </div>
        </div>
      </div>


      <div class="w-1/2">
        <h2 class="text-xl font-bold mb-4">Lista de Pessoas Jurídicas</h2>
        <div v-if="pessoasJuridicas.length > 0" class="space-y-4">
          <div v-for="pj in pessoasJuridicas" :key="pj.id" class="bg-white p-4 rounded-lg shadow-md">
            <div class="text-lg font-semibold">{{ pj.nomeFantasia }}</div>
            <div><strong class="font-semibold">CNPJ:</strong> {{ pj.cnpj }}</div>
            <div><strong class="font-semibold">Email:</strong> {{ pj.email }}</div>
            <div><strong class="font-semibold">Telefone:</strong> {{ pj.telefone }}</div>
            <div><strong class="font-semibold">Endereço:</strong> {{ pj.endereco }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

