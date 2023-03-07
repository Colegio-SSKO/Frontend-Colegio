alert("View cart");

async function fetchData(){
    const req = {
        "user_ID" : "23"
    }

//uncomment this when connecting the database
    let res = await fetch("http://localhost:8090/api/users/viewcart", {method : "POST",  body : JSON.stringify(req)}).then((response)=>
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

        for (let i of data){
            html_left += ` <cart-item img_src="${i["img_src"]}" title=${i["title"]}" description="${i["description"]}" author="${i["author"]}" description2="${i["description2"]}" price="${i["price"]}"></cart-item>`;
        }

        document.querySelector(".cont-body-content").innerHTML = html_left;

        let selected = document.querySelectorAll(".courseList-card");

    });
}