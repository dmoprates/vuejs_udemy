<template>
    <div class="container py-4">
      <div class="row">
        <div class="col">
            <pesquisar-vaga></pesquisar-vaga>
        </div>
      </div>
      <lista-vagas>
      </lista-vagas>

      <div class="row mt-5">
        <div class="col-4">
            <indicador titulo="Vagas Abertas" indicador="100" bg="bg-dark" color="text-white"></indicador>
        </div>
        <div class="col-4">
            <indicador titulo="Profissionais Cadastrados" indicador="225" bg="bg-dark" color="text-white"></indicador>
        </div>
        <div class="col-4">
            <indicador titulo="Visitantes online" :indicador="usuariosOnLine" bg="bg-light" color="text-dark"></indicador>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Indicador from '@/components/comuns/Indicador.vue'
  import ListaVagas from '@/components/comuns/ListaVagas.vue'
  import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'
  
    export default{
      name:'HomeView',
      components: {
        PesquisarVaga,
        Indicador,
        ListaVagas
      },
      data: () => ({
        usuariosOnLine: 0,
        vagas: []
      }),
      methods: {
        getUsuariosOnline() {
            this.usuariosOnLine = Math.floor(Math.random()*101)
        }
      },
      created() {
        setInterval(this.getUsuariosOnline, 5000)
      }      
    }
  </script>
  
  
  <style scoped>

  </style>