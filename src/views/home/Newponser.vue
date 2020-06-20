<template>
  <div class="wrpa">
   <div class="header">
     <div class="Monopolization">新人专享礼</div>
   </div>
   <div class="bodyE">
     <div class="left"></div>
     <div class="right">
       <div class="top"></div>
       <div class="bottom"></div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style lang="less" scoped>
  .wrpa{
    width: 750px;
    height: 528px;
    background: sandybrown;
    .header{
      width: 750px;
      height: 90px;
      position: relative;
      font-size: 35px;
      &::after{
        position: absolute;
        left: 230px;
        top: 43px;
        content: '';
        width: 40px;
        height: 6px;
        background: #333;
      }
      &::before{
        position: absolute;
        right: 230px;
        top: 43px;
        content: '';
        width: 40px;
        height: 6px;
        background: #333;
      }
      .Monopolization{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
       
       
      }
    }
    .bodyE{
      width: 750px;
      height: 437px;
      background: hotpink;
    }
  }
</style>
