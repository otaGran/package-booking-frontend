<template>
  <tr>
    <td>{{parcel.parcelNumber}}</td>
    <td>{{parcel.addressee}}</td>
    <td>{{parcel.tel}}</td>
    <td>{{status}}</td>
    <td><button @click="confirmReceived">确认收件</button></td>
  </tr>
</template>

<script>
  export default {
    name: "parcelItem",
    props: ['parcel'],
    computed: {
      status: function () {
        // `this` 指向 vm 实例
        if (this.parcel.status === 0)
          return "已取件";

        if (this.parcel.status === 1)
          return "未取件";
        if (this.parcel.status === -1)
          return "已预约";
      }


    },
    methods :{
      confirmReceived(){
        this.$store.dispatch('confirmReceived',this.parcel.id);
      }
    }
  }
</script>

<style scoped>

</style>
