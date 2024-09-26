# Assignment 2: Bank Account Security Questions
You should already have a [CodeSandbox](https://codesandbox.io/) account set up from the Assignment 1 [[Assignments/Assignment-1/Instructions|Instructions]]. Please reach out if you have any issues.

## Project Files
Copy the Assignment 2 starter files from https://codesandbox.io/p/sandbox/hcpqlw?file=%2Findex.js%3A15%2C58
- There should be a "fork" button at the top left. When clicked, it will create a copy of this project for you

## Instructions
We contracted you to create a website to allow users to view their bank account balance. Users can enter their password, or a series of security questions. You're working on the security questions part.

We want you to give the website the following functionality:
- If the user enters all three security questions incorrectly, display the message "not a single question was right... suspicious"
- If the user gets only one question right, display the message "that might've just been dumb luck"
- If the user gets two out of three questions right, display the message "ok, you probably are who you say you are, you just forgot one of these questions. I can't show you the full balance, but it's in the ballpark of {x} dollars", but replace {x} with the user's balance, rounded to the 10's place
- If the user gets all three questions right, display their balance, along with a message depending on their balanace
	- If their balance is less than 100 dollars, display a cautious message, like, "it might be time for some saving"
	- If their balance is greater than equal to 100 dollars, but less than 700, display a positive message, like, "heyo, good job"
	- If their balance is greater than or equal to 700 dollars, display a shocked message, like "WOWOWOW ZOO-WEE MAMA that's a lotta money"

For the sake of example, assume every user has the same secret security questions. Their answer to the first security question is "Coco", the second is "Sepulveda", and the third is 7. So your code should check if the user's input matches those answers.

We've gone ahead and made the website look beautiful, modern, and slick, but we need a genius to code the brains of the website, which is why we set you up with a function to write, 