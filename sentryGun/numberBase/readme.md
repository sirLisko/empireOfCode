#Number Base

*Sometimes the robots mix up their coordinates and use other [Numeral systems](https://en.wikipedia.org/wiki/Numeral_system). Let's try to sort this out and see what could be going on.*

You are given a positive number as a string along with the radix for it. Your function should convert it into decimal form. The radix is less than 37 and greater than 1. The task uses digits and the letters A-Z for the strings.

Watch out for cases when the number cannot be converted. For example: "1A" cannot be converted with radix 9. For these cases your function should return -1.

###Input
Two arguments. A number as string and a radix as an integer.

###Output
The converted number as an integer.

###Example
```javascript
convert("AF", 16) == 175
convert("101", 2) == 5
convert("101", 5) == 26
convert("Z", 36) == 35
convert("AB", 10) == -1
```

###Precondition
	re.match("\A[A-Z0-9]\Z", str_number)
	0 < len(str_number) <= 10
	2 <= radix <= 36

###How it is used
Here you will learn how to work with the various numeral systems and handle exceptions.

[Repository](https://github.com/Checkio-Game-Missions/checkio-empire-number-radix.git)
