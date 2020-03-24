<template>
  <div class="main-header">
    <div v-for="(h,$key) in headers" :key="$key">{{h}}</div>
    <!-- <div>{{ root.headers[0] }}</div>
    <div>{{ .headers[1] }}</div>
    <div>{{ $root.headers[2] }}</div>
    <div>{{ $root.headers[3] }}</div>-->
  </div>
</template>
<style lang="less">
.main-header {
  padding: 10px;
  & > div {
    display: inline-block;
    width: 200px;
    line-height: 40px;
    background: red;
    text-align: center;

    &:nth-child(n + 3),
    &:nth-child(n + 4) {
      float: right;
    }
  }
}
</style>
<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState(["recommend"]) },
  asyncData(store, router, context) {
    return store.dispatch("updateTop", context);
  }
};
</script>
