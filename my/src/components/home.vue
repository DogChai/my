<template>
	<div class="home">
		<div id="home-left">
      <h1 >我叫：<span id="myname"></span></h1>
      <h1 >我今年：<span id="myyear"></span></h1>
      <h1>我的目标是：<span  id="mytarget"></span></h1>
      <h1>我：<span id="mychase"></span></h1>
			<h1>现在我或许还不够出色</h1>
			<h1>但我相信，任何的挫折都难不倒我</h1>
			<h1>从哪里跌到,就从哪里爬起来,加油!</h1>
    </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		mounted() {
			var data = [
		    {
		      name:'徐磊',
		      nums:6
		    },{
		      name:'22岁',
		      nums:3
		    },{
		      name:'成为一名web前端工程师',
		      nums:12
		    },{
		      name:'勇于拼搏,善于创新,无所畏惧',
		      nums:14
		    }
		  ]

		  var text1=0;
		  var text2=0;
		  var text3=0;
		  var text4=0;
		  var text5=0;
		  var text6=0;
			var myname = document.getElementById('myname');
			var myyear = document.getElementById('myyear');
			var mytarget = document.getElementById('mytarget');
			var mychase = document.getElementById('mychase');
		  function typing1(){
		    if (text1 <= data[0]['nums']) {
		     myname.innerHTML = data[0]['name'].slice(0, text1++) + '|';
		     setTimeout(function(){
					 typing1();
				 }, 300);
		    }
		    else{
		     myname.innerHTML = data[0]['name'] + '|';
		     setTimeout(function() {
		       myname.innerHTML = data[0]['name'];
		       typing2();
		     },300)
		    }
		   }
			 typing1();

		   function typing2(){
		     if (text2 <= data[1]['nums']) {
		      myyear.innerHTML = data[1]['name'].slice(1, text2++) + '|';
					setTimeout(function(){
 					 typing2();
 				 }, 300);
		     }
		     else{
		      myyear.innerHTML = data[1]['name'] + '|';
		      setTimeout(function() {
		        myyear.innerHTML = data[1]['name'];
		        typing3();
		      },300)
		     }
		    }

		    function typing3(){
		      if (text3 <= data[2]['nums']) {
		       mytarget.innerHTML = data[2]['name'].slice(0, text3++) + '|';
					 setTimeout(function(){
						 typing3();
					 }, 300);
		      }
		      else{
		       mytarget.innerHTML = data[2]['name'] + '|';
		       setTimeout(function() {
		         mytarget.innerHTML = data[2]['name'];
		         typing4();
		       },300)
		      }
		     }

		     function typing4(){
		       if (text4 <= data[3]['nums']) {
		        mychase.innerHTML = data[3]['name'].slice(0, text4++) + '|';
						setTimeout(function(){
	 					 typing4();
	 				 }, 300);
		       }
		       else{
		        mychase.innerHTML = data[3]['name'] + '|';
		        setTimeout(function() {
		          mychase.innerHTML = data[3]['name'];
		        },300)
		       }
		      }
		}
	}
</script>

<style type="text/css">
	.home {
		width: 100%;
		color: white;
		font-size: 50px;
		text-align: center;
		/*background: rgba(255,255,255,0.3);*/
	}

	#home-left h1 {
		font-family: '楷体';
		font-size: 24px;
		/*margin-left: 2em;*/
		margin-bottom: 10px;
	}

	#home-left {
		width: 550px;
		height:300px;
		margin: 7% auto 0 auto;
		text-align: center;
	}
</style>
