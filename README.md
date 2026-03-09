# Palindrome Deletion Calculator

This Angular application calculates the minimum number of deletions required to make a given string non-palindromic. If the string is already non-palindromic, it returns 0.

## How to Run

1. Ensure you have Node.js installed (preferably a version compatible with Angular CLI, e.g., Node 18 or 20).

2. Install dependencies: `npm install`

3. Start the development server: `npm start` or `ng serve`

4. Open your browser to `http://localhost:4200`

## Usage

Enter a string in the input field and click "Calculate Minimum Deletions" to see the result.

## Algorithm

- If the string is not a palindrome, return 0.
- If it is a palindrome and all characters are the same, return the length of the string.
- Otherwise, return 1.
