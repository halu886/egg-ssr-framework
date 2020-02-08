<template>
  <div id="app">
      <main-header></main-header>
      <div class="root">
          <div class="overview">
              <div class="main-show">SHOW</div>
              <div class="vices">
                  <div>recommend</div>
                  <div>recommend</div>
                  <div>recommend</div>
                  <div>recommend</div>
              </div>
          </div>
      </div>
      <main-footer></main-footer>
  </div>
</template>

<style lang="less">
#app{
  min-height: 100vh;
}
.root{
  padding: 20px 200px;   
  .overview{
    border: 1px solid grey;
    position: relative;
    text-align: center;
    padding-left: 400px;
    .main-show{
      position: absolute;
      left: 0;
      top: 0;
      width: 400px;
      line-height: 400px;
      background: green;
      display: inline-block;
    }
    .vices{
      display: inline-block;
      width: 200px;
      &>div{
        width: 200px;
        line-height: 100px;
        background: red;
      }
    }
  }
}
</style>

<script>
import mainHeader from "../components/mainHeader/index.vue";
import mainFooter from "../components/mainFooter/index.vue";
export default {
   components:{
       mainHeader,
       mainFooter
   } 
}
</script>