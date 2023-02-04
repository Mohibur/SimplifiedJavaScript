"use strict";

/* Validation is out of scope */
window.$ = {};
window.$$ = {};
$ = function(sel) { return document.querySelector(sel); }

$$ = function(sel) { return [...document.querySelectorAll(sel)]; };

/***  Document */
Document.prototype.$ = function(sel) { return this.querySelector(sel); }
Document.prototype.$$ = function(sel) { return [...this.querySelectorAll(sel)]; }

Document.prototype.Html = function(v) {
	if (typeof v == "undefined") return this.innerHTML;
	this.innerHTML = v;
	return this;
}

Document.prototype.Text = function(v) {
	if (typeof v == "undefined") return this.innerText;
	this.innerText = v;
	return this;
}
/***  Document end */

/*** HTMLElement */

HTMLElement.prototype.$ = function(sel) { return this.querySelector(sel); }
HTMLElement.prototype.$$ = function(sel) { return [...this.querySelectorAll(sel)]; }

HTMLElement.prototype.Parent = function() {
	return this.parentElement;
}

HTMLElement.prototype.Name = function(v) {
	if (typeof v == "undefined") return this.name;
	this.name = v;
	return this;
}

HTMLElement.prototype.mk = function(tag) {
	let p = document.createElement(tag);
	this.appendChild(p);
	return p;
}

HTMLElement.prototype.Mk = function(tag) {
	let p = document.createElement(tag);
	this.appendChild(p);
	return p;
}

HTMLElement.prototype.Tag = function() {
	return this.tagName;
}

HTMLElement.prototype.Html = function(v) {
	if (typeof v == "undefined") return this.innerHTML;
	this.innerHTML = v;
	return this;
}

HTMLElement.prototype.Text = function(v) {
	if (typeof v == "undefined") return this.innerText;
	this.innerText = v;
	return this;
}

HTMLElement.prototype.outer = function() {
	return this.outerHTML;
}

HTMLElement.prototype.tag = function() {
	return this.tagName;
}

HTMLElement.prototype.html = function(v) {
	if (typeof v == "undefined") return this.innerHTML;
	this.innerHTML = v;
	return this;
}

HTMLElement.prototype.text = function(v) {
	if (typeof v == "undefined") return this.innerText;
	this.innerText = v;
	return this;
}



HTMLElement.prototype.RmChild = function(target) {
	this.$(target).forEach(e => this.removeChild(e));
	return this;
}

HTMLElement.prototype.rm = function(target) {
	this.$(target).forEach(e => this.removeChild(e));
	return this;
}

HTMLElement.prototype.Id = function(v) {
	if (typeof v == "undefined") return this.id;
	this.id = v;
	return this;
}

HTMLElement.prototype.HasCls = function(cls) { return this.classList.contains(cls); }
HTMLElement.prototype.hasCls = function(cls) { return this.HasCls(cls); }

HTMLElement.prototype.ToggoleCls = function(cls) {
	if (this.classList.contains(cls)) this.classList.remove(cls);
	else this.classList.add(cls);
	return this;
}

HTMLElement.prototype.Cls = function(v) {
	if (typeof v == "undefined") return this.className;
	this.className = v;
	return this;
}

HTMLElement.prototype.AddCls = function(v) {
	if (typeof v == "undefined" || v == null || v == "") v = [];
	[].concat(v).forEach(e => this.classList.add(e))
	return this;
}

HTMLElement.prototype.addCls = function(v) {
	return this.AddCls(v);
}


HTMLElement.prototype.RemoveCls = function(v) {
	if (typeof v == "undefined") v = [];
	[].concat(v).forEach(e => this.classList.remove(e));
	return this;
}

HTMLElement.prototype.removeCls = function(v) {
	return this.RemoveCls(v);
}

HTMLElement.prototype.RmCls = function(v) {
	return this.removeCls(v);
}

HTMLElement.prototype.rmCls = function(v) {
	return this.RemoveCls(v);
}


/* Validation is out of scope */
HTMLElement.prototype.On = function(e, f) {
	this.addEventListener(e, f);
	return this;
}


HTMLElement.prototype.on = function(e, f) {
	this.addEventListener(e, f);
	return this;
}

HTMLElement.prototype.On = function(e, f) {
	return this.on(e, f);
}


HTMLElement.prototype.Click = function(f) {
	this.addEventListener("click", f);
	return this;
}

HTMLElement.prototype.click = function(f) {
	return this.Click(f);
}

