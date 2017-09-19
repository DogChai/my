<template>
<div class="show">
  <div class="show-wrap">
    <div class="show-demo">
      <div class="demo-top">
        <a class="demos">
          <span class="ico-line"></span>
          <span class="ico-span"><a href="http://lesses.me/demo" target='_blank'></a><i class="icono-home"></i></span>
        </a>
        <span class="demo-type">Jquery</span>/天气查询+轮播
      </div>
      <div class="demo-wrap">
        使用聚合API+Ajax得到实时的天气数据;
        jquery实现的简单轮播
      </div>
    </div>
    <div class="show-demo">
      <div class="demo-top">
        <a class="demos">
          <span class="ico-line"></span>
          <span class="ico-span"><a href="http://lesses.me/mydemo" target='_blank'></a><i class="icono-home"></i></span>
        </a>
        <span class="demo-type">js+css</span>/小页面合集
      </div>
      <div class="demo-wrap">
        轮播+仿官网主页+canvas绘图工具+加载页面效果+无延迟切换
      </div>
    </div>
    <div class="show-demo">
      <div class="demo-top">
        <a class="demos">
					<span class="ico-line"></span>
					<span class="ico-span"><a href="http://lesses.me/my/fish" target='_blank'></a><i class="icono-home"></i></span>
				</a>
        <span class="demo-type">canvas</span>/爱心小鱼
      </div>
      <div class="demo-wrap">
        使用Canvas绘图API + JavaScript面向对象的编程方式所制作 使用序列帧动画控制+碰撞检测
      </div>
    </div>
    <div class="show-demo">
      <div class="demo-top">
        <a class="demos">
					<span class="ico-line"></span>
					<span class="ico-span"><a href="http://lesses.me/my/five" target='_blank'></a><i class="icono-home"></i></span>
				</a>
        <span class="demo-type">canvas</span>/五子棋大战
      </div>
      <div class="demo-wrap">
        使用Canvas绘图API制作 添加电脑AI，运用了赢法统计数组和胜负判断方法
      </div>
    </div>
    <div class="show-demo">
      <div class="demo-top">
        <a class="demos">
					<span class="ico-line"></span>
					<span class="ico-span"><a href="http://lesses.me/my/move" target='_blank'></a><i class="icono-home"></i></span>
				</a>
        <span class="demo-type">JavaScript</span>/会动的小方块
      </div>
      <div class="demo-wrap">
        使用table+dom操作， 随机生成色块， 控制方块前进， 或者自动前进
      </div>
    </div>
    <div class="show-demo">
      <div class="demo-top">
        <a class="demos">
					<span class="ico-line"></span>
					<span class="ico-span"><a href="http://lesses.me/my/xiaomibuy" target='_blank'></a><i class="icono-home"></i></span>
				</a>
        <span class="demo-type">HTML</span>/商城购物界面
      </div>
      <div class="demo-wrap">
        使用div+css布局， 操作dom添加或删除元素， 从而达到目的
      </div>
    </div>
    <div class="show-demo">
      <div class="demo-top">
        <a class="demos">
					<span class="ico-line"></span>
					<span class="ico-span"><a href="http://lesses.me/my/sz" target='_blank'></a><i class="icono-home"></i></span>
				</a>
        <span class="demo-type">HTML</span>/盛妆主页
      </div>
      <div class="demo-wrap">
        使用div+css布局， 使用jq制作轮播图
      </div>
    </div>
    <div class="show-demo">
      <div class="demo-top">
        <a class="demos">
					<span class="ico-line"></span>
					<span class="ico-span"><a href="http://lesses.me/my/input" target='_blank'></a><i class="icono-home"></i></span>
				</a>
        <span class="demo-type">JavaScript</span>/表单验证
      </div>
      <div class="demo-wrap">
        value+json进行判断,返回对应数据
      </div>
    </div>
    <div class="show-demo">
      <div class="demo-top">
        <a class="demos">
					<span class="ico-line"></span>
					<span class="ico-span"><a href="http://lesses.me/my/for" target='_blank'></a><i class="icono-home"></i></span>
				</a>
        <span class="demo-type">JavaScript</span>/遍历元素
      </div>
      <div class="demo-wrap">
        基本的遍历元素方法 为我们展示遍历是如何进行的
      </div>
    </div>
    <div class="show-demo">
      <div class="demo-top">
        <a class="demos">
					<span class="ico-line"></span>
					<span class="ico-span"><a href="http://lesses.me/my/lucky" target='_blank'></a><i class="icono-home"></i></span>
				</a>
        <span class="demo-type">JavaScript</span>/抽奖
      </div>
      <div class="demo-wrap">
        使用随机数+setInertval来实现， 目前版本仍有bug
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
export default {
  methods() {

  }
}
</script>

