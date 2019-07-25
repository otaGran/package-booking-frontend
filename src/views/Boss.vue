<template>
  <div>
    <h1>菜鸟驿站</h1>
    <button @click="filterAll">All</button>
    <button @click="filterAppointed">已预约</button>
    <button @click="filterReceived">已取件</button>
    <button @click="filterUnAppointed">未预约</button>
    <button @click="addParcel">添加</button>
    <table border="1">
      <parcelItem :parcel="parcel" v-for="parcel in $store.getters.parcelItems "></parcelItem>
    </table>
  </div>

</template>

<script>
  import parcelItem from '@/components/parcelItem.vue'
    export default {
        name: "Boss",
      methods: {
        addParcel(){
          this.$router.push('/addParcel');
        },
        filterAll(){
          this.$store.commit('filterAll');
        },
        filterAppointed(){
          this.$store.commit('filterAppointed');
        },
        filterReceived(){
          this.$store.commit('filterReceived');
        },
        filterUnAppointed(){
          this.$store.commit('filterUnAppointed');
        }

      },
      mounted() {
          this.$store.dispatch('initParcelList');
      },
      components:{
        parcelItem
      }
    }
</script>

<style scoped>

</style>
