<template>
				<div class="hobby">
						<div class="ho one">
								<div class="icon">
										<img src="../assets/g.jpg">
										<div class="circle c_1"></div>
										<div class="mask"></div>
										<a href="http://music.163.com/#/user/home?id=62879556" target="_blank"></a>
								</div>
								<p>音乐的种类各种各样:轻音乐、摇滚、电音、乡村、后摇...</p>
								<p>但是无论是什么音乐,它在一定程度上都能够影响到你的内心,触动你,改变你,让你记起点点往事,又或者对于未来的无限憧憬...</p>
						</div>
						<div class="ho two">
								<div class="icon">
										<img src="../assets/g.jpg">
										<div class="circle c_2"></div>
										<div class="mask"></div>
										<a href="http://baike.baidu.com/link?url=VcKgmcUwfHYFvrQD9hPli0kEqby30KWP9jeUrYfL4aUbZqoaYX3uPiPTcfi3d7eCyxuJj7AiqU3I3RGFFApZBd0IpMYvi1m6lPNlB0zcSDt7MWNkkIUO7gs824pT6QlU" target="_blank"></a>
								</div>
								<p>看美剧是我的爱好之一,<权利的游戏>,<行尸走肉>,<西部世界>...</p>
								<p>其中<权利的游戏>是当之无愧的神剧,从一开始的争夺铁王座,到龙女诞生,雪诺死而复生,再到如今的异鬼来袭,剧情一步一步的走向高潮,到底结局会是如何...</p>
						</div>
						<div class="ho three">
								<div class="icon">
										<img src="../assets/g.jpg">
										<div class="circle c_3"></div>
										<div class="mask"></div>
										<a href="http://baike.baidu.com/item/%E8%A5%BF%E9%83%A8%E4%B8%96%E7%95%8C/16357504" target="_blank"></a>
								</div>
								<p>当然,我也爱骑行</p>
								<p>骑行作为有氧运动之一,是锻炼身体的绝佳方式,在温度适宜的周末,叫上你的小伙伴,来一次说走就走的旅程,没有任何的限制,你可以去任何你想去的地方,为自己的人生增添更多的乐趣</p>
						</div>
				</div>
</template>

<style type="text/css">
 .hobby {
		width: 1200px;
		height: 640px;
		position: absolute;
		top: 150px;
		left: 50%;
		margin-left: -600px;
	}

 .hobby .ho {
		width: 290px;
		padding: 10px 5px;
		float: left;
		margin: 25px 10px 0 30px;
		border-radius: 10px;
	}

 .hobby .one {
		margin-left: 105px;
	}

 .hobby .ho .icon {
		width: 210px;
		height: 210px;
		background: white;
		margin-left: 40px;
		margin-top: 30px;
		border-radius: 50%;
		position: relative;
		margin-bottom: 20px;
	}

 .hobby .ho .icon:hover  .circle{
		transform: rotate(180deg);
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
	}

 .hobby .ho .circle {
		width: 210px;
		height: 210px;
		animation: headneon 1.5s ease-in-out infinite alternate;
		opacity: 0.8;
		border-radius: 50%;
		position: absolute;
		top: -10px;
		left: -10px;
		transition: all 1s;
	}

 .hobby .ho .c_1 {
		border: 10px solid #6ADAFF;
		border-right-color: #65FF65;
		border-bottom-color: #65FF65;
	}

 .hobby .ho .c_2 {
		border: 10px solid rgb(70, 70, 71);
		border-right-color: #f46464;
		border-bottom-color: #f46464;
	}

 .hobby .ho .c_3 {
		border: 10px solid #6ADAFF;
		border-right-color: #FECE41;
		border-bottom-color: #FECE41;
	}

 .hobby .one {
		background-color: rgba(0,120,160,0.6);
	}

 .hobby .two {
		background-color: rgba(116, 113, 117, 0.88);
	}

 .hobby .three {
		background-color: rgba(30,190,140,0.6);
	}

	@-webkit-keyframes headneon {
	    from {
	        box-shadow: 0 0 2px #fff,
	                    0 0 3px #fff,
	                    0 0 4px #fff,
	                    0 0 5px #fff;
	    }
	    to {
	        box-shadow: 0 0 6px #fff,
	                    0 0 11px #fff,
	                    0 0 16px #fff,
	                    0 0 21px #fff;
	    }
	}

	@-moz-keyframes headneon {
	    from {
	        box-shadow: 0 0 1px #fff,
	                    0 0 3px #fff,
	                    0 0 4px #fff,
	                    0 0 5px #fff;
	    }
	    to {
	        box-shadow: 0 0 5px #fff,
	                    0 0 11px #fff,
	                    0 0 16px #fff,
	                    0 0 21px #fff;
	    }
	}

 .hobby .ho p {
		width: 250px;
		font-size: 22px;
		color: white;
		text-indent: 2em;
		padding: 0.2em 0;
		margin-left: 22px;
		padding-bottom: 0;
	}

 .hobby .head {
		font-size: 36px;
		text-align: center;
		font-weight: 600;
		color: white;
	}

 .hobby .icon img {
		width: 210px;
		height: 210px;
		border-radius: 50%;
	}

 .hobby .icon a {
		width: 230px;
		height: 230px;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 50%;
	}
</style>
