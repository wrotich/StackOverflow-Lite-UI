
window.addEventListener('load', fetchAllQuestions);
function fetchAllQuestions() { 
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
               var img='<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAxIDUxMi4wMDEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDEgNTEyLjAwMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NzguMzI5LDE4My44MkgzMDAuODAzYy03LjktMjcuNTExLTIzLjQxMi01Mi41OTMtNDUuMTMzLTcyLjA0MmMtMzIuOTIyLTI5LjQ4MS03NS40NDYtNDMuMDE2LTExOS43NDktMzguMTE5ICAgIEM2NC44NzEsODEuNTE4LDguMDQ4LDEzOC44NzEsMC44MDksMjEwLjAzMmMtMy45NTMsMzguODQ2LDYuNjcsNzcuMjUxLDI5LjkwOSwxMDguMTRjMjIuMjcxLDI5LjYsNTQuMjI5LDUwLjA2Myw5MC4yMDMsNTcuODE2ICAgIGwzNy44NDUsMzcuODQ0YzMuMTc3LDMuMTc4LDcuMzk1LDQuODYxLDExLjY5OCw0Ljg2YzIuMTM4LDAsNC4yOTYtMC40MTYsNi4zNTgtMS4yN2M2LjIxNC0yLjU3NCwxMC4yMjctOC41ODIsMTAuMjI3LTE1LjMwNyAgICBWMzc1LjYyYzYuMjIzLTEuMzkxLDEyLjI4NS0zLjE1NSwxOC4xNzItNS4yNTd2MS4wNWMwLDE4LjU2NiwxNS4xMDUsMzMuNjcxLDMzLjY3MSwzMy42NzFoNTYuNTM5bDMwLjExOSwzMC4xMTkgICAgYzIuNjk0LDIuNjk0LDYuMjY5LDQuMTIxLDkuOTE2LDQuMTIxYzEuODEyLDAsMy42NDEtMC4zNTMsNS4zODktMS4wNzZjNS4yNjctMi4xODIsOC42Ny03LjI3NSw4LjY3LTEyLjk3NnYtMjAuMTg4SDQ3OC4zMyAgICBjMTguNTY2LDAsMzMuNjcxLTE1LjEwNSwzMy42NzEtMzMuNjcxVjIxNy40ODlDNTEyLDE5OC45MjUsNDk2Ljg5NSwxODMuODIsNDc4LjMyOSwxODMuODJ6IE0xNzcuNjI1LDM2MS4xNjQgICAgYy0zLjgyNSwwLjY4Mi02LjYwOSw0LjAwNy02LjYwOSw3Ljg5MnYzMy4wNmMwLDAuMTkxLDAsMC4zNTctMC4zMywwLjQ5NGMtMC4zMywwLjEzNS0wLjQ0NiwwLjAxOS0wLjU4My0wLjExNWwtMzkuNTM5LTM5LjUzOSAgICBjLTEuMTIxLTEuMTIxLTIuNTUtMS44ODYtNC4xMDYtMi4xOTRjLTMzLjA4NC02LjU3NS02Mi41MzUtMjUuMTI0LTgyLjkyOC01Mi4yMjljLTIwLjgwNS0yNy42NTQtMzAuMzEzLTYyLjA1OS0yNi43NzEtOTYuODc4ICAgIGMzLjEyMS0zMC42ODUsMTcuMDE0LTU5Ljg3MywzOS4xMTktODIuMTljMjIuMTA5LTIyLjMyLDUxLjE2LTM2LjQ3OSw4MS44MDUtMzkuODY4YzUuMzMyLTAuNTksMTAuNjI4LTAuODgyLDE1Ljg4NS0wLjg4MiAgICBjMzMuODkzLDAsNjUuODg0LDEyLjE1NCw5MS40MDUsMzUuMDA3YzI5LjA4MiwyNi4wNDIsNDUuNzYxLDYzLjM1LDQ1Ljc2MSwxMDIuMzU5ICAgIEMyOTAuNzM1LDI5Mi42NjMsMjQzLjE2NiwzNDkuNDczLDE3Ny42MjUsMzYxLjE2NHogTTQ5NS45NjYsMzcxLjQxNGMwLDkuNzI1LTcuOTEyLDE3LjYzNy0xNy42MzcsMTcuNjM3SDM0MS41MDggICAgYy00LjQyNywwLTguMDE3LDMuNTg5LTguMDE3LDguMDE3djIzLjQwM2wtMjkuMDcxLTI5LjA3MWMtMS41MDMtMS41MDQtMy41NDItMi4zNDgtNS42NjgtMi4zNDhoLTU5Ljg1OSAgICBjLTkuNzI1LDAtMTcuNjM3LTcuOTEyLTE3LjYzNy0xNy42Mzd2LTcuODE4YzUxLjMyLTI1LjIyNCw4NS41MTMtNzcuODU2LDg1LjUxMy0xMzcuNTE1YzAtOC44NTItMC43ODEtMTcuNjIyLTIuMjgtMjYuMjI4ICAgIGgxNzMuODQxYzkuNzI1LDAsMTcuNjM3LDcuOTEyLDE3LjYzNywxNy42MzdWMzcxLjQxNHoiIGZpbGw9IiM5MURDNUEiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NDkuNzkyLDI0Ni4wMjdjLTMuMTMtMy4xMzEtOC4yMDYtMy4xMzEtMTEuMzM3LDBsLTc5Ljg0NSw3OS44NDVsLTM3LjA2OS0zNy4wNjljLTMuMTMxLTMuMTMxLTguMjA3LTMuMTMxLTExLjMzNywwICAgIGMtMy4xMzEsMy4xMzEtMy4xMzEsOC4yMDcsMCwxMS4zMzdsNDIuNzM3LDQyLjczN2MxLjU2NSwxLjU2NSwzLjYxNywyLjM0OCw1LjY2OCwyLjM0OGMyLjA1MSwwLDQuMTA0LTAuNzgyLDUuNjY5LTIuMzQ4ICAgIGw4NS41MTMtODUuNTEzQzQ1Mi45MjMsMjU0LjIzMyw0NTIuOTIzLDI0OS4xNTcsNDQ5Ljc5MiwyNDYuMDI3eiIgZmlsbD0iIzkxREM1QSIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTE1My4zODUsMjg2LjQ2NGMtMC4wMDMsMC0wLjAwNywwLTAuMDExLDBjLTQuNDI3LDAtOC4wMjIsMy41OTUtOC4wMjIsOC4wMjJjMCwwLjAwMSwwLDAuMDAzLDAsMC4wMDUgICAgYzAsMC4wMDIsMCwwLjAwMywwLDAuMDA1YzAsNC40MjcsMy41OTUsOC4wMjIsOC4wMjIsOC4wMjJjMC4wMDMsMCwwLjAwOCwwLDAuMDExLDBjNC40MjcsMCw4LjAyMi0zLjU5NSw4LjAyMi04LjAyMiAgICBjMC0wLjAwMSwwLTAuMDAzLDAtMC4wMDVjMC0wLjAwMiwwLTAuMDAzLDAtMC4wMDVDMTYxLjQwNywyOTAuMDU5LDE1Ny44MTIsMjg2LjQ2NCwxNTMuMzg1LDI4Ni40NjR6IiBmaWxsPSIjOTFEQzVBIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTg5LjA5NCwxNjQuNzEzYy05LjcxMi05LjcxMi0yMi4zOTctMTUuMDYtMzUuNzE5LTE1LjA1OWMtMjcuOTk0LDAuMDAyLTUwLjc2OSwyMi43OC01MC43NjksNTAuNzczICAgIGMwLDQuNDI3LDMuNTg5LDguMDE3LDguMDE3LDguMDE3YzQuNDI3LDAsOC4wMTctMy41ODksOC4wMTctOC4wMTdjMC0xOS4xNTQsMTUuNTgzLTM0LjczOSwzNC43MzctMzQuNzQgICAgYzkuMDM5LDAsMTcuNjk3LDMuNjc5LDI0LjM4LDEwLjM2MmM2LjY4Myw2LjY4MywxMC4zNjMsMTUuMzQyLDEwLjM2MywyNC4zODFjLTAuMDAxLDE1LjIyNy0xMC4xNzYsMjguOTExLTI0Ljc0MiwzMy4yNzkgICAgYy0xMC43NzYsMy4yMzEtMTguMDE0LDEyLjg4Ni0xOC4wMTQsMjQuMDI0djIuNTU0YzAsNC40MjcsMy41ODksOC4wMTcsOC4wMTcsOC4wMTdjNC40MjcsMCw4LjAxNy0zLjU4OSw4LjAxNy04LjAxN3YtMi41NTQgICAgYzAtNC4wMDIsMi42NDctNy40ODUsNi41ODctOC42NjZjMjEuMjk1LTYuMzg2LDM2LjE2OS0yNi4zODUsMzYuMTctNDguNjM2QzIwNC4xNTQsMTg3LjExLDE5OC44MDYsMTc0LjQyNCwxODkuMDk0LDE2NC43MTN6IiBmaWxsPSIjOTFEQzVBIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />';
                 var all_questions=["<p>"+img+"<span style='font-size:30px;'> Questions</span></p>"];
                    data.forEach(function(question,i){
                        i= parseInt(i)+1;
                    var my_question="<h3 onclick='showAnswers(this);'"
                    +"id='"+question.question_id+"' key='"+question.question_id+"'>"
                    +"<a href='#'>"+i+". "+question.title+"</a></h3>"
                    +"<p class='blockqoute'>"+question.body+"</p>"
                    +"<span class='button' id='"+question.question_id+"'"
                    +"onclick='showAnswers(this);'><button>View Answers >></button> </span></br><hr>"
                    // +"<span class='button' id='"+question.question_id+"'"
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
   fetch('https://stackoverflow-lite-ch3.herokuapp.com/api/v1/questions/'+question_id, {
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
      +"Posted on: "+question.created_at
      +"<h4>Answers ("+answers.length+")</h4>"
      +"<span id='answers'></span>";

    displayAnswer(answers);
    displayTextArea(question.question_id);

      } 
   });
}

//Display the answer after it has been posted
function displayAnswer(answers) {
    var rows=[];
    answers.forEach(answer => {
       var my_answer= "postedBy: "+answer.user_id+"<br><p>"+answer.answer_body+"</p><br>"
       +"<span id='actions_"+answer.answer_id+"'></span><br/><hr/>";
       rows.push(my_answer);
       
   });
    rows.push("<span id='textarea_display'></span>");
   document.getElementById('answers').innerHTML=rows.join('');
 showAnswerActions(answers);
}
//post answer textarea
function displayTextArea(question_id){
        var html=""
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
  fetch("https://stackoverflow-lite-ch3.herokuapp.com/api/v1/questions/"+id+"/answers",{
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
//displays the edit and mark as preferred actions on an answer
 function showAnswerActions(answers){
    answers.forEach(function(answer){
        var id= 'actions_'+answer.answer_id;
        console.log(id);
        answer_body=answer.answer_body;
        document.getElementById(id).innerHTML="<button id='myBtn'"
        +answer.answer_id+" onClick='function()'>Edit</button>";

            // Get the modal
        var modal = document.getElementById('myModal');
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks the button, open the modal 
        btn.onclick = function() {
            modal.style.display = "block";
        }
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });
}