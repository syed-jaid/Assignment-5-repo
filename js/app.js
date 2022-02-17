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
    const Incomeparse = parseFloat(IncomeValue)
    // Expenses part
    const food = Amount('food-Expenses');
    const rent = Amount('rent-Expenses');
    const clothes = Amount('clothes-Expenses');
    const foodvalue = parseFloat(food);
    const rentvalue = parseFloat(rent);
    const clothesvalue = parseFloat(clothes);
    //    if input is Negative 
    if (foodvalue < 0 || rentvalue < 0 || clothesvalue < 0 || Incomeparse < 0) {
        alert('Negative number is not granted,plz change the input vallue');
    }
    else {
        const Expensestotul = foodvalue + rentvalue + clothesvalue;
        let balancetotul = Incomeparse - Expensestotul;
        if (isNaN(Expensestotul) || isNaN(balancetotul) || isNaN(Incomeparse)) {
            alert('change the input vallue');
        }
        else {
            // Expenses part
            let Expenses = document.getElementById('toual-Expenses');
            Expenses.innerText = Expensestotul;
            // balance part 
            let balance = document.getElementById('balance-after-Expenses')
            balance.innerText = balancetotul;
        }


    }
});

// saving part 
document.getElementById('save-button').addEventListener('click', function () {
    // totul income 
    const IncomeValue = Amount('income-input');
    // saving Input  
    const savingInput = Amount('saving-input-fild');
    // saving value 
    const saveingValue = (parseFloat(IncomeValue) / 100) * parseFloat(savingInput);
    const savingtotul = document.getElementById('saving-Amount');
    savingtotul.innerText = saveingValue;
    // balance after Expenses and saving 
    let balance = document.getElementById('balance-after-Expenses');
    const balanceinnertext = balance.innerText;
    // remain Balance amount
    const remainBalance = document.getElementById('remain-balance');
    remainBalance.innerText = parseFloat(balanceinnertext) - (parseFloat(IncomeValue) / 100) * parseFloat(savingInput);

})
