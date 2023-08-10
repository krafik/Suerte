import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    products: [],
    product:[],
    cart:[],
    wishList:[]
  },
  getters: {
    CATALOG_PRODUCTS(state) {
      return state.products;
    },
    CATALOG_PRODUCT(state) {
      return state.product;
    },
    CART(state){
      return state.cart;
    },
    WISH_LIST(state){
      return state.wishList;
    }
  },
  mutations: {
    SET_CATALOG_PRODUCTS_FROM_API: (state, products) => {
      state.products = products
      // state.products.push(products)
    },
    SET_CATALOG_PRODUCT:(state,product)=>{

      state.product=product
    },
    SET_CART: (state, product)=>{
      state.cart.push(product)
    },
    REMOVE_FROM_CART:(state, index)=>{
      state.cart.splice(index, 1);
    },
    SET_WISH_LIST: (state, product)=>{
      state.wishList.push(product)
    },
    REMOVE_FROM_WISH_LIST:(state, index)=>{
      state.wishList.splice(index, 1);
    }
    
  },
  actions: {
    GET_CATALOG_PRODUCTS_FROM_API({ commit }) {
      return axios('http://localhost:3000/products', {
        method: "GET"
      })
        .then((products) => {
          commit("SET_CATALOG_PRODUCTS_FROM_API", products.data)
          // console.log(products)
          return products
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    },
    GET_CATALOG_PRODUCT({commit}, id){
      return axios(`http://localhost:3000/products/${id}`, {
        method: "GET"
      })
      .then((product) => {
        commit("SET_CATALOG_PRODUCT", product.data)
        // console.log(product)
        return product
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },
    ADD_TO_CART({commit}, product){
      commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index){
      commit('REMOVE_FROM_CART',index)
    },
    ADD_TO_WISH_LIST({commit}, product){
      commit('SET_WISH_LIST', product)
    },
    DELETE_FROM_WISH_LIST({commit}, index){
      commit('REMOVE_FROM_WISH_LIST',index)
    }
  },
  modules: {
  }
})
