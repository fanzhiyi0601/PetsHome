<template>
  <Layout>
    <div slot="header" style="height: 200px">
      <Header></Header>
    </div>
    <div slot="body" style="height: 1450px">
      <div class="content">
        <div style="float: left;width: 800px; ">
          <div class="divide" style="height: 200px;border:2px solid #e9eaec">
            <br>
            <p style="margin-top: -3px">全部分类</p>
            <div class="type">
            <a style="margin-left: 22px" href="#">狗狗</a> |
            <a href="#">猫咪</a> |
            <a href="#">鸟</a> |
            <a href="#">乌龟</a> |
            <a href="#">其他</a>
            </div>
            <P1 style="width: 700px;"></P1>
            <br>
            <p style="">按体型分类</p>
            <div class="type">
              <CheckboxGroup style="margin-left: 20px; color: #2b85e4; font-size: 16px" v-model="searchPets.type">
                <Checkbox label="小型"></Checkbox>
                <Checkbox label="中型"></Checkbox>
                <Checkbox label="大型"></Checkbox>
              </CheckboxGroup>
            </div>
            <P1 style="width: 700px; margin-top: 5px"></P1>
            <br>
            <p style="">按毛形状</p>
            <div class="type">
              <CheckboxGroup style="margin-left: 20px; color: #2b85e4; font-size: 16px" v-model="searchPets.hair">
                <Checkbox label="长毛"></Checkbox>
                <Checkbox label="短毛"></Checkbox>
                <Checkbox label="卷毛"></Checkbox>
                <Checkbox label="无毛"></Checkbox>
              </CheckboxGroup>
            </div>
            <P1 style="width: 700px; margin-top: 5px"></P1>
            <br>
            <p style="">有无接种疫苗</p>
            <div class="type">
            <a style="margin-left: 22px" href="#">已接种</a> |
            <a href="#">未接种</a>
            </div>
            <P1 style="width: 700px; margin-top: 5px"></P1>
            <!--<div v-if="searchPets !== ''">-->
            <!--<Tag v-for="item in searchPets" :key="item" closable @on-close="handleClose" color="blue">{{item}}</Tag>-->
            <!--</div>-->
          </div>
          <div>
            <Row type="flex" justify="center" :gutter="10" align="top" class="code-row-bg">
              <Col span="6"><p>col-4</p></Col>
              <Col span="6"><p>col-4</p></Col>
              <Col span="6"><p>col-4</p></Col>
              <Col span="6"><p>col-4</p></Col>
            </Row>
            <Row type="flex" justify="center" :gutter="10" align="top" class="code-row-bg">
              <Col span="6"><p>col-4</p></Col>
              <Col span="6"><p>col-4</p></Col>
              <Col span="6"><p>col-4</p></Col>
              <Col span="6"><p>col-4</p></Col>
            </Row>
            <Row type="flex" justify="center" :gutter="10" align="top" class="code-row-bg">
              <Col span="6"><p>col-4</p></Col>
              <Col span="6"><p>col-4</p></Col>
              <Col span="6"><p>col-4</p></Col>
              <Col span="6"><p>col-4</p></Col>
            </Row>
            <Row type="flex" justify="center" :gutter="10" align="top" class="code-row-bg">
              <Col span="6"><p>col-4</p></Col>
              <Col span="6"><p>col-4</p></Col>
              <Col span="6"><p>col-4</p></Col>
              <Col span="6"><p>col-4</p></Col>
            </Row>
            <Row type="flex" justify="center" :gutter="10" align="top" class="code-row-bg">
              <Col span="6"><p>col-4</p></Col>
              <Col span="6"><p>col-4</p></Col>
              <Col span="6"><p>col-4</p></Col>
              <Col span="6"><p>col-4</p></Col>
            </Row>
          </div>
          <Page :total="total" show-total page-size="20" style="margin-top: 25px"></Page>
        </div>
        <div style="float: right;width: 250px">
          22222
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/BaseLayout'
import P1 from '@/components/component/DivideLine'
import Header from '@/components/pages/usual/Header'
export default {
  name: 'Display',
  components: {
    Layout,
    P1,
    Header
  },
  data () {
    return {
      total: '100',
      searchPets: {
        type: [],
        hair: []
      }
    }
  },
  methods: {
    submit () {
      alert(this.page)
    }
  }
}
</script>

<style scoped>
  .content{
    background: white;
    height: 1450px;
    width: 1050px;
    overflow: hidden;
    margin-left: 270px;
    margin-top: 1px;
    position: absolute;
  }
  .divide p{
    position: absolute;
    margin-left: 70px;
    font-family: 'Microsoft YaHei', serif;
    font-size: 16px;
    font-weight: bold;
  }
  .divide a {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 13px;
  }
  .type{
    margin-left: 200px;
    text-align: left;
  }
  .code-row-bg p {
    margin-top: 10px;
    background: aqua;
    height: 220px
  }
</style>
