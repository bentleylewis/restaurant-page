function createRestaurantHomePage() {
    const contentDiv = document.getElementById("content");
    const headerDiv = document.createElement("div");
    headerDiv.textContent = "this is where to header text will go!!";
    contentDiv.appendChild(headerDiv);
}

export default createRestaurantHomePage;