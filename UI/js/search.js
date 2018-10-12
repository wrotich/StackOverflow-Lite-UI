document.getElementById('search-form_3').addEventListener('submit', searchResult);
var url = 'https://stackoverflow-lite-ch3.herokuapp.com/api/v1/';
function searchResult() {
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
    document.getElementsByClassName('content') = "Search results";

}