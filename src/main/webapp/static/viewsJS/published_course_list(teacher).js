alert("aa12");

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }


//uncomment this when connecting the database
    let url = "http://localhost:8090/api/teachers/teacher_published_course/:"+ temporary_data;
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






