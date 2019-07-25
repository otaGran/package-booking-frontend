import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    parcelList:[]
  },
  mutations: {
    updateParcelList(state, postResponse) {
      state.parcelList.push(...postResponse);
    },
    refreshParcelList(state, getResponse){
      state.parcelList = getResponse;
    }
  },
  actions: {
    addNewParcel(context,oneParcelItem) {
      axios.post('http://localhost:8080/parcels',oneParcelItem)
        .then(res => {
          context.commit('updateParcelList', [res.data])
        })
        .catch(function (error) { // 请求失败处理
          alert(error);
        });

    },
    initParcelList(context){
      axios.get('http://localhost:8080/parcels')
        .then(res => {
          context.commit('refreshParcelList', res.data)
        })
        .catch(function (error) { // 请求失败处理
          alert(error);
        });
    },
    confirmReceived(context,id){
      axios.patch('http://localhost:8080/parcels/'+id,{status:0})
        .then(res => {
          context.dispatch('initParcelList');
        })
        .catch(function (error) { // 请求失败处理
          alert(error);
        });
    }
  }
})
