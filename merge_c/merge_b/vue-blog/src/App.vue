<template>
  <div id="app">
    <Header />
    <!-- <AddBlog /> -->
    <!-- <ShowBlogs /> -->
    <!-- <ListBlogs /> -->
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import Header from "./components/Header";

// import ListBlogs from "./components/ListBlogs";
// import ShowBlogs from "./components/ShowBlogs";
// import AddBlog from "./components/AddBlog";
export default {
  name: "App",
  components: {
    // ShowBlogs,
    // AddBlog
    // ListBlogs
    Header
  }
};
</script>

<style>
</style>
