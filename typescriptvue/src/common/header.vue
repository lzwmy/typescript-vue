<template>
  <header class="mui-bar mui-bar-nav mui-bar-nav-bg">
      <a id="icon-menu" class="mui-icon mui-icon-left-nav mui-pull-left" @click="$router.back(-1)"></a>
      <h1 class="mui-title">{{title}}</h1>
      <a class="mui-icon mui-icon-search mui-pull-right mui-a-color" @click="$router.push('/search')"></a>
  </header>
</template>

<script lang="ts">
import {Component,Prop,Emit, Vue, Watch,Inject,Provide} from 'vue-property-decorator';
@Component
export default class headerCom extends Vue {
    title: string = "";

    @Watch("$route")
    routerChange(): void{
      this.title = this.$route.meta.title;
    }
    
}
</script>

<style scoped lang="scss" type="text/css">
  .mui-bar{
    height: 42px;
  }
</style>

