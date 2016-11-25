for (var i = 0; i < 120; i++) {
	(function(i) {
		setTimeout(function() {
			GetList(i, true);
			console.log(i);
		}, 100 * i);
	})(i);
}

var reg1 = /^\w{0,3}$/g;
var reg2 = /^[a-z]{0,5}$/g;
var reg3 = /^\d{0,6}$/g;

setTimeout(function() {
	var comArr1 = [],comArr2=[], comArr3 = [];
	$(".000").each(function() {
		var txt = $(this).text().replace(".com", "");
		if (reg1.test(txt)) {
			comArr1.push(txt);
		} else if(reg2.test(txt)){
			comArr2.push(txt);
		}
	});
	comArr1 = Distinct(comArr1);
	comArr2 = Distinct(comArr2);
	comArr3 = Distinct(comArr3);
	console.log(comArr1.length, comArr1.join("\n"));
	console.log(comArr2.length, comArr2.join("\n"));
	console.log(comArr2.length, comArr3.join("\n"));
}, 15 * 1000);

function Distinct(arr) {
	var obj = {}, newArr= [];
	for(var i=0;i< arr.length;i++) {
		obj[arr[i]] = 1;
	}
	for(var j in obj) {
		newArr.push(j);
	}
	return newArr.sort(sortNumber);
}
function sortNumber(a,b){
	if (/^\d+$/.test(a)) {
		return a - b;
	} else {
		return a.length - b.length;
	}
}