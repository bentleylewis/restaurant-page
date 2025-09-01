import createRestaurantHomePage from "./home";
import createResaurantMenuPage from "./menu";
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
                createResaurantMenuPage();
            }

            if(text === "About Us") {
                document.getElementById('content').innerHTML = '';
            }
        })
    })
}

export default initialPageLoad;