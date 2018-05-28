<template>
  <div class="timeLine">
    <div class="timeLine-wrapper">
      <div class="main-wrapper">
        <h1 class="title">微俱聚更新日志</h1>
        <div class="year-wrapper" v-for="(item, index) in dataList" :key="index">
          <h2><a href="#">{{item.title}}<i @click="toggle(index)"></i></a></h2>
          <div class="list" v-show="activeIndex===index">
            <ul>
              <li class="cls highlight" v-for="(ite, i) in item.children" :key="i">
                <p class="date">{{ite.date}}</p>
                <p class="intro">{{ite.intro}}</p>
                <p class="version">&nbsp;</p>
                <div class="more">
                  <p>{{ite.more}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'timeLine',
  // props: {
  //   title: {
  //     type: String,
  //     default: () => {
  //       return {}
  //     }
  //   }
  // },
  mounted: {
  },
  data () {
    return {
      activeIndex: 0,
      dataList: [
        {title: '2014年', children: [{date: '3月5日', intro: '360全景隆重上线', more: '全新360全景模块上线，3D看房、3D看车、3D看实景，一网打尽'}, {date: '2月26日', intro: '微婚庆行业应用上线', more: '提供更加友好的套餐价格'}]},
        {title: '2015年', children: [{date: '1月', intro: '上线', more: '一网打尽'}, {date: '2月', intro: '微婚庆行上线', more: '提供更加友餐价格'}]}
      ]
    }
  },
  methods: {
    toggle (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
  .timeLine{position:relative;width:100%;padding:20/75rem 0;margin:0 auto;background:#3a3c48 url("./images/log/timeLine-bg.png");}
  .timeLine .timeLine-wrapper{position:relative;width:auto;margin:0 auto;}
  .timeLine .main-wrapper{background:url("./images/log/line-bg.png") repeat-y 165/75rem 0;}
  .timeLine .main-wrapper .title{position:absolute;line-height:40/75rem;padding-left:55/75rem;left:150/75rem;top:0;color:#58a6fb;font-size:26/75rem;
    background:url("./images/log/clock.png") no-repeat left top;height:40/75rem;background-size: contain}
  .timeLine .main-wrapper .year-wrapper{position:relative;z-index:100;}
  .timeLine .main-wrapper .year-wrapper h2{height:40/75rem;width:100/75rem;font-size:24/75rem;line-height:40/75rem;text-align:right;}
  .timeLine .main-wrapper .year-wrapper h2 a{color:#58a6fb;}
  .timeLine .main-wrapper .year-wrapper h2 i{display:block;position:relative;height:0;width:0;left:110/75rem;top:-30/75rem;border-width:10/75rem;border-style:solid;border-color:#59a7fb transparent transparent transparent;-webkit-transition:.5s;-moz-transition:.5s;-ms-transition:.5s;-o-transition:.5s;transition:.5s;-webkit-transform-origin:6px 3px;-moz-transform-origin:6px 3px;-ms-transform-origin:6px 3px;-o-transform-origin:6px 3px;transform-origin:6px 3px}
  .timeLine .main-wrapper .year-wrapper .list{position:relative;overflow:hidden;-webkit-transition:height 1s cubic-bezier(0.025,0.025,0.000,1.115),opacity 1s;-moz-transition:height 1s cubic-bezier(0.025,0.025,0.000,1.115),opacity 1s;-ms-transition:height 1s cubic-bezier(0.025,0.025,0.000,1.115),opacity 1s;-o-transition:height 1s cubic-bezier(0.025,0.025,0.000,1.115),opacity 1s;transition:height 1s cubic-bezier(0.025,0.025,0.000,1.115),opacity 1s}
  .timeLine .main-wrapper .year-wrapper .list ul{bottom:0;}
  .timeLine .main-wrapper .year-wrapper .list ul li{background:url("./images/log/circle.png") no-repeat 140/75rem 31/75rem;padding:30/75rem 0;color:#a1a4b8;}
  .timeLine .main-wrapper .year-wrapper .list ul li.highlight{background-image:url(http://p4.qhimg.com/d/inn/05a63fc5/circle-h.png);}
  .cls{zoom:1;}
  .cls:after{content:".";display:block;height:0;clear:both;visibility:hidden;}
  .timeLine .main-wrapper .year-wrapper .list ul li.highlight .date, .timeLine .main-wrapper .year-wrapper .list ul li.highlight .intro{color:#ec6a13;}
  .timeLine .main-wrapper .year-wrapper .list ul li .date,.timeLine .main-wrapper .year-wrapper .list ul li .version{float:left;display:block;width:100/75rem;clear:left;line-height:24/75rem;text-align:right}
  .timeLine .main-wrapper .year-wrapper .list ul li .date{font-size:24/75rem;line-height:32/75rem;color:#bec1d5;padding-top: 12/75rem;}
  .timeLine .main-wrapper .year-wrapper .list ul li .intro, .timeLine .main-wrapper .year-wrapper .list ul li .more{float:left;display:block;width:72%;text-align:left;margin-left:100/75rem;line-height:24/75rem;}
  .timeLine .main-wrapper .year-wrapper .list ul li .intro{font-size:24/75rem;line-height:32/75rem;color:#63d029;padding-top: 12/75rem;}
  .timeLine .timeLine-wrapper:first-child .main-wrapper .year-wrapper.close h2 i{transform:rotate(-90deg);-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg)}
  .timeLine .timeLine-wrapper:first-child .main-wrapper .year-wrapper.close .list{opacity:0;height:0!important;}
</style>
