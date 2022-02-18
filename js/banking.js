function inputFild(inputBalo) {
    const input = document.getElementById(inputBalo);
    const inputText = input.value;
    const inputnumber = parseInt(inputText);
    input.value = '';
    return inputnumber;
};
function textFild(textValue, Amount) {
    const textNumber = getInnerTextValue(textValue)
    const total = textNumber + Amount;
    document.getElementById(textValue).innerText = total;
    return total;
}
function getInnerTextValue(fieldId) {
    const totalValue = document.getElementById(fieldId);
    const totalValueText = totalValue.innerText;
    const totalValueNumber = parseInt(totalValueText);
    return totalValueNumber;
}
// ===========balance total=============
function balanceTotal(Amount, isAdd) {
    const balanceTotalNumber = getInnerTextValue('balance-total');
    let total;
    if (isAdd == true) {
        total = balanceTotalNumber + Amount;

    }
    else {
        total = balanceTotalNumber - Amount;
    }
    document.getElementById('balance-total').innerText = total;

}

document.getElementById('deposit-button').addEventListener('click', function () {
    const Amount = inputFild('deposit-input');
    if (Amount > 0) {
        textFild('deposit-total', Amount)
        balanceTotal(Amount, true);
    }
})

// ==========withdraw==========
document.getElementById('withdraw-button').addEventListener('click', function () {
    const Amount = inputFild('withdraw-input');
    const totalField = getInnerTextValue('balance-total');
    if (Amount > 0 && totalField >= Amount) {
        textFild('withdraw-total', Amount);
        balanceTotal(Amount, false);
    }
})