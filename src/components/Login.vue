<template>
    <div class="vue-tempalte">
        <form @submit.prevent="userLogin">
            <h3>Iniciar Sesión</h3>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" v-model="user.email" />
            </div>
            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" class="form-control" v-model="user.password" />
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Iniciar sesión</button>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">¿Has olvidado la contraseña ?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import {firebase} from "../firebase.js"

export default {
  data() {
    return {
      user: {   
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userLogin() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
            this.$router.push('/productos')
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form-control {
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>