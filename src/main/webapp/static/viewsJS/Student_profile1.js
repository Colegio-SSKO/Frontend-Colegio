async function fetchData(){
    return "eeew";
};



function renderSingle(){


    fetchData().then((data)=>{


        let html_left = "";

        html_left += ` <profile-card profile_img="kask" name="kavinda" date="2000/12/5" gender="male" education_level="olevel" ></profile-card>` + ` <featured-cont img_src="kask" title="kavinda" description="2000/12/5" author="male" description2="olevel" price="20" rating="ssd" votes=" sdsd"></featured-cont> + `;


        document.querySelector(".cont-body-content").innerHTML = html_left;

        let selected = document.querySelectorAll(".courseList-card");

    });
}