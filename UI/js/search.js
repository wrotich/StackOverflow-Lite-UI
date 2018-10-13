document.getElementById('searchButton').addEventListener('submit', searchQuestion);
var url = 'https://stackoverflow-lite-ch3.herokuapp.com/api/v1/';
function searchQuestion() {
    return new Promise((resolve, reject) => {
        fetch(url + '/questions/results', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + window.localStorage.getItem('auth_token') },
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
}