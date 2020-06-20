<template>
  <div id="wrap">
    <!-- 搜索框 -->
    <div class="serch">
      <img class="logo" src="../../assets/img/images/logo.png" alt="">
     <div class="boxInput">
       <img class="sousuo" src="../../assets/img/fangdajing.svg" alt="">
        <input type="text" placeholder="搜索商品"/>
     </div>
     <button class="btn">登录</button>
    </div>
    <!-- 导航 -->
    <div class="nav">
      <div class="navLeft">
        <div class="navitem active">推荐</div>
        <div class="navitem">推2222荐</div>
        <div class="navitem">推荐</div>
        <div class="navitem">推荐</div>
        <div class="navitem">推荐</div>
        <div class="navitem">推荐</div>
        <div class="navitem">推荐</div> <div class="navitem">推荐</div>
        <div class="navitem">推荐</div>
        <div class="navitem">推荐</div>
        <div class="navitem">推荐</div>
        <div class="navitem">推荐</div>
      </div>
      <div class="navRight">

      </div>
    </div>
    <!-- 轮播 -->
   <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/968dd2c7e6ee7c247333b622882ef650.jpg?imageView&quality=95&thumbnail=1920x420" alt="">
        </div>
        <div class="swiper-slide">
          <img src="http://yanxuan-miaobi.nos-jd.163yun.com/1141008_1_5_wap_727631487696e9635e5d3e33371b20f9.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/b22282bd9f88996132f3fc9a548ff0ef.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
   </div>
    <!-- 下边三个 -->
    		<div class="policyDescList">
			<div  class="policyItem">
				<img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" mode=""></img>
				<span>网易自营品牌</span>
			</div>
			
			<div  class="policyItem">
				<img src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" mode=""></img>
				<span>30天无忧退换</span>
			</div>
			
			<div  class="policyItem">
				<img src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" mode=""></img>
				<span>48小时快速退货</span>
			</div>
		
    </div>
    <!-- 十个小图 -->
    <div class="someImg" v-if="indexData.data">
        <div class="imgItem" v-for="(item,index) in indexData.data.kingKongModule.kingKongList" :key="index">
          <img :src="item.picUrl" alt="">
          <div>{{item.text}}</div>
        </div>

       
      
    </div>
    <!-- 新人 -->
    <div class="newGif">
      <img class="gifImg" src="https://yanxuan.nosdn.127.net/e73d6d0b28648d1204623d28ea175447.gif" alt="">
      <img class="gifme" src="../../assets/mmexport1509694093173_mix01.jpg" alt="">
    </div>
    <!-- 红包 -->
    <div class="redB">
      <img src="https://yanxuan.nosdn.127.net/980abbd7b189d99ef6da4e01d83b920d.png?quality=75&type=webp&imageView&thumbnail=750x0" alt="">
    </div>
    <!-- 包红 -->
    <div class="Bred">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <NewPoser></NewPoser>
    <div>11</div>
    <div>11</div>
    <div>11</div>
    <div>11</div>
    <div>11</div>
    <div>11</div>
    <div>11</div>
    <div>11</div>
    <div>11</div>
    <div>11</div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {mapActions,mapState} from 'vuex'
import NewPoser from './Newponser'
export default {
  name: '',
  components:{
    NewPoser
  },
  mounted(){
    var mySwiper = new Swiper ('.swiper-container', {
    //direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  })  
  this.indexfun()
  },
 
  computed:{
    ...mapState(['indexData'])
  },
  methods:{
    
    ...mapActions({
      indexfun:'indexfun'
    })
  }
  
}
</script>

<style lang="less" scoped>
.wrap{width: 750px;}
.serch{
  position: relative;
  display: flex;
  margin: 10px;
  .logo{
    position: relative;
    left: 0;
    top: 7px;
    width:138px;
    height: 40px;
  }
  .boxInput{
    position: relative;
    width:442.32px ;
    height: 56px;
    background-color: rgb(237, 237, 237);
    margin: 0 20px;
    .sousuo{
      position: absolute;
      left: 20px;
      top:13px ;
      width: 30px;
      height: 30px;
    
  }
    input{
      position: absolute;
      left: 0;
      top: 6px;
      bottom: 0;
      right: 0;
      margin: 0 auto;
      width: 317px;
      height: 42px;
      margin: 0 auto;
    }
  }
  .btn{
    width: 82px;
    height:40px;
    border-radius: 5px;
    background-color: #fff;
    color: #DD1A21;
    border: 2px solid #DD1A21;
    font-size: 9px;
    margin: 8px;
  }
  
}
.nav{
  display: flex;
  .navLeft{
    width:650px;
    height: 60px;
    // background-color: red;
    display: flex;
    align-items: center;  
    text-align: center;
    overflow: hidden;
    .navitem{
    // flex: 1;
    margin: 30px;
    white-space: nowrap;
    line-height: 60px;
    box-sizing: border-box;
    font-size: 29px;
  }
  }
  .navRight{
    width: 100px;
    height: 60px;
    background-color: orange;
  }
  
}
.active{
  border-bottom:2px solid orange ;
}
.swiper-container {
    width: 750px;
    height: 370px;
    margin: 4px 0;
    img{
      width: 100%;
      height: 100%;
    }
}  
.policyDescList{
			display: flex;
			.policyItem{
				text-align: center;
				flex: 1;
				img{
					width: 32px;
					height: 32px;
					vertical-align: middle;
				}
				span{
					font-size: 24upx;
					vertical-align: middle;
				}
			}
    }
// 小图十个
.someImg{
  display: flex;
  flex-wrap: wrap;
  // margin: 20px 0;
  margin-right: 10px;
  width: 750px;
  height: 400px;
  // background: cadetblue;
  border-bottom:1px solid #ccc ;
  .imgItem{
    width: 20%;
    text-align: center;
    margin-top: 30px;
    img{
      width: 110px;
      height: 110px;
    }
    div{
      font-size:16px ;
    }
  }
}
// 动图
.newGif{
  position: relative;
  .gifImg{
    width: 750px;
    height: 240px;
    display: block;
  }
  .gifme{
    position: absolute;
    left: 75px;
    top: 35px;
    width: 168px;
    height: 168px;
    // z-index: -1;
    border-radius:10px;
  }
}
// 红包
.redB{
  height: 80px;
  display: block;
}
.Bred{
  width: 750px;
  height: 260px;
  background: rgb(175,0, 17);
  display: flex;
  justify-content: space-around;
  // align-items: center;
  .item{
    margin-top: 20px;
    width: 231px;
    height: 220px;
    background:#eee;
    border-radius: 20px;
  }
}
.texxx{
  color: red;
}
</style>
