<template>
  <nav class="tabs">
    <li class="tab" v-for="(items, index) in tabData" :key="index">
      <router-link :to="items.path">
        <span class="icon iconfont" :class="items.iconPath"></span>
        <span>{{items.title}}</span>
      </router-link>
    </li>
  </nav>
</template>

<script lang="ts">
import {Component,Prop,Emit, Vue, Watch,Inject,Provide} from 'vue-property-decorator';
@Component
export default class tabbarCom extends Vue {
  tabData: any = [
    {
      title:"主页",
      path:"/home",
      iconPath:"icon-weibiao45100847"
    },
    {
      title:"分类",
      path:"/category",
      iconPath:"icon-fenlei"
    },
    {
      title:"购物车",
      path:"/cart",
      iconPath:"icon-gouwuche"
    },
    {
      title:"我的",
      path:"/mine",
      iconPath:"icon-wode"
    }
  ]
}
</script>

<style>
.tabs{
  height: 44px;
  position: absolute;
  z-index: 999;
  bottom:0;
  left:0;
  right:0;
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center; 
  border-top:1px solid #ccc;
}
.tabs li{
  height: 100%;
  flex: 1;
}
.tabs li a{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 12px;
  color:#999;
}
.tabs li a.router-link-active{
  color:#ff6700;
}
</style>
