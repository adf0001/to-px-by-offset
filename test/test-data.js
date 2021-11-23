// global, for html page
to_px_by_offset = require("../to-px-by-offset.js");

module.exports = {

	".width()": function (done) {
		document.getElementById('divResult3').innerHTML =
			"<div id='div1' style='width:10em;background:#aaffff;'>1</div>" +
			"<div id='div2' style='width:10em;background:#ffaaff;'>2</div>" +
			"";

		to_px_by_offset.width('div2');

		return (
			(document.getElementById('div1').offsetWidth === document.getElementById('div2').offsetWidth)
		);
	},

	".left()/.right()": function (done) {
		document.getElementById('divResult3').innerHTML =
			"<div style='width:15em;position:relative;'>" +
			"	<div id='div1' style='position:absolute;top:0em;left:1em;right:10em;background:#aaffff;'>1</div>" +
			"	<div id='div2' style='position:absolute;top:2em;left:1em;right:10em;background:#ffaaff;'>2</div>" +
			"</div>" +
			"";

		to_px_by_offset.left('div2');
		to_px_by_offset.right('div2');

		return (
			(document.getElementById('div1').offsetWidth === document.getElementById('div2').offsetWidth)
		);
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
