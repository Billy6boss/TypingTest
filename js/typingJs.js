let wordLength = Object.keys(wordList[0]).length;

function randomR(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 1; i <= wordLength; i++) {
    let $wordDiv = $("<div />");
    $wordDiv.text(wordList[0][randomR(1, wordLength)]);
    $wordDiv.attr('id', "w"+i);
    $wordDiv.attr('class', 'word');
    $("#contant").append($wordDiv);

}



$(document).ready(function () {
    let textes = "";
    let isMatch = false;
    let corroctWordCount = 0;
    let wrongWordCount = 0;
    let testingWordId = 1;
    let mmSecond = 0;
    let mSecond = 0;
    let Second = 0;
    let tt;

    function isMatchWord(inputWord) {
        if (inputWord == $("#w" + testingWordId).text()) {
            $("#w" + testingWordId).addClass("match-word");
            isMatch = true;
        } else {
            $("#w" + testingWordId).removeClass("match-word");
            isMatch = false;
        }
    }

    function timer() {
        mmSecond++;
        if (mmSecond >= 10) {
            mSecond++;
            mmSecond = 0;
        }
        if (mSecond >= 10) {
            Second++;
            mSecond = 0;
        }

        $("#timer").text(Second + "." + mSecond + mmSecond);
    }

    $(document).on("keyup", function (event) {
        if (event.keyCode != 32 && event.keyCode != 13 && event.keyCode != 16 && event.keyCode != 20 && event.keyCode != 8 && event.keyCode != 116) {
            textes += event.key;
            if (!tt)
                tt = setInterval(timer, 10);

            // BackSpace
        } else if (event.keyCode == 8) {
            textes = textes.slice(0, -1);
            // Enter
        } else if (event.keyCode == 13) {
            textes = "";
            // Space
        } else if (event.keyCode == 32) {
            textes += event.key;
            if (isMatch)
                corroctWordCount++;
            else
                wrongWordCount++;

            $("#w" + testingWordId).remove();
            console.log(textes);
            textes = "";
            testingWordId++;
            if (testingWordId > 10) {
                clearInterval(tt);
                tt = null;
                $("#score-corroct").text(corroctWordCount);
                $("#score-wrong").text(wrongWordCount);
                let sec = parseFloat($("#timer").text());
                $("#WPS").text(sec / (corroctWordCount + wrongWordCount));
            }
        }
        $(".input-text").text(textes);
        isMatchWord(textes);
    })
})