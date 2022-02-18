function getInput(cost) {
    const inputFeild = document.getElementById(cost + '-input');
    const amound = parseFloat(inputFeild.value);

    inputFeild.value = '';
    return amound;
}

document.getElementById('calculateBtn').addEventListener('click', function () {
    // get Expenses input
    const foodAmound = getInput('food');

    const rentAmound = getInput('rent');

    const clothesAmound = getInput('clothes');
    // if ()

    const totalCost = foodAmound + rentAmound + clothesAmound;

    const totalExpenses = document.getElementById('expenses-total');
    const totalExpensesAmound = parseFloat(totalExpenses.innerText);

    const totalExpensesCost = totalExpensesAmound + totalCost;

    // set total expensses
    totalExpenses.innerText = totalExpensesCost;

    // balance calculation
    const incomeAmound = getInput('income');

    const restBalance = incomeAmound - totalExpensesCost;

    // set balance 
    const balanceFeild = document.getElementById('balance-total')
    const balanceAmound = parseFloat(balanceFeild.innerText)
    balanceFeild.innerText = restBalance;
})