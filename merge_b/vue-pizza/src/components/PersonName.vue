<template>
  <div class="hello">
    <div class="lis">
      <ul>
        <li @click="changeHistory" :class="{grey:history}">历史订单</li>
        <li @click="changePhone" :class="{grey:phone}">联系我们</li>
        <li @click="changeText" :class="{grey:text}">点餐文档</li>
        <li @click="changeExpress" :class="{grey:express}">快递信息</li>
      </ul>
    </div>
    <div class="show-detail">
      <div class="detail" v-show="history">
        <div>
          <p class="title">历史订单</p>
        </div>
        <div class="content">
          <h2>历史订单</h2>
          <p>11111@qq.com</p>
        </div>
      </div>
      <div class="detail" v-show="phone">
        <div>
          <p class="title">联系我们</p>
        </div>
        <div class="content">
          <h2>联系我们</h2>
          <p>11111@qq.com</p>
          <a href="#" @click.prevent="people=false">电话</a>&nbsp;&nbsp;
          <a href="#" @click.prevent="people=true">联系人</a>
          <h1 v-show="!people">11111</h1>
          <h1 v-show="people">小二</h1>
        </div>
      </div>
      <div class="detail" v-show="text">
        <div>
          <p class="title">点餐文档</p>
        </div>
        <div class="content">
          <h2>点餐文档</h2>
          <p>11111@qq.com</p>
        </div>
      </div>
      <div class="detail" v-show="express">
        <div>
          <p class="title">快递信息</p>
        </div>
        <div class="content">
          <h2>快递信息</h2>
          <p>11111@qq.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      history: false,
      phone: true,
      text: false,
      express: false,
      people: false
    };
  },
  methods: {
    changeHistory() {
      this.history = true;
      this.phone = false;
      this.text = false;
      this.express = false;
    },
    changePhone() {
      this.history = false;
      this.phone = true;
      this.text = false;
      this.express = false;
    },
    changeText() {
      this.history = false;
      this.phone = false;
      this.text = true;
      this.express = false;
    },
    changeExpress() {
      this.history = false;
      this.phone = false;
      this.text = false;
      this.express = true;
    }
  }
};
</script>

<style scoped>
.hello {
  width: 1100px;
  margin: 0 auto;
  overflow: hidden;
}
ul {
  list-style-type: none;
  width: 400px;
  padding: 0;
}
ul li {
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 25px;
  margin: 20px;
  margin-left: 0;
  border-radius: 5px;
}
.lis {
  float: left;
}
.show-detail {
  width: 400px;
  float: left;
}
.detail {
  border: 1px solid gainsboro;
  background-color: rgba(0, 0, 0, 0.02);
  width: 650px;
  margin: 20px 30px;
  box-sizing: border-box;
  border-radius: 5px;
}

.title {
  background: rgba(0, 0, 0, 0.05);
  padding: 15px 0 15px 30px;
  border-bottom: 1px solid gainsboro;
}
.content {
  margin: 20px 0 30px 20px;
}
.content p {
  margin: 10px 0;
}
h2 {
  font-weight: 200;
}
ul li {
  cursor: pointer;
}
ul li:hover {
  background: rgba(0, 0, 0, 0.01);
}
a {
  color: #007bff;
  text-decoration: none;
}
a:hover {
  color: darkblue;
  text-decoration: underline;
}
h1 {
  font-size: 40px;
  font-weight: 400;
  margin-left: 50px;
  margin: 40px 50px;
}
.grey {
  background: rgba(0, 0, 0, 0.03);
}
</style>
