<template>
  <div style="height:93vh;">
    <cube-scroll
      :data="allLists"
      ref="scroll"
      :options="options"
      @pulling-up="onPullingUp">
      <div class="scrollList">
        <div class="list">
          <a class="list_top">
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
          </a>
          <div class="list_bot">
            <span>使用权限：认证用户可抢购</span>
            <span>剩16天01时08分22秒结束</span>
          </div>
          <div class="list_opr">
            <span>兑换码：5FEGFE</span>
            <span>扫码验券</span>
            <span>删除</span>
          </div>
        </div>
        <div class="list">
          <a class="list_top">
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
          </a>
          <div class="list_bot">
            <span>使用权限：认证用户可抢购</span>
            <span>剩16天01时08分22秒结束</span>
          </div>
          <div class="list_opr">
            <span>兑换码：5FEGFE</span>
            <span>扫码验券</span>
            <span>删除</span>
          </div>
        </div>
      </div>
    </cube-scroll>
  </div>
</template>
<script>
  export default {
    components: {},
    data () {
      return {
        allLists: [],
        options: {
          pullUpLoad: {
            threshold: 0,
            txt: {
              more: '加载更多',
              noMore: '没有更多数据了'
            }
          }
        }
      }
    },
    created () {},
    mounted () {},
    method () {}
  }
</script>
<style lang="less" scoped>
  @import "../../common/less/base.less";
  .scrollList{
    background-color: #fff;
    box-sizing: border-box;
    .list{
      box-sizing: border-box;
      padding:@24px 0 0;
      .list_top{
        padding:0 @24px @20px;
        display: flex;
        align-items: center;
        justify-content: center;
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
        padding:0 @24px;
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
      .list_opr{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-around;
        height:@80px;
        line-height:@80px;
        margin-top: @24px;
        background:#fafafa;
        span{
          display: flex;
          align-items: center;
          justify-content: center;
          width:50%;
          font-size:@28px;
          line-height:@28px;
          color:#666666;
          border-right:1px solid #e6e6e6;
          &:last-child{
            border:none;
          }
        }
      }
    }
  }
</style>
