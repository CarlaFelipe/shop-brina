<template>
  <div class="pagar">
        <div class="container mt-5">

            <div class="row">

                <div class="col-md-9">
                    <h4 class="">Realizar Pago</h4>
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
                <div class="col-md-3">
                    TOTAL
                </div>
            </div>

        </div>
  </div>
</template>