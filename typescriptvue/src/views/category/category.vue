<template>
  <div class="main">
    <div class="menu" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in 16" :key="index" @click="onSelectMenu(index,$event)" :class="{'active':currentIndex === index}">新品{{item}}</li>
      </ul>
    </div>

    <div class="wrapper" ref="contentWrapper">
      <div class="content">
        <ul>
          <li v-for="(item,index) in 16" :key="index" ref="contentList">内容{{item}}内容内容12</li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import BScroll from 'better-scroll'
import {Component,Prop,Emit, Vue, Watch,Inject,Provide} from 'vue-property-decorator';

@Component
export default class Category extends Vue{
    listHeight: number[] = []; //存放右边每一个li的高度
    scrollY:number = 1; //实时滚动Y轴的值
    contentScroll: any;
    menuScroll: any;
    contentWrapper: any;

    created():void{
      this.$nextTick(()=>{
        this.initScroll();
        this.calculateHeight();
      })
    }

    //对listHeight遍历，返回当前左边li
    get currentIndex(): number {
      for(let i = 0; i < this.listHeight.length; i++){
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i+1];
        //当遍历到i+1时，height2为undefind,返回对应的index，让其高亮显示
        if( !height2 || (this.scrollY >= height1 && this.scrollY < height2) ){
          return i;
        }
      }
      return 0;
    }


    //点击左边menu,跳到右边相应的li
    onSelectMenu(index: number,event: any): any {
      /** 
       * 浏览器的事件对象是没有_constructed属性，当是浏览器触发的时候就return
       * 而用better-scroll自定义的事件触发的时候有这个属性，为true
       * 用这个属性，就是避免在浏览器点击的时候，触发两次点击的效果
       * */
      if(!event._constructed){
        return;
      }
      let contentList: any = this.$refs.contentList;
      let el: any = contentList[index];  //根据点击的index，获取到对应的右边li元素
      this.contentScroll.scrollToElement(el,500)
    }

    //初始化better-scroll
    initScroll(): void {
      let menuWrapper: any = this.$refs.menuWrapper;
      this.menuScroll = new BScroll(menuWrapper, {
        click:true
      });
      let contentWrapper: any = this.$refs.contentWrapper;
      this.contentScroll = new BScroll(contentWrapper,{
        click:true,
        probeType:3 //设置实时监听滚动的位置
      });

      // pos是元素所处的位置，内部自动传的
      this.contentScroll.on('scroll',(pos:any)=>{
        if(pos.y <= 0){
          this.scrollY = Math.abs(Math.round(pos.y))
        }
      })
    }

    //计算右边每一个li的距离顶部高度，并存放在listHeight中
    calculateHeight(): void{
      //获取内容区每一个li元素
      let contentList:any = this.$refs.contentList;
      let height:number = 1;
      this.listHeight.push(height);  //第一个元素高度为0
      for(let i = 0; i < contentList.length; i++){
        height += contentList[i].clientHeight;
        this.listHeight.push(height);
      }
    }


}
</script>

<style scoped lang="scss" type="text/css">
  .wrapper{
    width:100%;
    position: absolute;
    top:42px;
    left:70px;
    bottom:0;
    overflow: hidden;
    z-index: 2;
    &::after{
      content:"";
      display: block;
      width:1px;
      background: #ccc;
      position: absolute;
      left:0;
      top:0;
      height: 100%;
      transform: scaleX(0.5);
    }
    .content{
      padding-bottom:100px;
    }
    li{
      padding:2rem .4rem;
      font-size: 14px;
      border-bottom:1px solid #ccc;
    }
  }
  .menu{
    width:110px;
    position: absolute;
    top:40px;
    left:0;
    bottom:0;
    padding:10px 10px 0 0;
    overflow-x: hidden;
    overflow-y: auto;
    ul{
      width:80px;
    }
    li{
      font-size:14px;
      text-align: center;
      height: 45px;
      line-height: 45px;
      transition: all .1s;
    }
    li.active{
      color:red;
      font-size:16px;
    }
  }
</style>

