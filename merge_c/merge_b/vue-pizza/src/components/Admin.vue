<template>
  <div class="hello">
    <div class="left">
      <form @submit.prevent="handleSubmit">
        <h1>添加新的Pizza</h1>
        <div class="one-row">
          <label for>品种</label>
          <input type="text" v-model="newpizza.variety" />
        </div>
        <div class="one-row">
          <label for class="describe">描述</label>
          <textarea v-model="newpizza.description"></textarea>
        </div>
        <h4>选项1</h4>
        <div class="one-row">
          <label for>尺寸</label>
          <input type="text" v-model="newpizza.sizeone" />
        </div>
        <div class="one-row">
          <label for>价格</label>
          <input type="text" v-model="newpizza.priceone" />
        </div>
        <h4>选项2</h4>
        <div class="one-row">
          <label for>尺寸</label>
          <input type="text" v-model="newpizza.sizetwo" />
        </div>
        <div class="one-row">
          <label for>价格</label>
          <input type="text" v-model="newpizza.pricetwo" />
        </div>
        <!-- <input type="submit" value="添加" /> -->
        <button>添加</button>
      </form>
    </div>
    <div class="right">
      <h1>菜单</h1>
      <table>
        <thead>
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pizza,index) in menu" :key="index">
            <td>{{pizza.variety}}</td>
            <td>
              <button @click="deletePizza(index)">x</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Menu",
  data() {
    return {
      newpizza: {
        variety: "",
        description: "",
        sizeone: "",
        priceone: "",
        sizetwo: "",
        pricetwo: "",
        pizza: {}
      }
    };
  },
  computed: mapGetters(["menu"]),
  methods: {
    handleSubmit() {
      this.$axios
        .post("0menu0.json", this.newpizza)
        .then(res => {
          console.log("add success");
          this.getPizza();
        })
        .catch(err => {
          console.log(err);
        });
    },
    getPizza() {
      this.$axios.get("0menu0.json").then(res => {
        // console.log(res.data);
        this.$store.dispatch("setMenuAsync", res.data);
      });
    },
    deletePizza(index) {
      this.$axios
        .delete(`0menu0/${index}.json`)
        .then(res => {
          console.log("delete success", res);
          this.getPizza();
        })
        .catch(err => {
          console.log("err", err);
        });
    }
  },
  created() {
    this.getPizza();
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.hello {
  width: 1200px;
  margin: 20px 200px;
  overflow: hidden;
}
h1 {
  color: #6c757d;
  font-weight: 400;
  font-size: 28px;
  margin-top: 20px;
  margin-bottom: 40px;
}
.left {
  float: left;
  width: 700px;
}
.left input {
  width: 88%;
  height: 25px;
  margin: 8px;
  padding: 6px;
  border: 1px solid #ced4da;
  border-radius: 5px;
}
textarea {
  margin: 5px;
  padding: 5px;
  box-sizing: border-box;
  width: 90%;
  height: 120px;
  border-radius: 5px;
  border: 1px solid #ced4da;
}
button {
  width: 100%;
  height: 40px;
  background: #28a745;
  border: #28a745 1px solid;
  color: aliceblue;
  border-radius: 5px;
  margin-top: 10px;
}
.describe {
  float: left;
}
label {
  margin-right: 20px;
}
h4 {
  margin: 10px 0;
}
.right h1 {
  font-weight: 400;
  font-size: 28px;
  margin-bottom: 45px;
  color: #6c757d;
}
.right {
  float: right;
  width: 400px;
  margin-right: 60px;
}
.right table {
  border-collapse: collapse;
}
.right table th,
table td {
  padding: 15px 20px;
  width: 150px;
  border-bottom: 2px solid #dee2e6;
}
.right table thead th {
  border-top: 1px solid #dee2e6;
  text-align: left;
}
.right table button {
  color: #dc3545;
  border: #dc3545 1px solid;
  background-color: transparent;
  padding: 5px 10px;
}
</style>
