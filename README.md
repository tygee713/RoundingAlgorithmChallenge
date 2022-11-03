# RoundingAlgorithmChallenge
Answer to an algorithm challenge about rounding individual line items

### Prompt: Determine an array of rounded subtotals which will add up to a separately rounded total
    Ensure that the least amount of deviation from the subtotals is applied
    ex: [5.4, 3.3, 5]
    The rounded sum is 14, individual rounding would be [5, 3, 5], but the desired solution is [6, 3, 5]

Some notes in my thought process:

- In the example, the first decimal is < .5, but still rounded up. If the array was just [5.4, 5], it would be rounded down.
This means it must look at at least the next number before deciding what to do.
- In an example like [5.7, 5.7, 5], only one of the 5.7s should be rounded up.
- We also can't assume we need to round up at all. In the case of [5.2, 5.2, 5], none would be rounded up

Possible steps:
- Sum decimal values in a variable. Once that variable goes above 0.5, need to determine which number to round up
- [5.1, 5.2, 5.3] the last value should be rounded up
- [5.1, 5.3, 5.2] the second, etc

- [5.1, 5.1, 5.1, 5.1, 5.1] one needs to be rounded up
- [5.1, 5.1, 5.1, 5.1] none do

Maybe save highest value and replace it?
Maybe count how many times are needed to round up then find the highest numbers in the array?
To find the number of times to round up, Math.round(decimalTotal), where decimalTotal is the total remainder across all prices
