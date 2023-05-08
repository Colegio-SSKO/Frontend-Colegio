async function fetchData(){
    return "eeew";
};


async function renderSingle() {

    try {


        const data = await fetchData();

        const res3 = await fetch("http://localhost:8090/api/users/ViewCont_list", {
            method: "GET",
            credentials : "include"
        }).then((response) => response.text());


        const html_left = ` <featured-cont></featured-cont> + <content-list dataString="${encodeURIComponent(res3)}"></content-list>`;

        document.querySelector(".cont-body-content").innerHTML = html_left;


        let addtoCartBtn = document.querySelector("#addtocart");

        addtoCartBtn.addEventListener('click', async () => {
            let req = {
                "user_ID": 1,
                "content_ID": 12
            }

            let resp = await fetch("http://localhost:8090/api/users/addtocart", {
                method: "POST",
                body: JSON.stringify(req),
                credentials : "include"
            }).then((data) => {
                data.text()
            });


        })

    } catch (error) {
        console.error(error);
    }


}