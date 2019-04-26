<template>
  <div class="main">
    <Top></Top>
    <Swiper></Swiper>

    <ul class="product">
      <li>
        <div class="item">
          <router-link to="/proDetail">
            <div class="img">
              <img src="../../../static/images/p1.jpg" alt="">
            </div>
            <div class="text">
              <h4>小米9尊享版</h4>
              <p>2400万旗舰自拍</p>
              <p class="price">&yen;2799起 <span>&yen;2999</span></p>
            </div>
          </router-link>
        </div>
        <div class="item">
          <div class="img">
            <img src="../../../static/images/p2.jpg" alt="">
          </div>
          <div class="text">
            <h4>小米9尊享版</h4>
            <p>2400万旗舰自拍</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
          </div>
        </div>
      </li>
      <li>
        <div class="item">
          <div class="img">
            <img src="../../../static/images/p1.jpg" alt="">
          </div>
          <div class="text">
            <h4>小米9尊享版</h4>
            <p>2400万旗舰自拍</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../../../static/images/p2.jpg" alt="">
          </div>
          <div class="text">
            <h4>小米9尊享版</h4>
            <p>2400万旗舰自拍</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
          </div>
        </div>
      </li>
      <li>
        <div class="item">
          <div class="img">
            <img src="../../../static/images/p1.jpg" alt="">
          </div>
          <div class="text">
            <h4>小米9尊享版</h4>
            <p>2400万旗舰自拍</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="../../../static/images/p2.jpg" alt="">
          </div>
          <div class="text">
            <h4>小米9尊享版</h4>
            <p>2400万旗舰自拍</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
          </div>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script lang="ts">
import Top from '@/components/home/top.vue';
import Swiper from '@/components/home/swiper.vue';
import {Component,Prop,Emit, Vue, Watch,Inject,Provide} from 'vue-property-decorator';

@Component({
  components: {
    Top,
    Swiper,
  }
})
export default class Home extends Vue {
  created (): void {
  }
}
</script>

<style scoped lang="scss" type="text/css">
  .product{
    height: 1000px;
    margin-top:10px;
    li{
      display: flex;
      justify-content:space-around;
    }
    li .item:first-child{
      margin-right:10px;
    }
    .img{
      height: 180px;
      img{
        width:100%;
      }
    }
    .text{
      padding:5px 10px;
      line-height: 20px;
      h4{
        font-size:16px;
        font-weight: normal;
      }
      p{
        font-size:14px;
        color:#ccc;
      }
      .price{
        font-size:16px;
        color:#ea625b;
        span{
          color:#666;
          font-size:12px;
          text-decoration:line-through
        }
      }
    }
  }
</style>

