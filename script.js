function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
}
// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    menu.classList.toggle("show");

}


// ===============================
// WHATSAPP ORDER
// ===============================

function orderCoffee(coffeeName, price) {

    const phone = "01763838194";

    const message =
        "Assalamu Alaikum, I would like to order:%0A%0A" +
        "☕ Coffee: " + coffeeName + "%0A" +
        "💰 Price: ৳" + price + "%0A%0A" +
        "Please confirm my order.";

    const whatsappURL =
        "https://wa.me/" + phone + "?text=" + message;

    window.open(whatsappURL, "_blank");

}


// ===============================
// CONTACT FORM
// ===============================

function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you! ☕ Your message has been received."
    );

}