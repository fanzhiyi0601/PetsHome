<template>
  <Layout>
    <div slot="header">
    </div>
    <div slot="body" style="">
      <div class="content">
        <p>基本信息</p>
        <P1 style="margin-top: 60px;position: absolute;width: 850px; margin-left: 100px"></P1>
        <Form class="info-form" :model="information" label-position="left" :label-width="70">
          <div class="form-left">
          <FormItem label="用户名">
            <Input v-model="information.username" disabled="true"></Input>
          </FormItem>
          <FormItem label="真实姓名">
            <Input v-model="information.name" disabled="true"></Input>
          </FormItem>
          <FormItem label="年龄">
            <Input v-model="information.age" disabled="true"></Input>
          </FormItem>
            <FormItem label="联系方式">
              <Input v-model="information.mobile" disabled="true"></Input>
            </FormItem>
          </div>
          <div class="form-right">
            <FormItem label="生日">
              <Input v-model="information.birth" disabled="true"></Input>
            </FormItem>
            <FormItem label="性别">
              <Input v-model="information.sex" disabled="true"></Input>
            </FormItem>
            <FormItem label="家庭住址">
              <Input v-model="information.address" disabled="true"></Input>
            </FormItem>
            <FormItem label="E-mail">
              <Input v-model="information.email" disabled="true"></Input>
            </FormItem>
          </div>
          <p style="margin-top: 230px">其他资料</p>
          <P1 style="margin-top: 265px;position: absolute;width: 850px; margin-left: 100px"></P1>
          <div class="form-left" style="margin-top: 70px">
          <FormItem label="职业">
            <Input v-model="information.job" disabled="true"></Input>
          </FormItem>
          <FormItem label="兴趣爱好">
            <Input v-model="information.hobby" disabled="true"></Input>
          </FormItem>
            <FormItem label="个性签名">
              <Input v-model="information.sign" type="textarea" :autosize="{minRows: 2,maxRows: 7}" disabled="true"></Input>
            </FormItem>
          </div>
          <div class="form-right" style="margin-top: 70px">
            <FormItem label="工作地址">
              <Input v-model="information.workAddress" disabled="true"></Input>
            </FormItem>
            <FormItem label="年收入">
              <Input v-model="information.salary" disabled="true"></Input>
            </FormItem>
          </div>
        </Form>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/BaseLayout'
import P1 from '@/components/component/DivideLine'
export default {
  name: 'Information',
  components: {
    Layout,
    P1
  },
  data () {
    return {
      information:
        {
          username: '1',
          name: '',
          age: '',
          mobile: '',
          birth: '',
          sex: '',
          email: '',
          job: '',
          hobby: '',
          sign: '',
          workAddress: '',
          salary: ''
        }
    }
  }
}
</script>

<style scoped>
  .content{
    background: snow;
    height: 600px;
    width: 1050px;
    overflow: hidden;
    margin: 0 auto;
  }
  .content p{
    position: absolute;
    margin-left: 120px;
    margin-top: 25px;
    font-family: 'Microsoft YaHei', serif;
    font-size: 16px;
    font-weight: bold;
  }
  .info-form{
    margin-top: 90px;
  }
  .form-left {
    float: left;
    width: 360px;
    margin-left: 120px;
  }
  .form-right {
    float: right;
    width: 360px;
    margin-right: 160px;
  }
</style>
