
alert("aa vis")

async function fetchData(){


//uncomment this when connecting the database
    let res = await fetch("http://localhost:8090/api/visitors/view_featured_cont/:1", {method : "GET", credentials : "include"}).then((response)=>
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

            const res3 = await fetch("http://localhost:8090/api/visitors/ViewCont_list", {
                method: "GET",
                credentials : "include"
            }).then((response) => response.text());

            let html_left = "";

            html_left += `<pop-up></pop-up><home-hero><br><br></home-hero><featured-visitor img_src = "${"img_src"}" title = "${"title"}" description = "${"description"}" author = "${"author"}" date = "${"date"}" price = "${"price"}" subject = "${"subject"}"></featured-visitor> <content-list dataString="${encodeURIComponent(res3)}"></content-list><easy-nav></easy-nav>`;


            document.querySelector(".cont-body-content").innerHTML = html_left;

            addEventListenerToSmallListedItems();



        }
    );


}