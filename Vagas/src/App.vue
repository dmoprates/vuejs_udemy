<template>
  <div>
    <vagas-favoritas></vagas-favoritas>
    <topo-padrao @navegar="componente = $event"/>
    <alerta-view v-if="exibirAlerta" :tipo="alerta.tipo">
      <template v-slot:titulo>
        <h5>{{ alerta.titulo }}</h5>
      </template>
      <template v-slot:descricao>
        <p>{{ alerta.descricao }}</p>
      </template>
    </alerta-view>
    <conteudo-padrao v-if="visibilidade" :conteudo="componente"></conteudo-padrao>
  </div>
</template>

<script>
import AlertaView from './components/comuns/Alerta.vue'
import ConteudoPadrao from './components/layouts/ConteudoPadrao.vue'
import VagasFavoritas from './components/comuns/VagasFavoritas.vue'
import TopoPadrao from './components/layouts/TopoPadrao.vue'


export default {
  name: 'App',
  data: () => ({
    visibilidade: true,
    componente: 'Home',
    exibirAlerta: false,
    alerta: { titulo: '', descricao: '', tipo: '' }
  }),
  methods: {
    desmontarComponente() {
      this.visibilidade = false
    },
    acao(p){
      console.log(p)
    }
  },
  components: {
    AlertaView,
    ConteudoPadrao,
    TopoPadrao,
    VagasFavoritas
  },
  mounted() {
    this.emitter.on('alerta', (a) => {
      this.alerta = a
      this.exibirAlerta = true
      setTimeout(() => this.exibirAlerta = false, 4000)
      console.log('mensagem customizada')
    })
  }
}
</script>

<style scoped>

</style>
