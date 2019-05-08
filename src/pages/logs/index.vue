<template>
  <div class="logContainer">
    <swiper v-if="imgUrls.length > 0" circular autoplay interval='2000' :indidator-dots="true" indicator-active-color="#00ff00" indicator-color="#ff0000">
      <div v-for="(item, index) in imgUrls" :key="index" >
        <swiper-item>
          <image :src="item" mode="scaleToFill"/>
        </swiper-item>
      </div>
    </swiper>
    <swiper
      indidator-dots
      vertical
      autoplay
      circular
      indicator-active-color='#FFFFFF'
      interval='2000'
    >
      <swiper-item v-for='(item,index) in imgUrls' :key='index'>
        <image :src='item'/>
      </swiper-item>
    </swiper>
    <div class="test">
      <div class="top">
        <span>left</span>
        <span>top</span>
        <span>right</span>
      </div>
      <div class="middle">
        <div class="test-item" v-for='num in 5' :key='num'>{{num}}</div>
      </div>
      <div class="btoom">bottom</div>
    </div>
    <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>

    
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      dots:true,
      logs: [],
      imgUrls: [
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870'
      ]
    }
  },

  created () {
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
    } else {
      logs = mpvue.getStorageSync('logs') || []
    }
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style lang='scss'>
$c-blue: blue;
.log-list {
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}

.log-item {
  margin: 10rpx;
}
image{
  width: 100%;
  height:100%;
}
.test{
  width: 100%;
  height:1000rpx;
  display:flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items:center;
  background: yellow;
  .top{
    width: 90%;
    display:flex;
    // flex-wrap: row nowrap;
    justify-content: space-between;
  }
  .middle{
    flex:1;
    background: pink;
  }
}
.test-item{
  background: red;
  width:100rpx;
  &:nth-last-child(1){
    font-size: 20px;
    background:$c-blue;
  }
}
</style>
