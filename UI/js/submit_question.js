document.getElementById('submitQuestion').addEventListener('submit', askQuiz);
let url = 'https://stackoverflow-lite-ch3.herokuapp.com/api/v1/';
function askQuiz(evt)
{   
    evt.preventDefault();
    var title = document.getElementById("title").value;
    var body = document.getElementById('body').value;
    var questionInfo = JSON.stringify({
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
        if (response.status == 201){
            document.getElementById("submitQuestion").reset();
            swal({
                title: "Success!",
                text: "Question successfully submitted!",
                icon: "success",
              });
            window.location.reload
        return response.json()
            }
        })
    .catch(err => reject(err));
}