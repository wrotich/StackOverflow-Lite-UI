
document.getElementById('signup').addEventListener('submit', registration);
let url = 'https://stackoverflow-lite-ch3.herokuapp.com/api/v1/';
function registration(evt)
{   
    evt.preventDefault();
    console.log("start fetch");
    let username= document.getElementById("username").value;
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;
    let confirmPassword= document.getElementById("confirmPassword").value;			
    
    let userInfo = JSON.stringify({
        "username":username,
        "email":email,
        "password":password,
        "confirmPassword":confirmPassword
    });
            fetch(url+'auth/signup',{
                method: 'POST',
                mode: "cors",
                headers: {'Content-Type': 'application/json'},
                body:userInfo
            })
                .then((response) => {
                    console.log(response);
                    status_code = response.status
                    return response.json()
                })
                .then((response) => {
                    if (status_code == 201){
                        window.location = 'index.html';
                    }
                    if (status_code == 401){
                        document.getElementById("error").innerHTML = "User already exists please login";
                    }
                    console.log(response.Message)
                })
                .catch((err) => console.log('There is an error ', err))
             
        }
