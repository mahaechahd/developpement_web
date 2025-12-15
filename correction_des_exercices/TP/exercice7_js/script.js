const email = document.getElementById("email");
const message = document.getElementById("message");
const formulaire = document.getElementById("monFormulaire");

formulaire.addEventListener("submit", function (e) {
    e.preventDefault();
    const valeur = email.value;
    if (validerEmail(valeur)) {
        //code 
        message.textContent = "✓ Formulaire envoyé !"
        message.className = "succes"
        setTimeout(function () {
            email.value = "";
            message.textContent = "";
        }, 5000);
    } else {
        message.textContent = "✗ Veuillez entrer un email valide"
        message.className = "erreur"
    }
});

email.addEventListener("blur", function () {
    const valeur = email.value;
    if (valeur.trim() === "") {
        message.textContent = "Le champ ne peut pas être vide"
        message.className = "erreur"
    } else if (validerEmail(valeur)) {
        message.textContent = "✓ Email valide !"
        message.className = "succes"
    } else {
        message.textContent = "✗ Email invalide"
        message.className = "erreur"
    }

});

function validerEmail(email) {
    email = email.trim();
    const index = email.indexOf('@');
    if (index === -1) {
        return false;
    } else {
        const point = email.indexOf('.', index + 1);
        if (point === -1) {
            return false;
        } else {
            if (index !== 0 && (point !== (index + 1)) && ((point + 1) !== email.length)) {
                return true;
            } else {
                return false;
            }
        }
    }
}
