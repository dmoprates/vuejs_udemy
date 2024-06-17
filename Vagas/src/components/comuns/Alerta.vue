<template>
    <div :class="estiloAlerta" role="alert">
        <slot name="titulo">
            <h3>Titulo de feedback padrão</h3>
        </slot>
        <hr>
        <slot name="descricao">
            <p>Texto de feedback padrão</p>
        </slot>
     </div>
</template>

<script>
    export default{
        name: 'AlertaView',
        props: { tipo: String},
        computed: {
            estiloAlerta() {
                switch(this.tipo) {
                    case 'erro': return 'alert alert-danger'
                    case 'sucesso': return 'alert alert-success'
                    default: return 'alert alert-success'
                }
            }
        }
    }
</script>