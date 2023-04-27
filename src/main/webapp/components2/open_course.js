class Open_course extends HTMLElement {
    connectedCallback() {

        let author_pic = this.attributes.author_pic.value;
        let img_src = this.attributes.img_src.value;
        let title= this.attributes.title.value;
        let description= this.attributes.description.value;
        let author = this.attributes.author.value;
        let author_title = this.attributes.author_title.value;
        let rates_count = this.attributes.rates_count.value;
        let course_id = this.attributes.course_id.value;
        let content_id = this.attributes.content_id.value;
        this.innerHTML = `
        <div class="open-course-wrap">
        <div class="open-course-image">
            <img src="${img_src}" alt="">
        </div>

        <div class="cont-ratings">
            <span class="material-icons">star</span>
            <div class="fnt fnt-light fnt-small">Rates:- </div>
            <div class="fnt fnt-bold fnt-small">(${rates_count})</div>
    
        </div>
        
        <button class="addrate fnt fnt-bold fnt-mid" id="${content_id}">Rate</button>
        <button class="addreport fnt fnt-bold fnt-mid" id="${course_id}">Report</button>

        <h4 class="open-course-title fnt fnt-bold fnt-large">${title} </h4>
        <p class="open-course-desc fnt fnt-light fnt-mid">${description}
        </p>

        <with-title img_src = "${author_pic}" name = "${author}" qulifi = "${author_title}"></with-title>
        <div class="open-course-cont">
        
        <button class="course_countinue btn btn-solid btn-small"><a href="/continuecourse" id="${course_id}">Continue</a></button>


        </div>
    </div>

        `;


        let addrate = document.querySelectorAll(".addrate");


        for (let element of addrate){
            element.addEventListener('click',async (event)=>{

                let content_id = event.target.id;

                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                popup.innerHTML = `
                        <h4 class="fnt fnt-bold fnt-large">Add your Ratess</h4>
                        <div class="rate">
                            <input type="radio" id="star5" name="rates" value="5" />
                            <label for="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rates" value="4" />
                            <label for="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" />
                            <label for="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" />
                            <label for="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" />
                            <label for="star1" title="text">1 star</label>
                        </div>

                `;

                let rates = document.querySelectorAll(".rate");


                for (let element of rates){
                    element.addEventListener('click',async (event)=>{

                        let rateValue = event.target.value;
                        alert(rateValue);
                        alert("sachini");


                        let requestBody= {
                            "rate_value": rateValue,
                            "content_id": content_id
                        }
                        let url = "http://localhost:8090/api/users/addrates/:" + getUserID();
                        let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                            response.json()

                        );
                        let popup = document.querySelector(".popup-content");
                        document.querySelector(".popup-container").style.display = "flex";

                        popup.innerHTML = `
                        <img src="../static/img/components_images/success.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">${res.message}</h2>
                        <button btn btn-primary><a href="/viewCourses">OK</a></button>

                `;
                    })
                }

            })
        }







        let addreport = document.querySelectorAll(".addreport");


        for (let element of addreport){
            element.addEventListener('click',async (event)=>{

                let course_id = event.target.id;

                let popup = document.querySelector(".popup-content");
                document.querySelector(".popup-container").style.display = "flex";

                popup.innerHTML = `
                        <label for="reason">Enter the reason:</label>
                        <input type="text" id="reason" name="reason"><br><br>
                        <button class="submit">Sumbit</button>
                `;

                let report = document.querySelectorAll(".submit");


                for (let element of report){
                    element.addEventListener('click',async (event)=>{

                        let reason = document.getElementById("reason");
                        let report_reason = reason.value;


                        let requestBody= {
                            "reason": report_reason,
                            "course_id": course_id
                        }
                        let url = "http://localhost:8090/api/users/report_course/:" + getUserID();
                        let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                            response.json()

                        );
                        let popup = document.querySelector(".popup-content");
                        document.querySelector(".popup-container").style.display = "flex";

                        popup.innerHTML = `
                        <img src="../static/img/components_images/success.jpg" alt="">
                        <h2 class="fnt fnt-bold fnt-large">${res.message}</h2>
                        <button btn btn-primary><a href="/viewCourses">OK</a></button>

                `;
                    })
                }

            })
        }




        let course_continue = document.querySelectorAll(".course_countinue");

        for (let element of course_continue) {
            element.addEventListener('click', async (event) => {

                let course_id = event.target.id;
                temporary_data= course_id;
                alert(course_id);
                alert("sachini")


            })

        }
    }
}

customElements.define('open-course', Open_course);