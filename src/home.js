function createRestaurantHomePage() {
    const contentDiv = document.getElementById("content");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("content-card");

    const introDiv = document.createElement("div");
    introDiv.textContent = "Welcome To Kenzie's Kitchen";
    introDiv.id = "intro-title";

    const subIntroDiv = document.createElement("div");
    subIntroDiv.innerHTML = "Cooked to Perfection.<br> Every Time.";
    subIntroDiv.id = "intro-subtitle";

    const introDescriptionDiv = document.createElement("div");
    introDescriptionDiv.textContent = "Kenzie's Kitchen showcases homemade dishes crafted with love and creativity. From comforting classics to inventive creations, every meal is made fresh and served with care.";
    introDescriptionDiv.id = "intro-description";

    cardDiv.appendChild(introDiv);
    cardDiv.appendChild(subIntroDiv);
    cardDiv.appendChild(introDescriptionDiv);

    contentDiv.appendChild(cardDiv);
}

export default createRestaurantHomePage;