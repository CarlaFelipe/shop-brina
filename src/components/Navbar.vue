<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">BRINA</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                to="/home"
                class="nav-link active"
                aria-current="page"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/productos"
                class="nav-link active"
                aria-current="page"
                >Productos</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Sobre mí</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Buscar
            </button>
            <!-- Button trigger modal -->
            <!-- <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#login"
            >
              Login
            </button> -->
            <!-- <ul class="nav navbar-nav flex-row float-right">
              <li class="nav-item">
                <router-link class="nav-link pr-3" to="/login"
                  >Sign in</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="btn btn-outline-primary" to="/"
                  >Sign up</router-link
                >
              </li>
            </ul> -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link
                  to="/login"
                  class="nav-link active"
                  aria-current="page"
                  >Login</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/signup"
                  class="nav-link active"
                  aria-current="page"
                  >Sign up</router-link
                >
              </li>
            </ul>
          </form>
        </div>
      </div>
      <!-- <Login></Login> -->
    </nav>
  </div>
</template>

<script>
// import Login from "./Login.vue";

export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  components: { },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar.custom-nav {
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #fff !important;
}
.d-flex  {
  height: 40px;
}

.sigin {
  margin-left: 10px;
  width: 100%;
}
</style>
