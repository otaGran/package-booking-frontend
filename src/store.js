import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    parcelList:[],
    filterStatus :100
  },
  mutations: {
    updateParcelList(state, postResponse) {
      state.parcelList.push(...postResponse);
    },
    refreshParcelList(state, getResponse){
      state.parcelList = getResponse;
    },
    filterAll(state){
      state.filterStatus = 100;
    },
    filterAppointed(state){
      state.filterStatus = -1;
    },
    filterReceived(state){
      state.filterStatus = 0;
    },
    filterUnAppointed(state){
      state.filterStatus = 1;
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
    confirmReceived(context,parcelNumber){
      axios.patch('http://localhost:8080/parcels/'+parcelNumber,{status:0})
        .then(res => {
          context.dispatch('initParcelList');
        })
        .catch(function (error) { // 请求失败处理
          alert(error);
        });
    },
    makeAppointment(context,parcelNumber, Time){
      axios.patch('http://localhost:8080/parcels/'+parcelNumber,{status:-1,appointmentTime:Time})
        .then(res => {
          context.dispatch('initParcelList');
        })
        .catch(function (error) { // 请求失败处理
          alert(error);
        });
    }
  },
  getters: {
    parcelItems(state) {
      if (state.filterStatus === -1) {
        return state.parcelList.filter(v => {
          return v.status === -1;
        });
      } else if (state.filterStatus === 1) {
        return state.parcelList.filter(v => {
          return v.status === 1;
        });
      } else if (state.filterStatus === 0){
        return state.parcelList.filter(v => {
          return v.status === 0;
        });
      } else{
        return state.parcelList;
      }
    }
  },
})
