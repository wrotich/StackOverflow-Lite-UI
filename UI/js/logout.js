document.getElementById('logout').addEventListener('click', logout);
function logout() {
        return new Promise((resolve, reject)=>{
            let url= 'https://stackoverflow-lite-ch3.herokuapp.com/api/v1/';
            fetch(url+"auth/logout",{
                method:'POST',
                mode: "cors",
                headers: {'Authorization':'Bearer '+ window.localStorage.getItem('auth_token')}
        })
        .then((response)=>{
           if (response.status==200){
               window.localStorage.clear();
               swal({
                title: "Success!",
                text: "You have successfully logged out!",
                icon: "success",})
               window.location.href = "index.html";
               resolve(response.json());
           }
           else{
               reject(response);
           }
        })
    })
    }