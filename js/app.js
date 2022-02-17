// the main income amount function
function Amount(id) {
    const Input = document.getElementById(id);
    const Value = Input.value;
    return Value;
}
// button of money calculator
document.getElementById('calculator-bnt').addEventListener('click', function () {
    // income totul 
    const IncomeValue = Amount('income-input');
    const Incomeparsevalue = parseFloat(IncomeValue)
    // Expenses part
    const food = Amount('food-Expenses');
    const rent = Amount('rent-Expenses');
    const clothes = Amount('clothes-Expenses');
    const foodvalue = parseFloat(food);
    const rentvalue = parseFloat(rent);
    const clothesvalue = parseFloat(clothes);
    //    if input is Negative 
    if (foodvalue < 0 || rentvalue < 0 || clothesvalue < 0 || Incomeparsevalue < 0) {
        alert('Negative values not acceptable. Please enter a positive value!');
    }
    else {
        const Expensestotul = foodvalue + rentvalue + clothesvalue;
        let balancetotul = Incomeparsevalue - Expensestotul;
        if (isNaN(Expensestotul) || isNaN(balancetotul) || isNaN(Incomeparsevalue)) {
            alert('No text can be used. Please enter a number!');
        }
        else {
            // Expenses part
            if (Expensestotul > Incomeparsevalue) {
                alert('You cant spend more than your income!');
            } else {
                let Expenses = document.getElementById('toual-Expenses');
                Expenses.innerText = Expensestotul;
                // balance part 
                let balance = document.getElementById('balance-after-Expenses')
                balance.innerText = balancetotul;
            }
        }
    }
});

// saving part 
document.getElementById('save-button').addEventListener('click', function () {
    // totul income 
    const IncomeValue = Amount('income-input');
    const Incomeparsevaslue = parseFloat(IncomeValue)
    // saving Input  
    const savingInput = Amount('saving-input-fild');
    const saveingInputValue = parseFloat(savingInput);
    // saving value 
    if (saveingInputValue < 0) {
        alert('Negative values not acceptable. Please enter a positive value !');
    }
    else if (isNaN(saveingInputValue)) {
        alert('No text can be used. Please enter a number !');
    }
    else {
        const saveingValue = Incomeparsevaslue / 100 * saveingInputValue;
        // balance after Expenses and saving 
        let balance = document.getElementById('balance-after-Expenses');
        const savingtotul = document.getElementById('saving-Amount');
        const remainBalance = document.getElementById('remain-balance');
        const balanceinnertext = balance.innerText;
        if (saveingValue > balanceinnertext) {
            alert('You cant save so much money. Balance is low after expenses!')
        }
        else {
            savingtotul.innerText = saveingValue;
            // balance after Expenses and saving 

            // remain Balance amount
            remainBalance.innerText = parseFloat(balanceinnertext) -
                (Incomeparsevaslue / 100 * saveingInputValue);
        }
    }
})
