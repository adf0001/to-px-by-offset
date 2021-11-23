
// to-px-by-offset @ npm, transfer css property to px unit, by comparing offset-x property.

function toPxByOffset(el, styleName, offsetName) {
	if (typeof el === "string") el = document.getElementById(el);

	var s = "" + el.style[styleName];
	if (s.match(/^(\d+)px$/)) return parseInt(s);

	var n = el[offsetName];
	el.style[styleName] = n + "px";
	n -= (el[offsetName] - n);
	el.style[styleName] = n + "px";
	return n;
}

function toPxByParentOffset(el, styleName, parentOffsetName, offsetName1, offsetName2) {
	if (typeof el === "string") el = document.getElementById(el);

	var s = "" + el.style[styleName];
	if (s.match(/^(\d+)px$/)) return parseInt(s);

	var n = el.offsetParent[parentOffsetName] - el[offsetName1] - el[offsetName2];
	el.style[styleName] = n + "px";
	n -= (el.offsetParent[parentOffsetName] - el[offsetName1] - el[offsetName2] - n);
	el.style[styleName] = n + "px";
	return n;
}

// module

module.exports = {
	toPxByOffset: toPxByOffset,
	toPxByParentOffset: toPxByParentOffset,

	width: function (el) { return toPxByOffset(el, "width", "offsetWidth"); },
	left: function (el) { return toPxByOffset(el, "left", "offsetLeft"); },
	height: function (el) { return toPxByOffset(el, "height", "offsetHeight"); },
	top: function (el) { return toPxByOffset(el, "top", "offsetTop"); },
	right: function (el) { return toPxByParentOffset(el, "right", "offsetWidth", "offsetLeft", "offsetWidth"); },
	bottom: function (el) { return toPxByParentOffset(el, "bottom", "offsetHeight", "offsetTop", "offsetHeight"); },
}
