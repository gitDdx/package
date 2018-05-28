<template>
  <div>
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
    </el-row>
    <el-row>
      <el-col>
      <e-charts id="main" :options='options' class="echarts" :style="{width: area[0], height: area[1]}"></e-charts>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <time-line :data="dataList" :title='title'></time-line>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {toast} from '../utils/actions'
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import { color } from '../utils/echartsColor'
import timeLine from './common/timeLine/timeLine.vue'
// import {getAdmin} from '../api/index'

export default {
  name: 'index',
  components: {
    ECharts, timeLine
  },
  data () {
    return {
      message: {},
      currentDate: new Date(),
      area: ['350px', '350px'],
      title: '360全景隆重上线',
      dataList: [
        {title: '2014年', children: [{date: '3月5日', intro: '360全景隆重上线', more: '全新360全景模块上线，3D看房、3D看车、3D看实景，一网打尽'}, {date: '2月26日', intro: '微婚庆行业应用上线', more: '提供更加友好的套餐价格'}]},
        {title: '2015年', children: [{date: '1月', intro: '上线', more: '一网打尽'}, {date: '2月', intro: '微婚庆行上线', more: '提供更加友餐价格'}]}
      ],
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
