<script setup>
import { ref, onMounted } from "vue";  
import axios from "axios";

const pessoasFisicas = ref([]);  

const buscarPessoasFisicas = async () => {
  try {
    const response = await axios.get("http://localhost:3000/user/listarpf");
    pessoasFisicas.value = response.data;  
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
};

onMounted(() => {
  buscarPessoasFisicas();
});

</script>
  
<template>
   
   <div>
    <h1>Lista de Pessoas Físicas</h1>
    
    <div v-if="pessoasFisicas.length > 0" >
      <div v-for="pf in pessoasFisicas" :key="pf.id">
        <div><strong>Nome:</strong> {{ pf.nomeCompleto }}</div>
        <div><strong>CPF:</strong> {{ pf.cpf }}</div>
        <div><strong>Email:</strong> {{ pf.email }}</div>
        <div><strong>Telefone:</strong> {{ pf.telefone }}</div>
        <div><strong>Endereço:</strong> {{ pf.endereco }}</div>
      </div>
    </div>
    
    <p v-else>Não há pessoas físicas cadastradas.</p>
  </div>
  </template>
  
  