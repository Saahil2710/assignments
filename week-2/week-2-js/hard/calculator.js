/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/


function calculateTotalSpentByCategory(transactions) {

    const categoryTotals = {};//  create an empty array to store the total amount spent in each category.

    transactions.forEach(transaction => {
        const {category, price} = transaction;
        if (categoryTotals[category]) {
            categoryTotals[category] += price;
        } else {
            categoryTotals[category] = price;
        }
    });

    return Object.keys(categoryTotals).map(category => ({
        category: category,
        totalSpent: categoryTotals[category]
    }));
}
    const transactions = [
        { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
        { id: 2, timestamp: 1656076800000, price: 20, category: 'Food', itemName: 'Burger' },
        { id: 3, timestamp: 1656076800000, price: 15, category: 'Transport', itemName: 'Bus Ticket' }
    ];

    console.log(calculateTotalSpentByCategory(transactions));


