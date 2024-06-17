<template>
    <div>
        <div class="divVagasFavoritas">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Vagas Favoritas</button>
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Vagas Favoritadas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="list-group">
            <li class="list-group-item" v-for="(vaga, index) in vagas" :key="index">{{ vaga }}</li>
          </ul>

  </div>
</div>
    </div>
</template>

<script>
    export default {
        name:"VagasFavoritas",
        data: () => ({
           vagas:[] 
        }),
        mounted(){
            this.emitter.on('favoritarVaga', (titulo) => {
                this.vagas.push(titulo)
            })
            this.emitter.on('desfavoritarVaga', (titulo) => {
                let indiceArray = this.vagas.indexOf(titulo)
                if(indiceArray !== -1) this.vagas.splice(indiceArray, 1)
            })
        }
    }
</script>

<style scoped>
    .divVagasFavoritas {
        position: absolute;
        z-index: 1;
        top: 60px;
        right: 0px
    }
</style>

