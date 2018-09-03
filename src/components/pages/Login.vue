<template>
  <div class="login">
  <img style="height: 826px;width: 1600px; padding: 0" src="../../assets/bg.jpg"/>
    <div class="form_login">
      <Tabs class="tab" value="name1">
        <TabPane label="登录" name="name1">
          <Form ref="formLogin" :model="formLogin" :rules="ruleLogin" style="text-align: left;margin-left: 80px">
          <FormItem style="margin-top: 15px" class="formItem" prop="user">
            账号
            <i-input  type="text" v-model="formLogin.user" placeholder="用户名">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </i-input >
          </FormItem>
          <FormItem class="formItem" prop="password">密码
            <i-input  type="password" v-model="formLogin.password" placeholder="密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </i-input >
          </FormItem>
          <FormItem class="formItem">
            <Button style="width: 220px;font-size: 16px;margin-top: 15px" type="primary" @click="handleSubmit">确认登录</Button>
          </FormItem>
        </Form>
        </TabPane>
        <TabPane label="注册" name="name2">
          <Form ref="formRegister" :model="formRegister" :rules="ruleRegister" :label-width="60"  style="text-align: left;margin-left: 30px;width: 280px;margin-top: -15px">
            <FormItem label="用户名" style="margin-top: 15px" prop="user">
              <Input  type="text" v-model="formRegister.user" placeholder="用户名"></Input>
            </FormItem>
            <FormItem label="密码"  prop="password">
              <Input  type="password" v-model="formRegister.password" placeholder="密码"></Input>
            </FormItem>
            <FormItem label="手机" prop="mobile">
              <Input v-model="formRegister.mobile" placeholder="输入手机号"></Input>
              <Button @click="handleReset" style="margin-left: 130px;margin-top:-32px;position: absolute; font-size: 10px">获取验证码</Button>
            </FormItem>
            <FormItem label="验证码" prop="code">
              <Input v-model="formRegister.mail" placeholder="验证码"></Input>
            </FormItem>
            <FormItem label="邮箱" prop="mail">
              <Input v-model="formRegister.mail" placeholder="邮箱（选填）"></Input>
            </FormItem>
            <FormItem style="margin-top: -10px">
              <Button style="margin-left: 30px" type="primary" @click="handleSubmit">注册</Button>
              <Button @click="handleReset" style="margin-left: 25px">重置</Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane label="忘记密码" name="name3">忘记密码</TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formLogin: {
        user: '',
        password: ''
      },
      formRegister: {
        user: '',
        password: '',
        mail: '',
        mobile: ''
      },
      ruleLogin: {
        user: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {type: 'string', min: 8, message: '密码不少于8位', trigger: 'blur'}
        ]
      },
      ruleRegister: {
        user: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', min: 8, message: '密码不少于8位', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { pattern: '^((17[0-9])|(16[6])|(14[5,7,9])|(13[0-9])|(15[^4,\\D])|(18[0-9])|(19[8,9]))\\d{8}$', message: '手机号格式不对', trigger: 'blur' }
        ],
        mail: [
          { required: false, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
    },
    handleReset () {
      this.formRegister = ''
    }
  }
}
</script>

<style scoped>
  .login{
    position: absolute;
  }
  .form_login{
    margin: auto;
    width:450px;
    height: 400px;
    top: 180px;
    left: 575px;
    position: absolute;
    border-radius: 15px;
    /*background: rgba(216,216,216,0.5);      !*设置form表单透明度*!*/
    background:white;
    opacity:0.4;
    text-align: center;
    overflow: hidden;
  }
  .form_login:hover{
    /*background:#e9eaec;*/
    top: 170px;
    opacity:0.9;
    /*background: rgba(230,230,216,0.5);*/
  }
  .tab {
    margin-top: 30px;
    left: 30px;
    width: 400px;
  }
  .formItem{
    width: 220px;
  }
</style>