HTMLElement.prototype.Input = function(f) {
	this.addEventListener("input", f);
	return this;
}

// this is extra value, separate to attribute
HTMLElement.prototype.Data = function(name, data) {
	if (typeof this["data"] == "undefined") this["data"] = {};
	if (typeof data == "undefined") return this["data"][name];
	this["data"][name] = data;
	return this;
}

HTMLElement.prototype.Hide = function() {
	this.style.display = "none";
	return this;
}

HTMLElement.prototype.hide = function() {
	return this.Hide();
}

HTMLElement.prototype.ChildCount = function(find) {
	if (typeof find == "undefined") return this.childElementCount;
	return this.querySelectorAll(find).length;
}

HTMLElement.prototype.Title = function(v) {
	if (typeof v == "undefined") return this.title;
	this.title = v;
	return this;
}

// single value
HTMLElement.prototype.Css = function(s, v) {
	if (typeof v == "undefined") return this.style[s];
	this.style[s] = v;
	return this;
}

HTMLElement.prototype.css = function(s, v) {
	return this.Css(s, v);
}

HTMLElement.prototype.Computed = function(pseudoElt) {
	return window.getComputedStyle(this, pseudoElt);
}

HTMLElement.prototype.computed = function(pseudoElt) {
	return this.Computed(pseudoElt);
}

HTMLElement.prototype.Attr = function(a, v) {
	if (typeof v == "undefined") return this.getAttribute(a);
	this.setAttribute(a, v);
	return this;
}

HTMLElement.prototype.attr = function(a, v) {
	if (typeof v == "undefined") return this.getAttribute(a);
	this.setAttribute(a, v);
	return this;
}

/**
 * arg1: if arg1 is function, then function will execute on all children
 * 
 */
HTMLElement.prototype.Each = function(arg1, arg2) {
	if (typeof arg1 == "function")
		[...this.childNodes].each(arg1);
	else this.$$(arg1).each(arg2);
	return this;
}

HTMLElement.prototype.each = function(sel, fun) {
	return this.Each(sel, fun);
}

HTMLElement.prototype.Append = function(elem) {
	this.append(elem);
}

/*** HTMLElement end */

////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// HTMLFormElement ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
HTMLFormElement.prototype.Target = function(v) {
	if (typeof v == "undefined") return this.target;
	this.target = v;
	return this;
}

HTMLFormElement.prototype.Action = function(v) {
	if (typeof v == "undefined") return this.action;
	this.action = v;
	return this;
}

HTMLFormElement.prototype.Method = function(v) {
	if (typeof v == "undefined") return this.method;
	this.method = v;
	return this;
}

HTMLFormElement.prototype.Element = function(name) {
	return this[name];
}

HTMLFormElement.prototype.element = function(name) {
	return this[name];
}


////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////Blocks/////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/***  HTMLDivElement */
HTMLDivElement.prototype.Editable = function(v) {
	if (typeof v == "undefined") return this.contentEditable;
	this.contentEditable = v;
	return this;
}

HTMLDivElement.prototype.Show = function() {
	this.style.display = "block";
	return this;
}

HTMLDivElement.prototype.show = function() {
	return this.Show();
}
/***  HTMLDivElement end */

/***  HTMLParagraphElement */
HTMLParagraphElement.prototype.Editable = function(v) {
	if (typeof v == "undefined") return this.contentEditable;
	this.contentEditable = v;
	return this;
}

HTMLParagraphElement.prototype.Show = function() {
	this.style.display = "block";
	return this;
}

HTMLParagraphElement.prototype.show = function() {
	return this.Show();
}


/***  DIV end */

/*** HTMLSpanElement */
HTMLSpanElement.prototype.Show = function() {
	this.style.display = "inline";
	return this;
}

HTMLSpanElement.prototype.show = function() {
	return this.Show();
}

/*** SPAN end */

/*** HTMLTableElement */
HTMLTableElement.prototype.Show = function() {
	this.style.display = "table";
	return this;
}

HTMLTableElement.prototype.show = function() {
	return this.Show();
}


HTMLTableElement.prototype.Row = function(i) {
	if (typeof i != "undefined") return this.rows[i];
	return this.insertRow();
}

HTMLTableElement.prototype.row = function(i) {
	return this.Row();
}

HTMLTableElement.prototype.Caption = function() {
	return this.createCaption();
}

HTMLTableElement.prototype.Tbody = function(i) {
	if (typeof i != "undefined") return this.tBodies[i];
	return this.createTBody();
}

