"use strict";

class Validation {

	#onFail;
	#onSuccess;
	constructor(f, s) {
		this.#onFail = f;
		if (typeof s == "undefined")
			s = () => { };
		this.#onSuccess = s;

		return this;
	}

	#failMessage(msg) {
		if (typeof msg == "undefined") {
			return "";
		}

		if (typeof this.#onFail == "undefined")
			return msg + "\n";
		return msg + "<br>";
	}

	equals(expected, result, msg) {
		if (typeof expected !== typeof result) {
			let str = this.#failMessage(msg) + "Type dose not match, \nexpected type: " + (typeof expected) + "\nfound type: " + (typeof result);
			if (typeof this.#onFail == "undefined") throw str;
			else this.#onFail(str);
			return;
		}
		if (expected != result) {
			let str = this.#failMessage(msg) + "Dose not match, \nexpected: " + (expected) + "\nfound: " + (result);
			if (typeof this.#onFail == "undefined") throw str;
			else this.#onFail(str);
			return;
		}

		this.#onSuccess();
	}

	null(result, msg) {
		if (result !== null) {
			let str = this.#failMessage(msg) + "Expected null. \nfound: " + result.toString();
			if (typeof this.#onFail == "undefined") throw str;
			else this.#onFail(str);
			return;
		}
		this.#onSuccess();
	}

	true(result, msg) {
		if (result !== true) {
			let str = this.#failMessage(msg) + "Expected true(boolean). \nfound: " + result.toString();
			if (typeof this.#onFail == "undefined") throw str;
			else this.#onFail(str);
			return;
		}
		this.#onSuccess();
	}

	false(result, msg) {
		if (result !== false) {
			let str = this.#failMessage(msg) + "Expected false(boolean). \nfound: " + result.toString();
			if (typeof this.#onFail == "undefined") throw str;
			else this.#onFail(str);
			return;
		}
		this.#onSuccess();
	}
}
