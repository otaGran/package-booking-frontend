<template>

  <div>
    <h1>预约取件</h1>

    <i>运单号</i>
    <input v-model="parcelNumber">
    <i>取件时间</i>
    <input v-model="appointmentTime">
<button @click="makeAppointment">预约</button>
    <button>取消</button>
  </div>
</template>

<script>
    export default {
        name: "Customer",
      data(){
          return {
            parcelNumber:'',
            appointmentTime: ''
          }
      },
      methods:{
        makeAppointment(){
          this.$store.dispatch('makeAppointment',this.parcelNumber,this.appointmentTime);
          this.$router.back();
        }
      }
    }
</script>

<style scoped>

</style>