HTMLTableElement.prototype.RowCount = function() {
	return this.rows.length;
}

HTMLTableElement.prototype.rowCount = function() {
	return this.RowCount();
}

/*** HTMLTableElement end */

/*** HTMLTableCaptionElement */
HTMLTableCaptionElement.prototype.Show = function() {
	this.style.display = "table-caption";
	return this;
}

HTMLTableCaptionElement.prototype.Show = function() {
	this.style.display = "table-caption";
	return this;
}

HTMLTableCaptionElement.prototype.Show = function() {
	return this.Show();
}
/*** TABLE-caption end */

/*** TABLE foot/head/body */
HTMLTableSectionElement.prototype.Show = function() {
	let tagName = this.tagName.toLowerCase();
	if (tagName == "tfoot")
		this.style.display = "table-footer-group";
	else if (tagName == "thead")
		style.display = "table-header-group";
	else if (tagName == "tbody")
		this.style.display = "table-row-group";
	else if (tagName == "colgroup")
		this.style.display = "table-column-group";
	return this;
}

HTMLTableSectionElement.prototype.show = function() {
	return this.Show();
}

HTMLTableSectionElement.prototype.Row = function(i) {
	if (typeof i != "undefined") return this.rows[i];
	return this.insertRow();
}

HTMLTableSectionElement.prototype.row = function(i) {
	return this.Row(i);
}

HTMLTableSectionElement.prototype.Length = function() {
	return this.rows.length;
}

/*** HTMLTableSectionElement foot/head/body end */

/*** HTMLTableColElement */

HTMLTableColElement.prototype.Show = function() {
	this.style.display = "table-column";
	return this;
}

HTMLTableColElement.prototype.show = function() {
	return this.Show();
}

HTMLTableColElement.prototype.Index = function() {
	return this.cellIndex;
}

HTMLTableColElement.prototype.index = function() {
	return this.cellIndex;
}

/*** HTMLTableColElement end */

/*** HTMLTableCellElement */

HTMLTableCellElement.prototype.Show = function() {
	this.style.display = "table-cell";
	return this;
}

HTMLTableCellElement.prototype.show = function() {
	return this.Show();
}

HTMLTableCellElement.prototype.Index = function() {
	return this.cellIndex;
}

HTMLTableCellElement.prototype.index = function() {
	return this.Index();
}

/*** */

/*** table cell end*/

/*** table row */
HTMLTableRowElement.prototype.Show = function() {
	this.style.display = "table-row";
	return this;
}

HTMLTableRowElement.prototype.show = function() {
	return this.Show();
}

HTMLTableRowElement.prototype.Index = function() {
	return this.rowIndex;
}

HTMLTableRowElement.prototype.index = function() {
	return this.Index();
}


HTMLTableRowElement.prototype.At = function(i) {
	return this.cells[i];
}

HTMLTableRowElement.prototype.at = function(i) {
	return this.At(i);
}


HTMLTableRowElement.prototype.Cell = function(i) {
	if (typeof i != "undefined") return this.cells[i];
	return this.insertCell();
}

HTMLTableRowElement.prototype.cell = function(i) {
	return this.Cell(i);
}

HTMLTableRowElement.prototype.ChildCount = function() {
	return this.cells.length;
}

HTMLTableRowElement.prototype.Length = function() {
	return this.ChildCount();
}

HTMLTableRowElement.prototype.ChildCount = function() {
	return this.ChildCount();
}


/*** HTMLTableRowElement end */

/*** HTMLDListElement */
HTMLDListElement.prototype.Show = function() {
	this.style.display = "list-item";
	return this;
}

HTMLDListElement.prototype.show = function() {
	return this.Show();
}
/*** HTMLDListElement end */


/*** HTMLUListElement */
HTMLUListElement.prototype.Show = function() {
	this.style.display = "list-item";
	return this;
}

HTMLUListElement.prototype.show = function() {
	return this.Show();
}
/*** HTMLUListElement end */
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////ALL INPUT RELATED////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*** HTMLTextAreaElement */
HTMLTextAreaElement.prototype.Val = function(v) {
	if (typeof v == "undefined") return this.value;
	this.value = v;
	return this;
}

HTMLTextAreaElement.prototype.val = function(v) {
	return this.Val(v);
}

HTMLTextAreaElement.prototype.Focus = function() {
	this.focus();
	return this;
}

HTMLTextAreaElement.prototype.IsDisabled = function() {
	return this.disabled === true || this.disabled == "true";
}

