<template>
  <div>
    <h1>菜鸟驿站</h1>
    <el-row>

      <el-button @click="filterAll" type="primary">All</el-button>
      <el-button @click="filterAppointed" type="primary">已预约</el-button>
      <el-button @click="filterReceived" type="primary">已取件</el-button>
      <el-button @click="filterUnAppointed" type="primary">未预约</el-button>
      <el-button @click="addParcel" type="success">添加</el-button>

    </el-row>
    <el-table
      :data="$store.getters.parcelItems"
      :row-class-name="tableRowClassName"
      stripe
      style="width: 100%">
      <el-table-column
        label="运单号"
        prop="parcelNumber"
        width="180">
      </el-table-column>
      <el-table-column
        label="收件人"
        prop="addressee"
        width="180">
      </el-table-column>
      <el-table-column
        label="电话"
        prop="tel">
      </el-table-column>
      <el-table-column
        :formatter="status"
        label="状态"
        prop="status">
      </el-table-column>
      <el-table-column
        :formatter="appointTime"
        label="预约时间"
        prop="tel">
      </el-table-column>
      <el-table-column

      >
        <template slot-scope="scope">
          <el-button
            @click="confirmReceived(scope.row.parcelNumber)"
            size="mini">确认收货
          </el-button>
        </template>
      </el-table-column>
      <parcelItem :parcel="parcel" v-for="parcel in $store.getters.parcelItems "></parcelItem>
    </el-table>


  </div>

</template>

<script>
  import parcelItem from '@/components/parcelItem.vue'

  export default {
    name: "Boss",
    computed: {},
    methods: {
      addParcel() {
        this.$router.push('/addParcel');
      },
      filterAll() {
        this.$store.commit('filterAll');
      },
      filterAppointed() {
        this.$store.commit('filterAppointed');
      },
      filterReceived() {
        this.$store.commit('filterReceived');
      },
      filterUnAppointed() {
        this.$store.commit('filterUnAppointed');
      },
      status(row, column, cellValue, index) {
        // `this` 指向 vm 实例
        if (cellValue === 0)
          return "已取件";

        if (cellValue === 1)
          return "未取件";
        if (cellValue === -1)
          return "已预约";
      },
      appointTime(row, column, cellValue, index) {
        if (row.status === -1) {
          var date = new Date(cellValue * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
          let Y = date.getFullYear() + '-';
          let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
          let D = date.getDate() + ' ';
          let h = date.getHours() + ':';
          let m = date.getMinutes() + ':';
          let s = date.getSeconds();
          return Y + M + D + h + m + s;
        }
      },
      confirmReceived(index) {
        this.$store.dispatch('confirmReceived', index);
      }


    },
    mounted() {
      this.$store.dispatch('initParcelList');
    },
    components: {
      parcelItem
    }
  }
</script>

<style scoped>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
