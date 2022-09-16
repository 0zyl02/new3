<template>
  <div id="Nav">
    <nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="d-block mx-auto"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
        <line x1="9.69" y1="8" x2="21.17" y2="8" />
        <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
        <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
        <line x1="14.31" y1="16" x2="2.83" y2="16" />
        <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
      </svg>
      <router-link to="/" class="nav-system">Pizza点餐系统</router-link>

      <ul class="nav-1">
        <li>
          <router-link exact to="/">主页</router-link>
        </li>
        <li>
          <router-link exact to="/menu">菜单</router-link>
        </li>
        <li>
          <router-link exact to="/admin">管理</router-link>
        </li>
        <li>
          <router-link exact to="/personname">关于我们</router-link>
        </li>
      </ul>
      <ul class="nav-2">
        <li>
          <router-link exact to="login">登录</router-link>
        </li>
        <li>
          <router-link exact to="register">注册</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      black: false
    };
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
#Nav {
  width: 1100px;
  background: #f8f9fa;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 8px 16px;
}
.nav-system {
  font-size: 20px;
  margin-right: 16px;
  color: #000;
}
ul,
li {
  display: inline-block;
}
a {
  padding: 0 8px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
}
li a:hover {
  color: rgba(0, 0, 0, 0.7);
}
a:visited {
  color: rgba(0, 0, 0, 0.7);
}
.nav-1 {
  width: 300px;
}
.nav-2 {
  float: right;
  margin-top: 15px;
}
svg {
  font-size: 20px;
  color: #007bff;
  padding-top: 10px;
}
svg:hover {
  color: darkblue;
  cursor: pointer;
}
.router-link-active {
  color: black;
}
</style>