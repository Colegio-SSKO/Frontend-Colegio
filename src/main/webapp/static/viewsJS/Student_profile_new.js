alert("student profilenew213");


async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let res = await fetch("http://localhost:8090/api/users/viewprofile", {method : "POST",  body : JSON.stringify(req)}).then((response)=>
        response.json()

    );
    return res
};





async function renderSingle() {
    try {
        const data = await fetchData();

        const res2 = await fetch("http://localhost:8090/api/users/ViewCont_list", { method: "GET" }).then((response) => response.text());

        const html_left = `<profile-card profile_img="${data.img_src}" name="${data.name}" date="${data.date}" gender="${data.gender}" education_level="${data.level}" ></profile-card>`+`<featured-cont></featured-cont>`+ '<p class="fnt fnt-bold fnt-large">Trending in Colegio</p>'+ `<content-list dataString="${encodeURIComponent(res2)}"></content-list>`;

        document.querySelector(".cont-body-content").innerHTML = html_left;

    } catch (error) {
        console.error(error);
    }
}



