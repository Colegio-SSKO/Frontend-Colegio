
async function fetchData(){

    let res = await fetch("http://localhost:8090/api/moderators/generate_report_person/:" + temporary_data, {
        method : "GET",
        credentials : "include"
    }).then((response)=>
        response.text()

    );
    return res

};
function renderSingle(){

    fetchData().then((data)=>{

        let html = `
        
        <reportperson-list dataString="${encodeURIComponent(data)}"></reportperson-list>`;


        document.querySelector(".cont-body-content").innerHTML = html;


        let disable = document.querySelectorAll(".disable_user");


        for (let element of disable){
            element.addEventListener('click',async (event)=>{

                let user_id = event.target.id;


                let requestBody= {
                    "user_id": user_id
                }
                let url = "http://localhost:8090/api/moderators/disable_person/:" + getModeratorID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );

                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                if(res.message==="Disable person successfully"){
                    popup.innerHTML = `
                      <img src="../static/img/components_images/success.jpg" alt="">
                      <h2>${res.message}</h2>
                      <button class="btn" id="ok-btn"><a href="/report_person">OK</a></button>       
                `;
                }
                else{
                    popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2 class="fnt fnt-large fnt-light">Error</h2>
                        <button class="btn" id="ok-btn"><a href="/report_person">OK</a></button>
                    `;

                }

                let ok_btn = document.getElementById("ok-btn");
                ok_btn.addEventListener("click", ()=>{
                    document.querySelector(".popup-container").style.display = "none";
                })

                window.history.back();
            })
        }


    });
}


