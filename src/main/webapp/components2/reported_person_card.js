let globlename;
let globleemail;

class Reported_usercard extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let email = this.attributes.email.value;
        let name = this.attributes.name.value;
        let user_id = this.attributes.user_id.value;
        this.innerHTML = `
        <div class="report-person">
            <div class="report-person-tumbnail-img">
                <img src="${img_src}" alt="">
            </div>
    
            <div class="report-person-item-content">
                <div class="cart-text">
                    <h2 class="fnt fnt-bold fnt-mid">User Name:- ${name}</h2>
                    <h2 class="fnt fnt-bold fnt-mid">E-mail:- ${email}</h2>
                </div>
            </div>  
            
            <div class="report-person-item-btn">
                    <button class="btn btn-solid btn-large"><a class="genarate_report_person fnt fnt-bold fnt-mid" href="/generate_report_person" id="${user_id}">Genarate Report</a></button>
            </div>
        </div>
        `;
    globlename= name;
    globleemail= email;
    }

}

customElements.define('reported-personcard', Reported_usercard);