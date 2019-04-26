<template>
  <div class="cart">
    <ul>
      <li v-for="(item, index) in goodArr" :key="index">
        <div class="box">
          <div class="radio" :class="{'active':item.select}" @click="onSelect(item.select,index)"></div>
          <router-link to="/"><img src="http://temp.im/50x50/ff5a5f/fff" alt=""></router-link>
          <div class="detail">
            <h3>{{item.title}}</h3>
            <p>售价: {{item.price}}元</p>
            <div class="btn">
              <button class="mui-btn mui-numbox-btn-minus" type="button" @click="onReduce(item.number,index)">-</button>
              <span class="price">{{item.number}}</span>
              <button class="mui-btn mui-numbox-btn-minus" type="button" @click="onAdd(item.number,index)">+</button>
            </div>
          </div>
        </div>
        <i class="icon iconfont icon-delete" @click="onDelect(index)"></i>
      </li>
    </ul>
    <div class="footer">
      <div class="price">
        <div class="radio" :class="{'active':allSelect}" @click="onAllSelect"></div>
        <div class="text">
          <p>共{{number}}件</p>
          <h3>{{price}} 元</h3>
        </div>
      </div>
      <router-link to="/">继续购物</router-link>
      <router-link to="/" class="accounts">去结算</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {Component,Prop,Emit, Vue, Watch,Inject,Provide} from 'vue-property-decorator';

@Component
export default class Cart extends Vue{
    price:number = 0; //总价
    number: number = 0; //总件数
    allSelect: boolean = false;  //全选 
    goodArr: any[] = [
      {
        title:"小米手机",
        price:100,
        select:true,
        number:1
      },
      {
        title:"小米手机",
        price:100,
        select:true,
        number:1
      },
      {
        title:"小米手机",
        price:100,
        select:false,
        number:1
      },
      {
        title:"小米手机",
        price:100,
        select:false,
        number:1
      },
      {
        title:"小米手机",
        price:100,
        select:false,
        number:1
      }
    ];


    created(): void{
      this.onCount();
    }

    //勾选
    onSelect(item: any,index: number):void{
      this.goodArr[index].select = !item;
      this.onCount();
    }

    //减
    onReduce(number: number,index: number):void{
      if(number==1){
        mui.toast('不能再减了');
        return ;
      }else{
        this.goodArr[index].number --;
        this.onCount();
      }
    }

    //加
    onAdd(number: number,index: number):void {
      this.goodArr[index].number ++;
      this.onCount();
    }

    //删除
    onDelect(index: number):void{
      mui.confirm("是否删除该条商品","提示",['我再想想','删除'],(res: any): void=>{
        if(res.index === 0){
          console.log("我再想想")
        }else if(res.index === 1){
          console.log("删除")
          this.goodArr.splice(index,1);
          this.onCount();
        }
      },'div')
    }

    //计算总价、总件数
    onCount():void{
      this.price = 0;
      this.number = 0;
      this.goodArr.forEach((ele:any):void => {
        if(ele.select){
          this.price += ele.price * ele.number;
          this.number += ele.number;
        }
      });
    }

    //全选
    onAllSelect():void{
      this.allSelect = !this.allSelect;
      this.goodArr.forEach((ele:any):void => {
        ele.select = this.allSelect;
      });
      this.onCount();
    }
}
</script>

<style scoped lang="scss" type="text/css">
  ul{
    overflow: auto;
    position: absolute;
    top:42px;
    left:0;
    bottom:50px;
    width:100%;
  }
  ul{
    li{
      position: relative;
      padding:5px;
      display:flex;
      justify-content: space-between;
      align-items: center;
      &:after{
        content:"";
        position: absolute;
        bottom:0;
        left:0;
        display: block;
        width:100%;
        height: 1px;
        background: #ddd;
        transform:scaleY(.5);
      }
      .box{
        display: flex;
        justify-content: center;
        align-items: center;
        
        .router-link-active{
          margin:0 5px;
          width:120px;
          height:120px;
          border:1px solid #ddd;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            max-height: 100%;
          }
        }
        .detail{
          h3{
            font-size:17px;
            color:#666;
          }
          p{
            font-size:16px;
            color:#999;
            margin:5px 0;
          }
          .price{
            display: inline-block;
            min-width: 30px;
            text-align: center;
          }
          .btn{
            font-size:16px;
            line-height: 33px;
            .mint-button{
              border-radius: 0;
            }
          }
        }
      }
      .icon-delete{
        color:#999;
        font-size:24px;
      }
    }
  }
  .radio{
    width:20px;
    height: 20px;
    border:1px solid #ddd;
    background: transparent;
    border-radius: 50%;
  }
  .radio.active{
    position: relative;
    background: #ff6700;
    border:none;
    &:after{
      content: "";
      position: absolute;
      top:0;
      left:0;
      width:20px;
      height:20px;
      color:#fff;
      font-size:14px;
      text-align: center;
      line-height: 20px;
      background: url('../../../static/images/check_press.png') center center;
      background-size: 100%;
    }
  }
  .footer{
      position: absolute;
      bottom:0;
      left:0;
      z-index: 999;
      height: 45px;
      width:100%;
      display:flex;
      justify-content: space-between;
      align-items: center;
      font-size:14px;
      text-align: center;
      box-shadow: 0 0 5px #bbb;
      .price{
        width: 100%;
        display:flex;
        justify-content: space-around;
        align-items: center;
      }
      .text{
        font-size:12px;
        h3{
          font-size: 18px;
        }
      }
      .router-link-active{
        width: 100%;
        height: 100%;
        line-height: 45px;
        display: block;
        background: #f4f4f4;
        color:#333;
      }
      .accounts{
        color:#fff;
        background: #ff6700;
      }
  }
</style>

