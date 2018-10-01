document.getElementById('search-form_3').addEventListener('submit', searchResult);
function searchResult() { 
    return new Promise((resolve, reject) => {
    fetch('https://stackoverflow-lite-ch3.herokuapp.com/api/v1/questions/results',{
        method: 'GET',
        headers: {'Authorization':'Bearer '+ window.localStorage.getItem('auth_token')},
    })
            .then(response => {
                return response.json();
            })
            .then(data => {
                resolve(data);
                // document.getElementsByClassName('content')="Search results"
            })
            .catch(err => reject(err));
    });
    document.getElementsByClassName('content')="Search results";

}