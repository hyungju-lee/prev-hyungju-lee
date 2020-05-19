// IE8 클래스명 선택 함수
getElementsByClassNameCompatible = function(className) {
	if(document.getElementsByClassName) {
		return document.getElementsByClassName(className);
	} 
	var regEx = new RegExp('(^| )'+className+'( |$)');
	var nodes = new Array();
	var elements = document.body.getElementsByTagName("*");
	var len = elements.length;
	for(var i=0; i < len ; i++) {
		if(regEx.test(elements[i].className)) {
			nodes.push(elements[i]);
		}
	}
	elements = null;
	return nodes;
}

var sunsetAllTime,
	sunriseAllTime,
	nowAlltime;
	
var sunrise = new Date().sunrise(37.4056318, 127.11512630000001),
	sunset = new Date().sunset(37.4056318, 127.11512630000001);
	
	sunsetAllTime = sunset.getHours() * 60 * 60 * 1000 + sunset.getMinutes() * 60 * 1000 + sunset.getSeconds() * 1000 + sunset.getMilliseconds(),
	sunriseAllTime = sunrise.getHours() * 60 * 60 * 1000 + sunrise.getMinutes() * 60 * 1000 + sunrise.getSeconds() * 1000 + sunrise.getMilliseconds();

var msg = " 일몰 : " + sunset + "\n" +
		  " 일출 : " + sunrise;
		  
document.getElementById("sun").innerText = msg;

function nowTime(){
	var bool = false,
		dateObj = new Date(),
		//t = dateObj.toLocaleTimeString(),
		h = dateObj.getHours(),
		i = dateObj.getMinutes(),
		ii = i<10? "0"+i:i,
		s = dateObj.getSeconds(),
		ss = s<10? "0"+s:s,
		ms = dateObj.getMilliseconds(),
		hisms = "현재시간 : " + h + ":" + ii + ":" + ss + ":" + ms,
		nowAlltime = ms + s * 1000 + i * 60 * 1000 + h * 60 * 60 * 1000;
	
	document.getElementById("nowTime").innerText = hisms;
	
	if(sunriseAllTime <= nowAlltime && nowAlltime < sunsetAllTime){
		var hdClass = document.getElementById("header").className.split(" ");
		document.getElementById("header").className.replace(/\b bg-night\b/, "");
		for(var i=0; i<hdClass.length; i++){
			if(hdClass[i] == "bg-day"){
				bool = true;
			}
		}
		if(!bool){
			var addClass = document.getElementById("header").className == ""? "bg-day" : " bg-day";
			document.getElementById("header").className += addClass;
		}
		hdClass = document.getElementById("header").className.split(" ");
		bool = false;
	}else if(nowAlltime < sunriseAllTime || sunsetAllTime <= nowAlltime){
		var hdClass = document.getElementById("header").className.split(" ");
		document.getElementById("header").className.replace(/\b bg-day\b/, "");
		for(var i=0; i<hdClass.length; i++){
			if(hdClass[i] == "bg-night"){
				bool = true;
			}
		}
		if(!bool){
			var addClass = document.getElementById("header").className == ""? "bg-night" : " bg-night";
			document.getElementById("header").className += addClass;
		}
		hdClass = document.getElementById("header").className.split(" ");
		bool = false;
	}
}

setInterval(nowTime, 200);