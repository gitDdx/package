<template>
  <div>
    <div class="scrollList">
      <div class="list">
        <div class="list_top">
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
  </div>
</template>
<script>
  export default {
    components: {},
    data () {
      return {}
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
    padding:0 @24px;
    box-sizing: border-box;
    .list{
      padding:@24px 0;
      box-sizing: border-box;
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