HTMLTextAreaElement.prototype.SetDisable = function(status) {
	this.disabled = status;
	return this;
}

HTMLTextAreaElement.prototype.Disable = function() {
	return this.setDisable(true);
}

HTMLTextAreaElement.prototype.Enable = function() {
	return this.setDisable(false);
}

HTMLTextAreaElement.prototype.ReadOnly = function(v) {
	if (typeof v == "undefined") return this.readOnly;
	this.readOnly = v;
	return this;
}

HTMLTextAreaElement.prototype.Show = function() {
	this.style.display = "inline-block";
	return this;
}

HTMLTextAreaElement.prototype.show = function() {
	return this.Show();
}

/***  TextArea end */

/***  Select */
HTMLSelectElement.prototype.Val = function(v) {
	if (typeof v == "undefined") return this.value;
	this.value = v;
	return this;
}

HTMLSelectElement.prototype.val = function(v) {
	return this.Val(v);
}

HTMLSelectElement.prototype.Focus = function() {
	this.focus();
	return this;
}

HTMLSelectElement.prototype.IsDisabled = function() {
	return this.disabled === true || this.disabled == "true";
}

HTMLSelectElement.prototype.SetDisable = function(status) {
	this.disabled = status;
	return this;
}

HTMLSelectElement.prototype.Disable = function() {
	return this.setDisable(true);
}

HTMLSelectElement.prototype.Enable = function() {
	return this.setDisable(false);
}

HTMLSelectElement.prototype.ReadOnly = function(v) {
	if (typeof v == "undefined") return this.readOnly;
	this.readOnly = v;
	return this;
}

HTMLSelectElement.prototype.Show = function() {
	this.style.display = "inline";
	return this;
}

HTMLSelectElement.prototype.show = function() {
	return this.Show();
}

/***  HTMLSelectElement end */


/***  input */
HTMLInputElement.prototype.Val = function(v) {
	if (typeof v == "undefined") return this.value;
	this.value = v;
	return this;
}

HTMLInputElement.prototype.val = function(v) {
	return this.Val(v);
}

HTMLInputElement.prototype.Type = function(v) {
	if (typeof v == "undefined") return this.type;
	this.type = v;
	return this;
}

HTMLInputElement.prototype.Focus = function() {
	this.focus();
	return this;
}

HTMLInputElement.prototype.Check = function(status) {
	if (typeof status == "undefined") return this.checked;
	this.checked = status;
	return this;
}

HTMLInputElement.prototype.IsChecked = function() {
	return this.checked.toString.toLowerCase() === "true";
}

HTMLInputElement.prototype.IsDisabled = function() {
	return this.disabled === true || this.disabled == "true";
}

HTMLInputElement.prototype.SetDisable = function(status) {
	this.disabled = status;
	return this;
}

HTMLInputElement.prototype.Disable = function() {
	return this.setDisable(true);
}

HTMLInputElement.prototype.Enable = function() {
	return this.setDisable(false);
}

HTMLInputElement.prototype.ReadOnly = function(v) {
	if (typeof v == "undefined") return this.readOnly;
	this.readOnly = v;
	return this;
}

HTMLSelectElement.prototype.Show = function() {
	this.style.display = "inline";
	return this;
}
/***  input end */

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/***  anchor */
HTMLAnchorElement.prototype.Src = function(v) {
	if (typeof v == "undefined") return this.src;
	this.src = v;
	return this;
}

/***  anchor end */

/***  img */
HTMLImageElement.prototype.Src = function(v) {
	if (typeof v == "undefined") return this.src;
	this.src = v;
	return this;
}

HTMLImageElement.prototype.Height = function(v) {
	if (typeof v == "undefined") return this.height;
	this.height = v;
	return this;
}

HTMLImageElement.prototype.Width = function(v) {
	if (typeof v == "undefined") return this.width;
	this.width = v;
	return this;
}

/***  img end */
$.ajax = function(params) {
	let aj = new Ajax();
	if (typeof params == "undefined") return aj;

	if (typeof params.path != "undefined") aj.path(params.path);
	if (typeof params.data != "undefined") aj.data(params.data);
	if (typeof params.success != "undefined") aj.success(params.success);
	if (typeof params.error != "undefined") aj.success(error.error);
	return aj;
}

$.makeid = function(length) {
	if (typeof length != "number" || length <= 0) length = 10;
	var cs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var csLen = cs.length;
	// making sure first character is alphabet, not number
	var r = cs.charAt(Math.floor(Math.random() * (csLen - 10)));

	for (var i = 1; i < length; i++) {
		r += cs.charAt(Math.floor(Math.random() * csLen));
	}
	return r;
}

