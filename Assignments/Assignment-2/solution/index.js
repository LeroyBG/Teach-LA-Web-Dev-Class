function checkSecurityQuestions(
    security1,
    security2,
    security3,
    answer1,
    answer2,
    answer3,
    currentBalance
  ) {
    // security1 contains the user's first security question that they set a long time ago
    // security2 contains the user's second security question that they set a long time ago
    // hopefully you can guess for security3
    // answer1 contains the user's answer to the first question (may be wrong)
    // answer2 contains the user's answer to the second question (may be wrong)
    // hopefully you can guess what answer3 contains
    //-
    //-
    //-
    // YOUR CODE GOES HERE.
    // Read the instructions carefully and don't be afraid to ask for help if you
    // get stuck
    let numberCorrect = 0;
    if (answer1 === security1) {
      numberCorrect++;
    }
    if (answer2 === security2) {
      numberCorrect++;
    }
    if (answer3 === security3) {
      numberCorrect++;
    }
    if (numberCorrect === 0) {
      return "not a single question was right... suspicious";
    }
    if (numberCorrect === 1) {
      return "that might've just been dumb luck";
    }
    if (numberCorrect === 2) {
      let roundedBalance = Math.floor(currentBalance / 10) * 10;
      return (
        "ok, you probably are who you say you are, you just forgot one of these questions. I can't show you the full balance, but it's in the ballpark of " +
        roundedBalance +
        " dollars"
      );
    }
    if (numberCorrect === 3) {
      let customMessage = "";
      if (currentBalance < 100) {
        customMessage = "it might be time for some saving";
      } else if (currentBalance >= 100 && currentBalance < 700) {
        customMessage = "heyo, good job";
      } else if (currentBalance >= 700) {
        customMessage = "WOWOWOW ZOO-WEE MAMA that's a lotta money";
      }
      return "Balance: " + currentBalance + ". " + customMessage;
    }
  }
  
  function assignmentMagic() {
    const s1 = "Coco";
    const s2 = "Sepulveda";
    const s3 = 7;
    const [a1, a2, a3] = [1, 2, 3].map(
      (e) => document.getElementById(`answer${e}-input`).value
    );
    const balance = Math.floor(Math.random() * 1001);
    const msg = checkSecurityQuestions(s1, s2, s3, a1, a2, a3, balance);
    document.getElementById("status-msg-bar").textContent = msg;
  }