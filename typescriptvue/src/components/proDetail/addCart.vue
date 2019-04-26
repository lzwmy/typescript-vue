<template>
  <div class="addCart">
      <div class="wrap">
            <router-link to="/" class="to-link">
                <i class="icon iconfont icon-weibiao45100847"></i>
                <span>首页</span>
            </router-link>
            <router-link to="/cart" class="to-link">
            <div class="cartIcon">
                <span>{{number}}</span>
                <i class="icon iconfont icon-gouwuche"></i>
            </div>
                <span>购物车</span>
            </router-link>
      </div>
      <span class="btn-add" @click="popAdd">加入购物车</span>    
  </div>
</template>

<script lang="ts">
import {Component,Prop,Emit, Vue, Watch,Inject,Provide} from 'vue-property-decorator';
@Component
export default class addCartCom extends Vue {
  number: number = 3;

  popAdd(){
    this.$emit('pop')
  }

  created():void {
     
  }
}
</script>

<style scoped lang="scss" type="text/css">
  .addCart{
    padding:0 5px;
    width:98%;
    position: fixed;
    bottom:5px;
    left:50%;
    transform: translate3d(-50%,0,0);
    height: 45px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 0 5px #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: fadeIn 1s;
    animation-fill-mode: forwards;
    .wrap{
      font-size:14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .to-link{
          display: flex;
          color:#777;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          margin-left:20px;
          .cartIcon{
              position: relative;
              span{
                  position: absolute;
                  top:0px;
                  right:0px;
                  display: inline-block;
                  background: #ff6700;
                  color:#fff;
                  border-radius: 50%;
                  transform: translate3d(50%,-50%,0);
                  padding:0 3px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-style: normal;
              }
          }
      }
    }
    .btn-add{
      display: inline-block;
      height: 34px;
      width:120px;
      border-radius: 20px;
      background: #ff6700;
      color:#fff;
      font-size:14px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @keyframes fadeIn {
      0%{transform: translate3d(-50%,100%,0); }
      100%{transform: translate3d(-50%,0,0); }
    }
  }
</style>

