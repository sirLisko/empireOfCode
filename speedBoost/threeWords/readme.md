#Three Words

You are given a string with words and numbers separated by whitespaces (one space). The words contains only letters. You should check if the string contains three words in **succession**. For example, the string "start 5 **one two three** 7 end" contains three words in succession.

###Input
A string with words.

###Output
The answer as a boolean.

###Example
```javascript
threeWords("Hello World hello") == true
threeWords("He is 123 man") == false
threeWords("1 2 3 4") == false
threeWords("bla bla bla bla") == true
threeWords("Hi") == false
```

###Precondition

The input contains words and/or numbers. There are no mixed words (letters and digits combined).

	0 < |words| < 100

###How it is used

This teaches you how to work with strings and introduces some useful functions.

[Repository](https://github.com/Checkio-Game-Missions/checkio-empire-three-words.git)
