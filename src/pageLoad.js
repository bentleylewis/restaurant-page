import createRestaurantHomePage from "./home";
import createRestaurantMenuPage from "./menu";
import createRestaurantAboutPage from "./aboutUs";

function initialPageLoad () {

    const buttons = document.querySelectorAll("button");

    createRestaurantHomePage();

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const text = btn.textContent;
            const content = document.getElementById('content');

            buttons.forEach(btn=>btn.style.color = '');
            btn.style.color = '#ffb366';
            content.innerHTML = '';

            if(text === "Kenzie's Kitchen" || text === "Home") {
                createRestaurantHomePage();
            }
            

            if(text === "Menu") {
                document.getElementById('content').innerHTML = '';
                createRestaurantMenuPage();
            }

            if(text === "About Us") {
                document.getElementById('content').innerHTML = '';
                createRestaurantAboutPage();
            }
        })
    })
}

export default initialPageLoad;