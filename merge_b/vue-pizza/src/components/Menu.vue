<template>
  <div class="hello">
    <div class="left">
      <table>
        <thead>
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="(pizza,index) in menu" :key="index">
          <th colspan="3">{{pizza.variety}}</th>
          <tr v-if="pizza.priceone&&pizza.sizeone">
            <td>{{pizza.sizeone}}</td>
            <td>{{pizza.priceone}}</td>
            <td>
              <button @click="orderSizeone(pizza)">+</button>
            </td>
          </tr>
          <tr v-if="pizza.sizetwo&&pizza.pricetwo">
            <td>{{pizza.sizetwo}}</td>
            <td>{{pizza.pricetwo}}</td>
            <td>
              <button @click="orderSizetwo(pizza)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="right">
      <p v-show="!isOrder">购物车没有任何商品</p>
      <table v-show="isOrder">
        <thead>
          <tr>
            <th>数量</th>
            <th>品种(尺寸)</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order,index) in orderMenu" :key="index">
            <td>
              <button @click="decrement(order)">-</button>
              {{order.ordercount}}
              <button @click="order.ordercount++">+</button>
            </td>
            <td>{{order.orderType}}({{order.ordersize}})</td>
            <td>{{order.orderprice*order.ordercount}}</td>
          </tr>
        </tbody>
        <td colspan="3" id="price">总价：{{computetotal}}RMB</td>
      </table>
      <button v-show="isOrder" id="sub">提交</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Menu",
  data() {
    return {
      isOrder: false,
      pizza: {},
      orderMenu: []
    };
  },
  computed: {
    ...mapGetters(["menu"]),
    computetotal() {
      let total = 0;
      for (let index in this.orderMenu) {
        let orderpizza = this.orderMenu[index];
        total += orderpizza.orderprice * orderpizza.ordercount;
      }
      return total;
    }
  },
  methods: {
    orderSizeone(pizza) {
      this.isOrder = true;
      let orderpizza = {
        orderType: pizza.variety,
        orderprice: pizza.priceone,
        ordersize: pizza.sizeone,
        ordercount: 1
      };
      if (this.orderMenu.length > 0) {
        // 过滤
        let result = this.orderMenu.filter(orderpizza => {
          return (
            orderpizza.orderType === pizza.variety &&
            orderpizza.orderprice === pizza.priceone
          );
        });

        if (result != null && result.length > 0) {
          result[0].ordercount++;
        } else {
          this.orderMenu.push(orderpizza);
        }
      } else {
        this.orderMenu.push(orderpizza);
      }
      console.log(this.orderMenu);
    },
    orderSizetwo(pizza) {
      this.isOrder = true;
      let orderpizza = {
        orderType: pizza.variety,
        orderprice: pizza.pricetwo,
        ordersize: pizza.sizetwo,
        ordercount: 1
      };
      if (this.orderMenu.length > 0) {
        // 过滤
        let result = this.orderMenu.filter(orderpizza => {
          return (
            orderpizza.orderType === pizza.variety &&
            orderpizza.orderprice === pizza.pricetwo
          );
        });

        if (result != null && result.length > 0) {
          result[0].ordercount++;
        } else {
          this.orderMenu.push(orderpizza);
        }
      } else {
        this.orderMenu.push(orderpizza);
      }
      console.log(this.orderMenu);
    },

    getPizza() {
      this.$axios.get("0menu0.json").then(res => {
        // console.log(res.data);
        this.pizza = res.data;
        this.$store.dispatch("setMenuAsync", this.pizza);
      });
    },
    decrement(order) {
      order.ordercount--;
      if (order.ordercount == 0) {
        this.orderMenu.splice(this.orderMenu.indexOf(order), 1);
        console.log(this.orderMenu);
      }
      if (this.orderMenu.length == 0) {
        this.isOrder = false;
      }
    }
  },
  created() {
    this.getPizza();
  }
};
</script>

<style scoped>
.hello {
  width: 1100px;
  margin: 0 auto;
  overflow: hidden;
}
table {
  border-collapse: collapse;
}
.left th,
.left td {
  padding: 20px;
  width: 240px;
  box-sizing: border-box;
  text-align: left;
  border-top: 1px solid gainsboro;
}

tbody th {
  border-top: 2px solid gainsboro;
}
.left {
  float: left;
}
.left button {
  border: 1px solid #28a745;
  color: #28a745;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
}
.left button:hover {
  color: white;
  background-color: #28a745;
}

.right {
  width: 330px;
  margin-left: 20px;
  float: right;
}
.right #sub {
  width: 310px;
  background-color: #28a745;
  color: aliceblue;
  border-radius: 3px;
  padding: 10px;
  margin: 10px auto;
}
.right th {
  padding: 10px;
  width: 110px;
  box-sizing: border-box;
  border-top: 1px solid gainsboro;
  text-align: left;
}
.right td {
  border-top: 2px solid gainsboro;
  padding: 10px;
  box-sizing: border-box;
}
#price {
  border: none;
}
.right tbody button {
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 5px;
}
</style>
