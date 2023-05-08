
//element selectors
if (typeof previous === 'undefined') {
    let previous;
}
if (typeof next === 'undefined') {
    let next;
}

if (typeof theQuestion === 'undefined') {
    let theQuestion;
}

if (typeof choice1 === 'undefined') {
    let choice1;
}
if (typeof choice2 === 'undefined') {
    let choice2;
}

if (typeof choice3 === 'undefined') {
    let choice3;
}

if (typeof choice4 === 'undefined') {
    let choice4;
}

if (typeof qNumber === 'undefined') {
    let qNumber;
}

// answer containers
if (typeof containerCollection === 'undefined') {
    let containerCollection;
}






async function fetchData() {
    let res = await fetch("http://localhost:8090/api/users/myQuizes/:"+getUserID(), {
        method : "GET",
        credentials : "include"
    }).then((response)=>
        response.json()

    );

    return res
};


//function to render right content

async function renderRight(data) {



    let questions = await fetch("http://localhost:8090/api/users/getQuestions/:" + data["quiz_id"], {
        method : "GET",
        credentials : "include"
    }).then((response)=>{
        return response.json();
    })
    console.log(questions);




    let html_right = "";

    html_right += `
<quiz-question q_number="${"1/"+ questions.length.toString()}" title="${data["title"]}" Question="${questions[0]["question"]}" answer1="${questions[0]["op1"]}" answer2="${questions[0]["op2"]}" answer3="${questions[0]["op3"]}" answer4="${questions[0]["op4"]}" ></quiz-question>`;
    document.querySelector(".cont-body-left").innerHTML = html_right;

    //element selecctors
    previous = document.querySelector(".js-quiz-previous");
    next = document.querySelector(".js-quiz-next");
    theQuestion = document.querySelector("#js-quiz-q-question");
    choice1 = document.querySelector("#js-quiz-q-answer-1");
    choice2 = document.querySelector("#js-quiz-q-answer-2");
    choice3 = document.querySelector("#js-quiz-q-answer-3");
    choice4 = document.querySelector("#js-quiz-q-answer-4");
    qNumber = document.querySelector("#js-quiz-q-number");
    containerCollection = document.querySelectorAll(".quiz-q");// answer containers



    //displaying the quiz progress
    renderProgress(questions.length);
    //setting the first question as active
    let questionTracker = 1;
    changeColorOfNumber(questionTracker, "#46344e");


    //controlling next and previous buttons
    let answers = {};


    previous.addEventListener('click', ()=>{


        changeColorOfNumber(questionTracker, "#d9d9d9");
        if (questionTracker != 1){
            questionTracker--;
            changeQuestion(questionTracker, questions, answers)
        }

        changeColorOfNumber(questionTracker, "#46344e");

    })

    next.addEventListener('click', ()=>{

        changeColorOfNumber(questionTracker, "#d9d9d9");
        if (questionTracker != questions.length){
            questionTracker++;
            changeQuestion(questionTracker, questions, answers)
        }

        changeColorOfNumber(questionTracker, "#46344e");
    })


    //answer containers
    let containers = {
        "js-quiz-q-answer-1-backg": "op1",
        "js-quiz-q-answer-2-backg": "op2",
        "js-quiz-q-answer-3-backg": "op3",
        "js-quiz-q-answer-4-backg": "op4"

    }

    //adding event listners to containers
    for (let container of containerCollection){
        container.addEventListener('click', (event)=>{
            for(let selectedContainer of containerCollection){
                let children = selectedContainer.querySelectorAll("*");
                children[0].style.backgroundColor = "#46344e";
                children[1].style.backgroundColor = "transparent";
            }

            if(event.target.classList.contains("q-number")){
                event.target.style.backgroundColor = "#6D6D6D";
            }
            else {
                event.target.previousElementSibling.style.backgroundColor = "#6D6D6D";
            }


            //saving answer
            answers[questionTracker] = event.target.parentNode.id;

            let reqBody = {
                "quiz_qid" : questions[questionTracker-1]["quiz_qid"],
                "user_id" : getUserID(),
                "answer" : containers[event.target.parentNode.id]
            }
            fetch("http://localhost:8090/api/users/saveAnswer", {
                method : "POST",
                body :JSON.stringify(reqBody),
                credentials : "include"
            }).then((response)=>{
                response.json();
            })
        })
    }




    //navigation through the progress component
    let quizNumbers = document.querySelectorAll(".js-quiz-number");
    for(let number of quizNumbers){
        number.addEventListener('click', (event)=>{
            event.preventDefault();
            let targetID = event.target.id[event.target.id.length-1];
            changeColorOfNumber(questionTracker, "#d9d9d9");
            questionTracker = targetID
            changeQuestion(questionTracker, questions,answers);
            changeColorOfNumber(questionTracker, "#46344e");


        })
    }



}





