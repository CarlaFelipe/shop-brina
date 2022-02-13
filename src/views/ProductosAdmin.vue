<template>
  <div class="productos">
    <div class="container">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Página de productos</h3>
            <p>
              Este es el apartado de productos sobre el user de administrador
            </p>
          </div>
          <div class="col-md-6">
            <img src="/img/svg/productos.svg" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>

    <hr />

    <h3>Basic CRUD (create/read/update/delete) in Firebase and Vue</h3>

    <div class="product-test">
      <div class="form-group">
        <input
          type="text"
          placeholder="nombre del producto"
          v-model="producto.nombre"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <input
          type="text"
          placeholder="Precio"
          v-model="producto.precio"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <button @click="guardarProd" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script>
import {firebase, db} from "../firebase.js";

export default {
  name: "Productos",
  props: {
    msg: String,
  },
  data() {
    return {
      producto: {
        nombre: null,
        precio: null
      }
    }
  },
  methods: {
    guardarProd() {
      db.collection("productos").add(this.producto)
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.reset();
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    },
    reset(){
      Object.assign(this.$data, this.$options.data.apply(this));
  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>