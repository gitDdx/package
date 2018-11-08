<template>
  <div class="pos" style="z-index: 999;">
    <cube-scroll>
      <div class="banner">
        <swiper class="adver-swiper" :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="item in list" :key="item.name">
            <img :src="item.url"/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="banner_desc">春熙路小龙坎火锅小龙坎火锅500元代金券11消费超200元即可</div>
      </div>
      <div class="banner_title">春熙路小龙坎火锅小龙坎火锅500元代金券11消费超200元即可</div>
     <div class="intro">
       <div class="intro_t">
         <div>说明</div>
         <ul>
           <li><div><img src="./images/选择.png" alt="选择"></div>每人限购1份</li>
           <li><div><img src="./images/选择.png" alt="选择"></div>到店扫码使用/兑换</li>
           <li><div><img src="./images/选择.png" alt="选择"></div>所有用户可抢购</li>
           <li><div><img src="./images/选择.png" alt="选择"></div>实物包邮福利</li>
           <li><div><img src="./images/选择.png" alt="选择"></div>一经售出概不退款</li>
         </ul>
       </div>
       <div class="intro_b">
         <p>
           <label>抢购时间</label>
           <span>2015-06-30 10:30至2016-06-30 10:30</span>
         </p>
         <p>
           <label>有效期限</label>
           <span>2015-06-30 10:30至2016-06-30 10:30</span>
         </p>
         <p>
           <label>福利提供</label>
           <span>小龙坎火锅食品有限公司</span>
         </p>
         <p>
           <label>联系电话</label>
           <span>13546892233</span>
         </p>
         <p>
           <label>使用地址</label>
           <span>成都市龙泉驿区桃花仙子广场138号附42号</span>
         </p>
       </div>
     </div>
      <div class="rule">
        <p class="rule_title">兑换规则</p>
        <div class="rule_text">
            <pre>
              <p>
                哈哈哈安徽哈安徽
              </p>
            </pre>
        </div>
      </div>
      <div class="time">剩16天01时08分22秒结束</div>
      <div class="bot_btn">
        <div class="desc">
          <p>剩余数量:5000/5000</p>
          <p>兑换所需:200积分+200元</p>
        </div>
        <div class="share">分享</div>
        <div class="rushBuy">抢购</div>
      </div>
    </cube-scroll>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Style, Scroll } from 'cube-ui'
export default {
  components: {
    swiper,
    swiperSlide,
    Style,
    Scroll
  },
  data () {
    return {
      list: [
        {name: '1', url: 'http://java.ichuangye.cn/ueditor-upload/upload/image/20180914/3c42627aea554bd58d08c18e043bf94d.jpg'}
      ], // 轮播图
      swiperOption: {
        // slidesPerView: 1.2,
        spaceBetween: 0,
        centeredSlides: true,
        loopAdditionalSlides: 3,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
              ' / ' +
              '<span class="' + totalClass + '"></span>'
          }
        },
        loop: true
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false
        // }
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
  }
}
</script>
<style lang="less" scoped>
  @import "../../common/less/base.less";
  @import "../../common/less/com.less";
  // 轮播图
  .banner{
    position: relative;
    .adver-swiper {
      position: relative;
      .swiper-pagination {
        background:rgba(0,0,0,.4);
        border-radius:@20px;
        font-size:@22px;
        color:#fff;
        line-height:@22px;
        position: absolute;
        text-align: center;
        bottom: @146px;
        left: 86%;
        z-index: 99;
        width: @90px;
        padding: @10px @2px @7px @2px;
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
        height: @750px;
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
    .banner_desc{
      position: absolute;
      bottom:0;
      z-index: 1;
      display: flex;
      align-items: center;
      opacity:0.75;
      background:#f95644;
      height:@128px;
      font-size:@34px;
      color:#ffffff;
      padding:0 @22px;
      text-align: left;
      line-height: @34px;
    }
  }
  .banner_title{
    display: flex;
    align-items: center;
    height:@128px;
    font-size:@34px;
    color:#222;
    padding:0 @22px;
    text-align: left;
    line-height: @34px;
    background-color: #fff;
  }
  .intro{
    margin-top: @20px;
    background-color: #fff;
    padding:@27px @23px;
    box-sizing: border-box;
    .intro_t{
      display: flex;
      padding-bottom: @24px;
      >div{
        margin-right: @79px;
        font-size:@26px;
        color:#aaaaaa;
      }
      ul{
        display: flex;
        flex-flow: row wrap;
        li{
          display: flex;
          width:50%;
          align-items: center;
          padding-bottom: @24px;
          font-size:@26px;
          line-height:@26px;
          color:#222222;
          div{
            width:@28px;
            height:@28px;
            margin-right: @8px;
            img{
              width:100%;
              height:100%;
            }
          }
        }
      }
    }
    .intro_b{
      border-top:1px solid #eee;
      padding-top:@27px;
      box-sizing: border-box;
      p{
        display: flex;
        align-items: center;
        padding-bottom: @24px;
        label{
          font-size:@26px;
          color:#aaaaaa;
          padding-right:@24px;
        }
      }
    }
  }
  .rule{
    margin-top: @20px;
    background-color: #fff;
    padding:@28px 0;
    .rule_title{
      display: flex;
      align-items: center;
      text-align: center;
      background:#f95644;
      width:@128px;
      height:@70px;
      font-size:@28px;
      color:#ffffff;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
    }
    .rule_text{
      text-align: left;
      padding:0 @23px;
      pre{
        white-space: pre-wrap!important;
        word-wrap: break-word!important;
        p{
          font-size:@26px;
          color:#222222;
          line-height:@42px;
          text-align: left;
        }
      }
    }
  }
  .time{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background:#ffe3df;
    height:@62px;
    font-size:@26px;
    color:#f95644;
  }
  .bot_btn{
    display: flex;
    justify-content: space-around;
    height:@98px;
    background-color: #fff;
    font-size:@26px;
    color:#aaaaaa;
    >div{
      width:50%;
      >p{
        display: flex;
        align-items: center;
        justify-content: center;
        &:first-child{
          padding-top: @18px;
          padding-bottom: @9px;
        }
      }
    }
    .share{
      display: flex;
      align-items: center;
      justify-content: center;
      width:20%;
      color:#fff;
      background-color: #ff7768;;
    }
    .rushBuy{
      display: flex;
      align-items: center;
      justify-content: center;
      width:30%;
      color:#fff;
      background-color: #f95644;;
    }
  }
</style>
