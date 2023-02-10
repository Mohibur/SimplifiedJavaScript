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
&emsp;&emsp; `(0, false) == false` and `(1, true) == true`

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

<h2>String.encode()</h2>

<h3>Description</h3>
<h3>Encoding the following characters: <br>
&emsp;&emsp;`&` to `&amp;amp;`<br>
&emsp;&emsp;` ` (whitespace) to `&amp;nbsp;`<br>
&emsp;&emsp;`\t` to `&amp;empsp;`<br>
&emsp;&emsp;`&lt;` to `&amp;lt;`<br>
&emsp;&emsp;`&gt;` to `&amp;gt;`</h3>

<h3>Syntax</h3>

```javascript
encode()
```

<h3>Parameters</h3>

&emsp;`None`<br>


<h3>Return value</h3>

&emsp;`None`<br>

---

# Array Class

---

<h2>Array.each(f)</h2>

<h3>Description</h3>

<h2>Alias of [Array.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)</h2>

<h3>Syntax</h3>

```javascript
encode()
```

<h3>Parameters</h3>

&emsp;`None`<br>


<h3>Return value</h3>

&emsp;`None`<br>

---

<h3>Array.contains, Array.has</h3>

<h3>Description</h3>
<h3>&emsp;Alias for [Array.prototype.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)</h3>

---

# Date Class

---

<h3>Date.toString, Date.formattedDate(), Date.iso8601Date()</h3>

