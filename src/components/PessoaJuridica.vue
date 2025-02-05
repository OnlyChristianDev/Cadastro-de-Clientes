<script setup>
import { ref } from 'vue'
import InputsCadastro from './InputsCadastro.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>
<template>
    <div class="flex flex-col items-center gap-3">
        <div class="flex items-center gap-3 mr-4">
            <InputsCadastro icon="business-time"  placeholder="Razao Social"/>
            <InputsCadastro icon="business-time" placeholder="Nome fantasma"/>
        </div>
        <div class="flex items-center gap-3 mr-4">
            <InputsCadastro icon="business-time" placeholder="CNPJ"/>
            <InputsCadastro icon="business-time" placeholder="Inscriçao estadual"/>
        </div class="flex items-center gap-3">
        <div class="flex items-center gap-3 mr-1">
            <InputsCadastro icon="user" placeholder="nome do responsavel"/>
            <InputsCadastro icon="user" placeholder="cargo do responsavel"/>
        </div>
       <div class="flex items-center gap-3 mr-2">
            <InputsCadastro icon="phone" placeholder="telefone da empresa"/>
            <InputsCadastro icon="envelope" placeholder="email da empresa"/>
       </div>
       <div class="flex items-center gap-3">
        <InputsCadastro icon="location-dot" placeholder="CEP"/>
        <InputsCadastro icon="location-dot" placeholder="Rua"/>
       </div>
       <div class="flex items-center gap-3">
            <InputsCadastro icon="location-dot" placeholder="Numero"/>
            <InputsCadastro icon="location-dot" placeholder="Bairro"/>
       </div>
       <div class="flex items-center gap-3 mr-2">
            <InputsCadastro icon="city" placeholder="Cidade"/>
            <InputsCadastro icon="location-dot" placeholder="Estado"/>
       </div>
       <div class="flex gap-2">
        <FontAwesomeIcon icon="file" class="mt-2 text-gray-300" />
            <textarea class="bg-gray-200 mx-auto resize-none h-[130px] p-2 w-[534px] outline-none" name="" id=""></textarea>
       </div>
        <button class="cursor-pointer mt-2 bg-blue-800 text-white rounded-md h-[50px] w-[300px] p-1">Cadastrar</button>
    </div>
    
</template>