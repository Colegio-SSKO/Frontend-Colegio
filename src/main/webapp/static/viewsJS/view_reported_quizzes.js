

async function fetchData(){

    let res = await fetch("http://localhost:8090/api/moderators/view_reported_quiz", {
        method : "GET",
        credentials : "include"
    }).then((response)=>
        response.json()
    );

    return res


};


function renderSingle(){


    fetchData().then((data)=>{
        let html_left =" ";

        for (let i of data){
            html_left += ` <reported-quizcard img_src="${i["img_src"]}" title="${i["title"]}" name="${i["name"]}" subject="${i["subject"]}" quiz_id="${i["quiz_id"]}"></reported-quizcard>`;
        }

        document.querySelector(".cont-body-content").innerHTML = html_left;


        let report = document.querySelectorAll(".genarate_report");


        for (let element of report){
            element.addEventListener('click',async (event)=>{

                let quiz_id = event.target.id;
                temporary_data= quiz_id;


                let requestBody = {
                    "quiz_id": quiz_id
                }
            })
        }

    });
}