<h3>Description</h3>
<h4>[Date](https://en.wikipedia.org/wiki/ISO_8601). Format: YYYY-MM-DD</h4>

<h3>Parameters</h3>

&emsp;`None`<br>


<h3>Return value</h3>

&emsp;`String`<br>
&emsp;&emsp;Returning formatted date

---

<h3>Date.jpFormattedDate()</h3>

<h3>Description</h3>
<h4>Return string as following format: YYYY年MM月DD日</h4>

<h3>Parameters</h3>

&emsp;`None`<br>


<h3>Return value</h3>

&emsp;`String`<br>
&emsp;&emsp;Returning formatted date in Japanese standard

<h3>Example</h3>
&emsp;&emsp;2023年01月15日

---

<h3>Date.getFullMonth()</h3>

<h3>Description</h3>
<h4>Return full name of month in Gerogian Calendar</h4>
<h3>Parameters</h3>

&emsp;`None`<br>


<h3>Return value</h3>

&emsp;`String`<br>
&emsp;&emsp; Returns one of the following <br>
&emsp;&emsp;&emsp;- `January`<br>
&emsp;&emsp;&emsp;- `February`<br>
&emsp;&emsp;&emsp;- `March` <br>
&emsp;&emsp;&emsp;- `April`<br>
&emsp;&emsp;&emsp;- `May`<br>
&emsp;&emsp;&emsp;- `June`<br>
&emsp;&emsp;&emsp;- `July`<br>
&emsp;&emsp;&emsp;- `August`<br>
&emsp;&emsp;&emsp;- `September`<br>
&emsp;&emsp;&emsp;- `October`<br>
&emsp;&emsp;&emsp;- `November`<br>
&emsp;&emsp;&emsp;- `December`</h4>

---

<h3>Date.getShortMonth()</h3>

<h3>Description</h3>
<h4>Return first three letters of name of month in Gerogian Calendar</h4>

<h3>Parameters</h3>

&emsp;`None`<br>

<h3>Return value</h3>

&emsp;`String`<br>
&emsp;&emsp; Returns one of the following <br>
&emsp;&emsp;&emsp;- `Jan`<br>
&emsp;&emsp;&emsp;- `Feb`<br>
&emsp;&emsp;&emsp;- `Mar` <br>
&emsp;&emsp;&emsp;- `Apr`<br>
&emsp;&emsp;&emsp;- `May`<br>
&emsp;&emsp;&emsp;- `Jun`<br>
&emsp;&emsp;&emsp;- `Jul`<br>
&emsp;&emsp;&emsp;- `Aug`<br>
&emsp;&emsp;&emsp;- `Sep`<br>
&emsp;&emsp;&emsp;- `Oct`<br>
&emsp;&emsp;&emsp;- `Nov`<br>
&emsp;&emsp;&emsp;- `Dec`</h4>

---

<h3>Date.getFullDay()</h3>

<h3>Description</h3>
<h4>Returns the full name of week day</h4>

<h3>Parameters</h3>

&emsp;`None`<br>

<h3>Return value</h3>

&emsp;`String`<br>
&emsp;&emsp; Returns one of the following <br>
&emsp;&emsp;&emsp;- `Sunday`<br>
&emsp;&emsp;&emsp;- `Monday`<br>
&emsp;&emsp;&emsp;- `Tuesday` <br>
&emsp;&emsp;&emsp;- `Wednesday`<br>
&emsp;&emsp;&emsp;- `Thursday`<br>
&emsp;&emsp;&emsp;- `Friday`<br>
&emsp;&emsp;&emsp;- `Saturday`</h4>

---

<h3>Date.getShortDay()</h3>

<h3>Description</h3>
<h4>Returns first three letters of name of week day</h4>

<h3>Parameters</h3>

&emsp;`None`<br>

<h3>Return value</h3>

&emsp;`String`<br>
<h4>&emsp;&emsp; Returns one of the following <br>
&emsp;&emsp;&emsp;- `Sun`<br>
&emsp;&emsp;&emsp;- `Mon`<br>
&emsp;&emsp;&emsp;- `Tue` <br>
&emsp;&emsp;&emsp;- `Wed`<br>
&emsp;&emsp;&emsp;- `Thu`<br>
&emsp;&emsp;&emsp;- `Fri`<br>
&emsp;&emsp;&emsp;- `Sat`</h4>

---

<h3>Date.nextMonth()</h3>

<h3>Description</h3>
<h4>Returns the next month</h4>

<h3>Parameters</h3>

&emsp;`None`<br>

<h3>Return value</h3>

<h4>&emsp;`Date`<br>
&emsp;&emsp; Returns the next month <br>
</h4>

<h3>Example</h3>

```javascript
// example 1
let d = new Date("2023-03-31");
d.nextMonth();
> Date Fri Mar 31 2023 09:00:00 GMT+0900 (Japan Standard Time)

// example 2
let d = new Date("2023-01-31");
> Date Tue Jan 31 2023 09:00:00 GMT+0900 (Japan Standard Time)

d.nextMonth();
> Date Tue Feb 28 2023 00:00:00 GMT+0900 (Japan Standard Time)

// example 3
let d = new Date("2023-02-09");
> Date Thu Feb 09 2023 09:00:00 GMT+0900 (Japan Standard Time)

d.nextMonth()
> Date Thu Mar 09 2023 00:00:00 GMT+0900 (Japan Standard Time)

```

---

<h3>Date.prevMonth(), Date.lastMonth()</h3>

<h3>Description</h3>
<h4>Returns Previous month</h4>

<h3>Parameters</h3>

&emsp;`None`<br>

<h3>Return value</h3>

<h4>&emsp;`Date`<br>
&emsp;&emsp; Returns the next month <br>
</h4>

<h3>Example</h3>

```javascript
// example 1
let d = new Date("2023-03-31");
d.nextMonth();
> Date Fri Mar 31 2023 09:00:00 GMT+0900 (Japan Standard Time)

// example 2
let d = new Date("2023-01-31");
> Date Tue Jan 31 2023 09:00:00 GMT+0900 (Japan Standard Time)

d.nextMonth();
> Date Tue Feb 28 2023 00:00:00 GMT+0900 (Japan Standard Time)

// example 3
let d = new Date("2023-02-09");
> Date Thu Feb 09 2023 09:00:00 GMT+0900 (Japan Standard Time)

d.nextMonth()
> Date Thu Mar 09 2023 00:00:00 GMT+0900 (Japan Standard Time)

```

---

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
