

async function fetchData(){

    let res = await fetch("http://localhost:8090/api/moderators/generate_report/:" + temporary_data, {
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
        
        <report-listcourse dataString="${encodeURIComponent(data)}"></report-listcourse>`;


        document.querySelector(".cont-body-content").innerHTML = html;


        let disable = document.querySelectorAll(".disable_course");


        for (let element of disable){
            element.addEventListener('click',async (event)=>{

                let content_id = event.target.id;


                let requestBody= {
                    "content_id": content_id
                }
                let url = "http://localhost:8090/api/moderators/disable_course/:" + getModeratorID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );

                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                if(res.message==="Disable course successfully"){
                    popup.innerHTML = `
                      <img src="../static/img/components_images/success.jpg" alt="">
                      <h2>${res.message}</h2>
                      <button class="btn" id="ok-btn"><a href="/report_course">OK</a></button>       
                `;
                }
                else{
                    popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2>${res.message}</h2>
                        <button class="btn" id="ok-btn"><a href="/report_course">OK</a></button>
                    `;

                }

                let ok_btn = document.getElementById("ok-btn");
                ok_btn.addEventListener("click", ()=>{
                    document.querySelector(".popup-container").style.display = "none";
                })

            })
        }


    });
}


