alert("quizzzzz12345");

async function fetchData(){




//uncomment this when connecting the database
        let url = "http://localhost:8090/api/users/teacher_published_quiz/:"+ temporary_data;
        let res3 = await fetch(url, {
            method: "GET",
            credentials : "include"
        }).then((response) =>
            response.text()
        );

        return res3;
    };
function renderSingle(){

    fetchData().then((data)=>{

        let html = '<pop-up></pop-up>';

        html += `
        
        <publishcoursequiz-list dataString="${encodeURIComponent(data)}"></publishcoursequiz-list>`;


        document.querySelector(".cont-body-content").innerHTML = html;

    });
}







