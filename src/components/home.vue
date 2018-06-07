<template>
  <div class="pos">
    <div class="swiper">
      <slider :pages="pages" :sliderinit="sliderinit" ref="mySwiper">
        <!-- slot  -->
      </slider>
    </div>
    <div class="main">
      <ul class="nav_menu clearfix">
        <li class="fl" v-for="(item, index) in navList" :key="index" @click="changeTab(item)">
          <div class="nav_icon">
            <img class="icon" :src="item.icon"/>
          </div>
          <p class="nav_title">{{item.name}}</p>
        </li>
      </ul>
    </div>
    <cube-scroll>
      <cube-swipe>
        <transition-group name="swipe" tag="ul">
          <li class="swipe-item-wrapper" v-for="(data,index) in swipeData" :key="data.item.id">
            <cube-swipe-item
              ref="swipeItem"
              :btns="data.btns"
              :index="index"
              @btn-click="onBtnClick"
              @active="onItemActive">
              <div @click="onItemClick(data.item, index)" class="item-inner">
                <div class="icon">
                  <img width="60" height="60" :src="data.item.imgurl">
                </div>
                <div class="text">
                  <h2 class="item-name" v-html="data.item.name"></h2>
                  <p class="item-desc" v-html="data.item.desc"></p>
                </div>
              </div>
            </cube-swipe-item>
          </li>
        </transition-group>
      </cube-swipe>
    </cube-scroll>
    <ul class="btn-footer btns">
      <li class="btn" v-for="(item, index) in FootBar" :key="index" @click="changeTab(item)">
        <div class="icon-wrapper">
          <div class="wrapper-count">
            <i class="count">3</i>
          </div>
          <img class="icon" :src="item.icon"/>
        </div>
        <div class="name-wrapper">
          <span class="name">{{ item.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import slider from 'vue-concise-slider'// 引入slider组件
// import {getAdmin} from '../api/index'

export default {
  name: 'home',
  components: {
    slider
  },
  data () {
    return {
      pages: [
        {
          title: '',
          style: {
            background: '#F2BD57'
          }
        },
        {
          title: '',
          style: {
            background: '#3BCF9D'
          }
        },
        {
          title: 'slide3',
          style: {
            background: '#4bbfc3'
          }
        }
      ],
      navList: [
        {
          name: '功能1',
          icon: require('../common/images/home/tips1.png'),
          url: '/home/page1',
          on: false
        },
        {
          name: '功能2',
          icon: require('../common/images/home/tips2.png'),
          url: '/home/page2',
          on: false
        },
        {
          name: '功能3',
          icon: require('../common/images/home/tips3.png'),
          url: '/home/page3',
          on: false
        },
        {
          name: '功能4',
          icon: require('../common/images/home/tips3.png'),
          url: '/home/page4',
          on: false
        },
        {
          name: '功能1',
          icon: require('../common/images/home/tips1.png'),
          url: '/home/page1',
          on: false
        },
        {
          name: '功能2',
          icon: require('../common/images/home/tips2.png'),
          url: '/home/page2',
          on: false
        },
        {
          name: '功能3',
          icon: require('../common/images/home/tips3.png'),
          url: '/home/page3',
          on: false
        },
        {
          name: '功能4',
          icon: require('../common/images/home/tips3.png'),
          url: '/home/page4',
          on: false
        }
      ],
      FootBar: [
        {
          name: '首页',
          icon: require('../common/images/home/tips1.png'),
          iconOn: require('../common/images/home/tips1.png'),
          url: '/home',
          on: false
        },
        {
          name: '消息',
          icon: require('../common/images/home/tips2.png'),
          iconOn: require('../common/images/home/tips2.png'),
          url: '/message',
          on: false
        },
        {
          name: '我的',
          icon: require('../common/images/home/tips3.png'),
          iconOn: require('../common/images/home/tips3.png'),
          url: '/my',
          on: false
        }
      ],
      // 滑动配置[obj]
      sliderinit: {
        currentPage: 0, // 当前页码
        thresholdDistance: 500, // 滑动判定距离
        thresholdTime: 100, // 滑动判定时间
        autoplay: 2000, // 自动滚动[ms]
        loop: true, // 循环滚动
        direction: 'horizontal', // 方向设置，垂直滚动
        infinite: 1, // 无限滚动前后遍历数
        slidesToScroll: 1 // 每次滑动项数
      },
      swipeData: [{
        item: {
          text: '测试1',
          value: 1
        },
        btns: [
          {
            action: 'clear',
            text: '不再关注',
            color: '#c8c7cd'
          },
          {
            action: 'delete',
            text: '删除',
            color: '#ff3a32'
          }
        ]
      }, {
        item: {
          text: '测试2',
          value: 2
        },
        btns: [
          {
            action: 'clear',
            text: '不再关注',
            color: '#c8c7cd'
          },
          {
            action: 'delete',
            text: '删除',
            color: '#ff3a32'
          }
        ]
      }, {
        item: {
          text: '测试3',
          value: 3
        },
        btns: [
          {
            action: 'clear',
            text: '不再关注',
            color: '#c8c7cd'
          },
          {
            action: 'delete',
            text: '删除',
            color: '#ff3a32'
          }
        ]
      }]
    }
  },
  created () {
    this.activeIndex = -1
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    ...mapActions(['go']),
    changeTab (tab) {
      this.$router.push(tab.url)
    },
    onItemClick (item) {
      console.log('click item:', item)
    },
    onBtnClick (btn, index) {
      if (btn.action === 'delete') {
        this.$createActionSheet({
          title: '确认要删除吗',
          active: 0,
          data: [
            {content: '删除'}
          ],
          onSelect: () => {
            this.swipeData.splice(index, 1)
          }
        }).show()
      }
    },
    onItemActive (index) {
      if (index === this.activeIndex) {
        return
      }
      if (this.activeIndex !== -1) {
        const activeItem = this.$refs.swipeItem[this.activeIndex]
        activeItem.shrink()
      }
      this.activeIndex = index
    }
  }
}
</script>
<style lang="less" scoped>
@import "../common/less/base.less";
@import "../common/less/com.less";
.swiper{
  height:@300px;
}
.nav_menu{
  text-align: center;align-items: center;padding:@20px 0;background-color:@color-background;margin-top: @20px;
  li{
    padding:@10px;box-sizing: border-box;width:25%;
    .nav_icon{
      width:@80px;height:@80px;margin:0 auto;
      img{width:100%;height:100%;}
    }
    .nav_title{display: block;line-height: @30px;font-size: @25px;color: #a4a4a6;}
  }
}
.btn-footer {
  position: fixed;left: 0;right: 0;bottom: 0;z-index: 1;
  display: flex;justify-content: center;align-items: center;
  width: 100%;height: @98px;
  border-top: 1px solid #ececec;
  background-color: #fff;
  li{
    flex: 1;
    .icon-wrapper{
      .wrapper-count {
        height: @20px;
        min-width: @20px;
        position: absolute;
        background-color: #FF4F64;
        color: #ffffff;
        border-radius: @18px;
        left: calc(~"100vw/6 + " @25px);
        top: @2px;
        padding: @2px;
        box-sizing: border-box;
        .count {
          margin: auto;
          display: block;
          height: @20px;
          line-height: @20px;
          min-width: @20px;
          font-size: @18px;
        }
      }
      img{
        width:@55px;height:@55px;
      }
    }
    .name-wrapper{
      .name{
        display: block;
        height: @20px;
        font-size: @20px;
        color: #a4a4a6;
        &.on {
          color: #ff4f64;
        }
      }
    }
  }
}
</style>
