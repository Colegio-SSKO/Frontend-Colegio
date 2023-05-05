alert("report_person132");

async function fetchData(){

    let res = await fetch("http://localhost:8090/api/moderators/generate_report_verify_teacher/:" + temporary_data, {
        method : "GET",
        credentials : "include"
    }).then((response)=>
        response.json()

    );
    alert(JSON.stringify(res));
    return res

};
function renderSingle(){

    fetchData().then((data)=>{

        let html = `
        
        <verify-teacherdetails img_src="${data["certificate"]}" name="${data["f_name"]} ${data["l_name"]}" email="${data["email"]}" education_level="${data["education_level"]}" refer="${data["refers"]}" user_id="${data["user_id"]}" upgrade_id="${data["upgrade_id"]}"></verify-teacherdetails>`;


        document.querySelector(".cont-body-content").innerHTML = html;





    });
}


