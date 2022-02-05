<template>
  <div class="home">
    <Navbar></Navbar>
    <Principal/>
    <Productos/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Principal from "@/components/Principal.vue";
import Productos from "@/views/Productos.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Principal,
    Productos
  },
};
</script>
