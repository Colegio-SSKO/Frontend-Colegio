class Edit_profile extends HTMLElement {
    connectedCallback() {


        this.innerHTML = `
      <div class="quiz-numbers-main">
        <div class="quiz-numbers">
            <button class="btn btn-small">01</button>
            <button class="btn btn-small">02</button>
            <button class="btn btn-small">03</button>
            <button class="btn btn-small">04</button>
            <button class="btn btn-small">05</button>
            <button class="btn btn-small">06</button>
            <button class="btn btn-small">07</button>
            <button class="btn btn-small">08</button>
            <button class="btn btn-small">09</button>
            <button class="btn btn-small">10</button>
        </div>
        <div class="quiz-number-submit">
            <button class="btn btn-small">Submit</button>
        </div>
    </div>
        `;
    }
}

customElements.define('edit-profile', Edit_profile);