// Students: ONLY EDIT THIS FILE
function reverseNum(number) {
    // variable above ^ contains value of input
  
    // MAKE EDITS BETWEEN THESE LINES -------------------------------------------
  
    // Edits...
  
    // When you're done with calculating the reverse and triple, replace
    // the "undefined" values with the values you calculated
    let reverse = undefined;
    let triple = undefined;
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