<template>
  <div class="mine">
    <div class="top">
      <img src="http://temp.im/50x50/ff5a5f/fff" alt="">
      <p>登录 / 注册</p>
    </div>
    <ul class="wrap">
      <li>
        <i class="icon iconfont icon-daifukuan"></i>
        <p>待付款</p>
      </li>
      <li>
        <i class="icon iconfont icon-daishouhuo"></i>
        <p>待收货</p>
      </li>
      <li>
        <i class="icon iconfont icon-weixiu"></i>
        <p>退换修</p>
      </li>
    </ul>

    <ul class="mui-table-view">
      <li class="mui-table-view-cell">
          <a class="mui-navigate-right">会员中心</a>
      </li>
      <li class="mui-table-view-cell">
          <a class="mui-navigate-right">我的优惠</a>
      </li>
      <li class="mui-table-view-cell">
          <a class="mui-navigate-right">服务中心</a>
      </li>
      <li class="mui-table-view-cell">
          <a class="mui-navigate-right">设置</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component,Prop,Emit, Vue, Watch,Inject,Provide} from 'vue-property-decorator';
@Component
export default class Mine extends Vue {

}
</script>

<style scoped lang="scss" type="text/css">
  .top{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #f07c10;
    padding:15px 18px;
    img{
      border-radius: 50%;
    }
    p{
      font-size:14px;
      color:#fff;
      margin-left:.2rem;
    }
  }
  .mint-cell{
    &:after{
      content:"";
      display: block;
      width:100%;
      height: 1px;
      background: #ddd;
      transform: scaleY(.5);
    }
  }
  .wrap{
    padding:10px 0;
    display:flex;
    justify-content:space-around;
    align-items: center;
    .icon{
      color:#888;
      font-size:18px;
    }
    p{
      text-align: center;
      font-size:12px;
      margin:5px 0;
    }
  }
</style>

