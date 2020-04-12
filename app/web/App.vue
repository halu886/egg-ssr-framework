<template>
  <div class="root">
    <router-view></router-view>
    <div class="links">
      <div>
        <router-link to="top">Go to Top</router-link>
      </div>
      <div>
        <router-link to="bottom">Go to Bottom</router-link>
      </div>
    </div>
    <div class="overview">
      <div class="main-show">SHOW</div>
      <div class="vices">
        <div v-for="(r,$index) in recommend" :key="$index">{{r}}</div>
      </div>
    </div>
    <!-- <main-footer></main-footer> -->
  </div>
</template>

<style lang="less">
#app {
  min-height: 100vh;
}
.root {
  padding: 20px 200px;
  .links{
    &>div{
      display: inline-block;
      font-size: 18px;
      line-height: 40px;
      padding: 0 20px;
    }
  }
  .overview {
    border: 1px solid grey;
    position: relative;
    text-align: center;
    padding-left: 400px;
    .main-show {
      position: absolute;
      left: 0;
      top: 0;
      width: 400px;
      line-height: 400px;
      background: green;
      display: inline-block;
    }
    .vices {
      display: inline-block;
      width: 200px;
      & > div {
        width: 200px;
        line-height: 100px;
        background: red;
      }
    }
  }
}
</style>

<script>
import { mapState } from "vuex";

export default {
  computed: { ...mapState(["recommend"]) },
  asyncData(store, router, context) {
    return store.dispatch("updateRecommend", context);
  }
};
</script>