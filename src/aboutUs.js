import shadowImg from './images/shadow.jpeg';
import heimerImg from './images/heimer.jpeg';
import salemImg from './images/salem.jpeg';

function createRestaurantAboutPage() {

const contentDiv = document.getElementById("content");

const aboutDiv = document.createElement("div");
aboutDiv.id = "about-div";

const leadersContainer = document.createElement("div");
leadersContainer.id = "leaders-container";

const staffTitle = document.createElement("div");
staffTitle.textContent = "Our Amazing Staff";
staffTitle.id = "staff-title";

const staffIntro = document.createElement("div");
staffIntro.innerHTML = "Leading an unforgettable experience.<br> One meowment at a time.";
staffIntro.id = "staff-intro";

const leaders = [
    {name: "shadow", image: shadowImg},
    {name: "Heimer", image: heimerImg},
    {name: "Salem", image: salemImg},
]

leaders.forEach(leader => {
    const leaderCard = document.createElement("div");
    leaderCard.classList.add("leader-card");
    leaderCard.style.backgroundImage = `url(${leader.image})`;

    const leaderName = document.createElement("h3");
    leaderName.classList.add("leader-name");
    leaderName.textContent = leader.name;

    leaderCard.appendChild(leaderName);

    leadersContainer.appendChild(leaderCard);
});
    aboutDiv.appendChild(staffTitle);
    aboutDiv.appendChild(staffIntro);
    aboutDiv.appendChild(leadersContainer);
    contentDiv.appendChild(aboutDiv);
};


export default createRestaurantAboutPage;