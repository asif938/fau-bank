document.getElementById('btn').addEventListener('click',function(){
    const emailfield = document.getElementById('email');
    const email = emailfield.value;
    const password = document.getElementById('password');
    const pass = password.value;
    if(email == 'faubank@gmail.com' && pass == 'faubank'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid username or password');
    }
})