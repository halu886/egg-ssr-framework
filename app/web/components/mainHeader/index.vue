<template>
  <div class="main-header">
    <div v-for="(h,$key) in top" :key="$key">{{h}}</div>
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
  computed: { ...mapState(["top"]) },
  asyncData(store, router, context) {
    return store.dispatch("updateTop", context);
  }
};
</script>
