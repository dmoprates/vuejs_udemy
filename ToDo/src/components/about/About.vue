<template>
  <div class="ma-4 text-center">
    <h1 class="ma-4">Sobre o projeto!</h1>
    <p class="ma-4">Aplicação desenvolvida através do Curso de VUEJS adquirido na UDEMY. <br/>Abaixo algumas tecnologias que foram utilizadas.</p>
    <v-divider></v-divider>
  </div>
  <div></div>
  <div class="ma-4 d-flex">
    <AboutCard
      v-for="(item, index) in items"
      :key="index"
      :image="item.image"
      :title="item.title"
      :subtitle="item.subtitle"
      :text="item.text"
    />
  </div>

</template>

<script setup>
import AboutCard from "@/components/about/AboutCard.vue";

const items = [
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OrjCKmou1jT4It5so5gvOA.jpeg",
    title: "Vue.js",
    subtitle: "The Progressive JavaScript Framework",
    text: "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
  },
  {
    image:
      "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-atom.svg",
    title: "Vuetify 3",
    subtitle: "Incível biblioteca front-end",
    text: "Learn more about what Vuetify is, how to create an application from scratch, browse API references, sample code, tutorials, and more.",
  }
];
</script>

<style>
</style>