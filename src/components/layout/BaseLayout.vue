<template>
  <div class="layout">
    <div class="layout-ceiling">
      <div class="layout-ceiling-left">
        <a :href="'#/Login'">Hi,请登录</a>
        <a href="#">免费注册</a>
      </div>
      <div class="layout-ceiling-right">
        <a href="#">宠物之家首页</a> |
        <a href="#">我的领养</a> |
        <a href="#">我的收藏</a> |
        <a href="#">联系客服</a>
        <a href="#" style="margin-left: 15px">个人中心</a>
      </div>
    </div>
    <div class="layout-header">
      <slot name="header"></slot>
      <!--<Button type="primary" @click="time">点这里扫二维码加入我们吧！</Button>-->
    </div>
    <div class="layout-body">
      <slot name="body"></slot>
    </div>
    <div style="height: 200px">
    </div>
    <div class="layout-copy">
      <div class="copy-content" style="background: #bbbec4; width: 100%;height: 60px; float: bottom; margin-bottom: 10px">
        <br>
        <a href="#">关于我们</a> |
        <a href="#">联系我们</a> |
        <a href="#">联系客服</a> |
        <a href="#">宠物社区</a> |
        <a href="#">合作招募</a> |
        <a href="#">友情链接</a> |
        <a href="#">领养政策</a> |
        <a href="#">隐私政策</a> |
        <a href="#">宠物公益</a>
      </div>
      Copyright &copy; 2015-2018, PetsHome Company
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
import BackTop from '@/components/component/BackTop'
export default {
  name: 'BaseLayout',
  components: {
    BackTop
  },
  created () {
    this.time()
  },
  methods: {
    time () {
      this.$Notice.config({
        top: 60
      })
      this.$Notice.open({
        title: '宠物之家',
        desc:
        '领养代替购买，给每个小宝贝一个温暖的家！',
        duration: 0,
        color: 'black'
      })
    }
  }
}
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header{
    height: 200px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-body{
    height: 1400px;
    background: #dddee1;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-ceiling{
    background: #495060;
    padding: 10px 0;
    overflow: hidden;
  }
  .layout-ceiling-right{
    float: right;
    margin-right: 40px;
  }
  .layout-ceiling-left{
    float: left;
    margin-left: 250px;
  }
  .layout-ceiling-left a{
    margin-left: 20px;
  }
  .layout-ceiling-right a{
    color: #9ba7b5;
  }
  .copy-content a {
    color: gray;
    font-size: 14px;
    position: relative;
    /*font-weight: bold;*/
    font-family: Helvetica, serif;
  }
</style>
