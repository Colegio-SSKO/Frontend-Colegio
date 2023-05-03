class Ad_section extends HTMLElement {
    connectedCallback() {


        let dataString = decodeURIComponent(this.getAttribute('dataString'));
        let data = JSON.parse(dataString);

        let htmlcontent = "";

        // let data = [
        //     {
        //         "img_src" : "../static/img/components_images/coolest-cars-feature.jpg"
        //     },
        //     {
        //         "img_src" : "../static/img/components_images/download.jpg"
        //     },
        //     {
        //         "img_src" : "../static/img/components_images/download (1).jpg"
        //     }
        // ]


        for (let i of data) {

                htmlcontent += `<ad-sectionlist img_src="${i["ad_media"]}"></ad-sectionlist>`;
        }

        this.innerHTML = `
         <div class="slideshow-container">
            
                 `+ htmlcontent +`
        
            </div>
        `;

        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000); // Change image every 2 seconds
        }


    }
}

customElements.define('ad-section', Ad_section);