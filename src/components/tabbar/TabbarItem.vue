<template>
  <div class="tabbarItem" @click="itemClick">
    <slot v-if="!Acitve" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{active:Acitve}">
    <slot name="item-text"></slot>
    </div>
  </div> 
</template>

<script>
export default {
  name: '',
  props:{
    link:String
  },
  data(){
    return {
      // Acitve:false
    }
  },
  computed:{
    Acitve(){
      return this.$route.path.indexOf(this.link) !== -1
    }
  },
  methods:{
    itemClick(path){
      this.$router.replace(this.link).catch(()=>{})
      // console.log(this.link)
    }
  }
}
</script>

<style lang="less" scoped>
      .active{
        color: #d81e06;
      }
      .tabbarItem{
        flex: 1;
        text-align: center;
        font-size: 16px;
        height: 78px;
        img{
          width: 40px;
          height: 40px;
        }
        div{
          font-size: 13px;
        }
      }
</style>
