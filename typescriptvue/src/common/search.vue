<template>
  <div class="search">
        <div class="top">
            <header class="mui-bar mui-bar-nav mui-bar-nav-bg flex-start">
                <a id="icon-menu" class="mui-icon mui-icon-left-nav mui-pull-left" @click="$router.back(-1)"></a>
                <div class="mui-input-row mui-search">
                    <input type="search" class="mui-input-clear" placeholder="" v-model="searchVal">
                </div>
            </header>
        </div>

        <p v-show="isNull">搜索结果为空</p>
        <div class="classify" v-show="isShow">
            <h3>常用分类</h3>
            <div class="wrap">
                <span>手机</span>
                <span>电视</span>
                <span>笔记本</span>
                <span>盒子</span>
                <span>路由器</span>
                <span>手机</span>
                <span>手机</span>
                <span>手机</span>
                <span>手机</span>
            </div>
        </div>     
    

    
  </div>
</template>

<script lang="ts">
import {Component,Prop,Emit, Vue, Watch,Inject,Provide} from 'vue-property-decorator';
@Component
export default class SearchCom extends Vue {
    isShow: boolean = true;
    isNull: boolean = false;
    searchVal: string = "";
    result: string[] = ['1','2'];

    @Watch('searchVal')
    onChange(newVal: any,old: any){
        //不为空时内空隐藏
        if(newVal){
            this.isShow = false;
        }else{
            this.isShow = true;
        }
    }
    
}
</script>

<style scoped lang="scss" type="text/css">
    .search{
        .top{
            position: relative;
            .mui-search{
                display: inline-block;
                flex:1;
                .mui-input-clear{
                    height: 30px;
                    padding:0;
                    margin:0;
                    padding:2px 10px;
                    box-sizing: border-box;
                }
            }
        }
        .classify{
            position: absolute;
            top:60px;
            left:10px;
            h3{
                font-size:14px;
            }
            .wrap{
                padding:5px;
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                span{
                    font-size:12px;
                    display: inline-block;
                    min-width:50px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    padding:2px 3px;
                    background: #ccc;
                    margin:0 5px 5px 0;
                }
            }
        }
    }
</style>

