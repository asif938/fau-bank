
document.getElementById('btn-deposit').addEventListener('click', function() {

    const heading = document.querySelector('h1');
    if(heading.innerHTML == "Fau bank e eto taka nai!!"){
        heading.innerHTML = "Let's get some money !!";
        heading.classList.remove('text-red');
    }
    
    // Get the value from the deposit input field
    const depositfield = document.getElementById('deposit-amount');
    const depositamountst = depositfield.value;
    const depositamount = parseFloat(depositamountst);

    // Get the current deposit total
    const deposittotalamount = document.getElementById('deposit-total');
    const deposittotalst = deposittotalamount.innerText;
    const deposittotal = parseFloat(deposittotalst);

    // Update the deposit total with the new deposit amount
    const updatevalue = depositamount + deposittotal;
    deposittotalamount.innerText = updatevalue;

    const balancetotal = document.getElementById('balance-total');
    prebalancetotalst = balancetotal.innerText;
    prebalancetotal = parseFloat(prebalancetotalst);

    const newbalance = depositamount + prebalancetotal;
    balancetotal.innerText = newbalance;

    // Clear the deposit input field
    depositfield.value = '';
});
