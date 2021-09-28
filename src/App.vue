<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Index />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" testMsg="test" /> -->
    <!-- <div>
      <div class="router-wrapper">
        <div>
          <router-link to="/foo">Go to Foo</router-link>
        </div>
        <div>
          <router-link to="/bar">Go to Bar</router-link>
        </div>
      </div>
      <div class="view-wrapper">
        <router-view></router-view>
      </div>
    </div> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Index from './components/index.vue'

export default {
  name: 'App',
  data() {
    return {
      test: 1
    }
  },
  computed: {
  },
  components: {
    // HelloWorld,
    Index
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  color: #333;
}
ul, li, ol {
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.router-wrapper {
  display: inline-block;
}
.view-wrapper {
  padding: 0 12px;
  display: inline-block;
  vertical-align: top;
}
</style>
