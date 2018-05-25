<template>
  <el-row>
    <div class="timeLine">
      <div class="timeLine_timeLine_wrapper">
        <div class="light"><i></i></div>
        <hr class="line-left">
        <hr class="line-right">
        <div class="timeLine_main">
          <h1 class="title">测试</h1>
          <div class="year">
            <h2><a href="#">2015年<i></i></a></h2>
            <div class="list">
              <ul>
                <li class="cls">
                  <p class="date">2月30日</p>
                  <p class="intro">360全景隆重上线！</p>
                  <p class="version">&nbsp;</p>
                  <div class="more">
                    <p>全新360全景模块上线，3D看房、3D看车、3D看实景，一网打尽</p>
                  </div>
                </li>
                <li class="cls">
                  <p class="date">2月26日</p>
                  <p class="intro">微婚庆行业应用上线</p>
                  <p class="version">&nbsp;</p>
                  <div class="more">
                    <p>提供更加友好的套餐价格</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'timeLine',
  props: {
    title: {
      type: String,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      dataList: [
        {title: '2014年', children: [{date: '3月5日', intro: '360全景隆重上线', more: '全新360全景模块上线，3D看房、3D看车、3D看实景，一网打尽'}, {date: '2月26日', intro: '微婚庆行业应用上线', more: '提供更加友好的套餐价格'}]},
        {title: '2015年', children: [{date: '3月5日', intro: '360全景隆重上线', more: '全新360全景模块上线，3D看房、3D看车、3D看实景，一网打尽'}, {date: '2月26日', intro: '微婚庆行业应用上线', more: '提供更加友好的套餐价格'}]}
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .timeLine{position:relative;width:1000px;margin:0 auto;}
  .timeLine{padding:50px 0;min-height:720px;background:#3a3c48 url("./images/log/content-bg.png");width:100%;}
  .timeLine .timeLine_wrapper{position:relative;background:url("./images/log/release-bg.png") no-repeat right top;width:960px;margin:0 auto;}
  .timeLine .light{position:absolute;left:55px;top:-50px;width:152px;height:191px;background:url("./images/log/light-top.png") no-repeat top center;}
  .timeLine .light i{position:absolute;width:100%;height:100%;top:0;background:url("./images/log/light.png") no-repeat top center;}
  .timeLine .line-left{position:absolute;left:0;top:15px;width:70px;}
  .timeLine .line-right{position:absolute;right:0;top:15px;width:460px;}
  .timeLine .main{background:url("./images/log/line-bg.png") repeat-y 249px 0;}
  .timeLine .main .title{position:absolute;line-height:40px;padding-left:67px;left:230px;top:0;color:#58a6fb;font-size:24px;background:url("./images/log/clock.png") no-repeat left top;}
  .timeLine .main .year{position:relative;z-index:100;}
  .timeLine .main .year h2{height:40px;width:170px;padding-right:30px;font-size:24px;line-height:40px;text-align:right;}
  .timeLine .main .year h2 a{color:#58a6fb;}
  .timeLine .main .year h2 i{display:block;position:relative;height:0;width:0;left:190px;top:-20px;border-width:6px;border-style:solid;border-color:#59a7fb transparent transparent transparent;-webkit-transition:.5s;-moz-transition:.5s;-ms-transition:.5s;-o-transition:.5s;transition:.5s;-webkit-transform-origin:6px 3px;-moz-transform-origin:6px 3px;-ms-transform-origin:6px 3px;-o-transform-origin:6px 3px;transform-origin:6px 3px}
  .timeLine .main .year .list{margin:10px 0;position:relative;overflow:hidden;-webkit-transition:height 1s cubic-bezier(0.025,0.025,0.000,1.115),opacity 1s;-moz-transition:height 1s cubic-bezier(0.025,0.025,0.000,1.115),opacity 1s;-ms-transition:height 1s cubic-bezier(0.025,0.025,0.000,1.115),opacity 1s;-o-transition:height 1s cubic-bezier(0.025,0.025,0.000,1.115),opacity 1s;transition:height 1s cubic-bezier(0.025,0.025,0.000,1.115),opacity 1s}
  .timeLine .main .year .list ul{bottom:0;}
  .timeLine .main .year .list ul li{background:url("./images/log/circle.png") no-repeat 235px 31px;padding:30px 0;color:#a1a4b8;}
  .timeLine .main .year .list ul li.highlight{background-image:url(http://p4.qhimg.com/d/inn/05a63fc5/circle-h.png);}
  .cls{zoom:1;}
  .cls:after{content:".";display:block;height:0;clear:both;visibility:hidden;}
  .timeLine .main .year .list ul li.highlight .date, .content .main .year .list ul li.highlight .intro{color:#ec6a13;}
  .timeLine .main .year .list ul li .date,.content .main .year .list ul li .version{float:left;display:block;clear:left;width:200px;line-height:24px;text-align:right}
  .timeLine .main .year .list ul li .date{font-size:18px;line-height:32px;color:#bec1d5}
  .timeLine .main .year .list ul li .intro, .content .main .year .list ul li .more{float:left;display:block;width:400px;margin-left:100px;line-height:24px;}
  .timeLine .main .year .list ul li .intro{font-size:18px;line-height:32px;color:#63d029;}
  .timeLine .timeLine_wrapper:first-child .main .year.close h2 i{transform:rotate(-90deg);-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg)}
  .timeLine .timeLine_wrapper:first-child .main .year.close .list{opacity:0;height:0!important;}
</style>
