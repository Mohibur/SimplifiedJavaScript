window.w = {};
window.w.t = new TestWindow();

// testing function
(function() {
	let x = function() { };
	w.t.t().true(x.isFunction());
}());

//testing String
(function() {
	w.t.t().true("".isString());
	w.t.t().true("".isObject());
}());


(function() {
	w.t.t().equals(0, "".matchCount("a"));
	w.t.t().equals(1, "a".matchCount("a"));
	w.t.t().equals(3, "aaa".matchCount("a"));
	w.t.t().equals(1, "aaa".matchCount("aaa"));
	w.t.t().equals(1, "abaca".matchCount(/ac/g));
}());

(function() {
	w.t.t().NaN("".toInt());
	w.t.t().NaN("dd11.0".toInt());
	w.t.t().equals(0, "0".toInt());
	w.t.t().equals(1, "1.01".toInt());
	w.t.t().equals(0, "0.01".toInt());
	w.t.t().equals(0, "-0.01".toInt());
	w.t.t().equals(-1, "-1.01".toInt());
	w.t.t().equals(11, "11ab".toInt());
	w.t.t().equals(11, "11.0ab".toInt());
	w.t.t().equals(11, "11.ab".toInt());
}());

(function() {
	w.t.t().NaN("".toFloat());
	w.t.t().equals(0, "0".toFloat());
	w.t.t().equals(1.01, "1.01".toFloat());
	w.t.t().equals(0.01, "0.01".toFloat());
	w.t.t().equals(-0.01, "-0.01".toFloat());
	w.t.t().equals(-1.01, "-1.01".toFloat());
	w.t.t().equals(-1.01, "-1.01xyz".toFloat());
}());


(function() {
	w.t.t().NaN("".toBoolean());
	w.t.t().false("FalSe".toBoolean());
	w.t.t().true("trUE".toBoolean());
	w.t.t().NaN("TrueThat".toBoolean());

	w.t.t().false("0".toBoolean());
	w.t.t().true("1".toBoolean());
	w.t.t().NaN("11".toBoolean());
}());

(function() {
	w.t.t().equals("01", Date.PadZero("1", 2));
	w.t.t().equals("01", Date.PadZero("01", 2));
	w.t.t().equals("001", Date.PadZero("001", 2));
	w.t.t().equals("1001", Date.PadZero("1001", 2));

	let d = new Date("2020-02-01");
	w.t.t().equals("2020-02-01T09:00:00", d.iso8601Datetime());
	w.t.t().equals("2020-02-01", d.iso8601Date());

	d = new Date("2020-02-01T10:01:20");
	w.t.t().equals("2020-02-01T10:01:20", d.iso8601Datetime());
	w.t.t().equals("2020-02-01", d.iso8601Date());
}());

(function() {
	let t = w.t.t();
	t.equals("2023-02-28", new Date("2023-01-31").nextMonth().toString());
	t.equals("2024-02-29", new Date("2024-01-31").nextMonth().toString());
	t.equals("2023-01-01", new Date("2022-12-01").nextMonth().toString());
}());

(function() {
	let t = w.t.t();
	t.equals("2022-12-31", new Date("2023-01-31").prevMonth().toString());
	t.equals("2024-02-01", new Date("2024-03-01").prevMonth().toString());
	t.equals("2024-02-16", new Date("2024-03-16").prevMonth().toString());
	t.equals("2024-02-29", new Date("2024-03-31").prevMonth().toString());
}());

(function() {
	let t = w.t.t();
	t.equals("2023-02-28", new Date("2024-02-29").prevYear().toString());

	t.equals("2023-02-28", new Date("2024-02-28").prevYear().toString());
}());

(function() {
	let t = w.t.t();
	t.equals("2023-01-31", new Date("2023-01-01").lastDate().toString());
	t.equals("2023-02-28", new Date("2023-02-01").lastDate().toString());
	t.equals("2024-02-29", new Date("2024-02-01").lastDate().toString());
	t.equals("2023-03-31", new Date("2023-03-01").lastDate().toString());
	t.equals("2023-04-30", new Date("2023-04-01").lastDate().toString());
	t.equals("2023-05-31", new Date("2023-05-01").lastDate().toString());
	t.equals("2023-06-30", new Date("2023-06-01").lastDate().toString());
	t.equals("2023-07-31", new Date("2023-07-01").lastDate().toString());
	t.equals("2023-08-31", new Date("2023-08-01").lastDate().toString());
	t.equals("2023-09-30", new Date("2023-09-01").lastDate().toString());
	t.equals("2023-10-31", new Date("2023-10-01").lastDate().toString());
	t.equals("2023-11-30", new Date("2023-11-01").lastDate().toString());
	t.equals("2023-12-31", new Date("2023-12-01").lastDate().toString());
}());

(function() {
	let t = w.t.t();
	t.equals("2023-01-01", new Date("2022-12-31").tomorrow().toString());
	t.equals("2024-02-29", new Date("2024-02-28").tomorrow().toString());
	t.equals("2023-02-01", new Date("2023-01-31").tomorrow().toString());
}());



(function() {
	let t = w.t.t();
	t.equals("2022-12-31", new Date("2023-01-01").yesterday().toString());
	t.equals("2022-12-31", new Date("2023-01-01").yesterday().toString());
	t.equals("2024-02-29", new Date("2024-03-01").yesterday().toString());
}());

// need to confirm
(function() {
	let t = w.t.t();
	t.true(new Date("2022-01-01").isSameMonth(new Date("2022-01-01")));
	t.true(new Date("2022-01-01").isSameMonth(new Date("2022-01-02")));
	t.false(new Date("2022-02-01").isSameMonth(new Date("2022-01-02")));
	t.false(new Date("2023-01-01").isSameMonth(new Date("2022-01-02")));
}());
