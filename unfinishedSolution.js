// Original attempt at solving the problem within the time limit

const solution = (prices) => {
    let sum = 0
    prices.forEach((item) => {
        sum += item
    })
    
    let roundedPrices = []
    let runningDifference = 0
    for (let i=0; i<prices.length; i=i+2) {
        let currentNumber = prices[i]
        let currentDecimal = currentNumber % 1
        if (i == prices.length - 1) {
            runningDifference += currentDecimal
            runningDifference % 1 >= 0.5 ? roundedPrices.push(Math.ceil(currentNumber)) : roundedPrices.push(Math.floor(currentNumber))
            
            break
        }
        
        let nextNumber = prices[i+1]
        let nextDecimal = nextNumber % 1
        runningDifference += currentDecimal + nextDecimal
        
        if (currentDecimal + nextDecimal < 0.5) {
            roundedPrices.push(Math.floor(currentNumber))
            roundedPrices.push(Math.floor(nextNumber))
        } else if (currentDecimal + nextDecimal < 1.5) {
            if (currentDecimal > nextDecimal) {
                roundedPrices.push(Math.ceil(currentNumber))
                roundedPrices.push(Math.floor(nextNumber))  
            } else {
                roundedPrices.push(Math.ceil(nextNumber))
                roundedPrices.push(Math.floor(currentNumber))  
            }
        } else {
            runningDifference = 0
            roundedPrices.push(Math.ceil(currentNumber))
            roundedPrices.push(Math.ceil(nextNumber))
        }
    }
    
    return roundedPrices
};