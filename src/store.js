import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


export default new Vuex.Store({
    state: {
      carrito:[]
    },
    mutations:{
      addCarrito(state, item){
        let cantidad = state.carrito.find(producto => producto.idProducto == item.idProducto );

        if(cantidad){
          cantidad.cantidadProducto++;
        }else{
          state.carrito.push(item);
        }
        this.commit('guardarDatos');
      },
      //guardar los datos en el localStorage consola
      guardarDatos(state){
        window.localStorage.setItem('carrito', JSON.stringify(state.carrito));
      },
  },

  })