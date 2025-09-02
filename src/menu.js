function createRestaurantMenuPage() {
    const contentDiv = document.getElementById("content");

    const menuContainerDiv = document.createElement("div");
    menuContainerDiv.id = "menu-container";

    const menuData = {
        Dinner: [
            { name: "Shepherd's Pie", description: "Classic comfort dish with beef, veggies, and mashed potatoes." },
            { name: "Chicken Parmesan", description: "Crispy breaded chicken topped with marinara and cheese." },
            { name: "Smash Burger", description: "Juicy grilled patties served with fresh toppings." }
        ],
        Desserts: [
            { name: "Chocolate Cake", description: "Rich and moist with layers of chocolate goodness." },
            { name: "Apple Turnover", description: "Flaky pastry filled with warm spiced apples." },
            { name: "Banana Bread", description: "Sweet and soft loaf with ripe banana flavor." }
        ]
    };

    for(const [section, items] of Object.entries(menuData)) {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("menu-sections");
        
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");

        const header = document.createElement("h2");
        header.textContent = section;
        sectionDiv.appendChild(header);
        
        items.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");

            const title = document.createElement("h3") 
            title.textContent = item.name;
            menuItem.appendChild(title);

            const description = document.createElement("p");
            description.textContent = item.description;

            menuItem.appendChild(description);
            itemContainer.appendChild(menuItem);
            sectionDiv.appendChild(itemContainer);
        });

        menuContainerDiv.appendChild(sectionDiv);
    }
    
    contentDiv.appendChild(menuContainerDiv);
}

export default createRestaurantMenuPage;
