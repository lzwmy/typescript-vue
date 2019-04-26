<template>
  <div class="proDetail">
    <!-- top -->
    <Top></Top>

    <div class="swiper">
        <div id="slider" class="mui-slider">
            <div class="mui-slider-group mui-slider-loop">
                <div class="mui-slider-item  mui-slider-item-duplicate">
                    <img src="../../../static/images/pro3.jpg" alt="">
                </div>
                <div class="mui-slider-item">
                    <img src="../../../static/images/pro1.jpg" alt="">
                </div>
                <div class="mui-slider-item">
                    <img src="../../../static/images/pro2.jpg" alt="">
                </div>
                <div class="mui-slider-item">
                    <img src="../../../static/images/pro3.jpg" alt="">
                </div>
                <div class="mui-slider-item  mui-slider-item-duplicate">
                    <img src="../../../static/images/pro1.jpg" alt="">
                </div>
            </div>
            <div class="mui-slider-indicator">
                <div class="mui-indicator mui-active"></div>
                <div class="mui-indicator"></div>
                <div class="mui-indicator"></div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="text">
            <h3>小米9 尊享版</h3>
            <p>全球首款压感屏幕指纹，快速解锁 / 骁龙845处理器，全面提升游戏性能表现 / 四曲面渐变镜面机身，轻薄圆润 / 960帧超慢动作 / 手持超级夜景</p>
            <p class="price">&yen;2799起 <span>&yen;2999</span></p>
        </div>
        <div class="detail">
            <ul>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
                <li>
                    <img src="https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png">
                    <p>超大屏</p>
                    <p>6.21英寸</p>
                </li>
            </ul>
        </div>
    </div>

    <addCart @pop="popAction"></addCart>
    <CartPop ref="cartPop"></CartPop>
  </div>
</template>

<script lang="ts">
import Swiper from '@/components/home/swiper.vue';
import Top from '@/components/proDetail/proTop.vue';
import addCart from '@/components/proDetail/addCart.vue';
import CartPop from '@/components/proDetail/cartPop.vue';
import {Component,Prop,Emit, Vue, Watch,Inject,Provide} from 'vue-property-decorator';

@Component({
    components: {
        Top,
        addCart,
        CartPop
    }
})
export default class proDetail extends Vue {
    popAction(){
        let cartPop:any = this.$refs.cartPop;
        cartPop.openPopup();
    }
    mounted ():void{
        this.$nextTick(()=>{
            let slider: any = mui("#slider");
            slider.slider({
                interval: 3000
            });
        })
    }
    created(): void {
        mui.init({
            swipeBack:true 
        });
    }
}
</script>

<style scoped lang="scss" type="text/css">
.proDetail{
    height: 1000px;
}
.content{
    padding: 10px;
}
.swiper{
    //启用单指垂直平移手势
    // touch-action: pan-y; 
    height: 400px;
}
 .text{
     h3{
         font-size:20px;
         font-weight: normal;
     }
     p{
         font-size:12px;
         color:rgb(117, 116, 116);
     }
     .price{
        margin:10px 0;
        font-size:18px;
        color:#ea625b;
        span{
          color:#666;
          font-size:14px;
          text-decoration:line-through
        }
      }
 }
 .detail{
     overflow: hidden;
    ul{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        font-size:12px;
        text-align: center;
        overflow-x: auto;
        padding:0 0 10px;
        li{
            padding:0 .08rem;
            min-width: 60px;
            position: relative;
            &:before{
                content:"";
                position:absolute;
                top:0;
                right:0;
                width:1px;
                display: block;
                height:1.1rem;
                transform: scaleX(0.5);
                background: #ccc;
            }
            &:last-child::before{
                display: none;
            }
        }
        img{
            width:20px;
            height:20px;
            display: block;
            margin:0 auto;
        }
        p:last-child{
            font-size:12px;
        }
    }
 }

.fade{
    transition: all 3s;
    animation: fadeIn 3s;
    animation-fill-mode: forwards;
}
@keyframes fadeIn {
    0%{transform: translateY(100%)}
    100%{transform: translateY(0)}
}


</style>

