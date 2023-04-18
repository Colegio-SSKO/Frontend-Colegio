alert("Notification1234");

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database

    let url = "http://localhost:8090/api/teachers/teacher_view_org_req/:" + getTeacherID();
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
            html_left += ` <pop-up></pop-up> <org-requestteacher img_src="${i["img_src"]}" address="${i["address"]}"  name="${i["name"]}" organization_id="${i["organization_id"]}" ></org-requestteacher>`;
        }

        document.querySelector(".cont-body-content").innerHTML = html_left;


        //accept teacher
        let accept = document.querySelectorAll(".accept");


        for (let element of accept){
            element.addEventListener('click',async (event)=>{

                let organization_id = event.target.id;


                let requestBody= {
                    "organization_id": organization_id
                }
                let url = "http://localhost:8090/api/teachers/teacher_accept_org/:" + getTeacherID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );

                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                if(res.message==="Join organization successfully"){
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