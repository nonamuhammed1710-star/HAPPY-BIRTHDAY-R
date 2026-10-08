const openButton = document.getElementById("openButton");

const welcome = document.getElementById("welcome");

const letter = document.getElementById("letter");


openButton.addEventListener("click", function () {

    // نخفي الشاشة الأولى

    welcome.style.opacity = "0";

    welcome.style.transform = "scale(0.9)";


    // نستنى لحد ما الاختفاء يخلص

    setTimeout(function () {

        welcome.style.display = "none";


        // نظهر الرسالة

        letter.classList.add("show");

    }, 700);

});
