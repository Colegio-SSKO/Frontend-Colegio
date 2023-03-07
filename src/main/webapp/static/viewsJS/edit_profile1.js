alert("hello edit");
alert("rra");

async function fetchData(){



    return "eeew";
};


async function sendData(jsonRequest){
    await fetch("")
}


function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += ` <edit-profile></edit-profile>`;


        document.querySelector(".cont-body-content").innerHTML = html_left;

        let selected = document.querySelectorAll(".courseList-card");


        //sending data
        let fName = document.querySelector(".fname");
        let lName = document.querySelector(".lname");
        let edu = document.querySelector("#edu");
        let gender = document.querySelector("#gender");

        let saveBtn = document.querySelector("#save-btn");

        saveBtn.addEventListener('click', async ()=>{
            let req = {
                "fName" : fName.value,
                "lName" : lName.value,
                "edu" : edu.value,
                "gender" : gender.value
            }

            let resp = await fetch("http://localhost:8090/api/users/editProfile", {method : "POST",  body : JSON.stringify(req)}).then((data)=>{
                data.text()
            });



        })


    });
}



