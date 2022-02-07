<template>
  <div class="home">
    <!-- <Navbar></Navbar> -->
    <Principal />
    <Productos />

    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-4">
          <img src="/img/svg/product.svg" alt="" width="400" />
        </div>
        <!-- <div class="col-md-6">
          <h3>Learn More About us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!
          </p>
            <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
        </div> -->
        <div class="col-md-6">
          <h2 class="footer-title">
            Newsletter ¡-10% EN TU PRIMERA COMPRA!
          </h2>
          <div class="footer">
            <p>
              ¡Únete al club! Inspiración, ofertas, ventas privadas, consejos y
              mucho más.
            </p>
          </div>
          
            <input
              type="email"
              class="Form__Input"
              aria-label="Introduce tu correo electrónico"
              placeholder="Introduce tu correo electrónico"
              required=""
            />
            <button class="btn custom-btn btn-info mr-4">Subcribirse</button>
        </div>
      </div>
    </div>
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
    Productos,
  },
};
</script>

<style scoped lang="scss">
button {
  margin-left: 10px;
}

.Form__Input {
  width: 220px;
}
</style>
