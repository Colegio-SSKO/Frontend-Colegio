
async function sendData(jsonRequest){
    await fetch("")
}


function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += `  <pop-up></pop-up>  <upgrade-formorg></upgrade-formorg>`;


        document.querySelector(".cont-body-content").innerHTML = html_left;




        //sending data


        let submit_btn = document.querySelector("#submit_btn");

        submit_btn.addEventListener('click', async ()=>{
            console.log("Submit button clicked!");

            let fName = document.querySelector(".fname");
            let lName = document.querySelector(".lname");
            let address = document.querySelector(".address");
            let telnum = document.querySelector(".telnum");

            // if (!fName || !lName || !address || !telnum || telnum.length !== 10 || isNaN(telnum)) {
            //     return;
            // }

            let req = {
                "fName" : fName.value,
                "lName" : lName.value,
                "address" : address.value,
                "telnum" : telnum.value,

            }



            let resp = await fetch("http://localhost:8090/api/students/upgrade_to_organization/:"+getUserID(), {method : "POST",  body : JSON.stringify(req)}).then((data)=>{
                return data.json();
            });

            let popup = document.querySelector(".popup-content");
            document.querySelector(".popup-container").style.display = "flex";

            let message = resp["message"];
            if (message=="Upgrade account successfully"){
                popup.innerHTML = `
                     <img src="../static/img/components_images/sucsess.png" alt="">
                       <h2>${message}</h2>
                        <a href="/auth/signin"><button class="btn is-a-route" id="ok-btn">OK</button>
                       
                `;
            }
        })




    });
}



