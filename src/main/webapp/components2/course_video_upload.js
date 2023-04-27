class Course_videoupload extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
             <form>
                <div class="option_box">
                    <input type="text" class="fnt fnt-mid fnt-light" required placeholder="Enter title here"><br><br>
                    <textarea class="fnt fnt-mid fnt-light description_box" name="description_box" rows="4" cols="30" placeholder="description"></textarea>&nbsp;&nbsp; &nbsp;<input type="file" class="myFile fnt fnt-light fnt-mid" name="filename">
                    <div class="add"><button>+</button></div>
                </div>
            </form>
        `;
    }
}

customElements.define('course-videoupload', Course_videoupload);