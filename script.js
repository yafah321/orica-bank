let balance = 1240;
let withdraw = 0;
let depositedAmount = 0;
const loginBtn = document.getElementById('Login');
loginBtn.addEventListener('click', function(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    if (email == "fahim@ami.com" && pass == "amarname"){
        const LoginArea = document.getElementById("loginArea");
        LoginArea.style.display = "none";
        const dashboard = document.getElementById("dashboard");
        dashboard.style.display = "block";

    }
    else{
        alert("Wrong Email Or Password. Please try again");
    }
    

})

const DepositBtn = document.getElementById("Deposit-btn");
DepositBtn.addEventListener("click",function(){
    let Amount = document.getElementById("depositAmount").value;
    Amount = parseFloat(Amount);
    let currentdeposit = parseFloat(document.getElementById("currentDeposit").innerHTML);
    let currentbalance = parseFloat(document.getElementById("currentBalance").innerHTML);
    document.getElementById("currentDeposit").innerHTML = Amount+currentdeposit;
    document.getElementById("currentBalance").innerHTML = Amount+currentbalance;
    document.getElementById("depositAmount").value = null;


})

const withdrawBtn = document.getElementById("Withdraw-btn");
withdrawBtn.addEventListener("click",function(){
    let Amount = document.getElementById("withdrawAmount").value;
    Amount = parseFloat(Amount);
    let currentwithdraw = parseFloat(document.getElementById("currentWithdraw").innerHTML);
    let currentbalance = parseFloat(document.getElementById("currentBalance").innerHTML);
    document.getElementById("currentWithdraw").innerHTML = Amount+currentwithdraw;
    document.getElementById("currentBalance").innerHTML = currentbalance-Amount;
    document.getElementById("withdrawAmount").value = null;


})