$.mk = function(tag, parent) {
	let elem = document.createElement(tag);
	let ad = parent;
	if (typeof parent == "undefined" || parent == null) ad = document.body;
	ad.appendChild(elem);
	return elem;
}

$.newChild = function(tag, parent) {
	return this.mk(tag, parent);
}


$.makeChild = function(tag, parent) {
	return $.mk(tag, parent);
}

$.addStyle = function(styles, styleId) {
	styleId = styleId.replaceAll(/#/g, "");
	let s = $("#" + styleId);
	if (!(s instanceof HTMLStyleElement)) {
		s = $.mk("style", document.head).Id(styleId).Html(styles);
	} else {
		s.Html(s.Html() + styles);
	}
	return s;
}

$.addChild = function(tag, parent) {
	return $.newChild(tag, parent);
}

$.docHeight = function() {
	return Math.max(
		$.nullToNumber(document.body.scrollHeight),
		$.nullToNumber(document.documentElement.scrollHeightv),
		$.nullToNumber(document.body.offsetHeight),
		$.nullToNumber(document.documentElement.offsetHeight),
		$.nullToNumber(document.body.clientHeight),
		$.nullToNumber(document.documentElement.clientHeight)
	);
}

$.docWidth = function() {
	return Math.max(
		$.nullToNumber(document.body.scrollWidth),
		$.nullToNumber(document.documentElement.scrollWidth),
		$.nullToNumber(document.body.offsetWidth),
		$.nullToNumber(document.documentElement.offsetWidth),
		$.nullToNumber(document.body.clientWidth),
		$.nullToNumber(document.documentElement.clientWidth)
	);
}

$.nullToNumber = function(v, def) {
	if (typeof def == "undefined" || def == null) def = 0;
	let r = Number(v);
	if (v == null) return def;
	return r;
}

$.nullToString = function(v, def) {
	if (typeof def == "undefined" || def == null) def = "";
	return v == null || typeof v == "undefined" ? def : v;
}

$.nullToArray = function(v, def) {
	if (typeof def == "undefined" || def == null) def = [];
	return v == null || typeof v == "undefined" ? def : v;
}

$.nullToObject = function(v, def) {
	if (typeof def == "undefined" || def == null) def = {};
	return v == null || typeof v == "undefined" ? def : v;
}

$.undefToNull = function(v) {
	if (typeof v == "undefined") return null;
	return v;
}

$.isTrue = function(v) {
	if (v == null || typeof v == "undefined") {
		return false;
	}
	if (v.toString().toLowerCase() === "true") return true;
	return false;
}

$.istrue = function(v) {
	return $.isTrue(v);
}

$.isFalse = function(v) {
	if (v == null || typeof v == "undefined") {
		return false;
	}
	if (v.toString().toLowerCase() === "false") return true;
	return false;
}

$.isfalse = function(v) {
	return isFalse(v);
}

$.each = function(obj, f) {
	if (Array.isArray(obj)) {
		obj.each((e, i) => f(e, i));
	}
	else if (typeof obj == "object") {
		for (let key in obj) {
			f(key, obj[key]);
		}
	}
}

$.ua = function() {
	// Opera 8.0+
	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

	// Firefox 1.0+
	var isFirefox = typeof InstallTrigger !== 'undefined';

	// Safari 3.0+ "[object HTMLElementConstructor]" 
	var isSafari = /constructor/i.test(window.HTMLElement) || (function(p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof window.safari !== 'undefined' && window['safari'].pushNotification));

	// Internet Explorer 6-11
	var isIE = /*@cc_on!@*/false || !!document.documentMode;

	// Edge 20+
	var isEdge = !isIE && !!window.StyleMedia;

	// Chrome 1 - 79
	var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

	// Edge (based on chromium) detection
	var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

	// Blink engine detection
	var isBlink = (isChrome || isOpera) && !!window.CSS;


	if (isFirefox) return { browser: "firefox" };
	if (isChrome) return { browser: "chrome" };
	if (isSafari) return { browser: "safari" };
	if (isOpera) return { browser: "opera" };
	if (isIE) return { browser: "ie" };
	if (isEdge) return { browser: "edge" };
	if (isEdgeChromium) return { browser: "edge-chromium" };
	if (isBlink) return { browser: "blink" };
	return {};
}
