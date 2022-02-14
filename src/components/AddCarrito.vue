<template>
  <div class="add-carrito">
    <button class="btn btn-primary" @click="addCarrito"> Añadir al carrito </button>
  </div>
</template>

<script>
export default {
  name: "add-carrito",
  props: {
    nombre: String,
    precio: String,
    image: String,
    pId: String
  },

  data(){
      return {
          item :{
            nombreProducto: this.nombre,
            imagenProducto: this.image,
            precioProducto: this.precio,
            idProducto: this.pId,
            cantidadProducto: 1,
          }

      }
  },
  methods:{
    addCarrito(){
      $('#carritoModal').modal('show');
      this.$store.commit('addCarrito', this.item)

       $(".cerrarModal").click(function () {
        $("#carritoModal").modal("hide");
      });
    }

  }

};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
