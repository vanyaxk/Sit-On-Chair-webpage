document.addEventListener("DOMContentLoaded", () => {
    slide();
    calculatePrice();
});

function slide() {
    //slider
    var slides = Array.from(document.querySelectorAll('.slide'));

    var prev = document.querySelector('.left-arrow');
    var next = document.querySelector('.right-arrow');

    var counter = 0;

    slides[counter].classList.add("on");

    prev.addEventListener("mouseup", function () {
        slides[counter].classList.remove("on");
        counter--;
        if (counter < 0) {
            counter = slides.length - 1;
        }
        slides[counter].classList.add("on");
    });

    next.addEventListener("mouseup", function () {
        slides[counter].classList.remove("on");
        counter++;

        if (counter > slides.length - 1) {
            counter = 0;
        }

        slides[counter].classList.add("on");
    });
}

function calculatePrice() {
    var select = Array.from(document.querySelectorAll(".list_arrow"));
    var listPanel = Array.from(document.querySelectorAll(".list_panel li"));


    //panel variables
    var panelLeft = document.querySelector(".panel_left");
    var panelRight = document.querySelector(".panel_right");

    //images of chairs

    //variables for adding features and updating the price
    var summaryChairPrice = panelRight.querySelector("h4.title");
    var summaryChairFeature = panelLeft.querySelector('h4.title');

    //colour
    var summaryColorPrice = panelRight.querySelector("span.color.value");
    var summaryColorFeature = panelLeft.querySelector("span.color");

    //pattern
    var summaryPatternPrice = panelRight.querySelector("span.pattern.value");
    var summaryPatternFeature = panelLeft.querySelector("span.pattern");

    //transport
    var transport = document.querySelector(".checkbox input[type=checkbox]");
    var summaryTransportPrice = panelRight.querySelector("span.transport.value");
    var summaryTransportFeature = panelLeft.querySelector("span.transport");

    var totalSum = document.querySelector(".sum strong");

    //variable for calculating price
    var chairPrice = 0;
    var colorPrice = 0;
    var patternPrice = 0;
    var transportPrice = 0;

    var totalPrice = 0;

    //loop and event listener for dropdowns
    select.forEach(element => element.addEventListener("click", function () {
        var option = this.parentElement.childNodes[5];
        var choice = Array.from(option.children);
        option.classList.toggle("show");
    }));

    //loop and event listener for choices
    listPanel.forEach(choice => choice.addEventListener("click", function () {
        this.parentElement.classList.remove("show");
        var dropdown = this.parentElement.parentElement;

        console.log(this.parentElement);

        var arrChoice = Array.from(this.parentElement.children);
        console.log(arrChoice);

        if (dropdown.innerHTML.indexOf("rodzaj") !== -1) {
            summaryChairFeature.innerHTML = this.innerHTML;
            summaryChairPrice.innerHTML = parseInt(this.dataset.price);
            chairPrice = parseInt(this.dataset.price);
        } else if (dropdown.innerHTML.indexOf("kolor") !== -1) {
            summaryColorFeature.innerHTML = this.innerHTML;
            summaryColorPrice.innerHTML = parseInt(this.dataset.price);
            colorPrice = parseInt(this.dataset.price);


            chairImages.forEach(image => console.log(image));
        } else if (dropdown.innerHTML.indexOf("materiał") !== -1) {
            summaryPatternFeature.innerHTML = this.innerHTML;
            summaryPatternPrice.innerHTML = parseInt(this.dataset.price);
            patternPrice = parseInt(this.dataset.price);
        }
        totalPrice = chairPrice + colorPrice + patternPrice + transportPrice;
        totalSum.innerHTML = totalPrice;
    }));
    //event listener for transport checkbox 
    transport.addEventListener("click", function () {
        if (transport.checked) {
            summaryTransportFeature.innerHTML = "Transport";
            summaryTransportPrice.innerHTML = parseInt(this.dataset.price);
            transportPrice = parseInt(this.dataset.price);
        } else {
            summaryTransportFeature.innerHTML = "";
            summaryTransportPrice.innerHTML = "";
            transportPrice = 0;
        }

        totalPrice = chairPrice + colorPrice + patternPrice + transportPrice;
        totalSum.innerHTML = totalPrice;

    });

}