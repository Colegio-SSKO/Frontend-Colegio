async function fetchData(){



//uncomment this when connecting the database
    let url = "http://localhost:8090/api/users/vieworganizationprofile/:"+temporary_data;
    let res3 = await fetch(url, {
        method: "GET",
        credentials : "include"
    }).then((response) =>
        response.json()
    );



    return res3;
};


function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += `  <pop-up></pop-up>  <adpublish-form organization_id="${data["organization_id"]}"></adpublish-form>`;


        document.querySelector(".cont-body-content").innerHTML = html_left;




    });
}



