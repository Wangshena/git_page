<!-- 我的求助页面 设备仿真：iPhoneSE -->
<template>
  <div class="all">
    <div class="head">
      <p>我的求助
        <van-icon name="replay" />
      </p><br>
      <van-image class="imgone" round width="3rem" height="3rem" src="https://img01.yzcdn.cn/vant/cat.jpeg" /><span
        style="font-size:100%">爱打瞌睡</span>
    </div>
    <div class="tishi">
      <p>您收到2条新的消息
        <van-icon name="smile-o" />
      </p>
    </div><br>
    <div class="kpone">
      <p>多么美好的一个兩天呀！下兩天就是一个适合睡觉的天气，不睡觉都对不起老天爷赏脸。有什么办法能让我避开老师睡觉吗？
        <van-icon name="question" />
      </p>
      <van-image class="imgtwo" src="https://img01.yzcdn.cn/vant/cat.jpeg" /><br>
      <van-field class="solid" v-model="messageone" placeholder="评论" />
    </div><br>
    <div class="kptwo">
      <p class="pone">我又来啦，哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈啊哈哈哈哈，想不到吧。还是上面那个问题，来人帮帮我。
        <van-icon name="checked" />
      </p>
      <p class="name">{{name1}}{{text1}}</p>
      <p class="name">{{name2}}{{text2}}</p>
      <p class="name">{{name3}}{{text3}}{{name2}}{{text4}}</p>
      <p class="name">{{name4}}{{text5}}</p>
      <p class="name">{{name1}}{{text6}}</p>
      <br>
      <van-field class="solid" v-model="messagetwo" placeholder="评论" />
    </div>
    <van-pull-refresh v-model="isLoading" success-text="" @refresh="onRefresh">
    </van-pull-refresh>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">动态</van-tabbar-item>
      <van-tabbar-item icon="search">求助</van-tabbar-item>
      <van-tabbar-item icon="friends-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>




</template>


  
<script>
import { Toast } from 'vant';
  export default {
    name: 'Page2',
    data() {
      return {
        active: 0,
        count: 0,
      isLoading: false,
      messageone: '',
      messagetwo: '',
      name1:'爱打瞌睡：',
      name2:'佳佳佳：',
      name3:'文助豪',
      name4:'曾俊：',
      text1:'来个人吧，来个人吧',
      text2:'我不是人',
      text3:' 回复 ',
      text4:'+1',
      text5:'我证明楼上说的真的',
      text6:'牛哇',
      }
    },
    methods: {
      onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
  },
  },
};
  </script>
  
  
<style scoped>
.all {
  height:105%;
  width: 100%;
}
.head{
  width: 100%;
  height: 100px;
  background-color: #000;
  color: rgb(255, 255, 255);
}

.head p{
  font-family: 'STHupo';
  margin: 0;
  font-size:150%;
}

.imgone{
  margin-left: 5px;
  float: left;
}

.head span{
  float: left;
  font-size: 100%;
}

.tishi {
  text-align: center;
  font-size: 10px;
  color: #959595;
}

.solid {
  margin: auto;
  padding: 0;
  border-style: solid;
  border-width: thin;
  border-radius: 5px;
  border-color: #959595;
}

.kpone{
  border-radius: 5px;
  width: 80%;
  height: 28%;
  margin: 0 auto;
  padding: 0;
  box-shadow: 20px 20px 10px #dae7ef;
}
.kpone p{
  text-align:left;
  font-family: 'SimHei';
  font-size: 15px;
  margin:0 20px;
  color: #666666;
}
.imgtwo{
  width:50%;
  height:50%;
  margin: 0 auto;
}
.kptwo{
  border-radius: 5px;
  width: 80%;
  height: 24%;
  margin: 0 auto;
  box-shadow: 20px 20px 10px #dae7ef;
}
.kptwo .pone{
  text-align:left;
  font-family: 'SimHei';
  font-size: 15px;
  margin:0 20px;
  color: #666666;
}

.name {
  text-align: left;
  margin:0 20px ;
  font-family: 'SimHei';
  font-size: 10px;
}
</style>
  