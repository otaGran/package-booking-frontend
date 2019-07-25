<template>
  <div>
    <h1>菜鸟驿站</h1>
    <button>All</button>
    <button>已预约</button>
    <button>已取件</button>
    <button>未预约</button>
    <button @click="addParcel">添加</button>
    <table border="1">
      <parcelItem :parcel="parcel" v-for="parcel in $store.state.parcelList "></parcelItem>
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
