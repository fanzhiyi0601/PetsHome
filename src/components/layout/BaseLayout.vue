<template>
  <div class="layout">
    <div class="layout-ceiling">
      <div class="layout-ceiling-left">
        <a href="#">Hi,请登录</a>
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
    </div>
    <div class="layout-body">
    </div>
    <div style="height: 200px"></div>
    <div class="layout-copy">
      2011-2016 &copy; TalkingData
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout'
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
    height: 1000px;
    background: #9ea7b4;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-ceiling{
    background: #f5f7f9;
    padding: 10px 0;
    overflow: hidden;
  }
  .layout-ceiling-right{
    float: right;
    margin-right: 30px;
  }
  .layout-ceiling-left{
    float: left;
    margin-left: 150px;
  }
  .layout-ceiling-left a{
    margin-left: 20px;
  }
  .layout-ceiling-right a{
    color: #9ba7b5;
  }
</style>
