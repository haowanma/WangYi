import Vue from 'vue'
import Vuex from 'vuex'
import {request} from '../request/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexData:{}
  },
  mutations: {
    updataIndexData(store,newData){
      store.indexData = newData
      console.log(newData.data)
    }
  },
  actions: {
   async indexfun({commit}){
      let result = await request('/getindexData')
      // console.log(result)
      commit('updataIndexData',result.data)
    }
  },
  modules: {
  }
})
