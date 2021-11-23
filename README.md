# to-px-by-offset
transfer css property to px unit, by comparing offset-x properties.

# Install
```
npm install to-px-by-offset
```

# Usage
```javascript

document.getElementById('divResult3').innerHTML =
	"<div id='div1' style='width:10em;background:#aaffff;'>1</div>" +
	"<div id='div2' style='width:10em;background:#ffaaff;'>2</div>" +
	"<div style='width:15em;position:relative;'>" +
	"	<div id='div3' style='position:absolute;top:0em;left:1em;right:10em;background:#aaffff;'>1</div>" +
	"	<div id='div4' style='position:absolute;top:2em;left:1em;right:10em;background:#ffaaff;'>2</div>" +
	"</div>" +
	"";

to_px_by_offset.width('div2');		//style.width is transfered to 'px' unit
to_px_by_offset.left('div4');
to_px_by_offset.right('div4');

(document.getElementById('div1').offsetWidth===document.getElementById('div2').offsetWidth) &&
(document.getElementById('div3').offsetWidth===document.getElementById('div4').offsetWidth)

```
