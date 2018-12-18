<template>
  <div>
    <router-view></router-view>
    <ul class="botBar">
      <li v-for="(item, index) of tabs" :key="index" @click="changeTab(item)">
        <div>
          <img :src='item.iconOn' v-if="item.on">
          <img :src='item.icon' v-if="!item.on">
        </div>
        <p :class="{'active': item.on}">{{item.label}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabs: [{
        label: '福利',
        icon: require('./common/images/botbar/福利未选.png'),
        iconOn: require('./common/images/botbar/福利选中.png'),
        url: 'welfare',
        on: true
      }, {
        label: '商家',
        icon: require('./common/images/botbar/商家未选.png'),
        iconOn: require('./common/images/botbar/商家选中.png'),
        url: 'business',
        on: false
      }, {
        label: '我的',
        icon: require('./common/images/botbar/我的未选.png'),
        iconOn: require('./common/images/botbar/我的选中.png'),
        url: 'my',
        on: false
      }]
    }
  },
  created () {

    this.$router.replace(`welfare`)
  },
  methods: {
    changeTab (tab) {
      let url = tab.url
      this.$router.replace(`${url}`)
      for (let item of this.tabs) {
        item.on = false
        if (url === item.url) {
          item.on = true
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../common/less/base.less";
  .botBar{
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    z-index: 222;
    width:100%;
    height: @98px;
    border-top: 1px solid #eeeeee;
    background:#ffffff;
    display: flex;
    align-items: center;
    text-align: center;
    align-content: space-evenly;
    li{
      flex:1;
      div{
        width:@40px;
        height:@44px;
        margin:0 auto;
        text-align: center;
        img{
          width:100%;
          height:100%;
        }
      }
      p{
        padding: @6px 0;
        line-height: @20px;
        font-size:@20px;
      }
      p.active{
        color:#f95644;
      }
    }
  }
</style>
