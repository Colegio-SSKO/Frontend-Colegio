

async function fetchData(){




//uncomment this when connecting the database
        let url = "http://localhost:8090/api/teachers/teacher_published_quiz/:"+ getUserID();
        let data = await fetch(url, {
            method: "GET",
            credentials : "include"
        }).then((response) =>
            response.json()
        );

        console.log(data)
        let html = '<pop-up></pop-up>';
        html += `
        <h4 class='fnt fnt-bold fnt-mid'>You have published ${data.length} quizzes <h4><br>
        <publishcoursequiz-list dataString="${encodeURIComponent(JSON.stringify(data))}"></publishcoursequiz-list>`;

        return html;
    };
async function renderSingle(){

        let html = await fetchData()
        document.querySelector(".cont-body-content").innerHTML = html;

}