<style type="text/css">
@import '../style/ico.min.css';
</style>
<style type="text/css">
.show {
  font-family: '楷体';
  width: 100%;
  height: 100%;
  color: white;
  font-size: 50px;
  text-align: center;
  /*background: rgba(255,255,255,0.2);*/
  position: relative;
}

.show-wrap {
  width: 1160px;
  height: 70%;
  /*background: rgba(255, 255, 255, 0.5);*/
  margin: 20px auto;
}

.show-demo {
  width: 210px;
  height: 220px;
  background: rgba(255,255,255,0.6);
  border-radius: 5px;
  position: relative;
  float: left;
  margin-right: 20px;
  margin-top: 60px;
  /* margin-left: 30px; */
  overflow: hidden;
  transition: all .3s;
}

.show-demo:hover {
  background: rgba(255,255,255,0.9);
}

.show-demo:hover .demos {
  opacity: 1;
}

.show-demo:hover .demo-top {
	/*color:white;*/
}

.show-demo:hover .ico-span {
  transform: translate(0,113px);
}

.show-demo:hover .ico-line {
  transform: translate(0,0);
}

.demos {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.8);
  transition: all .3s;
  opacity: 0;
}

.ico-span {
  position: absolute;
  left: 50%;
  /* top: -20px; */
  margin-left: -27px;
  margin-top: -31px;
  transform: translate(0,-20px);
  padding: 5px;
  display: inline-block;
  border: 2px solid white;
  border-radius: 50%;
  transition: all .3s;
}

.ico-span>a {
  position: absolute;
  top:0;
  left:0;
  right: 0;
  bottom:0;
}

.ico-span:hover {
  background: rgba(255, 255, 255, 0.5);
}

.ico-line {
  position: absolute;
  display: block;
  height: 84px;
  width: 2px;
  background: white;
  left: 50%;
  margin-left: -2px;
  border-radius: 2px;
  /* top: -134px; */
  transform: translate(0,-134px);
  transition: all .3s;
}

.icono-home {
  margin-bottom: 5px;
  margin-left: 8px;
  margin-right: 8px;
}


.show-demo .demo-type {
  font-size: 18px;
  line-height: 38px;
  padding-left: 6px;
}

.show-demo .demo-top {
  width: 100%;
  height: 22%;
  font-size: 16px;
  color: rgb(0,0,0);
  text-align: left;
  padding-left: 2px;
  box-sizing: border-box;
  padding-top: 2%;
  border-radius: 5px 5px 0 0;
  font-family: '楷体';
  opacity: 0.8;
}

.show-demo:nth-child(1) .demo-top {
  background: url('http://ofuxn0fz8.bkt.clouddn.com/demo1.png');
}

.show-demo:nth-child(2) .demo-top {
  background: url('http://ofuxn0fz8.bkt.clouddn.com/demo2.png');
}

.show-demo:nth-child(3) .demo-top {
  background: url('http://ofuxn0fz8.bkt.clouddn.com/demo3.png');
}

.show-demo:nth-child(4) .demo-top {
  background: url('http://ofuxn0fz8.bkt.clouddn.com/demo4.png');
}

.show-demo:nth-child(5) .demo-top {
  background: url('http://ofuxn0fz8.bkt.clouddn.com/demo5.png');
}

.show-demo:nth-child(6) .demo-top {
  background: url('http://ofuxn0fz8.bkt.clouddn.com/demo6.png');
}

.show-demo:nth-child(7) .demo-top {
  background: url('http://ofuxn0fz8.bkt.clouddn.com/demo7.png');
}

.show-demo:nth-child(8) .demo-top {
  background: url('http://ofuxn0fz8.bkt.clouddn.com/demo8.png');
}

.show-demo:nth-child(9) .demo-top {
  background: url('http://ofuxn0fz8.bkt.clouddn.com/demo3.png');
}

.show-demo:nth-child(10) .demo-top {
  background: url('http://ofuxn0fz8.bkt.clouddn.com/demo6.png');
}


.demo-wrap {
  width: 100%;
  height: 78%;
  box-sizing: border-box;
  padding: 5% 5%;
  color: black;
  font-size: 20px;
}
</style>
