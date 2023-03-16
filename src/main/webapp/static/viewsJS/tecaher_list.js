alert("teacher_list");



function renderSingle() {
    let html = `
            <teacher-list dataString='
            [
                "img_src" : "../static/img/components_images/elec.jpg",
                "name" : "Electronics basics for GCE ALs",
                "quali" : "Senith Uthsara"

            },
            {
                "img_src" : "../static/img/components_images/elec.jpg",
                "name" : "Electronics basics for GCE ALs",
                "quali" : "Sachini Usha"

            },
            {
                "img_src" : "../static/img/components_images/elec.jpg",
                "name" : "Electronics basics for GCE ALs",
                "quali" : "Kavinda Medagoda"

            }
        ]
            '></teacher-list>
        `;

    document.querySelector(".cont-body-content").innerHTML = html;
}