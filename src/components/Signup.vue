<template>
    <div class="vue-tempalte">
        <form @submit.prevent="userRegistration">
            <h3>Crear nueva cuenta</h3>
            <div class="form-group">
                <label>Nombre</label>
                <input type="text" class="input-name" v-model="user.name" />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="" v-model="user.email" />
            </div>
            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" class="" v-model="user.password" />
            </div>
            <button type="submit" class="btn btn-dark btn-md btn-block">
               Crear cuenta
            </button>
            <p class="forgot-password text-right">
                Ya está registrado 
                <router-link :to="{name: 'login'}">Acceder a tu cuenta?</router-link>
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
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userRegistration() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.user.name
          })
          .then(() => {
            this.$router.push('/login')
          });
      })
      .catch((error) => {
         alert(error.message);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  margin: 10px;
  width: 340px;
}
button {
  margin: 10px;
}
</style>