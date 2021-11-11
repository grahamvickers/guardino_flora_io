(()=> {
    "use strict"
    let teamButton = document.querySelectorAll(".floraTeam ul li");
    const floraText = document.querySelector(".teamList");



    
    class TeamSection {

        constructor(teamName, textVal, imgName) {
            this.teamName = teamName;
            this.textVal = textVal;
            this.imgName = imgName;
        }

        changeTeam() {
            let HTML = "";
            HTML += `<h2 class="hidden">Team List Info Content</h2>`
            HTML += `<h3 id="teamFullName">${this.teamName}</h3>`;
            HTML += `<img src="images/${this.imgName}" alt="Photo of ${this.teamName}">`;
            HTML += `<p>${this.textVal}</p>`;


            floraText.innerHTML = HTML;
        }

    }

    function addteamListener() {

        teamButton.forEach(buttonContent => {
                buttonContent.addEventListener("mouseover", insertTeam);    
        }); 

    }

    function insertTeam(e) {
        const event = e.currentTarget.id;
        if (event == "paul") {
            textPaul.changeTeam();
        } else if (event == "mary") {
            textMary.changeTeam();    
        } else if (event == "john") {
            textJohn.changeTeam();
        } else {
            console.log("Something went wrong in for loop");
        }

    }
    

    let textPaul = new TeamSection("Paul Flora", "Paul Flora is the Owner/President of the Flora IO brand and has been with the company since its beginnings. He keeps the organization focused on the vison and mission upon which it was founded. Paul treats all his team with respect and dignity. He has worked primarily in agricultural businesses his entire career.", "engin-akyurt-GQeHbaf05Z0-unsplash_cropped.jpg");

    let textMary = new TeamSection( "Mary Green",  "Mary Green is Flora IO’s Sales Associate. Mary’s primary role is client relationship and account management and she bring with her over 10 years of experience as a sales manager in food and beverage. She has an agricultural education from the University of Guelph.", "mathias-huysmans-U4JDjYmjn1g-unsplash_cropped.jpg");

    let textJohn = new TeamSection("John Flowers",  "John Flowers, Technical Support, is the person to call if you need help on any matter, from shop equipment to logistics, John is available to help. The rest of the time he is visiting customers new and old, demonstrating new equipment.", "leilani-angel-K84vnnzxmTQ-unsplash_cropped.jpg");


    textPaul.changeTeam();
    addteamListener();

})();