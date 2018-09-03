<template>
  <div>
    <Tooltip style=" float: left;margin-left:340px;margin-top: 20px;"  placement="left-start">
      <img class="logo" src="../../../assets/logo.jpg">
      <div style="line-height: 20px" slot="content">
        <p>请记得我的寿命约有十到十五年，别抛弃我；</p>
        <p>请对我有耐心，你要给我一些时间来了解我；</p>
        <p>请别对我生气太久，也别把我关起来惩罚我；</p>
        <p>请时常对我说话，纵使我不懂但我能感觉到；</p>
        <p>在我年老时请好好照顾我，因为你也会变老；</p>
        <p>当我要捱过生老病死时，请不要哭泣，</p>
        <p> 请你永远不要忘记，我爱你！</p>
      </div>
    </Tooltip>
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
      <i-menu mode="horizontal" :theme="theme" active-name="1">
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
      </i-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .logo {
    width: 160px;
    height: 100px;
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
</style>
