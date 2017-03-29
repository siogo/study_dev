<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab test">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <hr class="hr">
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'

  export default {
    components:{
      'v-header':header
    }
  }
</script>

<style>
  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: relative;
  }
  .hr{
    margin: 0;
    padding: 0;
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-top: 1px solid rgba(7,17,27,0.1);
  }
  @media (-webkit-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5){
    .hr::after{
      -webkit-transform: scaleY(0.7);
      transform: scaleY(0.7);
    }
  }
  @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){
    .hr::after{
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }
  .tab-item{
    flex: 1;
    text-align: center;
  }


</style>
