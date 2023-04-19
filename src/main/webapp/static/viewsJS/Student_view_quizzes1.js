alert("Heliidd1");

async function fetchData() {
    let res = await fetch("http://localhost:8090/api/users/myQuizes/:1", {method : "GET"}).then((response)=>
        response.json()

    );

    return res
};


//function to render right content

async function renderRight(data) {

    let questions = await fetch("http://localhost:8090/api/users/getQuestions/:" + data["quiz_id"], {method : "GET"}).then((response)=>{
        return response.json();
    })
    console.log(questions);

    let html_right = "";

    html_right += `
<quiz-question q_number="${"1/"+ questions.length.toString()}" title="${data["quiz_title"]}" Question="${questions[0]["question"]}" answer1="${questions[0]["op1"]}" answer2="${questions[0]["op2"]}" answer3="${questions[0]["op3"]}" answer4="${questions[0]["op4"]}" ></quiz-question>`;
    document.querySelector(".cont-body-left").innerHTML = html_right;

    let previous = document.querySelector(".js-quiz-previous");
    let next = document.querySelector(".js-quiz-next");
    let theQuestion = document.querySelector("#js-quiz-q-question");
    let choice1 = document.querySelector("#js-quiz-q-answer-1");
    let choice2 = document.querySelector("#js-quiz-q-answer-2");
    let choice3 = document.querySelector("#js-quiz-q-answer-3");
    let choice4 = document.querySelector("#js-quiz-q-answer-4");
    let qNumber = document.querySelector("#js-quiz-q-number");
    let containerCollection = document.querySelectorAll(".quiz-q");// answer containers


    //controlling next and previous buttons
    let questionTracker = 1;


    previous.addEventListener('click', ()=>{



        if (questionTracker != 1){
            questionTracker--;
            theQuestion.innerHTML = questions[questionTracker-1]["question"];
            choice1.innerHTML = questions[questionTracker-1]["op1"];
            choice2.innerHTML = questions[questionTracker-1]["op2"];
            choice3.innerHTML = questions[questionTracker-1]["op3"];
            choice4.innerHTML = questions[questionTracker-1]["op4"];
            qNumber.innerHTML = questionTracker.toString() + "/" + questions.length.toString();
        }

        alert("previouss")

    })

    next.addEventListener('click', ()=>{
        if (questionTracker != questions.length){
            questionTracker++;
            theQuestion.innerHTML = questions[questionTracker-1]["question"];
            choice1.innerHTML = questions[questionTracker-1]["op1"];
            choice2.innerHTML = questions[questionTracker-1]["op2"];
            choice3.innerHTML = questions[questionTracker-1]["op3"];
            choice4.innerHTML = questions[questionTracker-1]["op4"];
            qNumber.innerHTML = questionTracker.toString() + "/" + questions.length.toString();
        }
        alert("nextt")
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
            alert("container clicked")
            alert(event.target.id);
            for(let selectedContainer of containerCollection){
                let children = selectedContainer.querySelectorAll("*");
                children[0].style.backgroundColor = "#46344e";
                children[1].style.backgroundColor = "transparent";
            }

            if(event.target.classList.contains("q-number")){
                alert("wed");
                event.target.style.backgroundColor = "#6D6D6D";
            }
            else {
                event.target.previousElementSibling.style.backgroundColor = "#6D6D6D";
            }


            //saving answer
            let reqBody = {
                "quiz_qid" : questions[questionTracker-1]["quiz_qid"],
                "user_id" : getUserID(),
                "answer" : containers[event.target.parentNode.id]
            }
            fetch("http://localhost:8090/api/users/saveAnswer", {method : "POST", body :JSON.stringify(reqBody)}).then((response)=>{
                response.json();
            })
        })
    }





}





//rendering the left content
function renderLeft() {


    fetchData().then((data)=>{

        let html_left = "";
        alert(data);
        html_left += "" +
            "<button class=\"btn btn-solid btn-small\"><a class=\"fnt fnt-bold fnt-mid\" href=\"\">All</a></button>\n" +
            "<button class=\"btn btn-outlined btn-small\"><a class=\"fnt fnt-bold fnt-mid\" href=\"\">Continuing</a></button>\n" +
            "<button class=\"btn btn-outlined btn-small\"><a class=\"fnt fnt-bold fnt-mid\" href=\"\">Completed</a></button><br><br>\n" +
            "\n" +
            "";


        for (let i of data){
            html_left += ` <listed-content content_ID="${i["content_id"]}" img_src="${i["media"]}" title="${i["quiz_title"]}" author="${i["f_name"] + " " +i["l_name"]}" description="${i["description"]}" rating=\"5\" votes=\"102\"></listed-content>`;
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

    alert("runn")
    let html_right = "";

    html_right = `<start-quiz rating="4" votes="110" quiz_id="${element["content_id"]}" img_src="/new" title="${element["quiz_title"]}" description=${element["description"]} author=${element["f_name"] + " " + element["l_name"]} author_title=${element["qulification_level"]}></start-quiz>`;
    document.querySelector(".cont-body-right").innerHTML = html_right;

    document.querySelector(".js-startquiz-start-btn").addEventListener('click', ()=>{
        renderRight(element);
    })
}