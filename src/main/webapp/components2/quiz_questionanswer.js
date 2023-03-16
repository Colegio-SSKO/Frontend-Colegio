class Quiz_questionanswer extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
        <form>
            <div class="input-field">
                <label for="" class="fnt fnt-bold fnt-mid">Quiz question</label>

                    <div class="option_box">
                        <input type="text" class="fnt fnt-mid fnt-light" required placeholder="Add your quiz question here"><br><br><br>
                        <input type="text" class="fnt fnt-mid fnt-light" id="option1" name="option" placeholder="Enter Option 1"><br><br>
                        <input type="text" class="fnt fnt-mid fnt-light" id="option2" name="option" placeholder="Enter Option 2"><br><br>
                        <input type="text" class="fnt fnt-mid fnt-light" id="option3" name="option" placeholder="Enter Option 3"><br><br>
                        <input type="text" class="fnt fnt-mid fnt-light" id="option4" name="option" placeholder="Enter Option 4"><br><br>
                        <div class="add"><button>+</button></div>
                    </div>
            </div>
        </form>
        `;
    }
}
    
customElements.define('quiz-questionanswer', Quiz_questionanswer);