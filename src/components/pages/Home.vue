<template>
  <div>
  <Layout>
    <div slot="header">
    <Header></Header>
    </div>
  <div slot="body">
    <div class="content">
    <Carousel style="margin: 1px; float: left;height: 397px;width: 800px; border:2px solid #e9eaec"
      v-model="value1"
      :autoplay="true"
      :autoplay-speed="setting.autoplaySpeed"
      :dots="setting.dots"
      :radius-dot="setting.radiusDot"
      :trigger="setting.trigger"
      :arrow="setting.arrow">
      <CarouselItem>
        <div class="demo-carousel"><img class="carousel" src="../../assets/c1.jpg"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img class="carousel" src="../../assets/c2.jpg"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img class="carousel" src="../../assets/c3.jpg"></div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel"><img class="carousel" src="../../assets/c4.jpg"></div>
      </CarouselItem>
    </Carousel>
      <div style="float: right;height: 400px;width: 240px;">
        <img style=";width: 60px;height: 55px;border-radius:50%;margin-top: 15px;" src="../../assets/head.jpg">
        Hi, 你好
        <a :href="'#/Login'"><Button  type="primary" style="; margin-top: 100px; margin-left: -120px">登录</Button></a>
        <a :href="'#/Login'"><Button  type="default" style="; margin-top: 100px; margin-left: 20px">签到</Button></a>
        <P1 style="width: 210px;margin-left: 10px"></P1>
        <span>已有<NumberAdd :value="720000"></NumberAdd>加入我们</span>
        <br>
        <P1 style="width: 210px;margin-left: 10px"></P1>
        <Row style="margin-top: 20px" type="flex" justify="center" gutter="2px">
          <Col span="7" order="1"><a href="#"><Icon type="ios-home" style="color: #17233d"/><br>我的领养</a></Col>
          <P2 style="margin-left: -32px"></P2>
          <Col span="7" order="2"><router-link to="/Publish"><Icon type="ios-filing" style="color: #17233d"/><br>我的发布</router-link></Col>
          <P2 style="margin-left: 32px"></P2>
          <Col span="7" order="3"><a href="#"><Icon type="md-heart" style="color: #17233d" /><br>我的收藏</a></Col>
        </Row>
        <Row style="margin-top: 30px;" type="flex" justify="center" gutter="2px">
          <Col span="7" order="4"><a href="#"><Icon type="logo-usd" style="color: #17233d" /><br>我的捐款</a></Col>
          <P2 style="margin-left: -32px"></P2>
          <Col span="7" order="5"><a href="#"><Icon type="ios-body" style="color: #17233d" /><br>志愿活动</a></Col>
          <P2 style="margin-left: 32px"></P2>
          <Col span="7" order="6"><a href="#"><Icon type="md-calendar" style="color: #17233d" /><br>预约医院</a></Col>
        </Row>
      </div>
    </div>
    <div class="small-title">
      <p>狗狗领养</p>
      <p style="font-size: 10px; margin-left: 380px; margin-top: 50px">领养代替购买，给他们一个温暖的家</p>
      <a :href="'#/Display'"><Icon type="ios-arrow-back" />发现更多<Icon type="ios-arrow-forward" /></a>
    </div>
    <div class="content" style="margin-top: 80px">
      <Carousel style="margin: 1px; float: left;height: 397px;width: 1050px;"
                v-model="value2"
                :autoplay="setting.autoplay"
                :autoplay-speed="setting.autoplaySpeed"
                :dots="setting.dots"
                :radius-dot="setting.radiusDot"
                :trigger="setting.trigger"
                :arrow="setting.arrow">
        <CarouselItem>
          <div class="dog-carousel">
            <Row type="flex" justify="center" gutter="30" align="top" class="code-row-bg">
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
            </Row>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="dog-carousel">
            <Row type="flex" justify="center" gutter="30" align="top" class="code-row-bg">
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
            </Row>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="dog-carousel">
            <Row type="flex" justify="center" gutter="30" align="top" class="code-row-bg">
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
            </Row>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="dog-carousel">
            <Row type="flex" justify="center" gutter="30" align="top" class="code-row-bg">
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
            </Row>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
    <div class="small-title">
      <p>猫咪领养</p>
      <p style="font-size: 10px; margin-left: 380px; margin-top: 50px">喜欢我们就带我们走吧！</p>
      <a :href="'#/Display'"><Icon type="ios-arrow-back" />发现更多<Icon type="ios-arrow-forward" /></a>
    </div>
    <div class="content" style="margin-top: 80px">
      <Carousel style="margin: 1px; float: left;height: 397px;width: 1050px;"
                v-model="value3"
                :autoplay="setting.autoplay"
                :autoplay-speed="setting.autoplaySpeed"
                :dots="setting.dots"
                :radius-dot="setting.radiusDot"
                :trigger="setting.trigger"
                :arrow="setting.arrow">
        <CarouselItem>
          <div class="dog-carousel">
            <Row type="flex" justify="center" gutter="30" align="top" class="code-row-bg">
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
            </Row>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="dog-carousel">
            <Row type="flex" justify="center" gutter="30" align="top" class="code-row-bg">
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
            </Row>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="dog-carousel">
            <Row type="flex" justify="center" gutter="30" align="top" class="code-row-bg">
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
            </Row>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="dog-carousel">
            <Row type="flex" justify="center" gutter="30" align="top" class="code-row-bg">
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
              <Col span="5"><p>col-4</p></Col>
            </Row>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
   </div>
  </Layout>
  </div>
</template>

<script>
import Layout from '@/components/layout/BaseLayout'
import P1 from '@/components/component/DivideLine'
import P2 from '@/components/component/DivideLineHo'
import NumberAdd from '@/components/component/NumberAdd'
import Header from '@/components/pages/usual/Header'
export default {
  name: 'Home',
  components: {
    Layout,
    P1,
    P2,
    NumberAdd,
    Header
  },
  data () {
    return {
      search: '',
      theme: 'light',
      title: '领养代替购买',
      option: '',
      value1: 1,
      value2: 2,
      value3: 3,
      setting: {
        autoplay: false,
        autoplaySpeed: 3000,
        dots: 'none',
        radiusDot: false,
        trigger: 'click',
        arrow: 'always'
      }
    }
  },
  created () {
    this.notice()
  },
  methods: {
    notice () {
      this.$Notice.config({
        top: 700
      })
      this.$Notice.open({
        title: '宠物之家',
        desc:
          '领养代替购买，给每个小宝贝一个温暖的家！',
        duration: 5,
        color: 'black'
      })
    }
  }
}
</script>

<style scoped>
  .content{
    background: aliceblue;
    height: 400px;
    width: 1050px;
    overflow: hidden;
    margin: 0 auto;
  }
  .carousel{
    width: 650px;
    height: 393px;
  }
  span {
    font-family: 'Microsoft YaHei', serif;
    font-size: 20px;
  }
  .content a{
    position: relative;
  }
  .small-title p{
    position: absolute;
    margin-left: 270px;
    margin-top: 38px;
    font-family: 'Microsoft YaHei', serif;
    font-size: 24px;
    font-weight: bold;
  }
  .small-title a{
    position:absolute;
    margin-left: 410px;
    margin-top: 50px;
    font-size: 16px;
    color: #515a6e;
    font-family: 'Microsoft YaHei', serif;
  }
  .dog-carousel p{
    height: 300px;
    background: aqua;
    margin-top: 40px;
  }
</style>
