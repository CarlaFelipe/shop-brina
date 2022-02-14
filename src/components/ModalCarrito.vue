<template>
  <div class="modal-carrito">

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
                        <p class="mt-0">Cantidad : {{item.cantidadProducto }}</p>
                      </div>
                    </li>
                  </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Continuar comprando</button>
                <button type="button" class="btn btn-primary" @click="realizarPago">Pagar</button>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "modal-carrito",
  props: {
    msg: String
  },
  methods:{
    realizarPago(){
      $('#carritoModal').modal('hide')
      this.$router.push('/pagar')  
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>