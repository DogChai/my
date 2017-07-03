$(function(){
	var timer = null;
	var div = document.getElementById('fp-nav');
	var ul = div.children[0];
	var lis = ul.children;

	var navul = document.getElementById('navUl');
	var navlis = navul.children;
	console.log(navlis)


	var lisIndex = 0;
	// setInterval()
	timer = setInterval(function(){
		// console.log(lis.length);

		for(let i=0; i<lis.length; i++){
			lis[i].index = i;



			if(lis[i].children[0].className == 'active') {

				for(let i=0; i<lis.length; i++) {
					navlis[i].children[0].className = '';
				}

				
				lisIndex = lis[i].index;
				if(lis[i].index == 0 ){
					navlis[i].children[0].className = 'current0';
				}

				if(lis[i].index == 1 ){
					navlis[i].children[0].className = 'current1';
				}

				if(lis[i].index == 2 ){
					navlis[i].children[0].className = 'current2';
				}

				if(lis[i].index == 3 ){
					navlis[i].children[0].className = 'current3';
				}

				if(lis[i].index == 4 ){
					navlis[i].children[0].className = 'current4';
				}
				
			}
		}

	},30)
})
