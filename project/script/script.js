
//回到顶部按钮
var btt = document.getElementById("backToTop");
window.onscroll = function () {
    if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
        btt.style.opacity = "1";
    }
    else {
        btt.style.opacity = "0";
    }
}
btt.onclick = function() {
	window.scrollTo(0,0);
}
//主页面切换
var tabs = document.getElementById("tabs").childNodes;
var conts = document.getElementById("mainCont").childNodes;
for (var i = 0; i < tabs.length; i++) {
	tabs[i].onclick = function() {
		change(this);
	}
}
function change(obj) {
	for (var i = 0; i < tabs.length; i++) {
		if (tabs[i] == obj) {
			tabs[i].className = "atab";
			conts[i].className = "adiv";
		} else {
			tabs[i].className = "ntab";
			conts[i].className = "";
		}
	}
}
//项目页面切换
var pjNavs = document.getElementById("pjNav").children;
var pjConts = document.getElementById("pjCont").children;

for (var i = 0; i < pjNavs.length; i++) {
	pjNavs[i].onclick = function() {
		pjChange(this);
	}
}
function pjChange(obj) {
	for (var i = 0; i < pjNavs.length; i++) {
		if (pjNavs[i] == obj) {
			pjNavs[i].className = "aNav";
			pjConts[i].className = "aCont";
		} else {
			pjNavs[i].className = "nNav";
			pjConts[i].className = "";
		}
	}
}
document.getElementById("pjRight").onclick = function() {
	for (var i = 0; i < pjConts.length-1; i++) {
		if (pjConts[i].className == "aCont") {
			pjNavs[i].className = "nNav";
			pjConts[i].className = "";
			pjNavs[i+1].className = "aNav";
			pjConts[i+1].className = "aCont";
			break;
		}
	}
}
document.getElementById("pjLeft").onclick = function() {
	for (var i = pjConts.length - 1; i > 0; i--) {
		if (pjConts[i].className == "aCont") {
			pjNavs[i].className = "nNav";
			pjConts[i].className = "";
			pjNavs[i-1].className = "aNav";
			pjConts[i-1].className = "aCont";
			break;
		}
	}
}
//添加时间
function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
	t = setTimeout('startTime()',500);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
//背景音乐和控制按钮
var mPlay = document.getElementById("playbt");
var mPause = document.getElementById("pause");
var music1 = document.getElementById("audio1");
function playMusic() {
	music1.play();
	mPlay.style.display = "none";
	mPause.style.display = "block";
}
function pauseMusic() {
	music1.pause();
	mPlay.style.display = "block";
	mPause.style.display = "none";

}
mPlay.onclick = function() {
	playMusic();
}
mPause.onclick = function() {
	pauseMusic();
}

//添加访问次数
if (localStorage.pagecount) {
	localStorage.pagecount=Number(localStorage.pagecount) +1;
} else {
	localStorage.pagecount=1;
}
var count = document.getElementById("pageCount");
count.innerHTML = "访问次数" + localStorage.pagecount + "次";
//拖放函数
	//setup
	var dragStart = document.getElementById("dragOut");
	var target = document.getElementById("dropIn");
	var targetText = document.getElementById("dragTip");
	var d1 = document.getElementById("drag1");
	var d2 = document.getElementById("drag2");
	var d3 = document.getElementById("drag3");
	var d4 = document.getElementById("drag4");
	var d5 = document.getElementById("drag5");
	var d6 = document.getElementById("drag6");
	var d7 = document.getElementById("drag7");
	var d8 = document.getElementById("drag8");

	target.ondrop = function() {
		drop(this,event);
		anime = setInterval(animation,speed);
	}
	target.ondragleave = function() {
		clearInterval(anime);
		reDraw();
		targetText.innerHTML = "(ง •̀_•́)ง看看我会啥";
	}
	dragStart.ondragenter = function() {
		clearInterval(anime);
	}
	d1.ondragstart = function() {
		drag(this,event,60,1);
		clearInterval(anime);
	}
	d2.ondragstart = function() {
		drag(this,event,60,2);
		clearInterval(anime);
	}
	d3.ondragstart = function() {
		drag(this,event,40,3);
		clearInterval(anime);
	}
	d4.ondragstart = function() {
		drag(this,event,30,4);
		clearInterval(anime);
	}
	d5.ondragstart = function() {
		drag(this,event,30,5);
		clearInterval(anime);
	}
	d6.ondragstart = function() {
		drag(this,event,5,6);
		clearInterval(anime);
	}
	d7.ondragstart = function() {
		drag(this,event,5,7);
		clearInterval(anime);
	}
	d8.ondragstart = function() {
		drag(this,event,5,7);
		clearInterval(anime);
	} 
	//函数
