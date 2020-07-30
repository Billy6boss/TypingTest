var totalLine
var line = 0;

$().ready(function() {
	totalLine = $('p');
	// console.log(totalLine);

	$(totalLine[line]).addClass('animation');
	totalLine[line].addEventListener("animationend",setListener);
});

function setListener(e) {
	line++;
	if (totalLine[line]) {
		if (line > 5) {
			totalLine[line].scrollIntoView(false);
			window.scrollBy(0, 30);
		}
		$(totalLine[line]).addClass('animation');
		 totalLine[line].addEventListener("animationend",setListener);
	}
}