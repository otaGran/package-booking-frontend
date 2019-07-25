<template>
  <tr>
    <td>{{parcel.parcelNumber}}</td>
    <td>{{parcel.addressee}}</td>
    <td>{{parcel.tel}}</td>
    <td>{{status}}</td>
    <td>{{appointTime}}</td>
    <td>
      <button @click="confirmReceived">确认收件</button>
    </td>
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
      },
      appointTime() {
        if (this.parcel.status === -1) {
          var date = new Date(this.parcel.appointmentTime * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
          let Y = date.getFullYear() + '-';
          let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
          let D = date.getDate() + ' ';
          let h = date.getHours() + ':';
          let m = date.getMinutes() + ':';
          let s = date.getSeconds();
          return Y + M + D + h + m + s;
        }
      }


    },
    methods: {
      confirmReceived() {
        this.$store.dispatch('confirmReceived', this.parcel.parcelNumber);
      }
    }
  }
</script>

<style scoped>

</style>
