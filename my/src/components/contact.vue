<template>
	<div class="contact">
		<div class="contact-wrap">
			<h1>我的联系方式</h1>
			<div class="contact-center">
				<div class="contact-div contact-git">
					<img src="../assets/git.png" alt="">
					<a href="https://github.com/lesses-xl" target="_blank">GitHub</a>
				</div>
				<div class="contact-div contact-blog">
					<img src="../assets/blog.png" alt="">
					<a href="http://lesses.me" target="_blank">博客</a>
				</div>
				<div class="contact-div contact-wb">
					<img src="../assets/weibo.png" alt="">
					<a href="http://weibo.com/lesses" target="_blank">微博</a>
				</div>
				<div class="contact-div contact-mail">
					<img src="../assets/email.png" alt="">
					<a href="mailto:767733103@qq.com">邮箱</a>
				</div>
			</div>
			<div class="contact-show">
				<div class="show-qq t">
					<img src="../assets/qq.png" alt="">
					<div class="show-img-left show-img">
						<img src="../assets/qq.jpg" alt="">
					</div>
				</div>
				<div class="show-wx t">
					<img src="../assets/weixin.png" alt="">
					<div class="show-img-right show-img">
						<img src="../assets/wx.jpg" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style type="text/css">
	.contact {
		width: 100%;
		height: 700px;
		color: white;
		font-size: 50px;
		text-align: center;
		font-family: '楷体';
	}

	.contact-wrap {
		width:750px;
		height:500px;
		margin: 5% auto;
		/*background: rgba(255,255,255,0.5);*/
	}

	.contact-wrap h1 {
		font-size: 36px;
	}

	.contact-center {
		width:580px;
		height:230px;
		margin:0 auto;
		position: relative;
	}

	.contact-div {
		width:210px;
		height:40px;
		position: absolute;
		border:5px solid transparent;
		transition: all .3s;
	}

	.contact-div img {
		width: 50px;
		height:50px;
		float: left;
	}

	.contact-div a {
		font-size: 24px;
		color: white;
		position: absolute;
		top: 0;
		left:0;
		right:0;
		bottom:0;
		line-height: 40px;
		padding-left: 35px;
	}

	.contact-git {
		background: black;
		top: 35px;
		left:45px;
	}

	.contact-git img {
		margin-top: -5px;
	}

	.contact-git:hover {
		border:5px solid rgba(143, 140, 140, 0.8);
	}

	.contact-blog:hover {
		border:5px solid rgba(235, 134, 234, 0.9);
	}

	.contact-mail:hover {
		border:5px solid rgba(104, 200, 96, 0.88);
	}

	.contact-wb:hover {
		border:5px solid rgba(242, 126, 76, 0.9);
	}

	.contact-blog {
		background: rgb(173, 51, 132);
		top: 35px;
		right:45px;
	}

	.contact-blog img {
		height:40px;
		width:40px;
		margin-left: 5px;
		margin-top: -5px;
	}

	.contact-wb {
		background: rgb(202, 102, 102);
		bottom: 45px;
		right:45px;
	}

	.contact-wb img {
		height:40px;
		width:40px;
		margin-left: 5px;
		margin-top: 0px;
	}

	.contact-mail {
		background: rgb(91, 173, 132);
		bottom: 45px;
		left:45px;
	}

	.contact-mail img {
		height:40px;
		width:40px;
		margin-left: 5px;
		margin-top: 0px;
	}

	.contact-show {
		width: 240px;
		height:90px;
		margin: 35px auto;
		position: relative;
	}

	.contact-show .t img{
		width:50px;
		height:50px;
	}

	.contact-show .show-wx img {
		width:45px;
		height:45px;
	}

	.contact-show .t {
		float: left;
		cursor: pointer;
		position: absolute;
		width:52px;
		height:55px;
	}

	.contact-show .show-qq {
		left: 45px;
	}

	.contact-show .show-wx {
		right: 45px;
	}

	.contact-show .show-img-left img {
		width:150px;
		height:150px;
	}

	.contact-show .show-img-right img {
		width:150px;
		height:150px;
	}

	.show-img-left {
		width:150px;
		height:150px;
		position: absolute;
		right:60px;
		top:-45px;
		border: 6px solid skyblue;
		/*box-sizing: border-box;*/
	}

	.show-img-right {
		width:150px;
		height:150px;
		position: absolute;
		left:60px;
		top:-45px;
		border: 6px solid rgb(71, 71, 71);
	}

	.show-img {
		opacity: 0;
		transition: all .3s;
	}

	.t:hover .show-img{
		opacity: 1;
	}
</style>
