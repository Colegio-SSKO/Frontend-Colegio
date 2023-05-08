class Reportperson_list extends HTMLElement {
    connectedCallback() {
        let dataString = decodeURIComponent(this.getAttribute('dataString'));
        let data = JSON.parse(dataString);
        let report_count=0;

        let htmlcontent = "";
        for (let i of data) {
            report_count= report_count+1;
            htmlcontent += `
            <tr>
                <td class="fnt fnt-mid fnt-light">
                    <report-personrow name="${i["name"]}"></report-personrow>
                </td>
                <td class="fnt fnt-mid fnt-light">
                    <report-personrowr reason="${i["reason"]}"></report-personrowr>
                </td>
                <td class="fnt fnt-mid fnt-light">
                    <report-personrowd date="${i["date"]}"></report-personrowd>
                </td>
              
            </tr>
  `;
        }

        this.innerHTML = `
            <div class="report-cont-wrap">
                <div class="report-cont-details">
                    <center><u><h3 class="fnt fnt-bold fnt-large">Details of reported user</h3></u></center><br>
                    <h3 class="fnt fnt-bold fnt-mid">User Name:- ${globlename}</h3>
                    <h3 class="fnt fnt-bold fnt-mid">Email:- ${globleemail}</h3>
                    <h3 class="fnt fnt-bold fnt-mid">Reported count:- ${report_count}</h3><br>
                </div>

                <table class="report_person">
                <thead>
                  <tr>
                    <th class="fnt fnt-bold fnt-mid">Reported User Name</th>
                    <th class="fnt fnt-bold fnt-mid">Reason</th>
                    <th class="fnt fnt-bold fnt-mid">Date</th>
                  </tr>
                </thead>
                
                <tbody>
                  ${htmlcontent}
                </tbody>
                </table><br>
                
                <div class="report_button">
                    <a href="/report_person"><button class="disable_user btn btn-solid btn-large" id="${data[0].user_id}">Ban User account</button></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="pending btn btn-solid btn-large is-a-route">Pending</button>
                </div>
                
            </div>
`;

        let pending = this.querySelector('.pending');
        pending.addEventListener('click', () => {
            // Call window.history.back() to go back to the previous page
            window.history.back();
        });
    }
}

customElements.define('reportperson-list', Reportperson_list);