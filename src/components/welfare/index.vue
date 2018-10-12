<template>
  <div>
    <div class="welfare">
      <div class="search-oc" flex items="center" justify="between">
        <div class="search" box="1">
          <input type="text" class="searchKey" placeholder="请输入关键字搜索">
          <span class="search_icon"><img src="../common/images/搜索.png" alt=""></span>
        </div>
        <p class="cancel">取消</p>
      </div>
      <div class="scrollCont" style="height:84vh;">
        <cube-scroll
          :data="allLists"
          ref="scroll"
          :options="options"
          @pulling-down="onPullingDown"
          @pulling-up="onPullingUp">
          <!-- 轮播图 -->
          <div class="banner">
            <swiper class="adver-swiper" :options="swiperOption" ref="mySwiper">
              <swiper-slide v-for="item in list" :key="item.name">
                <img :src="item.url"/>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <!--列表-->
          <div class="scrollList">
            <div class="list">
              <div class="list_top" @click="$router.push(`/welfare/details/1`)">
                <div class="list_img">
                  <img src="./images/火锅图.png">
                </div>
                <div class="list_cont">
                  <h3>春熙路小龙坎火锅</h3>
                  <p class="describe">50元限量抢购小龙坎特色火锅－288元套餐一份</p>
                  <div flex>
                    <p box="1">
                      <span class="number">500积分</span>
                      <span class="number">+</span>
                      <span class="number">500元</span>
                      <span class="oldPrice">￥699.00</span>
                    </p>
                    <p class="rushBuy">抢购中</p>
                  </div>
                </div>
              </div>
              <div class="list_bot">
                <span>使用权限：认证用户可抢购</span>
                <span>剩16天01时08分22秒结束</span>
              </div>
            </div>
          </div>
        </cube-scroll>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Style, Scroll } from 'cube-ui'
import { defData } from '../../constant/index'
import { getListApi } from '../../api/welfare/index'
export default {
  components: {
    swiper,
    swiperSlide,
    Style,
    Scroll
  },
  data () {
    return {
      page: {...defData.page},
      list: [
        {name: '1', url: 'http://java.ichuangye.cn/ueditor-upload/upload/image/20180914/3c42627aea554bd58d08c18e043bf94d.jpg'},
        {name: '2', url: 'http://java.ichuangye.cn/ueditor-upload/upload/image/20180914/3c42627aea554bd58d08c18e043bf94d.jpg'},
        {name: '3', url: 'http://java.ichuangye.cn/ueditor-upload/upload/image/20180827/f7507355ca9e4a8abd6cbbdc1dcfadbf.png'}
      ], // 轮播图
      swiperOption: {
        // slidesPerView: 1.2,
        spaceBetween: 0,
        centeredSlides: true,
        loopAdditionalSlides: 3,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      },
      options: {
        pullDownRefresh: {
          threshold: 90,
          stop: 40,
          txt: '刷新成功'
        },
        pullUpLoad: {
          threshold: 0,
          txt: {
            more: '上拉加载更多...',
            noMore: '没有更多数据...'
          }
        }
      },
      allLists: [],
    }
  },
  created () {
    this.getData()
  },
  mounted () {},
  methods: {
    // 获取数据
    getData () {
      getListApi(this.page).then((data) => {
        this.allLists = [...this.allLists, ...data]
        this.page = {...data, page: this.page.page + 1}
      })
    },
    // 下拉刷新
    onPullingDown: function(){
      // if (this.page.page < this.page.pages) {
      //   setTimeout(() => {
      //     this.$refs.scroll.forceUpdate()
      //   }, 1000)
      //   return false
      // }
      // this.getData()
    },
    // 上拉加载
    onPullingUp: function() {
      if (this.page.page > this.page.pages) {
        setTimeout(() => {
          this.$refs.scroll.forceUpdate()
        }, 1000)
        return false
      }
      this.getData()
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../common/less/base.less";
  .search-oc{
    width:100%; padding:@30px; box-sizing: border-box;
    .search{
      width:100%; height:@66px;display: flex;
      .searchKey{
        width:100%;
        height:100%;
        background:#f8f8f8;
        padding-left:@24px;
        color:#aaa;
        border-top-left-radius: @100px;
        border-bottom-left-radius: @100px;
      }
      .search_icon{
        display: flex;
        width:@132px;
        background:#f95644;
        border-top-right-radius: @100px;
        border-bottom-right-radius: @100px;
        align-items: center;
        justify-content: center;
        img{
          width:@28px;
          height:@27px;
        }
      }
    }
    .cancel{
      width: @60px;
      margin-left: @25px;
      color: #666666;
      font-size: @26px;
    }
  }
  // 轮播图
  .banner {
    .adver-swiper {
      position: relative;
      .swiper-pagination {
        position: absolute;
        bottom: @18px;
        display: flex;
        align-items: center;
        justify-content: center;
        .swiper-pagination-bullet {
          opacity: 1;
          background-color: #ffffff;
          width: @10px;
          height: @10px;
          border-radius: 100%;
          &.swiper-pagination-bullet-active {
            background-color: #ffffff;
            border-radius: @4px;
            width: @40px;
          }
        }
      }
      .swiper-slide {
        width: 100%;
        height: @300px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .scrollList{
    background-color: #fff;
    padding:0 @24px;
    box-sizing: border-box;
    .list{
      padding:@24px 0;
      box-sizing: border-box;
      border-bottom:1px solid #eee;
      .list_top{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: @20px;
        .list_img{
          width:@159px;
          height:@158px;
          img{
            width:100%;
            height:100%;
          }
        }
        .list_cont{
          padding-bottom: @22px;
          padding-left: @24px;
          text-align: left;
          h3{
            font-size:@28px;
            color:#222222;
            line-height: @28px;
            padding-bottom: @12px;
          }
          .describe{
            font-size:@26px;
            color:#aaaaaa;
            line-height: @26px;
            padding-bottom: @12px;
          }
          .number{
            font-size:@28px;
            color:#f95644;
            line-height:@28px;
            padding-right:@6px;
          }
          .oldPrice{
            font-size:@22px;
            color:#aaaaaa;
            line-height:@22px;
            text-decoration: line-through;
            padding-left: @13px;
          }
          .rushBuy{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size:@26px;
            color:#f95644;
          }
        }
      }
      .list_bot{
        text-align: left;
        span{
          background:#ffe7e4;
          border:1px solid #ffb4ab;
          border-radius:@6px;
          padding:@7px @20px;
          box-sizing: border-box;
          font-size:@22px;
          color:#f95644;
          &:first-child{
            margin-right: @10px;
          }
        }
      }
    }
  }
</style>
