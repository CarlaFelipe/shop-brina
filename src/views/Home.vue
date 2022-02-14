<template>
  <div class="home">
    <!-- <Navbar></Navbar> -->
    <Principal />
    <!-- <Productos /> -->
    <lista-productos></lista-productos>
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
    <!-- Modal -->
        <div class="modal fade" id="carritoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Mi carrito</h5>
                <button type="button" class="close cerrarModal" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                  <ul>
                    <li v-for="item in this.$store.state.carrito" class="media">
                      <img :src="item.imagenProducto" width="80px" class="align-self-center mr-3" alt="">
                      <div class="media-body">
                        <h5 class="mt-0">{{item.nombreProducto}}</h5>
                        <p class="mt-0">{{item.precioProducto | currency('€', 2, { symbolOnLeft: false }, { decimalSeparator: ',' }) }}</p>
                      </div>
                    </li>
                  </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Continuar comprando</button>
                <button type="button" class="btn btn-primary">Pagar</button>
              </div>
            </div>
          </div>
        </div>
    <!-- <modal-carrito></modal-carrito> -->
  </div> 
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Principal from "@/components/Principal.vue";
import Productos from "@/views/Productos.vue";
import Footer from "@/components/Footer.vue";
import ListaProductos from '../sections/ListaProductos.vue';
export default {
  name: "Home",
  components: {
    HelloWorld,
    Principal,
    Productos,
    Footer,
    ListaProductos
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
