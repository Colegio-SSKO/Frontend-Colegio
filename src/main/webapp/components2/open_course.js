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

            <div class="ratings" style="display: flex; align-items: center;">
                 <i class="fas fa-star star-yellow" style="color: orange; font-size:10px;"></i>
                 <i class="fas fa-star star-yellow" style="color: orange; font-size:15px;"></i>
                 <i class="fas fa-star star-yellow" style="color: orange; font-size:10px;"></i>
                 <h6 class="fnt fnt-light fnt-mid">Ratings(${rates_count}) &nbsp</h6><br>
                 <div class="rate_report">
                    <a href=""><div class="addrate fnt fnt-bold fnt-mid link" id="${content_id}">Rate</div></a>
                    <span class="fnt-bold fnt fnt-mid">&nbsp | &nbsp</span>
                    <div class="addreport fnt fnt-bold fnt-mid link" id="${course_id}">Report</div>
                 </div>
            </div><br>
        
        

        <h4 class="open-course-title fnt fnt-bold fnt-large">${title} </h4>
        <p class="open-course-desc fnt fnt-light fnt-mid">${description}
        </p><br>

        <with-title img_src = "${author_pic}" name = "${author}" qulifi = "${author_title}"></with-title>
        <div class="open-course-cont">
        
        <button class="course_countinue btn btn-solid btn-small"><a href="/continuecourse" id="${content_id}">Continue</a></button>


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
                        <div class="rating-box">
                              <header>Add your rates</header>
                              <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                              </div>
                        </div>

                `;

                const stars = document.querySelectorAll(".stars i");

                stars.forEach((star, index1) => {

                    star.addEventListener("click", async() => {

                        stars.forEach((star, index2) => {
                            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
                        });

                        let requestBody= {
                            "rate_value": index1+1,
                            "content_id": content_id
                        }

                        let url = "http://localhost:8090/api/users/addrates/:" + getUserID();
                        let res = await fetch(url, {method : "POST",  body : JSON.stringify(requestBody)}).then((response)=>
                            response.json()

                        );
                        popup.innerHTML += `
                                      <div class="message fnt fnt-light fnt-large">
                                           ${res.message}
                                           <a href="/viewCourses"><div class="btn btn-small btn-outlined is-a-route">OK</div></a>
                                      </div>          
                                                
                                    `;

                    });
                });


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