<template>
	<div class="header">
		<div class="container">
			<div class="header-left">
				<img src="../assets/logo.png" class="header-logo">
				<div class="header-text">
					<h1>Lesses</h1>
					<span></span>
					<h1>Resume</h1>
				</div>
			</div>
			<div class="header-right">
				<ul>
					<li><router-link :to="{path:'home'}">主页</router-link></li>
					<li><router-link :to="{path:'skill'}">技能</router-link></li>
					<li><router-link :to="{path:'show'}">作品</router-link></li>
					<li><router-link :to="{path:'hobby'}">爱好</router-link></li>
					<li><router-link :to="{path:'contact'}">联系我</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>


<script>
	export default {

	}
</script>

<style type="text/css">
	.header {
		font-family: '楷体';
		width: 100%;
		height: 65px;
		background: rgba(255,255,255,0);
	}

	.container {
		width: 1280px;
		height: 60px;
		margin: 0 auto;
	}

	.header-left {
		width: 150px;
		height: 60px;
		float: left;
		line-height: 60px;
	}

	.header-left img {
		width: 55px;
		height: 55px;
		display: block;
		border-radius: 50%;
		float: left;
		margin-top: 4px;
		transition: all .5s;
		cursor: pointer;
	}

	.header-text {
		float: left;
		width: 90px;
		height: 60px;
		margin-left: 5px;
		position: relative;
		font-family: 'Micorsoft YaHei';
	}

	.header-text h1{
		font-size: 18px;
		font-weight: 200;
		line-height: 18px;
		position: absolute;
		cursor: pointer;
		color: lightblue;
		transition: all .3s;
		font-family: 微软雅黑,-webkit-pictograph;
	}

	.header-text h1:hover {
		color:white;
		text-shadow:0 0 0 black,0 0 0 black;
	}

	.header-text span {
		width: 70px;
		height: 1px;
		position: absolute;
		border-bottom: 1px solid lightblue;
		top: 29px;
		left: 2px;
	}

	.header-text h1:first-child {
		top: 7px;
		left: 12px;
	}

	.header-text h1:last-child {
		bottom: 6px;
		left: 7px;
	}

	.header-logo:hover {
		box-shadow: 0 0 15px lightblue;
		-webkit-box-shadow: 0 0 15px lightblue;
		-moz-box-shadow: 0 0 15px lightblue;
	}

	.header-right {
		float: right;
		width: auto;
		height: 60px;
	}

	.header-right ul {
		height: 60px;
		line-height: 60px;
		box-sizing: border-box;
	}

	.header-right ul li{
		float: left;
		font-size: 26px;
	}

	.header-right ul li a {
		padding: 15px 12px;
		transition: all .5s;
		color: lightblue;
		font-family: 'KaiTi';
	}

	.header-right ul li a:hover {
		color: white;
		text-shadow:0 0 0 black,0 0 0 black;
	}
</style>
