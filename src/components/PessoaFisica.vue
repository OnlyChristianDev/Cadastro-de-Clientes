<script setup>
import { ref } from 'vue'
import InputsCadastro from './InputsCadastro.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>
<template>
    <div class="flex flex-col items-center justify-center gap-3">
        <div class="flex items-center justify-center gap-3">
            <InputsCadastro icon="user" placeholder="Nome completo"/>
            <InputsCadastro icon="user" placeholder="Cpf"/>
        </div>
       <div class="flex items-center justify-center gap-3">
        <div class="flex items-center gap-2">
            <div class="text-gray-300">
                <FontAwesomeIcon icon="calendar" />
            </div>
            <input type="date" class="p-2 border-2 w-[250px] border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"  />
        </div>
            <InputsCadastro icon="envelope" placeholder="E-mail"/>
       </div>
       <div class="flex items-center justify-center gap-3">
            <InputsCadastro icon="phone" placeholder="Telefone"/>
            <InputsCadastro icon="location-dot" placeholder="Endereço"/>
       </div>
       <div class="flex gap-2">
        <FontAwesomeIcon icon="file" class="mt-2 text-gray-300" />
            <textarea class="bg-gray-200 mx-auto resize-none h-[130px] p-2 w-[534px] outline-none" name="" id=""></textarea>
       </div>
        <button class="cursor-pointer mt-2 bg-blue-800 text-white rounded-md h-[50px] w-[300px] p-1">Cadastrar</button>
    </div>
    
</template>