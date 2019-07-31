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

//loan amount
const PV = parseFloat(uiAmount.value); 
//Interest rate
const R = parseFloat(uiInterest.value / 100 /12);
//Number of monthly instalments
const N = uiYears.value * 12;


const x = Math.pow(1 + R, N);
const monthly = (PV * x * R)/(x-1);
const totalPayment = monthly * N;
const totalInterest = (monthly * N) - PV;


//RESULT UI VARIABLE
const montly_payment = document.getElementById("monthly-payment");
const total_payment = document.getElementById("total-payment");
const total_interest = document.getElementById("total-interest");

if(isFinite(monthly)){
  document.querySelector('form').style.display = 'none';
  document.querySelector('.result').style.display = 'flex';
  montly_payment.value = monthly.toFixed(2);
  total_payment.value = totalPayment.toFixed(2);
  total_interest.value = totalInterest.toFixed(2);
}else{
  console.log('no data found');
  document.querySelector('.error').style.display = 'flex';
  function clearError(){
     document.querySelector('.error').style.display = 'none';
     //console.log('???');
   }
  setTimeout( clearError, 3000);
}



e.preventDefault();

}

document.addEventListener('click', function(e){
    if(e.target.id === 'clear'){
      this.location.reload();
    }
})





