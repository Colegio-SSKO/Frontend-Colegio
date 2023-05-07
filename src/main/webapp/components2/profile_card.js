class Profile_card extends HTMLElement {
    connectedCallback() {

        let profile_img = this.attributes.profile_img.value;
        let name = this.attributes.name.value;
        let date = this.attributes.date.value;
        let gender = this.attributes.gender.value;
        let education_level = this.attributes.education_level.value;
        let veri = this.attributes.veri.value;

        this.innerHTML = `
        <div class="profile-card-wrap" xmlns="http://www.w3.org/1999/html">
        <div class="profile-card-image">
            <img src="${profile_img}" alt="profile picture" srcset="">
        </div>
        <div class="profile-card-details">
            <h4 class="fnt fnt-bold fnt-large">Name: ${name} </h4><br>
            <p class="fnt fnt-bold fnt-large">Gender: ${gender}</p><br>
            <p class="fnt fnt-bold fnt-large">Registered date: ${date}</p><br>
            <p class="fnt fnt-bold fnt-large">Education level: ${education_level}</p>
            
        </div>
        <div class="edit-and-delte-btns">
            <a href="/edit_profile" ><button class="btn-profile fnt fnt-bold fnt-mid is-a-route">Edit Profile</button></a>
            <a href="/upgrade"><button id="upgrade-to-teacher" class="btn-profile fnt is-a-route fnt-bold fnt-mid"${
            veri === "1" ? "disabled style='pointer-events: none; background-color: lightslategray;'" : ""
            }>Upgrade to Teacher</button></a>
            <a href="/upgrade_to_org"><button id="upgrade-to-organization" class="btn-profile fnt is-a-route fnt-bold fnt-mid" ${
                veri === "1" ? "disabled style='pointer-events: none; background-color: lightslategray;'" : ""
            }>Upgrade to Organization</button></a>
        </div>

    </div>
        `;
    }
}

customElements.define('profile-card', Profile_card);