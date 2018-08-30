<template>
  <Layout>
    <div slot="header">
      <img class="logo" src="../../assets/logo.jpg">
      <!--<i-input class="logo-input" :value.sync="value" placeholder="请输入...">-->
      <!--</i-input>-->
      <i-input class="logo-input" v-model="search" placeholder="喜欢我们就带我们回家吧">
      <i-select v-model="option" slot="prepend" style="width: 80px">
        <Option value="dog">小狗</Option>
        <Option value="cat">小猫</Option>
        <Option value="bird">鸟</Option>
        <Option value="other">其他</Option>
      </i-select>
      <Button slot="append" icon="ios-search"></Button>
      </i-input>
      <div class="menu">
        <Dropdown style="position: absolute; margin-top: 19px;margin-left: -580px">
          <Button type="primary">
            <Icon type="md-menu"></Icon>
            线下活动浏览
            <Icon type="md-arrow-dropdown" />
          </Button>
          <DropdownMenu slot="list">
            <DropdownItem>最新活动</DropdownItem>
            <DropdownItem>往日活动</DropdownItem>
            <DropdownItem>活动加入</DropdownItem>
            <DropdownItem divided>志愿者团队</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Menu mode="horizontal" :theme="dark" active-name="1">
          <MenuItem name="1">
            <Icon type="ios-paper"></Icon>
            首页
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-people"></Icon>
            救助人
          </MenuItem>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-medkit"></Icon>
              流浪救助中心
            </template>
            <MenuGroup title="信息">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
          <MenuItem name="4">
            <Icon type="ios-school"></Icon>
            养狗小常识
          </MenuItem>
          <MenuItem name="5">
            <Icon type="ios-contact"></Icon>
            会员俱乐部
          </MenuItem>
          <MenuItem name="6">
            <Icon type="logo-twitter"></Icon>
            合作中心
          </MenuItem>
        </Menu>
      </div>
    </div>
  <div slot="body">
    <div class="content">
    <Carousel style="margin: 1px; float: left;height: 397px;width: 800px; border:2px solid #e9eaec"
      v-model="value3"
      :autoplay="setting.autoplay"
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
        <Button  type="primary" style="; margin-top: 100px; margin-left: -120px">登录</Button>
        <Button  type="default" style="; margin-top: 100px; margin-left: 20px">注册</Button>
        <P1 style="width: 210px;margin-left: 10px"></P1>
        <span>已有<NumberAdd :value="720000"></NumberAdd>加入我们</span>
        <br>
        <P1 style="width: 210px;margin-left: 10px"></P1>
        <Row style="margin-top: 20px" type="flex" justify="center" gutter="2px">
          <Col span="7" order="1"><Icon type="ios-home" /><br><a href="#">我的领养</a></Col>
          <P2 style="margin-left: -32px"></P2>
          <Col span="7" order="2"><Icon type="ios-filing" /><br><a href="#">我的救助</a></Col>
          <P2 style="margin-left: 32px"></P2>
          <Col span="7" order="3"><Icon type="md-heart" /><br><a href="#">我的收藏</a></Col>
        </Row>
        <Row style="margin-top: 30px;" type="flex" justify="center" gutter="2px">
          <Col span="7" order="4"><Icon type="logo-usd" /><br><a href="#">我的捐款</a></Col>
          <P2 style="margin-left: -32px"></P2>
          <Col span="7" order="5"><Icon type="ios-body" /><br><a href="#">志愿活动</a></Col>
          <P2 style="margin-left: 32px"></P2>
          <Col span="7" order="6"><Icon type="md-calendar" /><br><a href="#">预约医院</a></Col>
        </Row>
      </div>
    </div>
    <div class="sub-title">
      <p>狗狗领养</p>
    </div>
    <div class="content" style="margin-top: 80px"></div>
    <div class="sub-title">
      <p>猫咪领养</p>
    </div>
    <div class="content" style="margin-top: 80px"></div>
   </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/BaseLayout'
import P1 from '@/components/component/DivideLine'
import P2 from '@/components/component/DivideLineHo'
import NumberAdd from '@/components/component/NumberAdd'
export default {
  name: 'Home',
  components: {
    Layout,
    P1,
    P2,
    NumberAdd
  },
  data () {
    return {
      search: '',
      title: '领养代替购买',
      option: '',
      value3: 1,
      setting: {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: 'none',
        radiusDot: false,
        trigger: 'click',
        arrow: 'hover'
      }
    }
  }
}
</script>

<style scoped>
  .logo {
    width: 160px;
    height: 100px;
    float: left;
    margin-left: 340px;
    margin-top: 20px;
    border-radius: 20px;
  }
  .logo-input{
    width: 500px;
    margin-left:650px;
    margin-top: 90px;
    position: absolute;
  }
  .menu{
    margin-top: 140px;
    margin-left: 510px;
    position: absolute;
    z-index:1;
  }
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
  .sub-title p{
    position: absolute;
    margin-left: 270px;
    margin-top: 45px;
    font-family: 'Microsoft YaHei', serif;
    font-size: 20px;
    font-weight: bold;
  }
</style>
