
document.getElementById('signin').addEventListener('submit', login);
const url = 'https://stackoverflow-lite-ch3.herokuapp.com/api/v1/';
function login(event){
  event.preventDefault();
  let email= document.getElementById("email").value;
  let password= document.getElementById("password").value;
  let userInfo = JSON.stringify({
        "email":email,
        "password":password,
    })

    console.log(userInfo);
    fetch(url + 'auth/login', {
        method: 'POST',
        mode: "cors",
        headers: {'Content-Type': 'application/json'},
        body:userInfo
        }
    )

  .then((req) => {
      http_code = req.status
      return req.json()
  })
  .then((data) => {
    if (http_code.status == 401){
      document.getElementById('errorOccurred').innerHTML = data.message
      }
    if (data.message == 'Successfully logged in.') {
      window.localStorage.setItem('auth_token', data.auth_token)
      console.log(window.localStorage.getItem('auth_token'))
      window.location = 'all_questions.html'
  }
    else {
      document.getElementById("error").innerHTML = "Wrong credentials please try again";
}
  })
  .catch((err) => {
    console.log(err);
});
}
