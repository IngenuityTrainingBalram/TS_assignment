window.onload = function () {
    var ran = Math.floor(Math.random() * 100 + 1);
    var guess = document.getElementById("guess");
    var result = document.querySelector("#result");
    guess.onblur = function () {
        var num = Number(guess.value);
        if (num > ran) {
            result.innerHTML += "<p>Try smaller number, your number was " + num + "</p>";
        }
        else if (num < ran) {
            result.innerHTML += "<p>Try larger number, your number was " + num + "</p>";
        }
        else if (num === ran) {
            result.innerHTML += "<p>Right, your number was " + num + "</p>";
        }
        else {
            result.innerHTML += "try valid input";
        }
    };
};
