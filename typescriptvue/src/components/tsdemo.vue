<template>
  <div class="hello">
    <button @click="onClick">onclick</button>
    <input type="text" v-model="inputTest">{{inputTest}}
    123213213
  </div>
</template>

<script lang="ts">
import {Component,Prop,Model,Emit, Vue, Watch,Inject,Provide} from 'vue-property-decorator';

@Component
export default class tsdemo extends Vue {
  msg: string = 'Welcome to Your Vue.js App';
  inputTest: string = "文本值";

  @Prop(Number) propMessage!:number

  @Watch('inputTest',{immediate: true, deep: true})
  onChangeValue(newVal: string, oldVal: string){
    //do...
  }
  
  @Emit('emit-init')
  onEmit(val: string){}
  
  // @Inject()
  // foo!: string

  //计算属性
  get countNum(){
    console.log("走了computed")
    return this.inputTest;
  }



  created () {
    console.log("created")
    this.$on('emit-init', function(val: string){
      console.log("触发了emit, 接收的值为+"+ val)
    })
  }
  onClick(){
    console.log("点击了")
    this.onEmit("这是emit的一个值 ")
  }
  

  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
input{
  width:200px;
}
a {
  color: #42b983;
}
</style>
