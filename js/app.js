document.getElementById('calculateBtn').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input');
    const foodAmound = parseFloat(foodInput.value);

    const rentInput = document.getElementById('rent-input');
    const rentAmound = parseFloat(rentInput.value);

    const clothesInput = document.getElementById('clothes-input');
    const clothesAmound = parseFloat(clothesInput.value);

    const totalCost = foodAmound + rentAmound + clothesAmound;

    const totalExpenses = document.getElementById('expenses-total');
    const totalExpensesAmound = parseFloat(totalExpenses.innerText);

    const expensesCost = totalExpensesAmound + totalCost;
    totalExpenses.innerText = expensesCost;


    // clear input feild 
    foodInput.value = '';
    rentInput.value = '';
    clothesInput.value = '';
})