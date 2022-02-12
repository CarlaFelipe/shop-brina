<template>
    <div class="principal">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="principal-content">
                <h1 class="principal-title">
                  BRINAMINI
                </h1>
                <p>
                  Página con Vue, venta de moda y complementos
                </p>
                <div class="principal-btn mt-5">
                    <button class="btn custom-btn btn-info mr-4">Explorar</button>
                    <button class="btn custom-btn btn-outline-secondary">Productos</button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img class="img-principal" src="/img/principal.jpg" alt="">
                    <!-- <a href='https://www.freepik.com/photos/gift'>Gift photo created by wirestock - www.freepik.com</a> -->
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Principal",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .principal{
    width: 100%;
    height: 500px;
    text-align: left;
  }

.img-principal {
  // display: flex;
  height: 600px;
  width: 100%;
}

</style>
