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
 *          "fr": string,
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
        "fr": "Je m'appelle Mathéo FONTAINE, Game Designer & Programmer. Je vous souhaite la bienvenue sur mon portfolio. Polyvalent, je mets à profit mon expérience en programmation gameplay, en UI, en création d'assets graphiques et en level design dans mes projets. Je serais ravi de continuer à mettre ces compétences en pratique afin de découvrir de nouvelles approches et de relever de nouveaux défis. ",
        "en": "My name is Mathéo FONTAINE, Game Designer & Programmer. Welcome to my portfolio. As a versatile developer, I leverage my experience in gameplay programming, UI development, graphic asset creation, and level design across my projects.I am eager to continue applying these skills, explore new approaches, and take on new challenges. ",
    },
    "projects": [
        {
            "name": "Kite Playtime",
            "description": {
                "fr": "Dans ce Shoot them up coloré, terrassez vos ennemis et arrêtez les méfaits du Devil Kite.",
                "en": "In this colorful, shoot them up, fight your enemies and stop the meffait of the Devil Kite.",
            },
            "pictures": [
                "KitePlaytime_00.webp",
                "KitePlaytime_01.webp",
            ],
            "gameEngine": "Godot",
            "language": "C#",
            "platforms": ["PC"],
            "role": {
                "fr": "J'ai travaillé sur l'intégralité du projet à l'exception de la création des assets sonores. Sur ce projet, je trouve que la capacité spéciale est très bien intégrée dans le Level Design et le pattern des ennemis",
                "en": "I worked on the whole project except the creation of sound asset. On this project, I think the special ability is very well integrated into the level design and the enemy pattern.",
            },
            "team": {
                "fr": "Un Gameplay Programmer & deux Sound Designers",
                "en": "One Gameplay Programmer & two Sound Designers",
            },
            "link": "https://erisa.itch.io/kite-playtime",
            "date": "2022-12",
            "duration": {
                "fr": "2 mois",
                "en": "2 month",
            },
            "video": "https://www.youtube.com/watch?v=LuU7paZS45Q",
            "isDisplayedInSlider": true
        },
        {
            "name": "Glitch Glide",
            "description": {
                "fr": "Affrontez vos amis ou votre famille dans ce jeu de course délirant",
                "en": "Take on your friends and family in this crazy racing game",
            },
            "pictures": [
                "GlitchGlide.webm",
            ],
            "gameEngine": "Godot",
            "language": "C#",
            "platforms": ["PC"],
            "role": {
                "fr": "J'ai travaillé sur l'intégralité du projet à l'exception de la création des assets sonores. Sur ce projet j'ai passé du temps sur le post-processing et l'environnement pour donner un résultat minimaliste mais cohérent et beau",
                "en": "I worked on the whole project except the creation of sound asset. On this project. On this project i spend time on post processing to make a minimalist but coherent and beautiful result",
            },
            "team": {
                "fr": "Projet Solo",
                "en": "I was single on this project",
            },
            "link": "https://erisa.itch.io/glitch-glide",
            "date": "2023-04",
            "duration": {
                "fr": "Une semaine",
                "en": "One Week",
            },
            "video": "https://www.youtube.com/watch?v=LWBVEh2U1Y0",
            "isDisplayedInSlider": true
        },
        {
            "name": "Undead Conundrum",
            "description": {
                "fr": "Aider les morts-vivants à retrouver leur chemin vers leur tombe dans ce casse-tête inspiré du jeu RUSH",
                "en": "Help the undead to find their path to their graves int this brainteaser inspired by the game RUSH",
            },
            "pictures": [
                "UndeadConundrum.webm",
            ],
            "gameEngine": "Unity",
            "language": "C#",
            "platforms": ["PC", "Mobile"],
            "role": {
                "fr": "J'ai travaillé sur l'intégralité du projet. Ce projet était principalement un travail d'observation, le but était de reproduire le plus fidèlement le jeu RUSH développé par Two Tribes et d'y ajouter un nouveau theme ainsi que de nouveau niveau",
                "en": "I worked on the entire project. This project was mainly a work of observation, the goal was to reproduce as faithfully as possible the game RUSH developed by Two Tribes",
            },
            "team": {
                "fr": "Projet Solo",
                "en": "I was single on this project",
            },
            "link": "https://erisa.itch.io/undead-conundrum",
            "date": "2023-11",
            "duration": {
                "fr": "Deux mois",
                "en": "Two month",
            },
            "video": null,
            "isDisplayedInSlider": true
        },
        {
            "name": "UnSeen",
            "description": {
                "fr": "Préparez-vous à affronter vos peurs. Traverser la ville sans vous faire repérer et retourner en sécurité. Dans ce platformer 2D à l'ambiance sordide sur le theme de la scopophobie",
                "en": "Prepare to face your fears. Walk through the city undetected and return safely. In this 2D platformer with sordid atmosphere on the theme of scopophobia",
            },
            "pictures": [
                "Unseen_Logo.webp",
                "Unseen_UI_1.webp",
                "Unseen_UI_2.webp",
                "Unseen_Screenshot_1.webp",
                "Unseen_Screenshot_2.webp",
                "Unseen_Screenshot_3.webp",

            ],
            "gameEngine": "Unity",
            "language": "C#",
            "platforms": ["PC", "Mobile"],
            "role": {
                "fr": "Développement et intégration de l'UI, Intégration des animations du joueur, Intégration sonore avec FMOD, Level Desing, Développement sur les différentes plateformes",
                "en": "UI development and integration, Player animation integration, Sound integration with FMOD, Level Desing, Multy Platform development",
            },
            "team": {
                "fr": "Une equipe de 15 personne : 8 Game Artist, 5 Gameplay Programmer & Designer et 3 Music & Sound Designer",
                "en": "We were a team of 15 people : 8 Game Artist, 5 Gameplay Programmer & Designer and 3 Music & Sound Designer",
            },
            "link": "https://erisa.itch.io/unseen",
            "date": "2024-2",
            "duration": {
                "fr": "3 mois",
                "en": "3 month",
            },
            "video": "https://www.youtube.com/watch?v=iWzvDz5wPx4",
            "isDisplayedInSlider": true
        },
    ],
    "ribbon": {
        "display": false,
        "text": {
            "fr": "Je suis actuellement en recherche de stage !",
            "en": "Searching for a stage !",
        },
        "link": "https://www.linkedin.com/in/matheo-fontaine",
    },
    "images": {
        "C#": "Csharp.svg",
    },
    "display-search-bar": false,
};

export default data;
