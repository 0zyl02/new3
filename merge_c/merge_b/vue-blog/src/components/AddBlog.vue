<template>
  <div id="add-blog">
    <h2>添加新的博客</h2>
    <!-- 写博客 -->
    <form v-if="!submitted">
      <label>博客标题</label>
      <!-- 懒加载 .lazy  并不进行实时切换，等进行完后移开点击才切换 -->
      <input type="text" v-model.lazy="blog.title" required />
      <label>博客内容</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <!-- 分类 -->
      <div id="checkboxes">
        <label>VUe.js</label>
        <input type="checkbox" value="vue" v-model="blog.categories" />
        <label>Reate.js</label>
        <input type="checkbox" value="Reate" v-model="blog.categories" />
        <label>Angular.js</label>
        <input type="checkbox" value="Angular" v-model="blog.categories" />
        <label>WeChat</label>
        <input type="checkbox" value="WeChat" v-model="blog.categories" />
      </div>
      <!-- 选项 -->
      <label>作者：</label>
      <select v-model="blog.author">
          <option v-for="(author,index) in authors" :key="index">{{author}}</option>
      </select>
    <hr>
    <!-- 数据请求 -->
    <button @click.prevent="handlePost">添加博客</button>

    </form>
    <div v-if="submitted">
      <h3>您的博客已经添加成功。。。</h3>
    </div>
    <!-- 预览 -->
    <div id="preview">
      <h3>博客预览</h3>
      <p>标题预览:{{blog.title}}</p>
      <p>内容预览:{{blog.content}}</p>
      <p>技术分类
          <ul>
              <li v-for="(categorie,index) in blog.categories" :key="index">{{categorie}}</li>
          </ul>
      </p>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
// 组件内引用
// import axios from "axios";
export default {
  name: "AddBlog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author:"佩奇"
      },
      authors:["佩奇","苏西","乔治"],
      submitted:false
    };
  },
  methods:{
    handlePost(){
      // console.log(this.blog);
      // const self=this
      // promise三个对象  请求之后成功，请求中，请求失败，then请求成功
      this.$axios.post("/posts",{
        title:this.blog.title,
        body:this.blog.content,
        userId:1
      // }).then(function(res){
      }).then(res=>{
        // console.log(res)

        // 使用function函数，this指向会变，在使用之前，定义this,箭头函数不会
        // self.submitted=true
        this.submitted=true
      })
    }
  }
};
</script>
<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px solid #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
}
#checkboxes label {
  display: inline-block;
  margin-left: 10px;
}
</style>
