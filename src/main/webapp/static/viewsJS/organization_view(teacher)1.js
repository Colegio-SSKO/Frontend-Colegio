alert("new_organization10112");


async function fetchData(){

    let res = await fetch("http://localhost:8090/api/users/vieworganization", {
        method : "GET",
        credentials : "include"
    }).then((response)=>
        response.text()

    );
    return res
};
function renderSingle(){

    fetchData().then((data)=>{


        let html = `<pop-up></pop-up>
        
        <organization-listteacher dataString="${encodeURIComponent(data)}"></organization-listteacher>`;


        document.querySelector(".cont-body-content").innerHTML = html;


        let teachers = document.querySelectorAll(".org_name");

        for (let element of teachers) {
            element.addEventListener('click', async (event) => {

                let organization_id = event.target.id;
                temporary_data= organization_id;


                let requestBody = {
                    "organization_id": organization_id
                }

            })

        }


        let teacher_send_request = document.querySelectorAll(".teacher_send_request");


        for (let element of teacher_send_request){
            element.addEventListener('click',async (event)=>{

                let organization_id = event.target.id;


                let requestBody= {
                    "organization_id": organization_id
                }
                let url = "http://localhost:8090/api/teachers/teacher_send_req/:" + getTeacherID();
                let res = await fetch(url, {
                    method : "POST",
                    body : JSON.stringify(requestBody),
                    credentials : "include"
                }).then((response)=>
                    response.json()

                );


                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                if(res.message==="You already send request"){
                    popup.innerHTML = `
                      <img src="../static/img/components_images/error.jpg" alt="">
                      <h2>${res.message}</h2>
                      <button class="btn" id="ok-btn">OK</button>       
                `;
                }
                else{
                    if(res.message==="You already a teacher of this organization"){
                        popup.innerHTML = `
                          <img src="../static/img/components_images/error.jpg" alt="">
                          <h2>${res.message}</h2>
                          <button class="btn" id="ok-btn">OK</button>       
                    `;
                    }
                    else {
                        popup.innerHTML = `
                            <img src="../static/img/components_images/success.jpg" alt="">
                            <h2>${res.message}</h2>
                            <button class="btn" id="ok-btn">OK</button>
                        `;
                    }
                }

                let ok_btn = document.getElementById("ok-btn");
                ok_btn.addEventListener("click", ()=>{
                    document.querySelector(".popup-container").style.display = "none";
                })
            })
        }
    });
}