function drag(drag_object,e,p,t) {
	e.dataTransfer.setData('Text',drag_object.id);
	progress = p;
	if ( p <= 10 ) {
		R = 255;
		G = 53;
		B = 62;
	} else {
		R = 73;
		G = 222;
		B = 201;
	}
	switch (t) {
		case 1:
		targetText.innerHTML = "(´・ω・`)这个掌握一半多啦";
		break;
		case 2:
		targetText.innerHTML = "(´・ω・`)这个掌握一半多啦";
		break;
		case 3:
		targetText.innerHTML = "(,,• ₃ •,,)这个掌握的不是很多喔";
		break;
		case 4:
		targetText.innerHTML = "ヽ(･ω･)ﾉ 这个就会一点点哎";
		break;
		case 5:
		targetText.innerHTML = "ヽ(･ω･)ﾉ 这个就会一点点哎";
		break;
		case 6:
		targetText.innerHTML = "╮(╯_╰)╭这个只是听说过哈";
		break;
		case 7:
		targetText.innerHTML = "╮(╯_╰)╭这个只是听说过哈";
		break;
		case 8:
		targetText.innerHTML = "╮(╯_╰)╭这个只是听说过哈";
		break;
	}
}
function reDraw() {
	ctx.clearRect(0,0,170,170);
	step = 1;
	startAngle = 0;
	endAngle = 0;
	speed = 10;
	progress = 0;
}
function drop(drop_target,e,elementname) {
	var id = e.dataTransfer.getData('Text');
	drop_target.appendChild(document.getElementById(id));
	e.preventDefault();
}
//canvas
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
//setup
var width = c.width,
	height = c.height,
	posX = 85,
	posY = 85,
	startAngle = 0,
	endAngle = 0,
	radius = 80,
	step = 1,
	part = 100,
	speed = 10,
	progress = 70
	R = 73,
	G = 222,
	B = 201;
//画圆函数
function draw(s,e) {
	ctx.strokeStyle='rgb('+R+','+G+','+B+')';
	//ctx.shadowColor='rgba(100,100,100,0.05)';
	//ctx.shadowBlur='1';
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(posX+radius,posY);
	ctx.arc(posX,posY,radius,s,e,false);
	ctx.stroke();
	ctx.closePath();
}
//圆圈动画
function animation() {
	if (progress == 0 ) {
		return false;
	}
	if (step <= part*progress/100) {
       	endAngle = step * 2 * Math.PI / part;
       	draw(startAngle, endAngle);
   		step++;
    }
}

//本地存储
function storetask(task) {
	var taskdetail = document.getElementById(task).value;
	var time = new Date().getTime();
	localStorage.setItem(time,taskdetail);//留言存入
	loadStorage("dispTxt");//留言输出
	document.getElementById(task).value = "";
}
function loadStorage(id){
	var target = document.getElementById(id);
	var result = "<div>";
	for (var i=0;i<localStorage.length;i++) {
		var key=localStorage.key(i);
		var value=localStorage.getItem(key);
		var date=new Date();
		date.setTime(key);
		var datestr=date.toGMTString();
		result += '<div class="msg"><span class="msgValue">' + value + '</span><span class="msgDate">' + datestr + '</span></div>';
	}
	result += "</div>";
	target.innerHTML = result;
}
function clearStorage() {
	localStorage.clear();
	loadStorage("dispTxt");
}
var subBt = document.getElementById("subBt");
subBt.onclick = function() {
	storetask("txtarea");
}
var clearBt = document.getElementById("clearBt");
clearBt.onclick = function() {
	clearStorage();
}
//video
var headpic = document.getElementById("headPic");
var outer = document.getElementById("videoOuter");
var v = document.getElementById("myvideo");
v.volume = "0";
headpic.onclick = function() {
	outer.style.display = "block";
	v.load();
	v.play();
}
outer.onclick = function() {
	outer.style.display = "none";
	v.pause();
}
//onload 事件
function addLoadEvent(func) {  
        var oldonLoad = window.onload;  
        if (typeof window.onload != 'function') {  
                window.onload = func;  
        } else {  
            window.onload = function(){  
                oldonLoad();  
                func();  
            }  
        }  
}

addLoadEvent(startTime);  
addLoadEvent(playMusic);
addLoadEvent(function() {loadStorage("dispTxt");});