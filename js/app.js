function getInput(cost) {
    const inputFeild = document.getElementById(cost + '-input');
    const amound = parseFloat(inputFeild.value);
    return amound;
}


document.getElementById('calculateBtn').addEventListener('click', function () {
    // get Expenses input
    const foodAmound = getInput('food');
    const rentAmound = getInput('rent');
    const clothesAmound = getInput('clothes');
    // if ()
    // calculate total Expenses
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
    const balanceFeild = document.getElementById('balance-total');
    const balanceAmound = parseFloat(balanceFeild.innerText);
    balanceFeild.innerText = restBalance;
})

document.getElementById('saveBtn').addEventListener('click', function () {
    // get input calculate saving
    const saveInput = getInput('save');
    const incomeAmound = getInput('income');
    const savaingAmound = (saveInput * incomeAmound) / 100;
    // get saving text 
    const savingTotal = document.getElementById('saving-total');
    const savingTotalAmound = parseFloat(savingTotal.innerText);
    // set saving otal
    savingTotal.innerText = savaingAmound;
    // get balance 
    const balanceFeild = document.getElementById('balance-total');
    const balanceAmound = parseFloat(balanceFeild.innerText);
    // calculate remaining balance and sate remaining balance
    const remainingBalance = balanceAmound - savaingAmound;
    const remainingTotal = document.getElementById('remaining-total');
    const remainingAmound = parseFloat(remainingTotal.innerText);
    remainingTotal.innerText = remainingBalance;
})