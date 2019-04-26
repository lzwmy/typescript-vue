<template>
  <div>
    <header class="mui-bar mui-bar-nav mui-bar-nav-bg">
        <a id="icon-menu" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        <h1 class="mui-title">标题文字</h1>
        <a class="mui-action-back mui-icon mui-icon-home mui-pull-right mui-a-color"></a>
    </header>
  </div>
</template>

<script lang="ts">
import {Component,Prop,Emit, Vue, Watch,Inject,Provide} from 'vue-property-decorator';

@Component
export default  class proTop extends Vue {
    actions:any = [
        {
            name:"QQ",
            method:"onShareqq"
        },
        {
            name:"微信",
            method:"b"
        },
        {
            name:"朋友圈",
            method:"b"
        },
        {
            name:"微博",
            method:"b"
        }
    ]
    sheetVisible(): void {
        
    }
}
</script>

<style scoped lang="scss" type="text/css">
   
</style>

