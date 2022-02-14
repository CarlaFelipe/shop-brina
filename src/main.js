import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import './assets/app.scss';
import jQuery from "jquery";
import 'popper.js';
import {firebase} from "./firebase.js";
import VueFirestore from 'vue-firestore';
// require('firebase/firestore');
import Swal from 'sweetalert2';

import store from './store.js';

window.Swal = Swal;

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

Vue.use(VueFirestore);

window.$ = window.jQuery = jQuery;

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('lista-productos', require('./sections/ListaProductos.vue').default);
Vue.component('add-carrito', require('./components/AddCarrito.vue').default);

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);


import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

Vue.config.productionTip = false;

//Limitar que el apartado de admin solo sea para usuarios autorizados
let app = '';

firebase.auth().onAuthStateChanged(function(user) {

  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");
