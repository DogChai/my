<template>
	<div class="skill">
		<div class="skill-wrap">
			<div class="skill-left">
				<div class="skill-one skill-c">
					skill
				</div>

				<div class="skill-two skill-c">
					<div class="skill-inner skill-inner-one">
						<div class="skill-c">
							<div class="skill-s"></div>
							<span class="no-rotate">JS</span>
						</div>
						<div class="skill-c">
							<div class="skill-s"></div>
							HTML
						</div>
						<div class="skill-c">
							<div class="skill-s"></div>
							CSS
						</div>
					</div>
				</div>

				<div class="skill-three skill-c">
					<div class="skill-inner skill-inner-two">
						<div class="skill-c">
							<div class="skill-s"></div>
							Vue.js
						</div>
						<div class="skill-c">
							<div class="skill-s"></div>
							Node
						</div>
						<div class="skill-c">
							<div class="skill-s"></div>
							Less
						</div>
						<div class="skill-c">
							<div class="skill-s"></div>
							PS
						</div>
						<div class="skill-c">
							<div class="skill-s"></div>
							Jquery
						</div>
					</div>
				</div>
			</div>
			<div class="skill-right">
				<div class="skill-item">
					<span>HTML(5)+CSS(3)</span>
					<div class="skill-show">
						<ul>
							<li>能使用合适的结构编写兼容主流浏览器的页面布局;模仿过京东等大型网站的静态页面</li>
							<li>了解HTML5新标签的语义;</li>
							<li>能适当运用CSS3使页面在现代浏览器上效果更佳;</li>
							<li>能熟练使用Chrome开发者工具、FireBug等工具辅助开发.</li>
						</ul>
					</div>
				</div>
				<div class="skill-item">
					<span>JavaScript</span>
					<div class="skill-show">
						<ul>
							<li>熟练掌握原生Javascript;</li>
							<li>能运用面向对象的思想编写js程序;</li>
							<li>熟悉正则表达式的使用.</li>
						</ul>
					</div>
				</div>
				<div class="skill-item">
					<span>Jquery</span>
					<div class="skill-show">
						<ul>
							<li>能够熟练使用jq,完成dom操作,各种动画效果</li>
							<li>了解各种API,以应对各类操作</li>
						</ul>
					</div>
				</div>
				<div class="skill-item">
					<span>Node.js</span>
					<div class="skill-show">
						<ul>
							<li>了解Node.js是一门后台语言</li>
							<li>能够用其搭建前端自动化平台</li>
						</ul>
					</div>
				</div>
				<div class="skill-item">
					<span>Less</span>
					<div class="skill-show">
						<ul>
							<li>less语法能帮助我们写出更加优雅的css代码</li>
							<li>可以自定义变量,更好的维护样式代码</li>
						</ul>
					</div>
				</div>
				<div class="skill-item">
					<span>Vue.js</span>
					<div class="skill-show">
						<ul>
							<li>Vue是一款轻量级MVVM框架</li>
							<li>会使用Vue的路由功能</li>
							<li>此简历就是使用Vue框架生成的</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style type="text/css">
	.skill {
		width: 100%;
		height: 700px;
		color: white;
		font-size: 30px;
		text-align: center;
		/*background: rgba(25,225,165,0.3);*/
		transition: all .3s;
	}

	.skill-wrap {
		width:1100px;
		height:600px;
		margin: 50px auto;
	}

	.skill-left {
		width:40%;
		height:80%;
		float: left;
		position: relative;
	}

	.skill-one {
		width:85px;
		height:85px;
		line-height: 85px;
		background: skyblue;
		margin-left: -42px;
		margin-top: -42px;
	}

	.skill-two {
		width:210px;
		height:210px;
		border:2px dashed orange;
		margin-left: -105px;
		margin-top: -105px;
	}

	.skill-two .skill-inner {
		position: absolute;
		width:100%;
		height:100%;
		animation: xuanzhuanfan 6s linear infinite;
	}

	.skill-three .skill-inner {
		position: absolute;
		width:100%;
		height:100%;
		animation: action 8s linear infinite;
	}

	.skill-two .skill-c {
		width:65px;
		height:65px;
		font-size: 22px;
		background: blue;
		line-height: 65px;
	}

	.skill-three .skill-c {
		width:65px;
		height:65px;
		font-size: 20px;
		background: blue;
		line-height: 65px;
	}

	@keyframes action {

		from {

		transform: rotate(0deg)  translateX(0px) rotate(0deg);

		}

		to {

		transform: rotate(360deg) translateX(0px) rotate(0deg);

		}

	}

	@keyframes xuanzhuan {
		from {
			transform:rotate(0deg);
		}
		to {
			transform:rotate(360deg);
		}
	}

	@keyframes xuanzhuanfan {
		from {
			transform:rotate(0deg);
		}
		to {
			transform:rotate(-360deg);
		}
	}

	@keyframes xuanzhuanfan1 {
		from {
			transform:rotate(360deg);
		}
		to {
			transform:rotate(0deg);
		}
	}

	.skill-two .skill-c:nth-child(1) {
		top:-25px;
		left:32px;
		background: rgba(110, 169, 238, 0.81);
	}

	.skill-two .skill-c:nth-child(2) {
		top:155px;
		left:10px;
		background: rgba(249, 215, 40, 0.83);
	}

	.skill-two .skill-c:nth-child(3) {
		top:80px;
		left:172px;
		background: rgba(246, 79, 239, 0.86);
	}

	.skill-three .skill-c:nth-child(1) {
		top:6px;
		left:32px;
		background: rgba(140, 249, 55, 0.83);
	}

	.skill-three .skill-c:nth-child(2) {
		top:180px;
		left:315px;
		background: rgba(91, 245, 226, 0.88);
	}

	.skill-three .skill-c:nth-child(3) {
		top:10px;
		left:250px;
		background: rgba(84, 96, 245, 0.87);
	}

	.skill-three .skill-c:nth-child(4) {
		top:190px;
		left:-28px;
		background: rgba(247, 115, 41, 0.89);
	}

	.skill-three .skill-c:nth-child(5) {
		top:320px;
		left:150px;
		background: rgba(203, 169, 241, 0.84);
	}

	.skill-c .skill-s {
		position: absolute;
		width:114%;
		height:114%;
		top:-7%;
		left:-7%;
		background: rgba(255,255,255,0.1);
		border-radius: 50%;
	}

	.skill-three {
		width:350px;
		height:350px;
		border:2px dashed rgba(78, 164, 244, 0.85);
		margin-left: -175px;
		margin-top: -175px;
	}

	.skill-c {
		border-radius: 50%;
		position: absolute;
		top:50%;
		left:50%;
	}

	.skill-right {
		font-family: '楷体';
		width:55%;
		height:80%;
		float: left;
		margin-top: 8%;
		margin-left: 5%;
	}

	.skill-item {
		font-size: 22px;
		border-left: 5px solid rgba(68, 126, 238, 0.91);
		padding: 5px 15px;
		background: rgba(137, 200, 245, 0.9);
		margin-bottom: 15px;
		text-align: left;
		box-sizing: border-box;
		color: blue;
		position: relative;
	}

	.skill-item:nth-child(2n) {
		border-left: 5px solid rgba(246, 188, 60, 0.92);
		background: rgba(245, 243, 108, 0.9);
		color:orange;
	}

	.skill-item:nth-child(1) {
		width:95%;
	}

	.skill-item:nth-child(2) {
		width:75%;
	}

	.skill-item:nth-child(3) {
		width:70%;
	}

	.skill-item:nth-child(4) {
		width:45%;
	}

	.skill-item:nth-child(5) {
		width:60%;
	}

	.skill-item:nth-child(6) {
		width:30%;
	}

	.skill-item:hover .skill-show {
		opacity: 1;
	}

	.skill-item .skill-show {
		font-family: '微软雅黑';
		position: absolute;
		z-index: 10;
		left:170px;
		top:50%;
		font-size: 14px;
		max-width: 350px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
		display: block;
		opacity: 0;
		transition: all .2s;
	}

	.skill-item .skill-show ul li{
		list-style: circle;
		font-size: 14px;
		line-height: 20px;
		color: #181C26;
		margin-left: 20px;
	}

	.skill-item:nth-child(4) .skill-show {
		width:200px;
	}

	.skill-item:nth-child(5) .skill-show {
		width:230px;
	}

	.skill-item:nth-child(6) .skill-show {
		width:220px;
	}
</style>
