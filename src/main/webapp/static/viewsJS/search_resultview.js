alert("search_result");

async function fetchData(){
    let requestBody = {
        "teacher_name": teacher_name
    }

//uncomment this when connecting the database
    let url = "http://localhost:8090/api/organizations/search_teacher";
    let res3 = await fetch(url, {
        method: "POST",
        body: JSON.stringify(req),
        credentials : "include"
    }).then((response) =>
            response.text()
    );

    return res3;
};
function renderSingle(){

    fetchData().then((data)=>{

        let html = '<invite-teacher></invite-teacher>';

        html += `
        
        <seach-resultlist dataString="${encodeURIComponent(data)}"></seach-resultlist>`;


        document.querySelector(".cont-body-content").innerHTML = html;


    });
}






