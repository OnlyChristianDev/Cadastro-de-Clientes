<script setup>
import axios from 'axios';
import { ref } from 'vue'
import InputsCadastro from './InputsCadastro.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const nomeCompleto = ref('') 
const cpf = ref('') 
const email = ref('')
const telefone = ref('')
const endereco = ref('')
const observacoes = ref('')
const dataNascimento = ref('')

const cadastrarPF = () => {
    if (nomeCompleto.value === '' || cpf.value === '' || email.value === '' || telefone.value === ''|| endereco.value === '') {
    alert('Campos vazios')
  } else {
    axios.post('http://localhost:3000/user/cadastropf', {
    nomeCompleto: nomeCompleto.value,
    cpf: cpf.value,
    email: email.value,
    telefone: telefone.value,
    endereco: endereco.value,
    observacoes: observacoes.value,
    dataNascimento: dataNascimento.value, 
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}

</script>
<template>
    <div class="flex flex-col items-center justify-center gap-3">
        <div class="flex items-center justify-center gap-3">
            <InputsCadastro v-model="nomeCompleto" icon="user" placeholder="Nome completo"/>
            <InputsCadastro v-model="cpf" icon="user" placeholder="Cpf"/>
        </div>
       <div class="flex items-center justify-center gap-3">
        <div class="flex items-center gap-2">
            <div class="text-gray-300">
                <FontAwesomeIcon icon="calendar" />
            </div>
            <input type="date" v-model="dataNascimento" class="p-2 border-2 w-[250px] border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"  />
        </div>
            <InputsCadastro v-model="email" icon="envelope" placeholder="E-mail"/>
       </div>
       <div class="flex items-center justify-center gap-3">
            <InputsCadastro v-model="telefone" icon="phone" placeholder="Telefone"/>
            <InputsCadastro v-model="endereco" icon="location-dot" placeholder="Endereço"/>
       </div>
       <div class="flex gap-2">
        <FontAwesomeIcon icon="file" class="mt-2 text-gray-300" />
            <textarea v-model="observacoes" class="bg-gray-200 mx-auto resize-none h-[130px] p-2 w-[534px] outline-none" name="" id=""></textarea>
       </div>
        <button @click="cadastrarPF" class="cursor-pointer mt-2 bg-blue-800 text-white rounded-md h-[50px] w-[300px] p-1">Cadastrar</button>
    </div>
    
</template>