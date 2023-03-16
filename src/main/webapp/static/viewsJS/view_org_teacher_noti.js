alert("Notification");

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let url = "http://localhost:8090/api/users/teacher_org_noti/:" + getOrgID();
    let res = await fetch(url, {method : "POST",  body : JSON.stringify(req)}).then((response)=>
        response.json()
    );
    return res
};


function renderSingle(){


    fetchData().then((data)=>{

        let html_left = ""

        for (let i of data){
            html_left += ` <org-teacherrequest img_src="${i["img_src"]}" title="${i["title"]}" description="${i["description"]}" name="${i["name"]}" teacher_id="${i["teacher_id"]}" ></org-teacherrequest>`;
        }

        document.querySelector(".cont-body-content").innerHTML = html_left;


        //accept teacher
        let accept = document.querySelectorAll(".accept");


        for (let element of accept){
            element.addEventListener('click',async (event)=>{

                let teacher_id = event.target.id;


                let requestBody= {
                    "teacher_id": teacher_id
                }
                let url = "http://localhost:8090/api/users/accept_teacher/:" + getOrgID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );
                let location = window.location;
                window.history.pushState({}, "", location);
                urlLocation();
            })
        }

    });
}