alert("11111")
async function fetchData(){
    return "eeew";
};



async function fetchData() {
    const req = {
        "user_ID" : "23"
    }




//uncomment this when connecting the database
    let res = await fetch("http://localhost:8090/api/users/myQuestions/:1", {method : "GET"}).then((response)=>
        response.json()

    );

    return res
};




function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += `<pop-up></pop-up> <profile-card profile_img="kask" name="kavinda" date="2000/12/5" gender="male" education_level="olevel" ></profile-card>` + ` <featured-cont img_src="kask" title="kavinda" description="2000/12/5" author="male" description2="olevel" price="20" rating="ssd" votes=" sdsd"></featured-cont> `;


        document.querySelector(".cont-body-content").innerHTML = html_left;

        // let selected = document.querySelectorAll(".courseList-card");


        let deleteBtn = document.querySelector("#delete-profile");
        alert("5555555")

        deleteBtn.addEventListener('click', async ()=>{


            let resp = await fetch("http://localhost:8080/api/users/deleteProfile/:1", {method : "POST", body : "{}"}).then((data)=>{
                return data.json()
            });

            let popup = document.querySelector(".popup-content");
            alert("helloo weeessa")
            document.querySelector(".popup-container").style.display = "flex";

            alert(resp);
            let isError = resp["isError"];
            let message = resp["message"];
            if (isError==0){
                popup.innerHTML = `
                     <img src="../static/img/components_images/sucsess.png" alt="">
                       <h2>${message}</h2>
                        <button btn btn-primary>OK</button>
                       
                `;
            }
            else {
                popup.innerHTML = `
                     <img src="../static/img/components_images/error.png" alt="">
                       <h2>${message}</h2>
                        <button btn btn-primary>OK</button>
                       
                `;
            }
            alert("888")


        })



    });
}