class Easy_nav_card extends HTMLElement {
    async connectedCallback() {



        this.innerHTML = `
      <div><span class="fnt fnt-large fnt-bold">Top categories</span></div>
      <div class="easy-nav-card-container">
        <div class="easy-nav-card" id="10" >
          <img src="../static/img/components_images/Maths.png" alt="Card Image">
          <div class="easy-nav-card-text fnt fnt-mid fnt-bold">Maths</div>
        </div>
        <div class="easy-nav-card" id="11">
          <img src="../static/img/components_images/science.png" alt="Card Image">
          <div class="easy-nav-card-text fnt fnt-mid fnt-bold">Science</div>
        </div>
        <div class="easy-nav-card" id="12">
          <img src="../static/img/components_images/english.png" alt="Card Image">
          <div class="easy-nav-card-text fnt fnt-mid fnt-bold">English</div>
        </div>
        <div class="easy-nav-card" id="14">
          <img src="../static/img/components_images/history.png" alt="Card Image">
          <div class="easy-nav-card-text fnt fnt-mid fnt-bold">History</div>
        </div>
        <div class="easy-nav-card" id="13">
          <img src="../static/img/components_images/ict.png" alt="Card Image">
          <div class="easy-nav-card-text fnt fnt-mid fnt-bold">ICT</div>
        </div>
        <div class="easy-nav-card" id="15">
          <img src="../static/img/components_images/chemistry.png" alt="Card Image">
          <div class="easy-nav-card-text fnt fnt-mid fnt-bold">Chemistry</div>
        </div>
        <div class="easy-nav-card" id="16">
          <img src="../static/img/components_images/physics.png" alt="Card Image">
          <div class="easy-nav-card-text fnt fnt-mid fnt-bold">Physics</div>
        </div>
        <div class="easy-nav-card" id="17">
          <img src="../static/img/components_images/biology.png" alt="Card Image">
          <div class="easy-nav-card-text fnt fnt-mid fnt-bold">Biology</div>
        </div>
      </div>
    `;

        let small_lited = document.querySelectorAll(".easy-nav-card");

        small_lited.forEach((small_lited) => {
            small_lited.addEventListener('click', async (event) => {
                event.preventDefault();
                alert("hari")
                let id = event.currentTarget.id;
                temporary_data = id;
                alert(temporary_data);
                window.history.pushState({}, "", "/easy_nav_cards");
                urlLocation();
            });
        });

    }}
customElements.define('easy-nav', Easy_nav_card);