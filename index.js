// Students: ONLY EDIT THIS FILE
function reverseNum(number) {
    // variable above ^ contains value of input
  
    // MAKE EDITS BETWEEN THESE LINES -------------------------------------------
  
    // Edits...
  
    // When you're done with calculating the reverse, replace "undefined" with
    // the value you calculated
    let result = undefined;
    // BOTTOM LINE --------------------------------------------------------------
  
    return result;
  }
  
  // Don't worry about what this function does, or even what a function is, if we
  // haven't covered that. Feel free to poke around though :0
  function assignmentMagic() {
    const inputEl = document.getElementById("number-input");
    const inputVal = parseInt(inputEl.value);
    const result = reverseNum(inputVal);
    const resultEl = document.getElementById("calculation-result");
    resultEl.innerText = result;
  }
  