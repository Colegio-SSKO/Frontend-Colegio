alert("student profile");


async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let res = await fetch("http://localhost:8090/api/users/viewprofile", {method : "POST",  body : JSON.stringify(req)}).then((response)=>
        response.json()

    );


    //delete this. this one will return a dummy data to test
    // let res = [
    //     {
    //         "price" : "10",
    //         "img_src" : "../static/img/components_images/elec.jpg",
    //         "title" : "This is a small title",
    //         "author" : "Senith Uthsara",
    //         "description2" : "O/L Science teacher",
    //         "description" : "This is a dummy description"
    //
    //
    //
    //     },
    //
    //     {
    //         "price" : "20",
    //         "img_src" : "../static/img/components_images/elec.jpg",
    //         "title" : "This is a small title",
    //         "author" : "Senith Uthsara",
    //         "description2" : "O/L Science teacher",
    //         "description" : "This is a dummy description"
    //
    //
    //     },
    //
    //     {
    //         "price" : "100",
    //         "img_src" : "../static/img/components_images/elec.jpg",
    //         "title" : "This is a small title",
    //         "author" : "Senith Uthsara",
    //         "description2" : "O/L Science teacher",
    //         "description" : "This is a dummy description"
    //
    //
    //
    //     }
    //
    // ]

    return res
};


function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += ` <profile-card profile_img="${"img_src"}" name="${"name"}" date="${"date"}" gender="${"gender"}" education_level="${"level"}" ></profile-card>` + ` <featured-cont img_src="kask" title="kavinda" description="2000/12/5" author="male" description2="olevel" price="20" rating="ssd" votes=" sdsd"></featured-cont> + `;


        document.querySelector(".cont-body-content").innerHTML = html_left;

        let selected = document.querySelectorAll(".courseList-card");

    });
}