let userName = "Star";
function greeting() {
    console.log("Welcome" , userName , "!");
    }
    greeting();
    ///greeting when page is loaded that says Welcome Star!///
function searchItem(keyword) {
    const matches = featuredItems.filter(item => item.toLowerCase().includes(keyword.toLowerCase()));
    if (matches.length > 0) {
        console.log("Items found:");
        matches.forEach(item => console.log("", item));
    } else {
        console.log("No items match your search.");
    }
}
///Helps search for items///
function applyDiscount(code) {
    if (code == discountCode) {
        console.log("Discount applied! You saved 20%.");
    } else {
        console.log("Invalid discount code.");
    }
}
///Applies a discount code///
function showSizes(itemName) {
    console.log("Available sizes for", itemName , ":" , sizes.join(","));
}
///Shows available sizes for an item///