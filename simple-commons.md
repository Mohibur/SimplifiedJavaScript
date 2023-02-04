# String based methods

<h2>String.matchCount()</h2>

<h3>Syntax</h3>

```javascript
  matchCount(reg)
```
<h3>Parameters</h3>

&emsp;`reg`<br>
&emsp;&emsp;instnace of [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)


<h3>Return value</h3>

&emsp;`Integer`<br>
&emsp;&emsp;Counts of matching result

---

<h2>String.toInt()</h2>

<h3>Syntax</h3>

```javascript
  toInt()
```

<h3>Parameters</h3>

&emsp;`None`<br>


<h3>Return value</h3>

&emsp;`Integer`<br>
&emsp;&emsp; [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) method will be called

&emsp;`NaN`<br>
&emsp;&emsp; incase if not a valid number

---


<h2>String.toFloat()</h2>

<h3>Syntax</h3>

```javascript
  toFloat()
```

<h3>Parameters</h3>

&emsp;`None`<br>


<h3>Return value</h3>

&emsp;`Float`<br>
&emsp;&emsp; [parseFloat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) method will be called

&emsp;`NaN`<br>
&emsp;&emsp; incase if not a valid number

---

<h2>String.toNumber()</h2>

<h3>Syntax</h3>

```javascript
  toNumber()
```

<h3>Parameters</h3>

&emsp;`None`<br>


<h3>Return value</h3>

&emsp;`Float`<br>
&emsp;&emsp; [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number) method will be called

&emsp;`NaN`<br>
&emsp;&emsp; incase if the string not a valid number

---

<h2>String.toBool(), String.toBoolean()</h2>

<h3>Syntax</h3>

```javascript
  toBool()
  toBoolean()
```

<h3>Parameters</h3>

&emsp;`None`<br>


<h3>Return value</h3>

&emsp;`Boolean`<br>
&emsp;&emsp; `0, false == false` and `1, true == true`

&emsp;`NaN`<br>
&emsp;&emsp; if not a valid boolean 

---



<h2>String.isTrue()</h2>

<h3>Syntax</h3>

```javascript
  isTrue()
```

<h3>Parameters</h3>

&emsp;`None`<br>


<h3>Return value</h3>

&emsp;`Boolean`<br>
&emsp;&emsp; if the string is `"ture"` or `"1"` then returns true; false otherwise

---

<h2>String.isFalse()</h2>

<h3>Syntax</h3>

```javascript
  isFalse()
```

<h3>Parameters</h3>

&emsp;`None`<br>


<h3>Return value</h3>

&emsp;`Boolean`<br>
&emsp;&emsp; if the string is `"false"` or `"0"` then returns true; false otherwise

---




String.prototype.isFalse = function(v) {
	if (this === "0" || this.toLowerCase() === "false") return true;
	return false;
}

String.prototype.encode = function() {
	return this
		.replaceAll(/&/g, "&amp;")
		.replaceAll(/ /g, "&nbsp;")
		.replaceAll(/\t/g, "&emsp;")
		.replaceAll(/</g, "&lt;")
		.replaceAll(/>/g, "&gt;")
}

////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Array Class///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

Array.prototype.each = function(f) {
	this.forEach((e, i) => f(e, i));
}

Array.prototype.contains = function(v) {
	return this.includes(v);
}

Array.prototype.has = function(v) {
	return this.includes(v);
}

Array.prototype.match = function(v, s) {
	if (!(v instanceof RegExp)) throw "Match exptected to be instance of RegExp";
	if (typeof s == "undefined" || s == null || !isNaN(parseInt(s))) s = 0;
	for (let i = s; i < this.length; i++) {
		if (this[i].match(v)) return this[i];
	}
}

Array.prototype.matchesAll = function(v, s) {
	if (!(v instanceof RegExp)) throw "Match exptected to be instance of RegExp";
	if (typeof s == "undefined" || s == null || !isNaN(parseInt(s))) s = 0;
	let r = [];
	for (let i = s; i < this.length; i++) {
		if (this[i].match(v)) r.push(this[i]);
	}
	return r;
}

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////Date Class///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//\\ FORMATS
Date.prototype.formattedDate = function() {
	return (this.getFullYear()) + "-" + this.paddedMonth() + "-" + this.paddedDate();
}

