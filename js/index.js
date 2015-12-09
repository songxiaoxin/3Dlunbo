/*
$(function(){
	var imgs=$("img",$(".imgs")[0]);
	
	var lis=$("li",$(".num")[0]);
	var num=0;
	var t=setInterval(move,2000);
	function move(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex='1';
			lis[i].className='';
		}
		imgs[num].style.zIndex='2';
		lis[num].className='hot';
	}

	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			num=this.index;
			clearInterval(t);
			for(var j=0;j<imgs.length;j++){
				imgs[j].style.zIndex='1';
				lis[j].className='';
			}
		imgs[num].style.zIndex='2';
		lis[num].className='hot';
		};
		lis[i].onmouseout=function(){
			t=setInterval(move,2000);
		}
	}
	var lbtn=$(".left")[0];
	var rbtn=$(".right")[0];
	lbtn.onclick=function(){
		num--;
		if(num<0){
			num=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=1;
			lis[i].className="";
		}
		imgs[num].style.zIndex=2;
		lis[num].className="hot"
	};

	rbtn.onclick=function(){
			move();
		};
	lbtn.onmouseover=rbtn.onmouseover=function(){
		clearInterval(t);
	};
	lbtn.onmouseout=rbtn.onmouseout=function(){
			t=setInterval(move,2000)
		}

	
});

	*/
$(function(){
	var imgs=$('img',$('.imgs')[0]);
	var iw=imgs[0].offsetWidth;
	var lis=$('li',$('.num')[0]);
	var rbtn=$('.right')[0];
	var lbtn=$('.left')[0];
	for(var i=0;i<imgs.length;i++){
		imgs[i].style.left=iw+'px';
	}
	imgs[0].style.left=0+'px';
	lis[0].className='hot';
	var index=0;
	var next=0;
	var flag=true;
	 function move(){

		 if(!flag){
			 return;
		 }
		 flag=false;
		 next++;
		if(next==imgs.length){
			next=0;
		}
		imgs[next].style.left=iw+'px';
		animate(imgs[next],{left:0},1000,function(){
			flag=true;
		});
		animate(imgs[index],{left:-iw},1000);
		lis[index].className='';
		lis[next].className='hot';
		index=next;
	 }
	var t=setInterval(move,2000);

	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			if(!flag||this.index==index){
				return
			}

			flag=false;
			imgs[this.index].style.left=iw+'px';
			animate(imgs[this.index],{left:0},1000,function(){
				flag=true;
			});
			animate(imgs[index],{left:-iw},1000);
			lis[index].className='';
			lis[this.index].className='hot';
			next=index=this.index;
		}

	}
	rbtn.onclick=function(){
		move();
	};
	lbtn.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		next--;
		if(next==-1){
			next=imgs.length-1;
		}
		imgs[next].style.left=-iw+'px';
		animate(imgs[next],{left:0},1000,function(){
			flag=true;
		});
		animate(imgs[index],{left:iw},1000);
		lis[index].className='';
		lis[next].className='hot';
		index=next;
	};
	$('.out')[0].onmouseover=function(){
		clearInterval(t);
	}
	$('.out')[0].onmouseout=function(){
		t=setInterval(move,2000);
	}
});