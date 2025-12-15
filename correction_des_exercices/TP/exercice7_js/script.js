const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("monFormulaire")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const valeur = email.value.trim();
    if (validerEmail(valeur)) {
        message.textContent = "✓ Formulaire envoyé !"
        message.className = "succes"
        email.className = "valide"
        // code
        setTimeout(function () {
            email.value = "";
            message.textContent = "";
            message.classList.remove("succes");
            email.classList.remove("valide");

        }, 4000)
    } else {
        message.textContent = "✗ Veuillez entrer un email valide";
        message.className = "erreur"
        email.className = "invalide"
    }
});


email.addEventListener("blur", function () {
    const valeur = email.value.trim();
    if (valeur === "") {
        message.textContent = "Le champ ne peut pas être vide";
        message.className = "erreur"
        email.className = "invalide"
    } else if (validerEmail(valeur)) {
        message.textContent = "✓ Email valide !";
        message.className = "succes"
        email.className = "valide"
    } else {
        message.textContent = "✗ Email invalide"
        message.className = "erreur"
        email.className = "invalide"
    }
})


function validerEmail(email) {
    const index = email.indexOf("@");
    if (index === -1) {
        return false;
    } else {
        const point = email.indexOf(".", index);
        if (point === -1) {
            return false;
        } else {
            return index !== 0 && point != (index + 1) && point != (email.length - 1);
        }
    }
}
