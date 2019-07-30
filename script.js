//listen for submit
document.getElementById('loan-form').addEventListener('submit',calculateResults);

//calculate result
function calculateResults(e){
 console.log('calculateing...');

//UI VARIABLES
const uiAmount = document.getElementById('amount');
const uiInterest = document.getElementById('interest');
const uiYears = document.getElementById('years');
const uiMonlyPayment = document.getElementById('monthly-payment');
const uiTotalPayment = document.getElementById('total-payment');

const principle = parseFloat(uiAmount.value);
const calculateInterest = parseFloat(uiInterest.valule)/100/12;
const calculateYears = parseFloat(uiYears.value)*12;

//compute monthly payment
const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const montyly = (principal*x*calculatedInterest)/(x-1)






 e.preventDefault();
}



