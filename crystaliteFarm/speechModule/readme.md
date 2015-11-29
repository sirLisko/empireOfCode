#Speech Module

*Because of your efforts, the robots on the farm have had some calculation functionality restored and can work more effectively. We should continue with our improvements and work on the communication and reporting module. Let's teach the robots to convert numbers into words.*

You are given a number as an integer and must convert it to word form in English. All the words in the string must be separated by exactly one space character. Be careful with the spaces, it's hard to see if you might have placed two spaces instead of only one.

For example, 143 => 'one hundred forty three'.

###Input
A number as an integer.

###Output
The word representation of the number as a string.

###Example
```javascript
tellNumber(4) === 'four'
tellNumber(143) === 'one hundred forty three'
tellNumber(12) === 'twelve'
tellNumber(101) === 'one hundred one'
tellNumber(212) === 'two hundred twelve'
tellNumber(40) === 'forty'
```

###Precondition
	0 < number < 1000

###Optional goal

**Rank 2**: A number can be zero and negative. For a negative number, append "minus" in front of it.

	-1000 < number < 1000

**Rank 3**: A number can be more than 1000.

	-1000000 < number < 1000000

###How it is used
This concept may be useful for the speech synthesis software or automated report systems. The system could also be used when writing a chatbot by assigning words or phrases numerical values and having a system retrieve responses based on those values.

[Repository](https://github.com/Checkio-Game-Missions/checkio-empire-speech-module.git)
