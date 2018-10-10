class Api{
    constructor (){
        this.url= 'https://stackoverflow-lite-ch3.herokuapp.com/api/v1/';
        this.access_token = window.localStorage.getItem('auth_token');
    }

    getQuestions(){
        return new Promise((resolve, reject)=>{
            fetch(url+"questions/",{
                headers: {'Authorization':'Bearer '+ this.access_token}
        })
        .then((response)=>{
           if (response.status==200){
               resolve(response.json());
           }
           else{
               reject(response);
           }
        })
    })
    }

    async getSingleQuestion(url){
        const myQuestion = await fetch(url,{headers: {'Authorization':'Bearer '+ this.access_token}});
        const myAnswers = await fetch(url + "question/question_id/answers",{headers: {'Authorization':'Bearer '+ this.access_token}});
        const question = await myQuestion.json();
        const answers = await myAnswers.json();

        return {
            question,answers
        };

    }

    postQuestion(question) {
        return new Promise((resolve, reject) => {
            fetch(this.url + '/questions', {
                method: 'POST',
                body: JSON.stringify(question),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer '+ this.access_token
                } 
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    resolve(data);
                })
                .catch(err => reject(err));
        })
    }

    async postAnswer(url, answer) {
        const post_answer = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization':'Bearer '+ this.access_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(answer)
        });

        const answer_return = await post_answer.json();
        return answer_return;
    }

    updateAnswer(url, answer) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(answer),
                headers: {
                    'Authorization':'Bearer '+ this.access_token,
                    'Content-Type': 'application/json'
                },
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    resolve(data);
                })
                .catch(err => reject(err));
        });
    }
    
    markAnswerAsPreferred(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization':'Bearer '+ this.access_token
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    resolve(data);
                })
                .catch(err => reject(err));
        });
    }

    getCurrentUserQuestions() {
        return new Promise((resolve, reject) => {
            fetch(this.url + '/user/questions', {
                headers: {
                    'Authorization':'Bearer '+ this.access_token
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization':'Bearer '+ this.access_token
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}
