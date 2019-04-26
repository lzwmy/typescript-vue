<template>
  <div id="app">
    <Head v-show="showHead"></Head>

    <div class="container">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>

    <tabbar v-show="showTabber"></tabbar>

  </div>
</template>

<script lang="ts">
import Head from '@/common/header.vue'
import Tabbar from '@/common/tabbar.vue'
import {Component,Prop,Emit, Vue, Watch,Inject,Provide} from 'vue-property-decorator';

@Component({
  components: {
    Tabbar,
    Head
  }
})
export default class App extends Vue {
    showHead: boolean = false; //head是否显示
    showTabber: boolean =  true; //底部tab是否显示
    headArr: string[] = ['/category','/cart'];   //显示head的组件
    tabber: string[] = ['/home','/category','/mine']; //显示tabber的组件
    transitionName: string = "";  //动画名称

    @Watch('$route')
      routeChange(to: any, from: any):void{
          //tabbar显隐
          if(this.tabber.indexOf(this.$route.path) != -1){
            this.showTabber = true;
          }else{
            this.showTabber = false;
          }
          //head显隐
          if(this.headArr.indexOf(this.$route.path) != -1){
            this.showHead = true;
          }else{
            this.showHead = false;
          }

          //控制页面切换动画
          if(to.meta.index > from.meta.index){
            this.transitionName = "slide-right";
          }else{
            this.transitionName = "slide-left";
          }
      }

}

// export default {
//   name: 'App',
//   data(){
//     return {
//       showHead:false, //head是否显示
//       showTabber:true, //底部tab是否显示
//       headArr:['/category','/cart'],   //显示head的组件
//       tabber:['/home','/category','/mine'], //显示tabber的组件
//       transitionName:""  //动画名称
//     }
//   },
  
//   watch:{
//     $route(to,from){
//       //tabbar显隐
//       if(this.tabber.indexOf(this.$route.path) != -1){
//         this.showTabber = true;
//       }else{
//         this.showTabber = false;
//       }
//       //head显隐
//       if(this.headArr.indexOf(this.$route.path) != -1){
//         this.showHead = true;
//       }else{
//         this.showHead = false;
//       }

    
//       if(to.meta.index > from.meta.index){
//         this.transitionName = "slide-right";
//       }else{
//         this.transitionName = "slide-left";
//       }
//     }
//   }
// }
</script>

<style lang="scss" type="text/css">

#app{
  height: 100%;
  width: 100%;
  position: relative;
  .container{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    width:100%;
    overflow-y: auto;
  }
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 200ms;
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);

}
</style>
