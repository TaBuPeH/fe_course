var getRandomTotNumbers = function () {
    var minNumber = 1;
    var maxNumber = 49;
    var numbersCount = 6;

    var n = []; 

    for (var i = minNumber; i < maxNumber; i++) {
        n.push(i);
    }

    while (n.length > numbersCount) {
        n.splice(Math.floor(Math.random() * n.length), 1);
    }

    return n;
};


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function dispayResult() {
    var totoNumbers = shuffleArray(getRandomTotNumbers());

    var totoNumbersWrappers = document.getElementsByClassName('number');

    for (var i = 0; i < totoNumbers.length; i++) {
        totoNumbersWrappers[i].innerHTML = totoNumbers[i];
    }
}

//document.getElementById("btnResult").click(dispayResult());

