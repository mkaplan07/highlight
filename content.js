/*
function highlighter(term) {
  let text = document.body.innerHTML;
  // let newText = text.replaceAll(term, '<mark>' + term + '</mark>');
  let newText = text.replaceAll(term, '<span style="background-color:yellow">' + term + '</span>');
  document.body.innerHTML = newText;
}

highlighter('Modal');
*/
// includes hidden elements, which disrupts layout

// https://stackoverflow.com/questions/4712310/javascript-how-to-detect-if-a-word-is-highlighted#:~:text=4%20Answers&text=The%20easiest%20way%20to%20do,whether%20any%20text%20is%20selected.
function getHighlight() {
    let text = "";
    // if (typeof window.getSelection !== "undefined") {
    //     text = window.getSelection().toString();
    // }
    if (window.getSelection) {
        text = window.getSelection().toString();
    }
    return text;
}

function alertHighlight() {
    let highlighted = getHighlight();
    if (highlighted.trim() === 'EUR/USD') {
        alert(`You want ${highlighted}`);
    }
}

document.onmouseup = alertHighlight;
// document.onkeyup = alertHighlight;
