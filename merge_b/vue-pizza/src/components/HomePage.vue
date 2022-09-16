<template>
  <div id="HomePage">
    <div class="welcome">
      <h1>欢迎大家品尝pizza!</h1>
      <h2>这里有你非常喜欢的pizza!</h2>
      <router-link to="/menu">
        <button class="orderBtn">Let's order!</button>
      </router-link>
    </div>

    <div class="three">
      <div class="three-1">
        <div class="title">点餐文档</div>
        <div class="content">
          <h3>点餐文档</h3>
          <p>11111@qq.com</p>
        </div>
      </div>
      <div class="three-1">
        <div class="title">快递信息</div>
        <div class="content">
          <h3>快递信息</h3>
          <p>11111@qq.com</p>
        </div>
      </div>
      <div class="three-1">
        <div class="title">历史订单</div>
        <div class="content">
          <h3>历史订单</h3>
          <p>11111@qq.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
#HomePage {
  background: url("../assets/img/pizza.b587e39.jpg");
  max-width: 850px;
  height: 330px;
  padding: 10%;
  margin: 0px auto;
}
.welcome {
  height: 300px;
  background: #eee;
  opacity: 0.8;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
}
.welcome h1,
h2 {
  line-height: 100px;
  margin: 0 auto;
  color: #212529;
}
h1 {
  margin-top: 20px;
  font-size: 40px;
  font-weight: 200;
}
h2 {
  font-size: 30px;
  font-weight: 200;
}
.orderBtn {
  background: #28a745;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  line-height: 35px;
  margin-top: 20px;
  width: 100px;
}
.three {
  width: 1150px;
  display: flex;
}
.three-1 {
  width: 380px;
  background: #f8f9fa;
  border: 1px solid #6c757d;
  border-radius: 10px;
  margin: 165px 30px 20px 0;
  position: relative;
  border: 1px solid #ced4da;
  left: -140px;
}
.title {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #ced4da;
  padding: 15px 20px;
}
.content {
  margin: 20px 20px;
}
.content h3 {
  font-size: 25px;
  font-weight: 300;
}
.content p {
  margin-top: 10px;
}
</style>