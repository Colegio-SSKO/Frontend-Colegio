alert("Notification");

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database

    let url = "http://localhost:8090/api/organizations/org_view_teacher_req/:" + getOrgID();
    let res3 = await fetch(url, {method: "GET"}).then((response) =>
        response.text()
    );
    let data2 = JSON.parse(res3);
    return data2;
};


function renderSingle(){


    fetchData().then((data)=>{

        let html_left = ""

        for (let i of data){
            html_left += ` <pop-up></pop-up> <org-teacherrequest img_src="${i["img_src"]}" quli="${i["quli"]}"  name="${i["name"]}" teacher_id="${i["teacher_id"]}" ></org-teacherrequest>`;
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
                let url = "http://localhost:8090/api/organizations/org_accept_teacher/:" + getOrgID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );

                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                if(res.message==="Accept teacher successfully"){
                    popup.innerHTML = `
                      <img src="../static/img/components_images/success.jpg" alt="">
                      <h2>${res.message}</h2>
                      <button class="btn" id="ok-btn"><a href="/notification">OK</a></button>       
                `;
                }
                else{
                    popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2>${res.message}</h2>
                        <button class="btn" id="ok-btn"><a href="/notification">OK</a></button>
                    `;

                }

                let ok_btn = document.getElementById("ok-btn");
                ok_btn.addEventListener("click", ()=>{
                    document.querySelector(".popup-container").style.display = "none";
                })
                alert(res.message);
                // let location = window.location;
                // window.history.pushState({}, "", location);
                // urlLocation();
            })
        }




    });
}