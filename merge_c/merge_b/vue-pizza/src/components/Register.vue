<template>
  <div class="register">
    <img src="../assets/img/icon.c43f32c.png" alt />
    <form @submit.prevent="handleSubmit">
      <label for>邮箱</label>
      <input type="text" v-model="newUser.email" />
      <label for>密码</label>
      <input type="password" v-model="newUser.password" />
      <label for>确认密码</label>
      <input type="password" v-model="newUser.password2" />
      <input type="submit" value="注册" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      newUser: {
        email: "",
        password: "",
        password2: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      if (this.newUser.password === this.newUser.password2) {
        this.$axios
          .post("users.json", this.newUser)
          .then(res => {
            console.log("successful", res);
            console.log("success", res.data);
            this.$router.push("./login");
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        alert("密码与确认密码不匹配！！");
      }
    }
  }
};
</script>

<style scoped>
.register {
  width: 1100px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px;
  margin: 10px auto;
}
.register img {
  margin: 0 400px;
}
.register input {
  width: 100%;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 10px 0 20px;
  border-radius: 5px;
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
