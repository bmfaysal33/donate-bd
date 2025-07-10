


// Noakhali Section Done 

document.getElementById('btn-noakhali').addEventListener('click', function (event) {

    event.preventDefault();

    const noakhaliInputAmount = inputValueById('input-noakhali');

    const noakhaliBalance = textValueById('noakhali-balance');

    const noakhaliNewBalance = noakhaliBalance + noakhaliInputAmount;

        // Main Balance Changing 

    const mainBalance = textValueById('main-balance');
    const newMainBalance = mainBalance - noakhaliInputAmount;
    document.getElementById('main-balance').innerText = newMainBalance;

    //   Show Noakhali New Balance 
    document.getElementById('noakhali-balance').innerText = noakhaliNewBalance;


})


// Feni Section 

document.getElementById('btn-feni').addEventListener('click', function (event) {

    event.preventDefault();

    const feniInputAmount = inputValueById('input-feni');

    const feniBalance = textValueById('feni-balance');

    const feniNewBalance = feniBalance + feniInputAmount;


    
        // Main Balance Changing 

    const mainBalance = textValueById('main-balance');
    const newMainBalance = mainBalance - feniInputAmount;
    document.getElementById('main-balance').innerText = newMainBalance;

        //   Show Feni New Balance 

    document.getElementById('feni-balance').innerText = feniNewBalance;


})


// Quota Movement section 


document.getElementById('btn-quota').addEventListener('click', function (event) {

    event.preventDefault();

    const quotaInputAmount = inputValueById('input-quota');

    const quotaBalance = textValueById('quota-balance');

    const quotaNewBalance = quotaBalance + quotaInputAmount;

    
        // Main Balance Changing 

    const mainBalance = textValueById('main-balance');
    const newMainBalance = mainBalance - quotaInputAmount;
    document.getElementById('main-balance').innerText = newMainBalance;

        //   Show Quota New Balance 

    document.getElementById('quota-balance').innerText = quotaNewBalance;


})













