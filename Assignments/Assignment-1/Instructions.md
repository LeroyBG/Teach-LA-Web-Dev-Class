# Assignment 1: Setup, JavaScript Intro
Unless otherwise instructed, we will be using [CodeSandbox](https://codesandbox.io/) for this assignment (and most assignments in this class).

## CodeSandbox Setup
1. First, follow instructions on https://codesandbox.io/ to create an account. If prompted, select the free tier.
2. Optional: take a look around the dashboard. You can create a project just for fun using the button on the top right.
3. Copy the Assignment 1 Starter Files from https://codesandbox.io/p/sandbox/teach-la-web-dev-assignment-1-template-xjzh2g?file=%2Findex.js
	1. There should be a "fork" button at the top left. When clicked, it will create a copy of this project for you

## Instructions
Write a program that receives a three-digit integer and calculate the reverse and triple of the three-digit integer. Assume that users always enter a valid positive three-digit integer. Your code should work for all three-digit integers (100 to 999).

**Important:** You only need to edit code in `index.js` in between the marked lines. The three-digit integer is supplied to you in the `number` variable. Place your result in the `reverse` and `triple` variables.

### Hints: 
- We know the number will always have three digits, so we can focus on extracting each one
- Use integer division with `/` and `Math.floor()` to extract each digit