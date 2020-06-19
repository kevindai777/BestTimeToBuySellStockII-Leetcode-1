//Objective is to make the maximum profit from buying and selling stocks in a 1-D array.

let stocks = [7,1,5,3,6,4]


//O(n) solution that does a single pass over the array and, if a profit can be
//made, makes that transaction.

let maxProfit = 0

for (let i = 1; i < stocks.length; i++) {
    if (stocks[i] > stocks[i - 1]) {
        maxProfit += stocks[i] - stocks[i - 1]
    }
}

return maxProfit