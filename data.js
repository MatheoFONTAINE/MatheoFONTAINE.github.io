/**
 *? Line breaks must be preceded by <br> tags
 *? data.projects.name can handle a translation if an array is given, otherwise if only a string is given the name will be used for both French & English translations
 *? data.projects.link should be an URL
 *? data.projects.date must be an string containing the date in YYYY-MM format
 *? data.projects.video must be a string containing a Youtube URL, or null if there is no video to be shown
 *? data.images allows you to override which picture will be used for engines, languages & platforms
 *?                     By default, the app will look for a picture with the same name than the engine, language or platform with an .svg extension
 *?                     If set to null, no image will be used
 *?                     Pictures must be stored in ./image/icon folder
 **                         E.g. "Ren'py": "renpy.png"  // Will use renpy.png instead of Ren'py.svg
 **                              "Blueprint": null,     // Won't use any image
 * 
 * data {
 *      "biography": {
 *         "fr": string,
 *          "en": string,
 *      },
 *      "projects": [
 *          {
 *              "name": string,
 ** OR          "name": {
     **                 "fr": string,
     **                 "en": string,
     **             },
     *              "description": {
     *                  "fr": string,
     *                  "en": string,
     *              },
     *              "pictures": [string],
     *              "gameEngine": string,
     *              "language": string,
     *              "platforms": [string],
 *              "role": {
 *                  "fr": string,
 *                  "en": string,
 *              },
 *              "team": string,
 ** OR          "team": {
 **                  "fr": string,
 **                  "en": string,
 **              },
 *              "link": string,
 *              "date": string,
 *              "duration": {
 *                  "fr": string,
 *                  "en": string,
 *              },
 *              "video": string|null,
 *              "isDisplayedInSlider": bool,
 *          }
 *      ],
 *      "ribbon": {
 *          "display": bool,
 *          "text": {
 *              "fr": string|null,
 *              "en": string|null,
 *          },
 *          "link": string|null,
 *      },
 *      "images": (optional) {
 *          string: string|null
 *      },
 *      "display-search-bar": false,
 *  }
 */

 const data = {
    "biography": {
        "fr": "Je m’appelle Mathéo FONTAINE, je suis étudiant en Game Design & Programming. Je vous souhaite la bienvenue sur mon portefolio. Étant polyvalent, je mets mon expérience en programmation gameplay, UI et création d’assets graphiques a profit dans mes projets. Je serais ravie de continuer à mettre ces compétences en pratique pour découvrir de nouvelles choses.",
        "en": "",
    },
    "projects": [
        {
            "name": "Kite Playtime",
            "description": {
                "fr": "Dans ce Shoot them up coloré, affrontez vos ennemies et arrêtez les méfaits du Devil kite.",
                "en": "",
            },
            "pictures": [
                "KitePlaytimeUI.png",
            ],
            "gameEngine": "Godot",
            "language": "C#",
            "platforms": ["PC"],
            "role": {
                "fr": "J'ai travaillé sur l'intégralité du projet à l'exception de la création des assets sonores.",
                "en": "",
            },
            "team": {
                "fr": "Un Gameplay Programmer & deux Sound Designers",
                "en": "",
            },
            "link": "https://erisa.itch.io/kite-playtime",
            "date": "2022-12",
            "duration": {
                "fr": "2 mois",
                "en": "",
            },
            "video": "https://www.youtube.com/watch?v=LuU7paZS45Q",
            "isDisplayedInSlider": true
        },
        {
            "name": "Glitch Glide",
            "description": {
                "fr": "Affronter vos amis ou vottre famille dans ce jeu de course délirant",
                "en": "",
            },
            "pictures": [
                "GlitchGlide.gif",
            ],
            "gameEngine": "Godot",
            "language": "C#",
            "platforms": ["PC"],
            "role": {
                "fr": "J'ai travaillé sur l'intégralité du projet à l'exception de la création des assets sonores.",
                "en": "",
            },
            "team": {
                "fr": "Projet Solo",
                "en": "",
            },
            "link": "https://erisa.itch.io/glitch-glide",
            "date": "2023-04",
            "duration": {
                "fr": "Une semaine",
                "en": "",
            },
            "video": "https://www.youtube.com/watch?v=LWBVEh2U1Y0",
            "isDisplayedInSlider": true
        },
    ],
    "ribbon": {
        "display": true,
        "text": {
            "fr": "Je suis actuellement en recherche de stage sur Paris",
            "en": "",
        },
        "link": "https://www.linkedin.com/in/matheo-fontaine",
    },
    "images": {
        "C#": "Csharp.svg",
    },
    "display-search-bar": false,
};

export default data;
