
async function fetchData(){

    let res = await fetch("http://localhost:8090/api/moderators/generate_report_verify_teacher/:" + temporary_data, {
        method : "GET",
        credentials : "include"
    }).then((response)=>
        response.json()

    );
    return res

};
function renderSingle(){

    fetchData().then((data)=>{

        let html = `
        
        <verify-teacherdetails img_src="${data["certificate"]}" gender="${data["gender"]}" name="${data["f_name"]} ${data["l_name"]}" email="${data["email"]}" education_level="${data["education_level"]}" refer="${data["refers"]}" user_id="${data["user_id"]}" upgrade_id="${data["upgrade_id"]}"></verify-teacherdetails>`;


        document.querySelector(".cont-body-content").innerHTML = html;

        let popup = document.querySelector(".popup-content");
        document.querySelector(".popup-container").style.display = "flex";

        if(res.message==="Upgrade successfully"){
            popup.innerHTML = `
                      <img src="../static/img/components_images/success.jpg" alt="">
                      <h2 class="fnt fnt-large fnt-light">${res.message}</h2>
                      <button class="btn" id="ok-btn"><a href="/verify_teacher">OK</a></button>       
                `;
        }
        else{
            popup.innerHTML = `
                        <img src="../static/img/components_images/error.jpg" alt="">
                        <h2 class="fnt fnt-large fnt-light">Error</h2>
                        <button class="btn" id="ok-btn"><a href="/verify_teacher">OK</a></button>
                    `;

        }

        let ok_btn = document.getElementById("ok-btn");
        ok_btn.addEventListener("click", ()=>{
            document.querySelector(".popup-container").style.display = "none";
        })





    });
}


