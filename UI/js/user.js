document.getElementById('details').addEventListener('load', showUserDetails);
var url = 'https://stackoverflow-lite-ch3.herokuapp.com/api/v1/';
function showUserDetails(){
    return new Promise((resolve, reject) => {
        fetch(url + '/users/details', {
            method: 'GET',
            mode:'cors',
            headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('auth_token') },
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                if(data.status == 200){ 
                }
                resolve(data);
            })
            .catch(err => reject(err));
    });
}

    
