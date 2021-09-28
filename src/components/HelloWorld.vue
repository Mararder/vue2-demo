<template>
  <div class="hello">
    <span>{{ testMsg }}-{{appName}}</span>
    <p>
      <el-button type="primary" size="small" v-on:click="reverseTestMsg">点击</el-button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      appName: "hello"
    }
  },
  methods: {
    reverseTestMsg: function () {
      this.$props.testMsg = this.$props.testMsg.split('').reverse().join('');
      this.appName = this.appName.split('').reverse().join('');
    }
  },
  props: {
    msg: String,
    testMsg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
