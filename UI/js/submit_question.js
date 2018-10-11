document.getElementById('submitQuestion').addEventListener('submit', askQuiz);
let url = 'https://stackoverflow-lite-ch3.herokuapp.com/api/v1/';
function askQuiz(evt)
{   
    evt.preventDefault();
    let title = document.getElementById("title").value;
    let body = document.getElementById('body').value;
    let questionInfo = JSON.stringify({
        "title": title,
        "body": body
    })
    console.log('This is the start of fetch')
    fetch(url+'questions', {
        method: 'POST',
        mode: "cors",
        headers: { 'Content-Type': 'application/json',
        'Authorization':'Bearer '+ window.localStorage.getItem('auth_token')},
        body: questionInfo
    })
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        if (response.status == 201){
            swal({
                title: "Success!",
                text: "Question successfully submitted!",
                icon: "success",
              });
        }
        if (code == 401){
            alert("A similar question has been posted")
        }
    })
    .catch(err => reject(err));
}
