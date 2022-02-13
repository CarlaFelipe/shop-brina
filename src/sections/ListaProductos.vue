<template>
  <div class="productos" id="productos">
      <div class="container">
          <h1 class="text-center p-5">Lista de productos</h1>
          <div class="row">

              <div class="col-md-4" v-for="producto in productos">
                  <div class="card product-item">
                    <!-- <img src="/img/productos/productos.png" class="card-img-top" alt="..."> -->
                     <carousel :perPage="1">
                          <slide v-for="(image, index) in producto.images" :key="index">
                                <img :src="image" class="card-img-top" alt="..." width="250px">
                          </slide>
                        </carousel>

                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <h5 class="card-title">{{ producto.nombre }}</h5>
                            <h5 class="card-priceS">{{ producto.precio | currency('€', 0, { symbolOnLeft: false }) }}</h5>
                          </div>
                        </div>
                        <add-carrito
                          :imagen-prod="getImagen(product.images)"
                          :nombre="producto.nombre"
                          :precio="producto.precio"
                          :producto-id="producto.id"
                        ></add-carrito>
                    </div>
              </div>

          </div>
      </div>

  </div>
</template>

<script>
import { firebase, db, fb } from "../firebase.js";


export default {
  name: "ListaProductos",
  props: {
    msg: String
  },

data(){
    return {
        productos: [],
     
    }
  },

  methods:{

    getImagen(images){
      return images[0];
    }

  },

  firestore(){
      return {
        productos: db.collection('productos'),
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .productos{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>
