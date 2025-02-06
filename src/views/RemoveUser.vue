<script setup>
import { ref, onMounted } from "vue";  
import axios from "axios";
import ConfirmarRemover from '../components/ConfirmarRemover.vue'; 

const pessoasFisicas = ref([]);  
const pessoasJuridicas = ref([]); 

const usuarioParaRemover = ref(null); 

const buscarPessoasFisicas = async () => {
  try {
    const response = await axios.get("http://localhost:3000/user/listarpf");
    pessoasFisicas.value = response.data;  
  } catch (error) {
    console.error("Erro ao buscar pessoas físicas:", error);
  }
};

const buscarPessoasJuridicas = async () => {
  try {
    const response = await axios.get("http://localhost:3000/user/listarpj");
    pessoasJuridicas.value = response.data;  
  } catch (error) {
    console.error("Erro ao buscar pessoas jurídicas:", error);
  }
};

const removerUsuario = async (usuarioId) => {
  try {
    await axios.delete(`http://localhost:3000/user/deletar/${usuarioId}`);
    buscarPessoasFisicas();
    buscarPessoasJuridicas();
    usuarioParaRemover.value = null;
  } catch (error) {
    console.error("Erro ao remover o usuário:", error);
  }
};

onMounted(() => {
  buscarPessoasFisicas();
  buscarPessoasJuridicas();
});

</script>

<template>
  <div class="p-6">
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Excluir Cliente</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div v-if="pessoasFisicas.length" class="space-y-4">
          <h3 class="text-xl font-semibold mb-2">Pessoas Físicas</h3>
          <div v-for="(pf, index) in pessoasFisicas" :key="index" class="bg-gray-100 p-4 rounded-lg shadow-sm">
            <div>
              <strong class="font-semibold">Nome:</strong> {{ pf.nomeCompleto }}
            </div>
            <div>
              <strong class="font-semibold">Tipo:</strong> Pessoa Física
            </div>
            <div>
              <strong class="font-semibold">E-mail:</strong> {{ pf.email }}
            </div>
            <div>
              <strong class="font-semibold">Telefone:</strong> {{ pf.telefone }}
            </div>
            <div>
              <strong class="font-semibold">Endereço:</strong> {{ pf.endereco }}
            </div>
            <button @click="usuarioParaRemover = pf" class="bg-red-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-red-700 mt-2">
              Excluir
            </button>
          </div>
        </div>

        <div v-if="pessoasJuridicas.length" class="space-y-4">
          <h3 class="text-xl font-semibold mb-2">Pessoas Jurídicas</h3>
          <div v-for="(pj, index) in pessoasJuridicas" :key="index" class="bg-gray-100 p-4 rounded-lg shadow-sm">
            <div>
              <strong class="font-semibold">Razão Social:</strong> {{ pj.razaoSocial }}
            </div>
            <div>
              <strong class="font-semibold">Tipo:</strong> Pessoa Jurídica
            </div>
            <div>
              <strong class="font-semibold">E-mail:</strong> {{ pj.emailEmpresa }}
            </div>
            <div>
              <strong class="font-semibold">Telefone:</strong> {{ pj.telefoneEmpresa }}
            </div>
            <div>
              <strong class="font-semibold">Endereço:</strong> {{ pj.endereco }}
            </div>
            <button @click="usuarioParaRemover = pj" class="bg-red-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-red-700 mt-2">
              Excluir
            </button>
          </div>
        </div>
      </div>

      <ConfirmarRemover :usuario="usuarioParaRemover"
      @confirmar='removerUsuario'
      @cancelar='usuarioParaRemover = null' v-if="usuarioParaRemover"/>

    </div>
  </div>
</template>
