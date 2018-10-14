window.addEventListener('load', display_questions);
function display_questions() {
    fetch('https://stackoverflow-lite-ch3.herokuapp.com/api/v1/questions/', {
        method: 'GET',
        mode:'cors',
        headers: { 'Content-Type': 'application/json',
        'Authorization':'Bearer '+ window.localStorage.getItem('auth_token')},
    })
    .then((resp) => {
        http_code = resp.status
        return resp.json()
    })
    .then((data) => {
      if (http_code == 200) {
          var data =data.results;
         data.sort(function(a,b) {
             return b.question_id-a.question_id;
         });
           var all_questions=[];
              data.forEach(question => {
              var my_question="<h4 onclick='showAnswers(this);'"
              +"id='"+question.question_id+"' key='"+question.question_id+"'>"
              +"<a href='#'>"+question.title+"</a></h4>"
              +"<p>"+question.body+"</p>"
              +"<span class='button' id='"+question.question_id+"'"
              +"onclick='showAnswers(this);'><button>View Answers >></button> </span>"
              +"<span class='button' id='"+question.question_id+"'"
              +"onclick='deleteQuestion(this);'><button>Delete</button></span><hr>";
              all_questions.push(my_question);
      });
      document.getElementById('all_questions').innerHTML=all_questions.join('')
      }
      if (http_code == 401){
          alert(data.Message)
      }
  
  })
//   .catch((err) => console.log("An error Occurred "+err))  
}
