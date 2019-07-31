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

    //loan calculations
    const x = Math.pow(1 + R, N);
    const monthly = (PV * x * R)/(x-1);
    const totalPayment = monthly * N;
    const totalInterest = (monthly * N) - PV;


    //RESULT UI VARIABLE
    const montly_payment = document.getElementById("monthly-payment");
    const total_payment  = document.getElementById("total-payment");
    const total_interest = document.getElementById("total-interest");
    const loanAmount     = document.getElementById('loan-amount');
    const interestRate   = document.getElementById('interest-rate');
    const repaymentYears = document.getElementById('repayment-years');

        if(isFinite(monthly)){
          document.querySelector('form').style.display = 'none';
          document.querySelector('.result').style.display = 'flex';
          loanAmount.value = uiAmount.value;
          interestRate.value = uiInterest.value;
          repaymentYears.value = uiYears.value;
          montly_payment.value = monthly.toFixed(2);
          total_payment.value = totalPayment.toFixed(2);
          total_interest.value = totalInterest.toFixed(2);

        }else{
          console.log('no data found');
          showError("Please ckeck the posted numbers");
          
        }

e.preventDefault();

}


function showError(errorMsg){

  //create div element
  const errorDiv = document.createElement('div');
  // add class to div
  errorDiv.className = 'error';
  //put error message into the div
  errorDiv.appendChild(document.createTextNode(errorMsg));
  

  //ui container div variable
  const inputAmount = document.querySelector('input#amount');
  const loanForm = document.querySelector('#loan-form');
  
  //insert error befor form
  loanForm.insertBefore(errorDiv, inputAmount);

  //clear error message after 4 second
  setTimeout(clearError, 4000);

}

function clearError(){
  document.querySelector('.error').remove();
}


document.addEventListener('click', function(e){
    if(e.target.id === 'clear'){  
      document.querySelector('form').style.display = 'block';
      document.querySelector('.result').style.display = 'none';
      document.getElementById('amount').value = '';
      document.getElementById('interest').value = '';
      document.getElementById('years').value = '';
    }
})








