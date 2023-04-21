alert("wwwww")



async function fetchData() {


    const res2 = await fetch("http://localhost:8090/api/users/search_quiz_open/:" + temporary_data, {method: "GET"}).then((response) => response.json());
    alert(res2)
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
        alert(data);



        const html_left = `<pop-up></pop-up> <search-quizopen img_src="${data.image}" title="${data.quiz_title}" description="${data.description}" author="${data.f_name}+${data.l_name}" date="${data.date}" content_id="${data.content_id}" ></search-quizopen>`;
        alert("hellowww")
        document.querySelector(".cont-body-content").innerHTML = html_left;

    } catch (error) {
        console.error(error);
        alert(error)
    }
};
