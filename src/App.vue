<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar>
     <tabbarItem link="/home">
      <img slot="item-icon"  src="@/assets/icon-font/baise/home.svg" alt="">
        <img slot="item-icon-active"   src="./assets/icon-font/red/home_red.svg" alt="">
      <div slot="item-text">首页</div>
     </tabbarItem>
     <tabbarItem link="/sort">
      <img slot="item-icon"  src="./assets/icon-font/baise/jiajutubiao-.svg" alt="">
      <img slot="item-icon-active"  src="./assets/icon-font/red/jiajutubiao-.svg" alt="">
      <div slot="item-text">分类</div>
     </tabbarItem>
     <tabbarItem link="/bought">
       <img slot="item-icon"  src="./assets/icon-font/baise/tupian.svg" alt="">
      <img slot="item-icon-active"  src="./assets/icon-font/red/tupian.svg" alt="">
      <div slot="item-text">值得买</div>
     </tabbarItem>
     <tabbarItem link="/cart">
         <img slot="item-icon"  src="./assets/icon-font/baise/icon-.svg" alt="">
      <img slot="item-icon-active"  src="./assets/icon-font/red/icon-.svg" alt="">
      <div slot="item-text">购物车</div>
     </tabbarItem>
     <tabbarItem link="/person">
       <img slot="item-icon"  src="./assets/icon-font/baise/geren.svg" alt="">
      <img slot="item-icon-active"  src="./assets/icon-font/red/geren.svg" alt="">
      <div slot="item-text">个人</div>
     </tabbarItem>
    </Tabbar>
  </div>
</template>
<script>
import axios from 'axios'
import Tabbar from './components/tabbar/TabBar'
import tabbarItem from './components/tabbar/TabbarItem'
import {request} from './request/index'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    Tabbar,
    tabbarItem
  },
  
 
}
</script>

<style lang="less">
 

</style>
