
window.addEventListener('load', fetchAllQuestions);
function fetchAllQuestions() { 
    fetch('http://127.0.0.1:5000/api/v1/questions', {
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
        .catch((err) => console.log("An error Occurred "+err))  
}

//show answer
function showAnswers(e){
   var question_id=e.id;
   fetch('http://127.0.0.1:5000/api/v1/questions/'+question_id, {
       method: 'GET',
       mode:'cors',
       headers: { 'Content-Type': 'application/json',
       'Authorization':'Bearer '+ window.localStorage.getItem('auth_token')},
      
   })
   .then((resp)=>{
       http_code =resp.status
       return resp.json();
   })
   .then((resp) => {
      if (http_code == 200) {
          resp=resp.results
          var question = resp.question;
          var answers = resp.answers;
          var question=question[0];
      document.getElementById('all_questions').innerHTML="<h3>"+question.title+"</h3>"
      +"<p>"+question.body+"</p>"
      +"Post on: "+question.created_at
      +"<h4>Answers ("+answers.length+")</h4>"
      +"<span id='answers'></span>";

    displayAnswer(answers);

    displayTextArea(question.question_id);
      } 
   });
}
//show answer
function displayAnswer(answers) {
    var rows=[];
    answers.forEach(answer => {
       var my_answer= "postedBy: "+answer.user_id+"<br><p>"+answer.answer_body+"</p><hr/><br>";
       rows.push(my_answer);
   });
    rows.push("<span id='textarea_display'></span>");
   document.getElementById('answers').innerHTML=rows.join('');

}
//post answer textarea
function displayTextArea(question_id){
        var html="<br/><h4>Answer this question</h4>"
        +"<textarea id='answerBody' placeholder='Add Answer' required= true;></textarea>"
        +"<br>"
        +"<button class='button' id='"+question_id+"' onclick='addAnswer(this)'>Post Answer</button>"
        +"";
        document.getElementById('textarea_display').innerHTML=html;
}
//post answer
function addAnswer(e){
    return new Promise((resolve, reject) => {
    let answer_body = document.getElementById("answerBody").value;
    var id=e.id;
    var data = JSON.stringify({
      "answer_body": answer_body
  });
  fetch("http://127.0.0.1:5000/api/v1/questions/"+id+"/answers",{
        method: 'POST',
        mode:'cors',
        body: data,
        headers: { 'Content-Type': 'application/json',
        'Authorization':'Bearer '+ window.localStorage.getItem('auth_token')},
    })
    .then(data => {
        return data.json();
    })
    .then(data => {
        resolve(data);
    })
    .catch(err => reject(err));
    showAnswers({id:id});
    window.location.reload
});
}
