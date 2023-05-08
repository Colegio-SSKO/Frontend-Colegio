

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let url = "http://localhost:8090/api/users/teacher_course/:"+ temporary_data;
    let res3 = await fetch(url, {
        method: "GET",
        credentials : "include"
    }).then((response) =>
        response.text()
    );

    return res3;
};
function renderSingle(){

    fetchData().then(async (data)=>{


        const res3 = await fetch("http://localhost:8090/api/users/teacher_quiz/:"+ temporary_data, {
            method: "GET",
            credentials : "include"
        }).then((response) => response.text());

        let html =+
 
        `<content-list dataString="${encodeURIComponent(data)}"></content-list>`;


        document.querySelector(".cont-body-content").innerHTML = html;



    });
}






