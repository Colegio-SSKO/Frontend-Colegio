

alert("aa home")

async function fetchData(){


//uncomment this when connecting the database
    let res = await fetch("http://localhost:8090/api/users/view_featured_cont/:1", {method : "GET", credentials : "include"}).then((response)=>
        response.json()

    );

    return res
};


function addEventListenerToSmallListedItems() {
    const smallListedItems = document.querySelectorAll("small-listed");
    smallListedItems.forEach((item) => {
        item.addEventListener('click', () => {
        });
    });
}

function renderSingle(){


    fetchData().then(async (data) => {

            const res3 = await fetch("http://localhost:8090/api/users/ViewCont_list", {
                method: "GET",
                credentials : "include"
            }).then((response) => response.text());

            let html_left = "";

            html_left += `<pop-up></pop-up><featured-cont img_src = "${"img_src"}" title = "${"title"}" description = "${"description"}" author = "${"author"}" date = "${"date"}" price = "${"price"}" subject = "${"subject"}"></featured-cont> <content-list dataString="${encodeURIComponent(res3)}"></content-list>`;


            document.querySelector(".cont-body-content").innerHTML = html_left;

            addEventListenerToSmallListedItems();



        }
    );


}