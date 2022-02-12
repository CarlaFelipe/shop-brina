<template>
  <div class="home">
    <!-- <Navbar></Navbar> -->
    <Principal />
    <Productos />
    <Footer />

    <!-- <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-4">
          <img src="/img/svg/product.svg" alt="" width="400" />
        </div>
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
    </div>-->
  </div> 
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Principal from "@/components/Principal.vue";
import Productos from "@/views/Productos.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Principal,
    Productos,
    Footer
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
