
async function fetchData(){
    // return "eeew";
};



function renderSingle(){


    fetchData().then((data)=>{

        let html_left = "";
        html_left += `<pop-up></pop-up> <edit-email></edit-email>`;
        document.querySelector(".cont-body-content").innerHTML = html_left;
        let selected = document.querySelectorAll(".courseList-card");

        let currPassword = document.querySelector("#currPassword1");
        let currEmail = document.querySelector("#currEmail1");
        let newEmail = document.querySelector("#newEmail1");
        let email_save_btn = document.querySelector("#email-save-btn");


        email_save_btn.addEventListener('click', async  (event)=> {
            event.preventDefault();
            let req = {
                "currPassword1": currPassword1.value,
                "currEmail1": currEmail1.value,
                "newEmail1": newEmail1.value
            }
            let resp = await fetch("http://localhost:8090/api/users/editEmail/:1", {
                method: "POST",
                body: JSON.stringify(req)
            }).then((data) => {
                return  data.json();
            });

            let popup = document.querySelector(".popup-content");
            document.querySelector(".popup-container").style.display = "flex";
            let isError = resp["isError"];
            let message = resp["message"];
            if (isError==0){
                popup.innerHTML = `
                     <img src="../static/img/components_images/sucsess.png" alt="">
                       <h2>${message}</h2>
               <button class="btn" id="ok-btn" >OK</button>
                       
                `;
            }
            else {
                popup.innerHTML = `
                     <img src="../static/img/components_images/error.png" alt="">
                       <h2>${message}</h2>
               <button class="btn" id="ok-btn">OK</button>
                       
                `;
            }
            let ok_btn = document.getElementById("ok-btn");
            ok_btn.addEventListener("click", ()=>{
                document.querySelector(".popup-container").style.display = "none";
            })
        })


    });
}