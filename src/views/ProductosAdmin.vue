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
       <h3 class="d-inline-block">Lista de productos</h3>
       <button @click="addNewProducto" class="btn btn-primary add">Añadir Prodcuto</button>

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
            
          </tbody>
        </table>
      </div>
    <!-- Modal Editar-->
    <div class="modal fade" id="producto" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Editar Productos</h5>
            <button
              type="button"
              class="close cerrarModal"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
           <div class="row">
                  <!-- main product -->
                  <div class="col-md-8">
                    <div class="form-group">
                      <input type="text" placeholder="Nombre producto" v-model="producto.nombre" class="form-control">
                    </div>

                    <div class="form-group">
                      <textarea name="description" class="form-control" placeholder="Descripción producto" v-model='producto.descripcion' cols="30" rows="10"></textarea>
                    </div>
                  </div>
                  <!-- producto modal detalles -->
                  <div class="col-md-4">
                    <h4 class="display-6">Detalles Producto</h4>
                    <hr>

                    <div class="form-group">
                      <input type="text" placeholder="Precio producto" v-model="producto.precio" class="form-control">
                    </div>

                    <div class="form-group">
                      <input type="text" placeholder="Tags prodcutos" v-model="producto.tag" class="form-control">
                    </div>

                    <div class="form-group">
                      <label for="product_image">Imagen Producto</label>
                      <input type="file" @change="actualizarImagen()" class="form-control">
                    </div>

                  </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary cerrarModal"
              data-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              @click="addProducto()"
              type="button"
              class="btn btn-primary"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- fin modal editar -->
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
        descripcion:null,
        precio:null,
        tag:null,
        image:null
      },
      activeItem: null,
    };
  },

   firestore(){
      return {
        productos: db.collection('productos'),
      }
  },

  methods: {
    addNewProducto(){
        $('#producto').modal('show');
         $(".cerrarModal").click(function () {
        $("#producto").modal("hide");
      });
    },
    actualizarProducto() {
      
    },
    editarProducto(producto) {
     
    },
    borrarProducto(doc) {
      
    },
    leerDatos() {
      
    },
    addProducto() {
      this.$firestore.productos.add(this.producto);
    },
  },
  created() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form-group {
  padding-bottom: 10px;
}
.add {
  float: right;
}

@media (min-width: 992px){
  .modal-lg, .modal-xl {
      max-width: 1300px;
  }
}
</style>