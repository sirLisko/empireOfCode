#Triangle Angles

*Most of the facets on a crystal are triangle. Since these crystals are vital to our base, we should attempt to learn more about this shape.*

You are given the lengths for each side of a triangle. You need to find all three of the angles for this triangle. If the given side lengths cannot form a triangle (or form a degenerated triangle), then you must return all angles as 0 (zero). The angles should be represented as a list of integers in **ascending order**. Each angle is measured in degrees and rounded to the nearest integer number using standard mathematical rounding.

###Input
The lengths of the sides of a triangle as integers.

###Output
Angles of a triangle in degrees as sorted array of integers.

###Example
```javascript
angles(4, 4, 4) // [60, 60, 60]
angles(3, 4, 5) // [37, 53, 90]
angles(2, 2, 5) // [0, 0, 0]
```

###Precondition
	0 < a ≤ 1000

	0 < b ≤ 1000

	0 < c ≤ 1000

###How it is used

This is a classical geometry problem. With this concept you can measure an angle without the need for a protractor for use in fields such as topography or architecture.

[Repository](https://github.com/Checkio-Game-Missions/checkio-empire-triangle-angles.git)
