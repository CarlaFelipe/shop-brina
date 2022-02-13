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
                      <td> {{producto.data().nombre}} </td>
                      <td> {{producto.data().precio}} </td>
                      <td>
                        <button class="btn btn-primary">Editar</button>
                        <button @click="borrarProducto(producto.id)" class="btn btn-danger">Borrar</button>
                      </td>
                    </tr>


                  </tbody>
                </table>
            </div>
    </div>
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
    };
  },
  methods: {
     borrarProducto(doc){
        if(confirm('¿Estas seguro de borrar este producto? ')){
          db.collection("productos").doc(doc).delete().then(function() {
              console.log("Producto borrado exitosamente!");
          }).catch(function(error) {
              console.error("Error al borrar el producto: ", error);
          });
          
        }else{
        }
    },
    leerDatos(){
          db.collection("productos").get().then((querySnapshot) => {
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
  created(){
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