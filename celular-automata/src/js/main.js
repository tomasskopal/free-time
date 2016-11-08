var EMPTY_SIGN = "-"
var SIGN = "1"
var NUMBER_OF_ITERATION = 50

function getNewValueByRule90 (left, middle, right) {
    if (left === SIGN && middle === SIGN && right === SIGN) { // 1
        return EMPTY_SIGN
    }
    if (left === SIGN && middle === SIGN && right === EMPTY_SIGN) { // 2
        return SIGN
    }
    if (left === SIGN && middle === EMPTY_SIGN && right === SIGN) { // 3
        return EMPTY_SIGN
    }
    if (left === SIGN && middle === EMPTY_SIGN && right === EMPTY_SIGN) { // 4
        return SIGN
    }
    if (left === EMPTY_SIGN && middle === SIGN && right === SIGN) { // 5
        return SIGN
    }
    if (left === EMPTY_SIGN && middle === SIGN && right === EMPTY_SIGN) { // 6
        return EMPTY_SIGN
    }
    if (left === EMPTY_SIGN && middle === EMPTY_SIGN && right === SIGN) { // 7
        return SIGN
    }
    if (left === EMPTY_SIGN && middle === EMPTY_SIGN && right === EMPTY_SIGN) { // 8
        return EMPTY_SIGN
    }
}

function getValueByIndex(previousLine, index) {
    if (index === 0) {
        return getNewValueByRule90(EMPTY_SIGN, previousLine[0], previousLine[1])
    }
    if (index === previousLine.length - 1) {
        return getNewValueByRule90(previousLine[previousLine.length - 2], previousLine[previousLine.length - 1], EMPTY_SIGN)
    }
    return getNewValueByRule90(previousLine[index - 1], previousLine[index], previousLine[index + 1])
}


function renderCellularStructure(defaultValue) {
    var rootElement = document.getElementById("result")

    while (rootElement.firstChild) { // clean up all children nodes
        rootElement.removeChild(rootElement.firstChild);
    }

    var lastValue = defaultValue

    var div = document.createElement("div");
    var text = document.createTextNode(lastValue);
    div.appendChild(text);
    rootElement.appendChild(div)

    for (var i = 0; i < NUMBER_OF_ITERATION; i++) {
        var div = document.createElement("div");
        var textValue = ""
        for (var j = 0; j < lastValue.length; j++) {
            textValue += getValueByIndex(lastValue, j)
        }
        var text = document.createTextNode(textValue);
        div.appendChild(text);
        rootElement.appendChild(div)
        lastValue = textValue
    }
}


$(function() {
    var defaultValue = "1-----------------------------------------------------------------------------------------------------1111-----------------------------------------------------------------------------------------------1"
    document.getElementById('main-input').value = defaultValue
    renderCellularStructure(defaultValue)

    $("#main-input").on('input', function(event) {
        var value = event.target.value
        var re = new RegExp("^["+EMPTY_SIGN + SIGN + "]+$")

        if (!re.test(value)) {
            return
        }
        renderCellularStructure(value)
    })
});