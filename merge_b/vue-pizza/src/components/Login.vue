<template>
  <div class="login">
    <img src="../assets/img/icon.c43f32c.png" alt />
    <form @submit.prevent="handleSubmit">
      <label for>邮箱</label>
      <input type="text" v-model="user.email" />
      <label for>密码</label>
      <input type="password" v-model="user.password" />
      <input type="submit" value="登陆" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$axios
        .get("users.json", this.user)
        .then(res => {
          console.log("successful", res);
          var loginUsers = [];
          for (let i in res.data) {
            loginUsers.push(res.data[i]);
          }
          console.log(loginUsers);
          if (
            loginUsers.filter(
              item =>
                item.email === this.user.email &&
                item.password === this.user.password
            ) == ""
          ) {
            alert("账号或密码错误");
          } else {
            console.log("成功");
            localStorage.setItem("user", this.user.email);
            this.$router.push("./");
            this.$store.dispatch("setIsLoginAsync", true);
            this.$store.dispatch("setUserAsync", this.user);
          }
        })
        .catch(err => {
          console.log("err=", err);
        });
    }
  }
};
</script>

<style scoped>
.login {
  width: 1100px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px;
  margin: 10px auto;
}
.login img {
  margin: 0 400px;
}
.login input {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 10px 0 20px;
  box-sizing: border-box;
  padding: 8px;
}
input[type="submit"] {
  width: 100%;
  height: 40px;
  background-color: #28a745;
  border-color: #28a745;
  color: white;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
}
</style>
