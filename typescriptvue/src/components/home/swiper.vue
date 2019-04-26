<template>
<div class="wrap">
    <div id="slider" class="mui-slider">
        <div class="mui-slider-group mui-slider-loop">
            <div class="mui-slider-item  mui-slider-item-duplicate">
                <img src="https://static.maizuo.com/v5/upload/1fc5abb0e45ae533e3848f58d9124dfd.jpg?x-oss-process=image/quality,Q_70" alt="">
            </div>
            <div class="mui-slider-item">
                <img src="https://static.maizuo.com/v5/upload/915ef58d9667bf9efb1a9ce66a308fd0.jpg?x-oss-process=image/quality,Q_70" alt="">
            </div>
            <div class="mui-slider-item">
                <img src="https://static.maizuo.com/v5/upload/ce6da101ebaf09e14536133f44a69c38.jpg?x-oss-process=image/quality,Q_70" alt="">
            </div>
            <div class="mui-slider-item">
                <img src="https://static.maizuo.com/v5/upload/1fc5abb0e45ae533e3848f58d9124dfd.jpg?x-oss-process=image/quality,Q_70" alt="">
            </div>
            <div class="mui-slider-item  mui-slider-item-duplicate">
                <img src="https://static.maizuo.com/v5/upload/915ef58d9667bf9efb1a9ce66a308fd0.jpg?x-oss-process=image/quality,Q_70" alt="">
            </div>
        </div>
        <div class="mui-slider-indicator">
            <div class="mui-indicator mui-active"></div>
            <div class="mui-indicator"></div>
            <div class="mui-indicator"></div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {Component,Prop,Emit, Vue, Watch,Inject,Provide} from 'vue-property-decorator';
@Component
export default class swiperCom extends Vue {
    mounted (): void{
        this.$nextTick(()=>{
            let slider = mui("#slider");
            slider.slider({
                interval: 3000
            });
        })
    }
}
</script>

<style scoped lang="scss" type="text/css">
    .wrap{
        touch-action: pan-y;
        margin-top:42px;
        height: 210px;
        img{
            height: 210px;
        }
    }
    
</style>



