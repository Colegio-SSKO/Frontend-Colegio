class Q_3 extends HTMLElement {
    connectedCallback() {

        let title = this.attributes.title.value;
        let description = this.attributes.description.value;
        let img_src = this.attributes.img_src.value;
        let name = this.attributes.name.value;
        let qulifi = this.attributes.qulifi.value;
        this.innerHTML = `
        <div class="q-3-main fadeInanimation">
        <div class="q-3-about">
            <h2 class="fnt fnt-bold fnt-large">${title}</h2>
            <p class="fnt fnt-mid">${description}</p>

            <div class="q-3-cmnt">
                <div class="q-3-comment-box">
                    <form action="submit">
                        <input type="text" placeholder="Type your response">
                        <send-button/>
                    </form>
                </div>
            </div>

            <With-title img_src="${img_src}" name="${name}" qulifi="${qulifi}"/>
            
        </div>

    </div>
        `;
    }
}

customElements.define('q-3', Q_3);