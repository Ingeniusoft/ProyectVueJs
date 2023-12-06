<template>
  <h1 style="text-align: center;">Datos culturalEducation</h1>
  <br><br><br>

  <p style="text-align: justify;">
    Vue.js es un framework progresivo de JavaScript utilizado para construir interfaces de usuario interactivas y 
    eficientes. Diseñado para ser incrementado de manera gradual, Vue facilita la integración en proyectos existentes 
    y ofrece una experiencia de desarrollo fluida. 
  </p>
  <br><br><br><br><br>

  <ComponenteLista/>
  

</template>


<script>
  import ComponenteLista from './components/ComponenteLista.vue'

  export default {
    components:{
      ComponenteLista
    }
  }
</script>

