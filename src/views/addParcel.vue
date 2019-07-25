<template>
    <div>
      <h1>包裹入库</h1>
      <i>运单号</i>
      <input v-model="parcelNumber">
      <i>收件人</i>
      <input v-model="addressee">
      <i>电话</i>
      <input v-model="tel">
      <button @click="addNewParcel">确认</button>
      <button>取消</button>
    </div>
</template>

<script>
    export default {
        name: "addParcel",
      data(){
          return{
            parcelNumber:'',
            addressee: '',
            tel:''
          }
      },
      methods:{
        addNewParcel(){
          this.$store.dispatch('addNewParcel',{parcelNumber:this.parcelNumber,addressee:this.addressee,tel:this.tel,status:1});
          this.$router.push('/Boss');
        }

      }
    }
</script>

<style scoped>

</style>
