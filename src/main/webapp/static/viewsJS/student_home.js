async function fetchData(){
    return "eeew";
};



function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += ` <featured-cont img_src="../static/img/components_images/elec.jpg" title="kavinda" description="2000/12/5" author="male" description2="olevel" price="20" rating="ssd" votes=" sdsd"></featured-cont>  `;


        document.querySelector(".cont-body-content").innerHTML = html_left;

        let selected = document.querySelectorAll(".courseList-card");

        // let fName = document.querySelector(".fname");
        // let lName = document.querySelector(".lname");
        // let edu = document.querySelector("#edu");
        // let gender = document.querySelector("#gender");

        let addtoCartBtn = document.querySelector("#addtocart");

        addtoCartBtn.addEventListener('click', async ()=>{
            let req = {
                "user_ID" : 1,
                "content_ID" : 12
            }

            let resp = await fetch("http://localhost:8090/api/users/addtocart", {method : "POST",  body : JSON.stringify(req)}).then((data)=>{
                data.text()
            });



        })

    });
}