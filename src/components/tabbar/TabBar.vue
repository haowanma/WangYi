<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: '',
  
  data(){
    return {
      // isActive : false
    }
  }
}
</script>

<style lang="less" scoped>
  //   .active{
  //     color: red;
  //   }
  .tabbar{
      display: flex;
      background-color: #f6f6f6;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      .tabbarItem{
        flex: 1;
        text-align: center;
        font-size: 16px;
        height: 80px;
        img{
          width: 23px;
          height: 19px;
        }
        div{
          font-size: 13px;

        }
      }
  }
</style>
