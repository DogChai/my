<template>
  <div id="app">
    <vueheader></vueheader>
    <vuemusic></vuemusic>
    <transition :name='tabAnimation'>
      <router-view class='tab-view'></router-view>
    </transition>
    <div class="v-btn">
      <ul>
        <li><router-link :to="{path:'home'}"></router-link></li>
        <li><router-link :to="{path:'skill'}"></router-link></li>
        <li><router-link :to="{path:'show'}"></router-link></li>
        <li><router-link :to="{path:'hobby'}"></router-link></li>
        <li><router-link :to="{path:'contact'}"></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import vueheader from './components/header.vue'
import vuemusic from './components/music.vue'
export default {
  components: {
    vueheader,
    vuemusic
  },
  data() {
    return {
      bodyHeight: window.innerHeight + 'px',
      bodyWidth: window.innerWidths + 'px',
      tabAnimation:'slide-left'
    }
  },
  mounted() {
    const that = this;
    window.onresize = function temp1() {
        that.bodyHeight = window.innerHeight;
        that.bodyWidth = window.innerWidth;
        document.getElementsByTagName('body')[0].style.height = that.bodyHeight + 'px';
        document.getElementsByTagName('body')[0].style.width = that.bodyWidth + 'px';
    }
  },
  methods: {
  },
  watch: {
    '$route' (to,from) {
      if(to.path == '') {
        this.tabAnimation = 'slide-right'
      }else {
        this.tabAnimation = 'slide-left'
      }
    }
  }
}
</script>


<style type="text/css">
  @import './style/reset.css';
  @import './style/router.css';
  @import './style/media.css';
</style>
<style type="text/css">
  body {
    font-family: 'KaiTi';
    height: 100%;
    width: 100%;
    background: url('http://ogm5at7ve.bkt.clouddn.com/bg2.jpg') no-repeat;
    background-size: cover;
    overflow-y: hidden;
    overflow-x: hidden;
    position: relative;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  .v-btn {
    position: fixed;
    bottom: 30px;
    width: 360px;
    height: 18px;
    left: 50%;
    margin-left: -180px;
     /*background: rgba(255,255,255,0.5);*/
  }

  .v-btn ul li {
    float: left;
    width: 56px;
    height: 7px;
    background: rgba(255,255,255,0.3);
    margin: 5px 8px ;
    border-radius: 5px;
  }

  .v-btn ul li a {
    width: 56px;
    height: 7px;
    display: block;
    transition: all .3s;
    border-radius: 5px;
  }

  .tab-view {
    position: absolute;
    transition: all .6s cubic-bezier(.55,0,.1,1);
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100px, 0);
    transform: translate(100px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100px, 0);
    transform: translate(-100px, 0);
  }
</style>
