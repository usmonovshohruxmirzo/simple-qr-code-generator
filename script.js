const QrBtn = document.getElementById("qr-btn");
const QrText = document.getElementById("qr-text");
const QrImg = document.getElementById("qr-img");

const QrContent = document.getElementById("qr-content");
QrBtn.addEventListener("click", () => {
    
    QrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + `${QrText.value}`;

    if (QrText.value != "") {
        if (QrContent.style.transform == "scale(1.5)") QrContent.style.transform = "scale(0)";
        else QrContent.style.transform = "scale(1.5)";

    }

    if (QrText.value != "") document.querySelector("input").style.outline = "2px solid #0f0";
    else {
        const qrError = document.querySelector(".container");
        qrError.animate([
            { transform: "translateX(0)" },
            { transform: "translateX(10px)" },
            { transform: "translateX(-10px)" },
            { transform: "translateX(10px)" },

        ], {
            duration: 1000,
            easing: "ease",
            direction: "alternate",
            iterations: 2,
        });

        document.querySelector("input").style.outline = "2px solid #f00";
    }
});

const back = () => QrContent.style.transform = "scale(0)";

window.addEventListener("contextmenu", e => e.preventDefault());

window.addEventListener("keydown") = e => {

    if (e.keyCode == 123) return false;

    else if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) return false;
    else if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) return false;
    else if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) return false;
    else if (e.ctrlKey && e.shiftKey && e.keyCode == "U".charCodeAt(0)) return false;

}
