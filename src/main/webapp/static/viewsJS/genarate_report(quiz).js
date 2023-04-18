alert("report_course123");

async function fetchData(){

    alert(temporary_data);
    let res = await fetch("http://localhost:8090/api/moderators/generate_report_quiz/:" + temporary_data, {method : "GET"}).then((response)=>
        response.text()

    );
    return res
};
function renderSingle(){

    fetchData().then((data)=>{


        let html = `
        
        <report-listquiz dataString="${encodeURIComponent(data)}"></report-listquiz>`;


        document.querySelector(".cont-body-content").innerHTML = html;


        let disable = document.querySelectorAll(".disable_course");


        for (let element of disable){
            element.addEventListener('click',async (event)=>{

                let content_id = event.target.id;


                let requestBody= {
                    "content_id": content_id
                }
                let url = "http://localhost:8090/api/moderators/disable_quiz/:" + getModeratorID();
                let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                    response.json()

                );

                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                if(res.message==="Disable quiz successfully"){
                    popup.innerHTML = `
                      <img src="../static/img/components_images/success.jpg" alt="">
                      <h2>${res.message}</h2>
                      <button class="btn" id="ok-btn"><a href="/report_quiz">OK</a></button>       
                `;
                }
                else{
                    popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2>${res.message}</h2>
                        <button class="btn" id="ok-btn"><a href="/report_quiz">OK</a></button>
                    `;

                }

                let ok_btn = document.getElementById("ok-btn");
                ok_btn.addEventListener("click", ()=>{
                    document.querySelector(".popup-container").style.display = "none";
                })
                alert(res.message);

            })
        }


    });
}


