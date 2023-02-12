"use strict";

/*
	* extension added to
	* * Object 
	* * String
	* * Array
	* * Date
*/

// all Objects
Object.prototype.isObject = () => true;
Object.prototype.isString = () => false;
Object.prototype.isFunction = () => false;
Object.prototype.isArray = () => false;

// Function
Object.prototype.isFunction = () => true;

// String
String.prototype.isString = () => true;

String.prototype.matchCount = function(reg) {
	return ([...this.matchAll(reg)] || []).length;
}

String.prototype.toInt = function() {
	return parseInt(this);
}

String.prototype.toFloat = function() {
	return parseFloat(this);
}

String.prototype.toNumber = function() {
	return Number(this);
}

String.prototype.toBoolean = String.prototype.toBool = function() {
	if (this === "0" || this.toLowerCase() === "false") return false;
	if (this === "1" || this.toLowerCase() === "true") return true;
	return NaN;
}

String.prototype.isTrue = function() {
	return this.toLowerCase() === "true" || this.toLowerCase() === "1" || this.toLowerCase() == "yes";
}

String.prototype.isFalse = function(v) {
	return this === "0" || this.toLowerCase() === "false" || this.toLocaleUpperCase() == "no";
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

Array.prototype.isArray = () => true;

Array.prototype.each = Array.prototype.forEach;

Array.prototype.contains = Array.prototype.includes;

Array.prototype.has = Array.prototype.includes;

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////Date Class///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//\\ FORMATS

Date.PadZero = function(n, l) {
	n = n.toString();
	let count = l - n.length;
	if (count <= 0) return n;
	let r = []
	for (let i = 0; i < count; i++) r.push("0");
	r.push(n);
	return r.join("");
}

Date.prototype.iso8601Datetime = Date.prototype.formattedDatetime = function() {
	return this.getFullYear() + //
		"-" + Date.PadZero(this.getMonth() + 1, 2) + //
		"-" + Date.PadZero(this.getDate(), 2) + //
		"T" + Date.PadZero(this.getHours(), 2) + //
		":" + Date.PadZero(this.getMinutes(), 2) + //
		":" + Date.PadZero(this.getSeconds(), 2);
}

Date.prototype.iso8601Date = Date.prototype.formattedDate = function() {
	return (this.getFullYear()) + "-" + Date.PadZero(this.getMonth() + 1, 2) + "-" + Date.PadZero(this.getDate(), 2);
}

Date.prototype.jpFormattedDate = function() {
	return (this.getFullYear()) + "年" + Date.PadZero(this.getMonth() + 1, 2) + "月" + Date.PadZero(this.getDate(), 2) + "日";
}

Date.prototype.toString = function() {
	return this.formattedDate();
}

Date.prototype.timeToString = function() {
	return this.formattedDateTime();
}

Date.prototype.getFullMonth = function() {
	return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][this.getMonth()];
}

Date.prototype.getShortMonth = function() {
	return this.getFullMonth().slice(0, 3);
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

////////////////////////////////////////////////////////////////////////////////

//\\ JUMP
Date.prototype.nextMonth = function() {
	let test = new Date(this.getFullYear(), this.getMonth() + 1, this.getDate());
	if (this.getMonth() + 1 != test.getMonth() && this.getFullYear() + 1 != test.getFullYear()) {
		return new Date(test.getFullYear(), test.getMonth() - 1).lastDate();
	}
	return test;
}

Date.prototype.lastMonth = Date.prototype.prevMonth = function() {
	let test = new Date(this.getFullYear(), this.getMonth() - 1, this.getDate());

	if (this.getMonth() - 1 != test.getMonth() && this.getFullYear() - 1 != test.getFullYear()) {
		return new Date(test.getFullYear(), test.getMonth() - 1).lastDate();
	}
	return test;
}

Date.prototype.nextYear = function() {
	return new Date(this.getFullYear() + 1, this.getMonth(), this.getDate());
}

Date.prototype.prevYear = Date.prototype.lastYear = function() {

	let test = new Date(this.getFullYear() - 1, this.getMonth(), this.getDate());
	if (this.getMonth() != test.getMonth()) {
		return new Date(test.getFullYear() + "-02-28")
	}
	return test;
}

Date.prototype.firstDate = function() {
	return new Date(this.getFullYear(), this.getMonth(), 1);
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

// TODO
// Is this old Month
Date.prototype.amIPastMonth = Date.prototype.isPastMonth = function(d) {
	if ((d.getFullYear() < this.getFullYear()) || (d.getFullYear() == this.getFullYear() && d.getMonth() < this.getMonth())) return true;
	return false;
}

// TODO
// Is this future month
Date.prototype.amIFutureMonth  = Date.prototype.isFutureMonth = function(d) {
	if ((d.getFullYear() > this.getFullYear()) || (d.getFullYear() == this.getFullYear() && d.getMonth() < this.getMonth())) return true;
	return false;
}


// Is this future
Date.prototype.amIFuture = Date.prototype.isFuture = function(d) {
	return this.getFullYear() < d.getFullYear() ||
		(this.getFullYear() == d.getFullYear() &&
			(this.getMonth() < d.getMonth() ||
				(this.getMonth() == d.getMonth() && this.getDate() < d.getDate())));
}

// Is this past
Date.prototype.amIpast = Date.prototype.isPast = function(d) {
	return this.getFullYear() < d.getFullYear() ||
		(this.getFullYear() == d.getFullYear() &&
			(this.getMonth() < d.getMonth() ||
				(this.getMonth() == d.getMonth() && this.getDate() < d.getDate())));
}

Date.prototype.amISatOrSun =  Date.prototype.isSatOrSun = function() {
	return this.getDay() == 0 || this.getDay() == 6;
}

Date.prototype.amISun = Date.prototype.isSun = function() {
	return this.getDay() == 0;
}

Date.prototype.amIMon = Date.prototype.isMon = function() {
	return this.getDay() == 1;
}

Date.prototype.amITue = Date.prototype.isTue = function() {
	return this.getDay() == 2;
}

Date.prototype.amIWed = Date.prototype.isWed = function() {
	return this.getDay() == 3;
}

Date.prototype.amIThu = Date.prototype.isThu = function() {
	return this.getDay() == 4;
}

Date.prototype.amIFri = Date.prototype.isFri = function() {
	return this.getDay() == 5;
}

Date.prototype.amISat = Date.prototype.isSat = function() {
	return this.getDay() == 6;
}

