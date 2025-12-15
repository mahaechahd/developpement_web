const email = document.getElementById("email")
const message = document.getElementById("message");
const monFormulaire = document.getElementById("monFormulaire");

monFormulaire.addEventListener("submit", function (e) {
    e.preventDefault();
    const valeur = email.value.trim();
    if (valeur === "") {
        message.textContent = "✗ Veuillez entrer un email valide";
        message.className = "erreur";
        email.classList.remove("valide");
        email.classList.add("invalide");
    } else if (validerEmail(valeur)) {
        //code 
        message.textContent = "✓ Formulaire envoyé !";
        message.className = "succes";
        email.classList.remove("invalide");
        email.classList.add("valide");
        setTimeout(function () {
            email.value = "";
            message.textContent = "";
            email.classList.remove("valide");
            message.classList.remove("succes");
        }, 2000)
    } else {
        message.textContent = "✗ Veuillez entrer un email valide";
        message.className = "erreur";
        email.classList.remove("valide");
        email.classList.add("invalide");
    }
})

email.addEventListener("blur", function () {
    const valeur = email.value.trim();
    if (valeur === "") {
        message.textContent = "Le champ ne peut pas être vide";
        message.className = "erreur";
        email.classList.remove("valide");
        email.classList.add("invalide");
    } else if (validerEmail(valeur)) {
        message.textContent = "✓ Email valide !";
        message.className = "succes";
        email.classList.remove("invalide");
        email.classList.add("valide");
    } else {
        message.textContent = "✗ Email invalide";
        message.className = "erreur";
        email.classList.remove("valide");
        email.classList.add("invalide");
    }
})

function validerEmail(email) {
    email = email.trim();
    const index = email.indexOf("@");
    if (index === -1) {
        return false;
    } else {
        const point = email.indexOf(".", index);
        if (point === -1) {
            return false;
        } else {
            if (index !== 0 && point !== (index + 1) && email.length !== (point + 1)) {
                return true
            } else {
                return false;
            }
        }
    }
}
