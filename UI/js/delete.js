window.addEventListener('load', deleteQuestion);
function deleteQuestion(question_id) { 

    fetch('https://stackoverflow-lite-ch3.herokuapp.com/api/v1/questions/'+ question_id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
        'Authorization':'Bearer '+ window.localStorage.getItem('auth_token')},   
    })
    .then((response) => {
            statusCode = response.status
            return response.json()
        })
        .then((response) => {
            if (statusCode == 200){
                alert(response.Message)
            }
            if (statusCode == 401){
                alert(response.Message)
            }
        })}