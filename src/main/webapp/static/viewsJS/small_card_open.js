



async function fetchData() {


    const res2 = await fetch("http://localhost:8090/api/users/small_card_open/:" + temporary_data, {
        method: "GET",
        credentials : "include"
    }).then((response) => response.json());

    return res2;
}
//uncomment this when connecting the database
//     let res = await fetch("http://localhost:8090/api/users/small_card_open/:1", {method : "GET"}).then((response)=>
//         response.json()
//
//     );
//
//     return res
// };

async function renderSingle() {
    try {
        let data = await fetchData();


        const res3 = await fetch("http://localhost:8090/api/users/small_card_open_comment/:" + temporary_data, {method: "GET"}).then((response) => response.text());



        let html_left = "";
        html_left = `<pop-up></pop-up> <small-cardopen img_src="${data.introduction_media}" title="${data.course_title}" description="${data.decription}" author="${data.f_name}+${data.l_name}" price="${data.price}" date="${data.date}" content_id="${data.content_id}" rate_count="${data.rate_count}" ></small-cardopen><comment-list dataString="${encodeURIComponent(res3)}"> </comment-list>`;

        document.querySelector(".cont-body-content").innerHTML = html_left;

    } catch (error) {
        console.error(error);
    }
};
