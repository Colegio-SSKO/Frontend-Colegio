alert("organization ad publish karamu");

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let url = "http://localhost:8090/api/users/vieworganizationprofile/:82";
    let res3 = await fetch(url, {
        method: "GET",
        credentials : "include"
    }).then((response) =>
        response.json()
    );

    return res3;
};




async function renderSingle() {
    try {
        const data = await fetchData();
        alert(typeof (data));
        alert(data);
        const res2 = await fetch("http://localhost:8090/api/users/ad_view/:82", {
            method: "GET",
            credentials : "include"
        }).then((response) => response.text());
        const html_left = `
                            <organizationprofile-adpublish profile_img="${data.img_src}" name="${data.name}" address="${data.address}" tel_num="${data.tel_num}" organization_id="${data.organization_id}"></organizationprofile-adpublish>`+`<ad-section dataString="${encodeURIComponent(res2)}"></ad-section>` ;

        document.querySelector(".cont-body-content").innerHTML = html_left;





        let teachers = document.querySelectorAll(".all_teacher");

        for (let element of teachers) {
            element.addEventListener('click', async (event) => {

                let organization_id = event.target.id;
                temporary_data= organization_id;


                let requestBody = {
                    "organization_id": organization_id
                }
                // let url = "http://localhost:8090/api/users/Vieworg_teacher";
                // let res3 = await fetch(url, {method: "POST", body: JSON.stringify(requestBody)}).then((response) =>
                //     response.json()
                // );

                // let location = window.location;
                // window.history.pushState({}, "", location);
                // urlLocation();
            })

        }
    } catch (error) {
        console.error(error);
    }
}



