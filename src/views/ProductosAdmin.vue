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

      <hr />

      <h3>Lista productos</h3>

      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Modificar</th>
            </tr>
          </thead>

          <tbody>
            <!-- se queda sin el :key porque si no da error-->
            <tr v-for="producto in productos">
              <td>{{ producto.data().nombre }}</td>
              <td>{{ producto.data().precio }}</td>
              <td>
                <button
                  @click="editarProducto(producto)"
                  class="btn btn-primary"
                >
                  Editar
                </button>
                <button
                  @click="borrarProducto(producto.id)"
                  class="btn btn-danger"
                >
                  Borrar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Modal Editar-->
      <div class="modal fade" id="editar" tabindex="-1" role="dialog" aria-labelledby="editarLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Editar Productos</h5>
              <button type="button" class="close cerrarModal" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <div class="form-group">
                  <input type="text" placeholder="Nombre producto" v-model="producto.nombre" class="form-control">
                </div>

                <div class="form-group">
                  <input type="text" placeholder="Precio" v-model="producto.precio" class="form-control">
                </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary cerrarModal" data-dismiss="modal">Cerrar</button>
              <button @click="actualizarProducto()" type="button" class="btn btn-primary">Guardar</button>
            </div>
          </div>
        </div>
      </div>
      <!-- fin modal editar -->
  </div>
</template>

<script>
import { firebase, db, fb } from "../firebase.js";

export default {
  name: "Productos",
  props: {
    msg: String,
  },
  data() {
    return {
      productos: [],
      producto: {
        nombre: null,
        precio: null,
      },
        activeItem:null
    };
  },
  methods: {
    actualizarProducto(){
      db.collection("productos").doc(this.activeItem).update(this.producto)
        .then(function() {
          $('#editar').modal('hide');
            console.log("Producto actualizado!");
        })
        .catch(function(error) {
            console.error("Error al actualizar: ", error);
        });
    },
    editarProducto(producto){
        $('#editar').modal('show');
        this.producto = producto.data();
        this.activeItem = producto.id;
    },
    borrarProducto(doc) {
      if (confirm("¿Estas seguro de borrar este producto? ")) {
        db.collection("productos")
          .doc(doc)
          .delete()
          .then(function () {
            console.log("Producto borrado exitosamente!");
          })
          .catch(function (error) {
            console.error("Error al borrar el producto: ", error);
          });
      } else {
      }
    },
    leerDatos() {
      db.collection("productos")
        .get()
        .then((querySnapshot) => {
          // this.products = querySnapshot;
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.productos.push(doc);
          });
        });
    },
    guardarProd() {
      db.collection("productos")
        .add(this.producto)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.reset();
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    },
    reset() {
      // Object.assign(this.$data, this.$options.data.apply(this));
    },
  },
  created() {
    this.leerDatos();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form-group {
  padding-bottom: 10px;
}
</style>