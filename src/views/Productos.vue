<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-4">Lista de productos</h1>
          <div class="row">

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/productos/productos.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Conjunto de Perlas</h5>
                            <p class="card-text">
                                Conjunto de gargantillas de perlas
                            </p>
                            <a href="#" class="btn btn-primary">Añadir Carrito</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/productos/productos2.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Anillos</h5>
                            <p class="card-text">
                               Anillos y pulseras de moda
                            </p>
                            <a href="#" class="btn btn-primary">Añadir Carrito</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/productos/productos3.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Conjunto de Perlas</h5>
                            <p class="card-text">
                                    Conjunto de gargantilla de perlas con pulseras y anillos.

                            </p>
                            <a href="#" class="btn btn-primary">Añadir Carrito</a>
                        </div>
                    </div>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "Productos",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>