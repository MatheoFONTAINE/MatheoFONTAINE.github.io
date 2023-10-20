/**
 *? Line breaks must be preceded by <br> tags
 *? data.projects.link should be an URL
 *? data.projects.date must be an string containing the date in YYYY-MM format
 *? data.projects.video must be a string containing a Youtube URL, or null if there is no video to be shown
 * 
 * data {
 *      "biography": string
 *      "projects": [
 *          "name": string,
 *          "description": string,
 *          "pictures": [string],
 *          "gameEngine": string,
 *          "language": string,
 *          "platform": string,
 *          "role": string,
 *          "team": string,
 *          "link": string,
 *          "date": string,
 *          "duration": string,
 *          "video": string|null,
 *          "isDisplayedInSlider": bool
 *      ],
 *      "ribbon": {
 *          "display": bool,
 *          "text": string|null,
 *          "link": string|null,
 *      }
 *  }
 */

const data = {
    "biography": "Je m’appelle Mathéo FONTAINE, je suis étudiant en Game Design & Programming. Je vous souhaite la bienvenue sur mon portefolio. Étant polyvalent, je mets mon expérience en programmation gameplay, UI et création d’assets graphiques a profit dans mes projets. Je serais ravie de continuer à mettre ces compétences en pratique pour découvrir de nouvelles choses.",
    "projects": [
        {
            "name": "Kite Playtime",
            "description": "Dans ce Shoot them up coloré, affrontez vos ennemies et arrêtez les méfaits du Devil kite.",
            "pictures": [
                "KitePlaytimeUI.png",
            ],
            "gameEngine": "Godot",
            "language": "C#",
            "platform": "PC",
            "role": "J'ai travaillé sur l'intégralité du projet à l'exception de la création des assets sonores.",
            "team": "Un Gameplay Programmer & deux Sound Designers",
            "link": "https://erisa.itch.io/kite-playtime",
            "date": "2022-12",
            "duration": "2 mois",
            "video": "https://www.youtube.com/watch?v=LuU7paZS45Q",
            "isDisplayedInSlider": true
        },
        {
            "name": "Glich Glide",
            "description": "Affronter vos amis ou vottre famille dans ce jeu de course délirant",
            "pictures": [
                "GlitchGlide.gif",
            ],
            "gameEngine": "Godot",
            "language": "C#",
            "platform": "PC",
            "role": "J'ai travaillé sur l'intégralité du projet à l'exception de la création des assets sonores.",
            "team": "Projet Solo",
            "link": "https://erisa.itch.io/glitch-glide",
            "date": "2023-04",
            "duration": "Une semaine",
            "video": "https://www.youtube.com/watch?v=LWBVEh2U1Y0",
            "isDisplayedInSlider": true
        },
    ],
    "ribbon": {
        "display": true,
        "text": "Je suis actuellement en recherche de stage sur Paris",
        "link": "www.linkedin.com/in/matheo-fontaine",
    }
};

export default data;
