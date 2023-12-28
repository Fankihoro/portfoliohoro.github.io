// Validation du formulaire
document.getElementById('bouton').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire pour le moment

    // Récupération des valeurs des champs
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let email = document.getElementById('email').value;
    let commentaire = document.getElementById('comment').value;

    // Validation simple pour vérifier si les champs ne sont pas vides
    if (nom !== '' && prenom !== '' && email !== '' && commentaire !== '') {
        // Ici vous pouvez ajouter du code pour envoyer les données à votre serveur ou effectuer d'autres actions
        alert('Formulaire envoyé avec succès !');
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});
