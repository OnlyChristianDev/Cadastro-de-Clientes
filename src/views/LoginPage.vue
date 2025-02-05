<script setup>
import { ref } from 'vue'
import InputsLogin from '../components/InputsLogin.vue'

const childref = ref(null)

const verificarCampo = () => {
    if(childref.value.valorInput === ''){
        alert('Campo vazio')
    } else {
        alert('Campo preenchido')
    }
}
</script>

<template>
    <div class="w-full h-screen flex justify-center items-center">
        <div class="flex shadow-xl w-[900px] items-center justify-center p-10">
            <div class="w-[450px]">
                <img src="../assets/login.svg" alt="">
                <img src="" alt="">
            </div>
        <div class="flex w-[450px] flex-col justify-center items-center">
            <h1 class="font-bold text-4xl mb-6">
                Login.
            </h1>
            <div class="flex flex-col items-center justify-center gap-2">
                <InputsLogin ref="childref" placeholder="Digite seu e-mail" />
                <InputsLogin placeholder="Digite sua senha" />
                <div class="flex gap-7 w-[300px]">
                    <div class="flex gap-1 items-center justify-center">
                        <input class="cursor-pointer" type="checkbox" name="" id="" />
                        <p class="text-sm">lembrar senha</p>
                    </div>
                    <a href="#"><p class="text-sm underline ">esqueci minha senha</p></a>
                </div>
            </div>
            <button @click="verificarCampo" class="cursor-pointer mt-4 bg-blue-800 text-white rounded-md w-[200px] p-1">Login</button>
        </div>
        </div>
    </div>
</template>
  