//rendering the left content
function renderLeft() {


    fetchData().then((data)=>{

        let html_left = "";
        console.log(data)
        html_left += "" +
            "<a  href=\"\"><button class=\"fnt fnt-bold fnt-mid btn btn-solid btn-a  is-a-route\">All</button></a>\n" +
            "<a  href=\"\"><button class=\"fnt fnt-bold fnt-mid btn btn-solid btn-a  is-a-route\">Continuing</button></a>\n" +
            "<a  href=\"\"><button class=\"fnt fnt-bold fnt-mid btn btn-solid btn-a  is-a-route\">Completed</button></a>\n" +
            "<a href=\"/createQuiz\"><button class=\"btn-special fnt fnt-bold fnt-mid is-a-route\">Create quiz</button></a><br><br>\n"+
        "\n" +
            "";


        for (let i of data){
            html_left += ` <listed-content content_ID="${i["content_id"]}" img_src="${i["image"]}" title="${i["title"]}" author="${i["f_name"] + " " +i["l_name"]}" description="${i["description"]}" rates="${i["rate_count"]}"></listed-content>`;
        }

        document.querySelector(".cont-body-left").innerHTML = html_left;

        let selected = document.querySelectorAll(".courseList-card");

        for (let element of selected){
            element.addEventListener('click', (ev)=>{
                for (let el of data){
                    if (el["content_id"] == element.getAttribute("id")){
                        // renderRight(el);
                        quizcard(el);
                    }
                }
            })
        }



    });





}



//display the main quiz card

function quizcard(element){

    let html_right = "";

    html_right = `<start-quiz comments="${encodeURIComponent(JSON.stringify(element["comments"]))}" rating="4" votes="110" quiz_id="${element["content_id"]}" img_src="${element["pro_pic"]}" title="${element["title"]}" description=${element["description"]} author=${element["f_name"] + " " + element["l_name"]} author_title=${element["qulification_level"]}></start-quiz>`;
    document.querySelector(".cont-body-right").innerHTML = html_right;

    document.querySelector(".js-startquiz-start-btn").addEventListener('click', ()=>{
        renderRight(element);
    })
}


//displaying the progress
function renderProgress(length){
    let html_right = "";

    html_right = `<quiz-number numberOfQuestions="${length}"></quiz-number>`;
    document.querySelector(".cont-body-right").innerHTML = html_right;
}




//function to display currently attempting question
function changeColorOfNumber(questionNumber, color){
    document.querySelector(`#js-quiz-number-q-number${questionNumber}`)
        .style.backgroundColor = color;
}


function changeQuestion(questionTracker, questions, answers){


    theQuestion.innerHTML = questions[questionTracker-1]["question"];
    choice1.innerHTML = questions[questionTracker-1]["op1"];
    choice2.innerHTML = questions[questionTracker-1]["op2"];
    choice3.innerHTML = questions[questionTracker-1]["op3"];
    choice4.innerHTML = questions[questionTracker-1]["op4"];
    qNumber.innerHTML = questionTracker.toString() + "/" + questions.length.toString();

    //unselect all questions
    for(let selectedContainer of containerCollection){
        let children = selectedContainer.querySelectorAll("*");
        children[0].style.backgroundColor = "#46344e";
        children[1].style.backgroundColor = "transparent";
    }

    if (answers[questionTracker] !== undefined){
        document.getElementById(answers[questionTracker]).firstElementChild.style.backgroundColor = "#6D6D6D";
    }
}