Date.prototype.jpFormattedDate = function() {
	return (this.getFullYear()) + "年" + this.paddedMonth() + "月" + this.paddedMonth() + "日";
}

Date.prototype.toString = function() {
	return this.formattedDate();
}

Date.prototype.getFullMonth = function() {
	return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][this.getMonth()];
}

Date.prototype.getShortMonth = function() {
	return this.getFullMonth().slice(0, 3);
}

Date.prototype.paddedMonth = function() {
	let m = this.getMonth() + 1;
	return m < 10 ? "0" + m : m + "";
}

Date.prototype.getFullDay = function() {
	return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][this.getDay()];
}

Date.prototype.getShortDay = function() {
	return this.getFullDay().slice(0, 3);
}

Date.prototype.printCalendarFirstDate = function() {
	return new Date(this.getFullYear(), this.getMonth(), 1 - new Date(this.getFullYear(), this.getMonth(), 1).getDay());
};

Date.prototype.paddedDate = function() {
	return this.getDate() < 10 ? "0" + this.getDate() : this.getDate() + "";
}


/////////////////////////////////////////////////////////

//\\ JUMP
Date.prototype.nextMonth = function() {
	return new Date(this.getFullYear(), this.getMonth() + 1, this.getDate());
}

Date.prototype.prevMonth = function() {
	return new Date(this.getFullYear(), this.getMonth() - 1, this.getDate());
}

Date.prototype.lastMonth = function() {
	return new Date(this.getFullYear(), this.getMonth() - 1, this.getDate());
}

Date.prototype.nextYear = function() {
	return new Date(this.getFullYear() + 1, this.getMonth(), this.getDate());
}

Date.prototype.lastYear = function() {
	return new Date(this.getFullYear() - 1, this.getMonth(), this.getDate());
}

Date.prototype.prevYear = function() {
	return new Date(this.getFullYear() - 1, this.getMonth(), this.getDate());
}

Date.prototype.firstDate = function() {
	return new Date(this.getFullYear(), this.getMonth() - 1, 1);
}

Date.prototype.lastDate = function() {
	return new Date(this.getFullYear(), this.getMonth() + 1, 0);
}

Date.prototype.tomorrow = function() {
	return new Date(this.getFullYear(), this.getMonth(), this.getDate() + 1)
}

Date.prototype.yesterday = function() {
	return new Date(this.getFullYear(), this.getMonth(), this.getDate() - 1)
}
////////////////////////////////////

//\\ Math
Date.prototype.addDays = function(nd) {
	return new Date(this.getFullYear(), this.getMonth(), this.getDate() + nd);
}

Date.prototype.addMonths = function(nm) {
	return new Date(this.getFullYear(), this.getMonth() + nm, this.getDate());
}

Date.prototype.addYears = function(ny) {
	return new Date(this.getFullYear() + ny, this.getMonth(), this.getDate());
}


//\\ COMPARE
Date.prototype.isSameMonth = function(d2) {
	return this.getFullYear() == d2.getFullYear() && this.getMonth() == d2.getMonth()
}

Date.prototype.isSameDate = function(d2) {
	return this.getFullYear() == d2.getFullYear() && this.getMonth() == d2.getMonth() && this.getDate() == d2.getDate();
}

Date.prototype.isOldMonth = function(d) {
	if ((d.getFullYear() < this.getFullYear()) || (d.getFullYear() == this.getFullYear() && d.getMonth() < this.getMonth())) return true;
	return false;
}

Date.prototype.isFuture = function(d) {
	return this.getFullYear() < d.getFullYear() ||
		(this.getFullYear() == d.getFullYear() &&
			(this.getMonth() < d.getMonth() ||
				(this.getMonth() == d.getMonth() && this.getDate() < d.getDate())));
}

Date.prototype.isSatOrSun = function() {
	return this.getDay() == 0 || this.getDay() == 6;
}

Date.prototype.isSun = function() {
	return this.getDay() == 0;
}

Date.prototype.isMon = function() {
	return this.getDay() == 1;
}

Date.prototype.isTue = function() {
	return this.getDay() == 2;
}

Date.prototype.isWed = function() {
	return this.getDay() == 3;
}

Date.prototype.isThu = function() {
	return this.getDay() == 4;
}

Date.prototype.isFri = function() {
	return this.getDay() == 5;
}

Date.prototype.isSat = function() {
	return this.getDay() == 6;
}
