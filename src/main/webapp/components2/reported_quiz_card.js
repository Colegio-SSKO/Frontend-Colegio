let globalauthorq;

class Reported_quizcard extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let name = this.attributes.name.value;
        let subject = this.attributes.subject.value;
        let quiz_id = this.attributes.quiz_id.value;
        this.innerHTML = `
        <div class="report-course">
            <div class="report-course-tumbnail-img">
                <img src="${img_src}" alt="">
            </div>
    
            <div class="report-course-item-content">
                <div class="cart-text">
                    <h2 class="fnt fnt-bold fnt-mid">Quiz Title:- ${title}</h2>
                    <h3 class="fnt fnt-bold fnt-mid">Author:- ${name}</h3>
                    <h3 class="fnt fnt-bold fnt-mid">Subject Name:- ${subject} </h3>
                </div>
            </div>  
            
            <div class="report-course-item-btn">
                    <button class="btn btn-solid btn-large"><a class="genarate_report fnt fnt-bold fnt-mid" href="/generate_report_quiz" id="${quiz_id}">Genarate Report</a></button>
            </div>
        </div>

        `;

        globalauthorq = name;

    }
}

customElements.define('reported-quizcard', Reported_quizcard);