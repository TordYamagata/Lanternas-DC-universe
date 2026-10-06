const corpsInfo = {

    "GREEN LANTERN":
        "A Tropa dos Lanternas Verdes representa a força de vontade. Seus membros utilizam anéis capazes de transformar a força de vontade em construções de energia.",

    "SINIESTRO CORPS":
        "O Sinestro Corps utiliza a energia amarela do medo. Seus integrantes canalizam o medo para criar construções e dominar seus adversários.",

    "RED LANTERN":
        "As Lanternas Vermelhas canalizam a raiva. Sua energia é extremamente destrutiva e pode transformar o usuário em uma criatura dominada pelo ódio.",

    "BLUE LANTERN":
        "As Lanternas Azuis representam a esperança. Sua energia pode amplificar outras forças do espectro emocional.",

    "STAR SAPPHIRES":
        "As Star Sapphires utilizam a energia violeta do amor. Seus poderes estão relacionados a conexões emocionais e sentimentos intensos.",

    "ORANGE LANTERN":
        "A energia laranja representa a avareza. Larfleeze é o principal representante dessa força e deseja possuir tudo para si.",

    "BLACK LANTERN":
        "As Lanternas Negras representam a morte. Sua energia está ligada aos mortos e à ausência de emoções.",

    "WHITE LANTERN":
        "As Lanternas Brancas representam a vida. Essa energia está associada à força vital e à união do espectro emocional."
};


function showCorps(corps) {

    const modal = document.getElementById("modal");

    const title = document.getElementById("modal-title");

    const text = document.getElementById("modal-text");

    title.textContent = corps;

    text.textContent = corpsInfo[corps];

    modal.classList.add("active");
}


function closeModal() {

    document
        .getElementById("modal")
        .classList.remove("active");
}


document
    .getElementById("modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeModal();
        }

    });


function chooseRing() {

    const corps = [
        "GREEN LANTERN",
        "SINIESTRO CORPS",
        "RED LANTERN",
        "BLUE LANTERN",
        "STAR SAPPHIRES",
        "ORANGE LANTERN",
        "BLACK LANTERN",
        "WHITE LANTERN"
    ];

    const random =
        corps[Math.floor(Math.random() * corps.length)];

    showCorps(random);
}


/* =========================
   MENU MOBILE
========================= */

const menuButton =
    document.querySelector(".menu-btn");

const navigation =
    document.querySelector("nav");


menuButton.addEventListener("click", () => {

    if (navigation.style.display === "flex") {

        navigation.style.display = "none";

    } else {

        navigation.style.display = "flex";

        navigation.style.position = "absolute";

        navigation.style.top = "80px";

        navigation.style.left = "0";

        navigation.style.width = "100%";

        navigation.style.padding = "30px";

        navigation.style.flexDirection = "column";

        navigation.style.background = "#030303";

        navigation.style.textAlign = "center";
    }

});