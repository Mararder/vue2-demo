<template>
  <div>
    <div class="top-box">
      <div class="top-content content-main">
        <a href="#">欢迎登陆手机电影网</a>
        <ul>
          <li>
            <a href="#">设为主页</a>
          </li>
          <li>
            <a href="#">加入收藏</a>
          </li>
          <li>
            <a href="#">信息反馈</a>
          </li>
          <li>
            <a href="#">关于我们</a>
          </li>
          <li>
            <a href="#">广告服务</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="content-main index-main">
      <header>
        <div></div>
      </header>
      <nav>
        <a href="#" v-for="item in navItems" :key="item.title">{{item.title}}</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      navItems: [
      {
        title: '首页'
      },
      {
        title: '新闻'
      }
    ]
    }
  }
}
</script>

<style scoped>
.top-box {
  width: 100%;
  height: 35px;
  font-size: 12px;
  background: #f8f8f9;
}
.content-main {
  width: 980px;
  margin: 0 auto;
}
.top-box .top-content {  
  line-height: 35px;  
}
.top-box .top-content>a {
  float: left;
}
.top-box .top-content>ul {
  padding-top: 10px;
  overflow: hidden;
  float: right;
}
.top-box .top-content>ul>li {
  float: left;
  padding: 0 10px;
  height: 12px;
  line-height: 12px;
  border-right: 1px solid #333;
}
.top-box .top-content>ul>li:last-child {
  border: none;
}
.index-main {
  font-size: 12px;
  color: #333;
}
</style>
