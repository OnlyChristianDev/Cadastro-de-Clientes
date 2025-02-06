<script setup>
import { ref } from 'vue'
import axios from 'axios'
import InputsCadastro from './InputsCadastro.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const razaoSocial = ref('')
const nomeFantasia = ref('')
const cnpj = ref('') 
const inscricaoEstadual = ref('')
const nomeResponsavel = ref('')
const cargoResponsavel = ref('')
const telefoneEmpresa = ref('')
const emailEmpresa = ref('')
const cep = ref('')
const rua = ref('')
const numero = ref('')
const bairro = ref('')
const cidade = ref('')
const estado = ref('')
const observacoes = ref('')

const cadastrarPJ = () => {
  if (
    razaoSocial.value === '' || 
    nomeFantasia.value === '' || 
    cnpj.value === '' || 
    inscricaoEstadual.value === '' || 
    nomeResponsavel.value === '' || 
    cargoResponsavel.value === '' || 
    telefoneEmpresa.value === '' || 
    emailEmpresa.value === '' || 
    cep.value === '' || 
    rua.value === '' || 
    numero.value === '' || 
    bairro.value === '' || 
    cidade.value === '' || 
    estado.value === ''
  ) {
    alert('Campos vazios');
  } else {
    axios.post('http://localhost:3000/user/cadastropj', {
  razaoSocial: razaoSocial.value,
  nomeFantasia: nomeFantasia.value,
  cnpj: cnpj.value,
  inscricaoEstadual: inscricaoEstadual.value,
  nomeResponsavel: nomeResponsavel.value,
  cargoResponsavel: cargoResponsavel.value,
  telefoneEmpresa: telefoneEmpresa.value,
  emailEmpresa: emailEmpresa.value,
  endereco: `${rua.value}, ${numero.value}, ${bairro.value}, ${cidade.value}, ${estado.value}`,
  observacoes: observacoes.value,
  cep: cep.value,
  rua: rua.value,
  numero: numero.value,
  bairro: bairro.value,
  cidade: cidade.value,
  estado: estado.value,
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
    <div class="flex flex-col items-center gap-3">
      <div class="flex items-center gap-3 mr-4">
        <InputsCadastro v-model="razaoSocial" icon="business-time" placeholder="Razao Social"/>
        <InputsCadastro v-model="nomeFantasia" icon="business-time" placeholder="Nome Fantasma"/>
      </div>
      <div class="flex items-center gap-3 mr-4">
        <InputsCadastro v-model="cnpj" icon="business-time" placeholder="CNPJ"/>
        <InputsCadastro v-model="inscricaoEstadual" icon="business-time" placeholder="Inscrição Estadual"/>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-3 mr-1">
          <InputsCadastro v-model="nomeResponsavel" icon="user" placeholder="Nome do Responsável"/>
          <InputsCadastro v-model="cargoResponsavel" icon="user" placeholder="Cargo do Responsável"/>
        </div>
      </div>
      <div class="flex items-center gap-3 mr-2">
        <InputsCadastro v-model="telefoneEmpresa" icon="phone" placeholder="Telefone da Empresa"/>
        <InputsCadastro v-model="emailEmpresa" icon="envelope" placeholder="Email da Empresa"/>
      </div>
      <div class="flex items-center gap-3">
        <InputsCadastro v-model="cep" icon="location-dot" placeholder="CEP"/>
        <InputsCadastro v-model="rua" icon="location-dot" placeholder="Rua"/>
      </div>
      <div class="flex items-center gap-3">
        <InputsCadastro v-model="numero" icon="location-dot" placeholder="Número"/>
        <InputsCadastro v-model="bairro" icon="location-dot" placeholder="Bairro"/>
      </div>
      <div class="flex items-center gap-3 mr-2">
        <InputsCadastro v-model="cidade" icon="city" placeholder="Cidade"/>
        <InputsCadastro v-model="estado" icon="location-dot" placeholder="Estado"/>
      </div>
      <div class="flex gap-2">
        <FontAwesomeIcon icon="file" class="mt-2 text-gray-300" />
        <textarea v-model="observacoes" class="bg-gray-200 mx-auto resize-none h-[130px] p-2 w-[534px] outline-none" placeholder="Observações"></textarea>
      </div>
      <button @click="cadastrarPJ" class="cursor-pointer mt-2 bg-blue-800 text-white rounded-md h-[50px] w-[300px] p-1">Cadastrar</button>
    </div>
  </template>