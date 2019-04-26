<template>
    <div id="mask" :class="popupVisible?'active':''" @click.self="popupVisible=false">
        <div class="cartPop">
            <span class="cloes icon iconfont icon-shanchuguanbiquxiaowubiankuang" @click="popupVisible=false"></span>
            <div class="top">
                <div class="box flex-center">
                    <img src="../../../static/images/p1.jpg" alt="">
                </div>
                <div class="content">
                    <p>&yen;2899</p>
                    <p class="text">小米8 8GB+128GB 蓝色</p>
                </div>
            </div>
            <div class="spec">
                <div class="specs">
                    <h4>型号</h4>
                    <button class="mui-btn mui-numbox-btn-minus" type="button">6GB+128GB</button>
                    <button class="mui-btn mui-numbox-btn-minus" type="button">8GB+64GB</button>
                    <button class="mui-btn mui-numbox-btn-minus" type="button">8GB+128GB</button>
                </div>
                <div class="specs">
                    <h4>型号</h4>
                    <button class="mui-btn mui-numbox-btn-minus" type="button">6GB+128GB</button>
                    <button class="mui-btn mui-numbox-btn-minus" type="button">8GB+64GB</button>
                    <button class="mui-btn mui-numbox-btn-minus" type="button">8GB+128GB</button>
                </div>
                <div class="specs">
                    <h4>型号</h4>
                    <button class="mui-btn mui-numbox-btn-minus" type="button">6GB+128GB</button>
                    <button class="mui-btn mui-numbox-btn-minus" type="button">8GB+64GB</button>
                    <button class="mui-btn mui-numbox-btn-minus" type="button">8GB+128GB</button>
                </div>
                <div class="specs">
                    <h4>颜色</h4>
                    <button class="mui-btn mui-numbox-btn-minus" type="button">白色</button>
                    <button class="mui-btn mui-numbox-btn-minus" type="button">黑色</button>
                    <button class="mui-btn mui-numbox-btn-minus" type="button">红色</button>
                </div>
                <div class="specs num">
                    <h4>购买数量</h4>
                    <div class="wrap">
                        <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                        <span>1</span>
                        <button class="mui-btn mui-numbox-btn-minus" type="button">+</button>
                    </div>
                </div>
            </div>
            <div class="foot flex-center addBtn"><h3>加入购物车</h3></div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component,Prop,Emit, Vue, Watch,Inject,Provide} from 'vue-property-decorator';

@Component
export default class cartPop extends Vue {

    popupVisible:boolean = false;
        
    openPopup(): void {
        this.popupVisible = true;
    }    
}
</script>

<style scoped lang="scss" type="text/css">
#mask{
    position: fixed;
    top:2000px;
    left:0;
    right:0;
    bottom:0;
    z-index: 99;
    background: rgba($color: #000000, $alpha: 0.5);
    transition: top 50ms;
    &.active{
        top:0;
    }
    &.active .cartPop{
        top:50px;
    }
    .cartPop{
        position: absolute;
        top:2000px;
        left:0;
        right:0;
        bottom:0;
        background:#fff;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        padding:25px 15px;
        transition: top 300ms;
        .cloes{
            position: absolute;
            right:15px;
            top:15px;
        }
        .top{
            height: 100px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .box{
                width:100px;
                height:100px;
                margin-right: 20px;
                border:1px solid #e5e5e5;
                img{
                    width:auto;
                    max-height: 100%;
                }
            }
            .content{
                p{
                    color:#ff6700;
                    font-size:18px;
                }
                .text{
                    color:#666;
                    font-size:16px;
                }
            }
        }
        .spec{
            position: absolute;
            top:130px;
            left:15px;
            right:15px;
            bottom:44px;
            overflow: auto;
            .specs{
                margin-bottom: .4rem;
                padding-bottom:.2rem;
                position: relative;
                h4{
                    font-size:16px;
                    margin-bottom:10px;
                }
                &:after{
                    content:"";
                    display: block;
                    width:100%;
                    height: 1px;
                    background: #ddd;
                    transform:scaleY(.5);
                    position: absolute;
                    bottom:0;
                    left:0;
                }
            }
            .num{
                display: flex;
                justify-content:space-between;
                align-items: center;
                font-size:14px;
                line-height: 30px;
            }
        }
        .foot{
            position: absolute;
            bottom:0;
            left:0;
            right:0;
            height: 40px;
            margin:0 20px;
            background: #ff6f0d;
            border-radius: 10rem;
            color:#fff;
            font-size:16px;
        }
    }
}
</style>

