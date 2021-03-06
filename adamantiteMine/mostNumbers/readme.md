#Most Numbers

*To check an automated sieve for ore we use a variety of sample sets to find the smallest and the largest stones. The difference between these values is then used to decide if the sample is worth checking.*

You are given an array of numbers from which you must find the difference between the maximum and minimum elements. Your function should be able to handle an undefined amount of arguments. For an empty argument list, the function should return 0.

Floating-point numbers are represented in computer hardware as base 2 (binary) fractions, since this is the case, we should check that the result is within 0.001 precision.

###Input
An arbitrary number of arguments as numbers.

###Output
The difference between the maximum and minimum as a number.

###Example
```javascript
	mostDifference(1, 2, 3) == 2
	mostDifference(5, -5) == 10
	mostDifference(10.2, -2.2, 0, 1.1, 0.5) == 12.4
	mostDifference() == 0
```

###Precondition

	0 ≤ |arguments| ≤ 20

###How it is used

The important concept to learn from this mission is about passing an undefined amount of arguments to functions.

[Repository](https://github.com/Checkio-Game-Missions/checkio-empire-most-numbers.git)