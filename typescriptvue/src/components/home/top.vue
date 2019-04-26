<template>
  <div class="wrap">
    <div class="head">
        <img src="../../../static/images/logo.png" alt="logo">
        <div class="search">
          <router-link to="/search">
            <i class="icon iconfont icon-sousuo"></i>
            搜索商品名称
          </router-link>
        </div>
        <i class="icon iconfont icon-wode"></i>
    </div>
  </div>
</template>

<script lang="ts">
import {Component,Prop,Emit, Vue, Watch,Inject,Provide} from 'vue-property-decorator';
@Component
export default class TopCom extends Vue {
  
}
</script>

<style scoped lang="scss" type="text/css">
    .wrap{
        height: 42px;
        position: fixed;
        top:0;
        left:0;
        right:0;
        z-index: 999;
        background: #f2f2f2;
        .head{
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                width: 25px;
                margin:5px;
            }
            .search{
              padding:0 10px;
              height: 30px;
              line-height: 30px;
              border: 1px solid #e5e5e5;
              text-align: left;
              width: 100%;
              color: rgba(0,0,0,.3);
              background-color: #fff;
              border-radius: 2px;
              font-size:16px;
              a{
                display: block;
                width:100%;
                color:#666;
              }
              i{
                font-size:20px;
                margin:0 2px;
                color:#cccc;
              }
            }
            i{
              font-size:24px;
              margin:0 5px;
              color:#666;
            }
        }
    }
</style>

