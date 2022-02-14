import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      carrito:[]
    },
    mutations:{
      addCarrito(state, item){
          state.carrito.push(item);
      },
  },

  })