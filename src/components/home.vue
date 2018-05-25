<template>
  <el-row>
    <el-col :span="12" v-for="o in 2" :key="o">
      <el-card :body-style="{ padding: '0px' }">
        <img src="../assets/logo.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button" @click="goDetail">跳转</el-button>
            <el-button type="text" class="button" @click="alert">弹出层</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-row>
      <el-col>
        <e-charts id="main" :options='options' class="echarts" :style="{width: area[0], height: area[1]}"></e-charts>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
import {mapActions} from 'vuex'
import {toast} from '../utils/actions'
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import { color } from '../utils/echartsColor'
// import {getAdmin} from '../api/index'

export default {
  name: 'index',
  components: {
    ECharts
  },
  data () {
    return {
      message: {},
      currentDate: new Date(),
      area: ['350px', '350px'],
      options: {
        title: {
          text: 'ECharts 入门示例'
        },
        color: color,
        tooltip: {},
        xAxis: {
          data: ['T恤', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {},
  methods: {
    ...mapActions(['go']),
    goDetail () {
      this.go(['answerList'])
      // getAdmin({}).then((res) => {
      //   this.message = res.data
      //   this.go(['answerList'])
      // })
    },
    alert () {
      // cubeAlert(this, '我只是测试测试')
      toast('提示', '您的入驻申请正在审批中')
      // alert('提示', '您的入驻申请正在审批中')
      // this.$vux.confirm.show({
      //   title: '提示',
      //   content: '您确定要进行该操作吗',
      //   onConfirm () {
      //     finishToHand(taskId, type).then((res) => {
      //       if (res.code === 0) {
      //         toast('', res.msg)
      //         let arr = _this.list.filter((item) => item.id === id)
      //         arr[0].task.beHandStatus = type
      //       } else {
      //         toast('warn', res.msg)
      //       }
      //     })
      //   }
      // }
    }
  }
}
</script>
<style scoped>
</style>
