<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br>check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
        class="hello-a"
      >vue-cli documentation</a>.
    </p>
    <Button type="primary" size="small">1314</Button>
  </div>
</template>

<script>
import { Button } from 'vant';
export default {
  components: { Button },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="less">
h1 {
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

.hello {
  color: #f00;
  &-a {
    color: aqua;
  }
}
</style>
