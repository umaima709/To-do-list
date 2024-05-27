import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.92,
    PKR: 278,
    INR: 83.31
};
let userResponse = await inquirer.prompt([{
        name: 'from',
        message: 'Enter from currency',
        type: 'list',
        choices: ['USD', 'EUR', 'PKR', 'INR']
    },
    {
        name: 'to',
        message: 'Enter to currency',
        type: 'list',
        choices: ['USD', 'EUR', 'PKR', 'INR']
    },
    {
        name: 'amount',
        message: 'Enter your  amount',
        type: 'number',
    },
]);
let amountFrom = currency[userResponse.from];
let amountTo = currency[userResponse.to];
let amount = userResponse.amount;
let baseAmount = amount / amountFrom;
let convertAmount = baseAmount * amountTo;
console.log(convertAmount);
console.log(amountFrom);
console.log(amountTo);
console.log(amount);
