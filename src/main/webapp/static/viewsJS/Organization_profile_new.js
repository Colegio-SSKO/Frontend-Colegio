alert("organization www");

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let url = "http://localhost:8090/api/users/vieworganizationprofile/:"+ temporary_data;
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
        const res2 = await fetch("http://localhost:8090/api/users/ad_view/:82" , {
            method: "GET",
            credentials : "include"
        }).then((response) => response.text());
        const html_left = `
                            <organizationprofile-cardstu profile_img="${data.img_src}" name="${data.name}" address="${data.address}" tel_num="${data.tel_num}" organization_id="${data.organization_id}"></organizationprofile-cardstu>`+`<ad-section dataString="${encodeURIComponent(res2)}"></ad-section>` ;

        document.querySelector(".cont-body-content").innerHTML = html_left;



    } catch (error) {
        console.error(error);
    }
}



