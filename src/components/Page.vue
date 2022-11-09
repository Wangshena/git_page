<template>
  <el-container>
    <el-header>
      <div class="logo"><img src="../assets/images/logo.png" alt=""></div>
      <div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
          background-color="#3a5195" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">学校概况</template>
            <el-menu-item style="float:left" index="1-1">学校简介</el-menu-item>
            <el-menu-item style="float:left" index="1-2">领导致辞</el-menu-item><br>
            <el-menu-item style="float:left" index="1-3">组织机构</el-menu-item>
            <el-menu-item style="float:left" index="1-4">理念特色</el-menu-item><br>
            <el-menu-item style="float:left;margin-right: 5px;" index="1-5">大 事 记</el-menu-item>
            <el-menu-item style="float:left" index="1-6">领导关怀</el-menu-item><br>
            <el-menu-item style="float:left" index="1-7">校园环境</el-menu-item>
            <el-menu-item style="float:left" index="1-8">影像东软</el-menu-item><br>
            <el-menu-item style="float:left" index="1-9">大学精神</el-menu-item>
            <el-menu-item style="float:left" index="1-10">党群工作</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">学院介绍</el-menu-item>
          <el-menu-item index="3">新闻中心</el-menu-item>
          <el-menu-item index="4">招生就业</el-menu-item>
          <el-menu-item index="5">人才培养</el-menu-item>
          <el-menu-item index="6">服务指南</el-menu-item>
          <el-menu-item index="7">友情链接</el-menu-item>
        </el-menu>
      </div>
    </el-header>

    <div class="gc"></div>
    <div>
      <div class="lt">
        <ul>
          <li><a href="#">学校新闻</a></li>
          <li><a href="#">通知通告</a></li>
          <li><a href="#">聚焦东软</a></li>
          <li><a href="#">媒体聚焦</a></li>
          <li><a href="#">信息公开</a></li>
        </ul>
      </div>

      <div class="ct">
        <svg>
          <line x1="0" y1="0" x2="1000" y2="0" stroke="#3a5195" stroke-width="10" />
        </svg>
        <h1>我校开展10月党日活动暨党委书记讲授专题党课活动</h1>
        <p>2022年11月2日 编辑：品牌发展部 来源： 图/陈怀宇 文/党群工作部</p>
        <div class="pone">
          <p>近日，我校开展10月党日活动暨党委书记讲授专题党课活动。学校党委书记赖廷谦主讲专题党课，各学院党总支书记、副书记，相关部门负责人及部分师生代表到场聆听。</p>
        </div>
        <img src="../assets/images/one.jpg" alt="">
        <img src="../assets/images/two.jpg" alt="">

        <p style="color:#767676">我校开展10月党日活动暨党委书记讲授专题党课活动</p>
        <div class="ptwo">
          <p>
            课堂上，赖廷谦书记以《马克思主义中国化的飞跃——学习习近平新时代中国特色社会主义思想的感想》一诗揭开了此次专题党课活动的序幕，并分别从中国梦、新发展、“五位一体”、“四个全面”、科研创新、城乡一体化、强军兴军、港澳治理、“一带一路”、抗疫大考、反腐斗争方面回顾总结了党的十八大以来党和国家各项事业发生的历史性变革，取得的历史性成就。新时代的十年里，以习近平同志为核心的党中央高举中国特色社会主义伟大旗帜，带领全党全国各族人民进行伟大斗争、建设伟大工程、推进伟大事业、实现伟大梦想，推动中华民族伟大复兴进入了全新的发展阶段。
          </p>
        </div>
        <img src="../assets/images/three.jpg" alt="">
        <p style="color:#767676">赖廷谦书记讲授专题党课</p>
        <div class="pthree">
          <p>
            赖廷谦书记指出，要深刻认识习近平新时代中国特色社会主义思想是马克思主义中国化最新成果，全面贯彻习近平新时代中国特色社会主义思想，深刻领悟“两个确立”的决定性意义，增强“四个意识”、坚定“四个自信”、做到“两个维护”，自觉在思想上政治上行动上同以习近平同志为核心的党中央保持高度一致，做到表里如一、知行合一，始终坚持和发展新时代中国特色社会主义。
          </p>
          <p>
            历史照亮未来，征程未有穷期。赖廷谦书记强调，全校师生要坚持以习近平新时代中国特色社会主义思想为指引，切实把思想与行动统一到党的二十大精神上来，深入贯彻落实习近平总书记在党的二十大报告中关于教育强国的重要论述，踔厉奋发，勇毅前行，持续推进学校内涵式高质量发展，不断为学校建设成为一流应用型大学贡献力量。
          </p>
          <p style="text-align:right">责任编辑：付婷</p>
        </div>
        <img class="i4" src="../assets/images/four.png" alt="">
      </div>
    </div>

    <div class="btm">
      <img class="i5" src="../assets/images/five.png" alt="">
      <p class="btmt">投诉举报方式：xf@nsu.edu.cn 、 028-64888000<br>
        地址：四川省 成都市 都江堰市 青城山镇东软大道1号<br>
        邮编：611844<br>
        [蜀ICP备12011972号-2](https://beian.miit.gov.cn/)<br>
        Copyright © 2002-2022 成都东软学院 All Rights Reserved</p>
      <div class="tool">
        <div><a href="#"><img src="../assets/images/f_contactus.png" alt=""></a></div>
        <div class="tooltip"><a href="#"><img src="../assets/images/f_wx.png" alt=""></a>
          <span class="tooltiptext"></span>
        </div>
        <div><a href="#"><img src="../assets/images/f_wb.png" alt=""></a></div>
        <div><a href="#"><img src="../assets/images/f_tt.png" alt=""></a></div>
        <div><a href="#"><img src="../assets/images/f_jb.png" alt=""></a></div>
        <div><a href="#"><img src="../assets/images/f_lz.png" alt=""></a></div>
      </div>
    </div>
  </el-container>
</template>

<script>
export default {
  name: 'Page',
  data() {
    return {
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>


<style scoped>
.el-header {
  background-color: #3a5195;
  color: #333;
  text-align: center;
  padding: 0;
  line-height: 125px;
  position: sticky;
  top: 0;
}

.el-menu {
  width: 700px;
  height: 60px;
  margin: auto;
}

.el-footer {
  background-color: #5c5c5c;
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 150px;
}

.gc {
  height: 45px;
  width: 100%;
  background-color: #d3d3d3;
}

.logo img {
  float: left;
  width: 200px;
  margin-left: 250px;
}

.ct {
  background-color: #f4f4f4;
  margin-top: 60px;
  margin-bottom: 60px;
  width: 800px;
  float: left;
  margin-left: 20px;
}

.ct svg {
  margin-top: 30px;
  width: 100%;
  height: 10px;
}

.ct h1 {
  color: #344771;
  font-size: 25px;
}

.ct img {
  width: 650px;
  height: 430px;
  margin-top: 20px;
}

.ct>.i4 {
  width: 490px;
  height: 250px;
}

.pone,
.ptwo,
.pthree {
  color: #767676;
  margin: auto;
  width: 720px;
  text-align: justify;
  text-indent: 2em;
}

.lt {
  background-color: #2a468f;
  width: 210px;
  height: 350px;
  float: left;
  margin-top: 60px;
  margin-left: 300px;
  padding-bottom: 20px;
}

.lt ul {
  margin-top: 20px;
  margin-left: -10px;
  margin-right: 10px;
  padding: 0;
}

.lt li {
  color: #fff;
  font-size: 20px;
  padding-left: 40px;
  padding-right: 10px;
  margin-top: 5px;
}

.lt a {
  color: #fff;
  text-decoration: none;
}

.lt li:hover {
  background: #375cbc;
}

.btm {
  height: 175px;
  width: 100%;
  background-color: #5c5c5c;
  color: #fff;
}

.btmt {
  margin-top: 60px;
  font-size: 14px;
  width: 385px;
  float: left;
}

.btm>.i5 {
  margin-top: 40px;
  margin-left: 510px;
  width: 110px;
  height: 110px;
  float: left;
}

.tool {
  width: 360px;
  float: left;
  margin-top: 110px;
  position: relative;
}

.tool div {
  margin-left: 20px;
  width: 40px;
  height: 40px;
  bottom: 0;
  float: left;
}


.tooltip .tooltiptext {
  visibility: hidden;
  width: 75px;
  height: 65px;
  background-color: rgb(255, 255, 255);
  background-image: url(../assets/images/wxcode.jpg);
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -120px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
