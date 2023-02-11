window.w = {}
window.w.fail = 0;
window.w.success = 0;
window.w.editor = document.querySelector("#f");
window.w.lastLink = "";
window.w.onclicklink = function() {
	let link = this.getAttribute("link");
	let lineNum = this.getAttribute("lineNum");
	let colNum = this.getAttribute("colNum");
	if (w.lastLink == link)
		w.editor.contentWindow.editor.gotoLine(lineNum, colNum, true);
	else {
		w.loadJavascript(link, lineNum, colNum);
		w.lastlink = link;
	}
		
}

window.w.loadJavascript = function(url, lineNum, colNum) {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		w.editor.contentWindow.editor.setValue(this.responseText);
		w.editor.contentWindow.editor.gotoLine(lineNum, colNum, true);
	}
	xhttp.open("GET", url);
	xhttp.send();
}

window.w.parse = function(string) {
	let psl = function(l) {
		let div = document.createElement("div");
		try {
			let a = l.split("@");
			let sp1 = document.createElement("sapn");
			sp1.innerText = a[0] + "@";
			let link = a[1].split(":").slice(0, -2).join(":");
			let lineNum = a[1].split(":").slice(-2)[0];
			let colNum = a[1].split(":").slice(-2)[1];
			let sp2 = document.createElement("a");
			sp2.href = "javascript:void(0);"
			sp2.innerText = a[1];
			sp2.setAttribute("link", link);
			sp2.setAttribute("lineNum", lineNum);
			sp2.setAttribute("colNum", colNum);
			sp2.onclick = window.w.onclicklink;
			div.appendChild(sp1);
			div.appendChild(sp2);
		} catch (k) {
			div.innerText = l;
		}
		return div;
	};

	let arr = string.split("\n");
	console.log(arr);
	let toRet = [];
	arr.forEach(e => toRet.push(psl(e)));
	return toRet;
}

window.w.onFail = function(msg, e) {
	let tw = document.querySelector("#testwindow");
	let mother = document.createElement("div");
	mother.style.border = "1px solid #ff334348";
	mother.style.background = "#88608030";
	mother.style.padding = "3px";
	mother.style.marginTop = "3px";
	mother.style.borderRadius = "5px";
	mother.style.cursor = "default";

	let msgdiv = document.createElement("div");
	msgdiv.innerText = msg;
	mother.appendChild(msgdiv);

	let gms = document.createElement("div");
	gms.innerText = "\nStack Trace:\n";
	mother.appendChild(gms);

	window.w.parse(e.stack).forEach(d => mother.appendChild(d));
	tw.appendChild(mother);
	w.fail++;
}

window.w.onSuccess = function(msg) {
	w.success++;
}

let v = new Validation(w.onFail, w.onSuccess);

(function() {

})();

// testing function
(function() {
	let x = function() { };
	v.true(x.isFunction());
}());

//testing String
(function() {
	v.true("".isString());
	v.true("".isObject());
}());


(function() {
	v.equals(0, "".matchCount("a"));
	v.equals(1, "a".matchCount("a"));
	v.equals(3, "aaa".matchCount("a"));
	v.equals(1, "aaa".matchCount("aaa"));
	v.equals(1, "abaca".matchCount(/ac/g));
}());

(function() {
	v.NaN("".toInt());
	v.NaN("dd11.0".toInt());
	v.equals(0, "0".toInt());
	v.equals(1, "1.01".toInt());
	v.equals(0, "0.01".toInt());
	v.equals(0, "-0.01".toInt());
	v.equals(-1, "-1.01".toInt());
	v.equals(11, "11ab".toInt());
	v.equals(11, "11.0ab".toInt());
	v.equals(11, "11.ab".toInt());
}());

(function() {
	v.NaN("".toFloat());
	v.equals(0, "0".toFloat());
	v.equals(1.01, "1.01".toFloat());
	v.equals(0.01, "0.01".toFloat());
	v.equals(-0.01, "-0.01".toFloat());
	v.equals(-1.01, "-1.01".toFloat());
	v.equals(-1.01, "-1.01xyz".toFloat());
}());


(function() {
	v.NaN("".toBoolean());
	v.false("FalSe".toBoolean());
	v.true("trUE".toBoolean());
	v.NaN("TrueThat".toBoolean());

	v.false("0".toBoolean());
	v.true("1".toBoolean());
	v.NaN("11".toBoolean());
}());

(function() {
	v.equals("01", Date.PadZero("1", 2));
	v.equals("01", Date.PadZero("01", 2));
	v.equals("001", Date.PadZero("001", 2));
	v.equals("1001", Date.PadZero("1001", 2));

	let d = new Date("2020-02-01");
	v.equals("2020-02-01T00:00:00", d.iso8601Datetime());
	v.equals("2020-02-01", d.iso8601Date());

	d = new Date("2020-02-01T10:01:20");
	v.equals("2020-02-01T10:01:20", d.iso8601Datetime());
	v.equals("2020-02-01", d.iso8601Date());
}());
