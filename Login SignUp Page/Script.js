document.addEventListener('DOMContentLoaded',()=>{

    let login_submit = document.getElementById('login');
    login_submit.addEventListener('click',loginSubmit);
    function loginSubmit(event){
        event.preventDefault();
        alert('login Success');
    }

    let SignUp = document.getElementById('signup');
    let AccountDetails = [];
    SignUp.addEventListener('click',signupSubmit);
    function signupSubmit(event){
        event.preventDefault();
        Account = {username:'email.input' ,password:'password.input'};
        AccountDetails.push(Account);
    }

})