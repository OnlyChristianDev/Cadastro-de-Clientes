<script setup>
import { ref } from 'vue'
import InputsCadastro from './InputsCadastro.vue';

</script>
<template>
    <div class="flex flex-col items-center gap-3">
        <div>
            <InputsCadastro placeholder="Razao Social"/>
            <InputsCadastro placeholder="Nome fantasma"/>
        </div>
        <div>
            <InputsCadastro placeholder="CNPJ"/>
            <InputsCadastro placeholder="Inscriçao estadual"/>
        </div>
        <div>
            <InputsCadastro placeholder="nome do responsavel"/>
            <InputsCadastro placeholder="cargo do responsavel"/>
        </div>
       <div>
            <InputsCadastro placeholder="telefone da empresa"/>
            <InputsCadastro placeholder="email da empresa"/>
       </div>
       <div>
        <InputsCadastro placeholder="CEP"/>
        <InputsCadastro placeholder="Rua"/>
       </div>
       <div>
            <InputsCadastro placeholder="Numero"/>
            <InputsCadastro placeholder="Bairro"/>
       </div>
       <div>
            <InputsCadastro placeholder="Cidade"/>
            <InputsCadastro placeholder="Estado"/>
       </div>
        <textarea class="bg-gray-100" name="" id=""></textarea>
        <button>Cadastrar</button>
    </div>
    
</template>