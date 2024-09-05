// Students: ONLY EDIT THIS FILE
function reverseNum(number) {
    // variable above ^ contains value of input
  
    // MAKE EDITS BETWEEN THESE LINES -------------------------------------------
  
    const calculatedTriple = number * 3;

    // Extract digit from each position 
    const num1 = Math.floor(number / 100);
    const num2 = Math.floor((number % 100) / 10);
    const num3 = number % 10;
    const calculatedReversed = num3 * 100 + num2 * 10 + num1;

    let reverse = calculatedReversed;
    let triple = calculatedTriple;
    // BOTTOM LINE --------------------------------------------------------------
  
    return [reverse, triple];
  }
  
  // Don't worry about what this function does, or even what a function is, if we
  // haven't covered that. Feel free to poke around though :0
  function assignmentMagic() {
    const inputEl = document.getElementById("number-input");
    const inputVal = parseInt(inputEl.value);
    const [reverse, triple] = reverseNum(inputVal);
    const reverseResultEl = document.getElementById("reverse-result");
    const tripleResultEl = document.getElementById("triple-result");
    reverseResultEl.innerText = reverse;
    tripleResultEl.innerText = triple;
  }