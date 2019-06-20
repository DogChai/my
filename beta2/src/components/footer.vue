<template>
  <div class="footer">
    <div class="footer-wrap">
      <div class="footer-left">
          © 2017 Lesses
      </div>
      <div class="footer-right">
          <a href="##">index</a> By <a href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .footer {
    width:100%;
    height:30px;
    position: fixed;
    bottom:0;
    left:0;
    background: rgba(0,0,0,0);
  }

.footer-wrap {
  width: 260px;
  height: 100%;
  float: right;
}

  .footer-left {
    color: white;
    font-size: 12px;
    font-family: 'Menlo,Monaco,Andale Mono,lucida console,Courier New,monospace';
    line-height: 30px;
    color: rgba(156, 156, 156, 0.7);
    float: left;
  }

  .footer-right {
    font-size: 12px;
    line-height: 30px;
    float: right;
    color: rgba(156, 156, 156, 0.7);
    margin-right: 15px;
  }

  .footer-right a {
    font-size: 12px;
    line-height: 30px;
    color: rgba(156, 156, 156, 0.7);
    font-family: 'Menlo,Monaco,Andale Mono,lucida console,Courier New,monospace';
  }
</style>
