alert("Hello0000!");



function renderSingle() {
        let html = `
            <content-list dataString='
            [
            {
                "votes" : 102,
                "ratings" : 5,
                "img_src" : "../static/img/components_images/elec.jpg",
                "title" : "Electronics basics for GCE ALs",
                "author" : "Senith Uthsara",
                "price" : "$39.99"

            },
            {
                "votes" : 102,
                "ratings" : 5,
                "img_src" : "../static/img/components_images/elec.jpg",
                "title" : "Electronics basics for GCE ALs",
                "author" : "Kavinda Medagoda",
                "price" : "$29.99"

            },
            {
                "votes" : 102,
                "ratings" : 5,
                "img_src" : "../static/img/components_images/elec.jpg",
                "title" : "Electronics basics for GCE ALs",
                "author" : "Sachini Usha",
                "price" : "$19.99"

            }
        ]
            '></content-list>
        `;

        document.querySelector(".cont-body-content").innerHTML = html;
}