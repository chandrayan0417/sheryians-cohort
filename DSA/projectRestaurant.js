let prompt = require("prompt-sync")({ sigint: true });

const restaurantMenu = {
    starters: [
        { name: "Tomato Basil Soup", price: 5.99 },
        { name: "Garlic Bread", price: 4.99 },
        { name: "Caesar Salad", price: 6.99 },
        { name: "Stuffed Mushrooms", price: 7.49 },
        { name: "Bruschetta", price: 5.49 }
    ],
    mainCourse: [
        { name: "Grilled Chicken with Herb Rice", price: 14.99 },
        { name: "Pasta Alfredo", price: 12.99 },
        { name: "BBQ Ribs", price: 18.99 },
        { name: "Vegetable Stir Fry", price: 11.99 },
        { name: "Steak with Mashed Potatoes", price: 22.99 }
    ],
    desserts: [
        { name: "Chocolate Lava Cake", price: 7.99 },
        { name: "Cheesecake", price: 6.99 },
        { name: "Ice Cream Sundae", price: 5.99 },
        { name: "Tiramisu", price: 7.49 },
        { name: "Apple Pie", price: 6.49 }
    ]
};

let cart = [];
let cartValue = 0;

function menuSelector(selectorNum) {
    let menuCategory;
    switch (selectorNum) {
        case 1:
            menuCategory = restaurantMenu.starters;
            console.log("***** Starters *****");
            break;
        case 2:
            menuCategory = restaurantMenu.mainCourse;
            console.log("***** Main Course *****");
            break;
        case 3:
            menuCategory = restaurantMenu.desserts;
            console.log("***** Desserts *****");
            break;
        default:
            return;
    }

    console.log("Please select one:");
    for (let i = 0; i < menuCategory.length; i++) {
        console.log(`${i + 1}. ${menuCategory[i].name} --- Price: $${menuCategory[i].price}`);
    }

    let num;
    do {
        num = Number(prompt("Enter a number:"));
        if (!isNaN(num) && num >= 1 && num <= menuCategory.length) {
            cart.push(menuCategory[num - 1]);
            console.log(`Added: ${menuCategory[num - 1].name}`);
        } else {
            console.log("Enter a valid number!");
        }
    } while (isNaN(num) || num < 1 || num > menuCategory.length);
}

let con = "";
let count = 0;

do {
    if (count === 0) console.log("***** Welcome To Gourmet Delight 69 *****");
    count++;

    console.log("Please select a category:");
    let tem = 1;
    for (let i in restaurantMenu) {
        console.log(`${tem}. ${i}`);
        tem++;
    }

    let num;
    do {
        num = Number(prompt("Enter a number:"));
        if (num >= 1 && num <= 3) {
            menuSelector(num);
        } else {
            console.log("Enter a valid number!");
        }
    } while (num < 1 || num > 3);

    console.log("");

    con = prompt("Enter Yes to add more items or Done to view your cart or type any key to exit:").toLowerCase();
    
    if (con === "done") {
        console.log("\nYour cart:");
        cartValue = 0; // Reset to avoid double counting
        cart.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - $${item.price}`);
            cartValue += item.price;
        });
        console.log(`\nTotal cart value: $${cartValue.toFixed(2)}`);
    }

} while (con === "yes");