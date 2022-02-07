<template>
    <div class="principal">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="principal-content">
                <h1 class="hero-title">
                  BRINAMINI
                </h1>
                <p>
                  Página con Vue, venta de moda y complementos
                </p>
                <div class="hero-btn mt-5">
                    <button class="btn custom-btn btn-info mr-4">Explorar</button>
                    <button class="btn custom-btn btn-outline-secondary">Productos</button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img src="/img/principal.png" alt="" width="500px" height="500px">
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
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }

</style>
