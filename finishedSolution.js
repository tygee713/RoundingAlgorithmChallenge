// Completed solution done independently of the timed challenge, tested on codepen

const solution = (prices) => {
    let decimalAmount = 0
    // 2d array of the original indexes and their values
    let arrayWithIndexes = []
    let roundedPrices = []

    // get the total amount of decimal remainder, and also populate array of arrays
    for (let i=0; i<prices.length; i++) {
        decimalAmount += prices[i] % 1
        arrayWithIndexes.push([i, prices[i]])
    }

    // sort 2d by value in descending order of remainder
    arrayWithIndexes.sort((a, b) => a[1] % 1 > b[1] % 1 ? -1 : 1)
    
    // get an array of indexes of the highest values
    let indexesToCeil = arrayWithIndexes.slice(0, Math.round(decimalAmount)).map((a) => a[0])

    for (let i=0; i<prices.length; i++) {
        indexesToCeil.includes(i) ? roundedPrices.push(Math.ceil(prices[i])) : roundedPrices.push(Math.floor(prices[i]))
    }

    return roundedPrices
}