<script setup>
  const color = "red ";
  const mayuscula = "vue";
  const arrayFrutas = [
    {
      name: "manzana", 
      price: "$1.00",
      description: "Una manzana",
      stock: 0,
    },

    {
      name: "Pera",
      price: "$2.00",
      description: "Una pera",
      stock: 10,
    },

    {
      name: "Naranja",
      price: "$3.00",
      description: "Una naranja",
      stock: 20,
    },
];
</script>


<!--En los objetos el primer argumento se recibe el valor de las propiedades, 
  es decir lo que almacena el campo u objeto, el segundo argumento es el nombre de
la propiedad, y en tercer argumento el parametro-->
<template>

  <h1 :style="{color:azul}">Hola mundo {{ mayuscula.toUpperCase()}}</h1>
  {{ objetoFruta }}
    <br><br>
    <ul><!--Por cada "v-for" debemos de agreagr un :key="", es decir, un identificador-->
      <li v-for="item in arrayFrutas" :key="item.name">
        <span v-if="item.stock > 0">
          {{ item.name }} - {{ item.price }}
        </span>
      </li>
    </ul>

</template>

