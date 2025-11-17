Parfait ! Je vais améliorer tout ton CV proprement :
✔ HTML bien structuré
✔ CSS moderne et joli
✔ Animation JavaScript pour écrire ton nom
✔ Mise en page professionnelle
✔ Code simple et facile à modifier


---

✅ 1. Nouveau fichier HTML (propre et corrigé)

Colle ceci dans ton fichier .html :

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon CV - Fatoumata KA</title>
    <link rel="stylesheet" href="../css/style.css">
    <script defer src="../js/cv.js"></script>
</head>
<body>

<div class="cv-container">

    <!-- COLONNE GAUCHE -->
    <div class="left-column">
        <h1>Mon CV</h1>
        <img src="../image/ph.jpg" alt="Photo de profil" class="photo">

        <h2>État civil</h2>
        <ul class="info">
            <li>Née le : 02/01/2000</li>
            <li>À : Diourbel, Médinatoul</li>
            <li>Nationalité : Sénégalaise</li>
            <li>Tél : 76 682 02 79</li>
            <li>Email : <span class="mai">fatoumata.ka@univ-thies.sn</span></li>
            <li>Statut : Célibataire</li>
        </ul>

        <h2>Parcours académique</h2>
        <ul class="info">
            <li><strong>2024–2025 :</strong> Licence 2 Informatique (en cours) UIDT</li>
            <li><strong>2023–2024 :</strong> Licence 1 Math-Info UIDT</li>
            <li><strong>2022 :</strong> Bac S2 Lycée de Diourbel</li>
        </ul>
    </div>

    <!-- COLONNE DROITE -->
    <div class="right-column">

        <!-- Nom animé -->
        <h1 id="typed-name"></h1>
        <h2 class="subtitle">Étudiante en L2 Informatique</h2>

        <h3>Compétences professionnelles</h3>
        <p>En mesure d’enseigner les élèves du primaire et du secondaire.</p>

        <h3>Compétences</h3>
        <ul>
            <li>Ponctualité</li>
            <li>Maitrise bureautique</li>
            <li>Langage C (bon niveau)</li>
            <li>SQL (moyen)</li>
            <li>Travail en équipe</li>
            <li>Job étudiant UIDT (Agriculture) – Juillet 2025</li>
        </ul>

        <h3>Compétences linguistiques</h3>
        <ul>
            <li>Anglais : lire, écrire, parler</li>
            <li>Français : lire, écrire, parler</li>
        </ul>

        <h3>Compétences extraprofessionnelles</h3>
        <ul>
            <li>Entraîneur de handball</li>
            <li>Cuisine sénégalaise</li>
        </ul>

        <h3>Travaux réalisés</h3>
        <p>Développement de compétences agricoles à l’Université Iba Der Thiam de Thiès.</p>

    </div>
</div>

</body>
</html>


---

✅ 2. Nouveau fichier CSS (beau et professionnel)

Colle ceci dans style.css :

body {
    font-family: Arial, sans-serif;
    background: #f2f2f2;
    margin: 0;
    padding: 0;
}

.cv-container {
    width: 80%;
    margin: auto;
    padding: 20px;
    display: flex;
    background: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
}

.left-column {
    width: 35%;
    background: #003366;
    color: white;
    padding: 20px;
}

.right-column {
    width: 65%;
    padding: 20px;
}

h1, h2, h3 {
    margin-top: 10px;
}

.photo {
    width: 120px;
    height: 130px;
    border-radius: 5px;
    margin-bottom: 20px;
}

.info li {
    margin-bottom: 8px;
}

#typed-name {
    font-size: 35px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #003366;
    border-right: 3px solid #003366;
    padding-right: 5px;
    white-space: nowrap;
    overflow: hidden;
    animation: blink 0.8s infinite;
}

/* curseur clignotant */
@keyframes blink {
    50% {
        border-color: transparent;
    }
}

.subtitle {
    margin-top: -10px;
    color: #555;
}


---

✅ 3. Animation JavaScript (écriture lettre par lettre)

Dans cv.js, mets :

document.addEventListener("DOMContentLoaded", function () {
    const text = "Fatoumata KA";
    const speed = 120;
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typed-name").textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});


---

🎉 Ton CV sera maintenant :

✔ propre
✔ professionnel
✔ responsive
✔ animé (nom qui s’écrit tout seul)


---

Si tu veux encore ajouter une animation CSS, mettre des icônes, ou rendre ton CV totalement responsive pour téléphone, je peux aussi le faire.

