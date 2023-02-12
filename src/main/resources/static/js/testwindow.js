class TestWindow {
	#v;
	#fail;
	#success;
	#editor;
	#lastLink;

	constructor() {
		this.#v = new Validation(function(obj) {
			return function(m, e) {
				obj.#onFail(m, e);
			}
		}(this), function(obj) {
			return function(m) {
				obj.#onSuccess(m);
			}
		}(this));
		this.#fail = 0;
		this.#success = 0;
		this.#editor = document.querySelector("#f");
		this.#lastLink = "";
	}
	t() {
		return this.#v;
	}

	#onClickLink(sp) {
		let link = sp.getAttribute("link");
		let lineNum = sp.getAttribute("lineNum");
		let colNum = sp.getAttribute("colNum");
		if (this.#lastLink == link)
			this.#editor.contentWindow.editor.gotoLine(lineNum, colNum, true);
		else {
			this.#loadJavascript(link, lineNum, colNum);
			this.#lastLink = link;
		}
	}

	#loadJavascript(url, lineNum, colNum) {
		let xhttp = new XMLHttpRequest();
		xhttp.onload = function(obj) {
			return function() {
				obj.#editor.contentWindow.editor.setValue(this.responseText);
				obj.#editor.contentWindow.editor.gotoLine(lineNum, colNum, true);
			}
		}(this);
		xhttp.open("GET", url);
		xhttp.send();
	}

	#parse(string) {
		let psl = function(l, obj) {
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
				sp2.onclick = function(obj, sp2) {
					return function() {
						obj.#onClickLink(sp2);
					}
				}(obj, sp2);
				div.appendChild(sp1);
				div.appendChild(sp2);
			} catch (k) {
				div.innerText = l;
			}
			return div;
		};

		let arr = string.split("\n");
		let toRet = [];
		arr.forEach(e => toRet.push(psl(e, this)));
		return toRet;
	}

	#onFail(msg, e) {
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

		this.#parse(e.stack).forEach(d => mother.appendChild(d));
		tw.appendChild(mother);
		this.#fail++;
	}

	#onSuccess() {
		this.#success++;
	}

	fail() {
		return this.#fail;
	}

	success() {
		return this.#success;
	}
}
