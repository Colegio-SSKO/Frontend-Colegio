

async function fetchData(){
    // return "eeew";
};



function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += `<pop-up></pop-up> <change-password></change-password>`;


        document.querySelector(".cont-body-content").innerHTML = html_left;

        let selected = document.querySelectorAll(".courseList-card");


        let currPassword = document.querySelector("#currPassword");
        let newPassword = document.querySelector("#newPassword");
        let againPassword = document.querySelector("#againPassword");


        let pass_save_btn = document.querySelector("#Pass-save-btn") ;


        pass_save_btn.addEventListener('click', async  (event)=> {
            event.preventDefault();
            let req = {
                "currPassword": currPassword.value,
                "newPassword": newPassword.value,
                "againPassword": againPassword.value
            }
            let resp = await fetch("http://localhost:8080/api/users/changePassword/:"+getUserID(), {
                method: "POST",
                body: JSON.stringify(req)
            }).then((data) => {
                return data.json()
            });
            alert(resp);

            let popup = document.querySelector(".popup-content");

            document.querySelector(".popup-container").style.display = "flex";

            alert(resp);
            let isError = resp["isError"];
            let message = resp["message"];
            if (isError==0){
                popup.innerHTML = `
                     <img src="../static/img/components_images/sucsess.png" alt="">
                       <h2>${message}</h2>
               <button class="btn" id="ok-btn">OK</button>
                       
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
            alert(ok_btn);
            ok_btn.addEventListener("click", ()=>{
                document.querySelector(".popup-container").style.display = "none";
            })
        })
    });
}