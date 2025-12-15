function calculMoyenne(matiere, ...notes) {
    if (notes.length === 0) {
        return "Aucune note pour " + matiere;
    } else {
        let m = 0;
        for (note of notes) {
            m += note;
        }
        return "La moyenne en " + matiere + " est " + m / notes.length;
    }
}
console.log(calculMoyenne("JS", 10, 14, 16))