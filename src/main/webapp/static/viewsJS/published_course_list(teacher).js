

async function fetchData(){

    let url = "http://localhost:8090/api/teachers/teacher_published_course/:"+ getUserID();
    let data = await fetch(url, {
        method: "GET",
        credentials : "include"
    }).then((response) =>
        response.text()
    );

    let html = '<pop-up></pop-up>';
    html += ` 
        <publishcoursequiz-list dataString="${encodeURIComponent(data)}"></publishcoursequiz-list>`;

    return html;
};
async function renderSingle(){

        let html = await fetchData();
        document.querySelector(".cont-body-content").innerHTML = html;

}






