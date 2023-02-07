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
            "description": string,
            "pictures": [string],
            "gameEngine": string,
            "language": string,
            "platform": string,
            "role": string,
            "team": string,
            "link": string,
            "date": string,
            "duration": string,
            "video": string|null,
            "isDisplayedInSlider": bool
 *      ]
 *  }
 */

const data = {
    "biography": "Je m'appelle Fox et je suis une patate.",
    "projects": [
        {
            "name": "Atomania",
            "description": "Atomania est un runner roguelike sur mobile où tu contrôle un atome qui doit traverser différent monde.  Avec tes armes, avance en te frayant un chemin à travers les obstacles que tu rencontreras. Améliore tes armes pour avancer toujours plus loin !",
            "pictures": [
                "Atomania_TitleScreen.jpg",
                "Atomania_Menu.jpg",
                "Atomania_Gameplay.jpg",
            ],
            "gameEngine": "Unity",
            "language": "C#",
            "platform": "Mobile",
            "role": "Je me suis principalement occupé de toute l'aspect UI, ainsi que le serveur (sauvergarde, chargement des données)",
            "team": "3 Game Designers & Programmers, 4 Game Designers",
            "link": "https://gamejolt.com/games/atomania/722178",
            "date": "2022-04",
            "duration": "2 mois",
            "video": "https://www.youtube.com/watch?v=oqUzrEVkR14",
            "isDisplayedInSlider": true
        },
        {
            "name": "Kill Them All",
            "description": "Un héros comme les autres parcourt le monde, affronte des ennemis, escalade des montagnes, sans relâche jusqu'à ce qu'il meure dignement.",
            "pictures": [
                "KillThemAll_Gameplay1.png",
                "KillThemAll_TitleCard.png",
                "KillThemAll_Gameplay2.png",
                "KillThemAll_Gameplay3.png",
            ],
            "gameEngine": "Animate",
            "language": "Haxe",
            "platform": "Mobile",
            "role": "Dans ce projet, je me suis concentré sur la génération procédural des différentes plateforme et ennemis, ainsi que la juiciness du personnage avec ses animations",
            "team": "Individuel",
            "link": "https://gamejolt.com/games/kill_them_all/610657",
            "date": "2021-04",
            "duration": "1 mois",
            "video": null,
            "isDisplayedInSlider": false
        },
        {
            "name": "Sweet Decay",
            "description": "Bienvenue dans le monde des bonbons ! A bord de votre navire en forme de dent, mangez tous vos ennemis en utilisant la puissance de la téléportation de votre navire.",
            "pictures": [
                "SweetDecay_TitleCard.png",
                "SweetDecay_Gameplay1.png",
                "SweetDecay_Gameplay2.png",
                "SweetDecay_Gameplay3.png",
                "SweetDecay_Win.png",
                "SweetDecay_GameOver.png",
            ],
            "gameEngine": "Animate",
            "language": "AS3",
            "platform": "PC",
            "role": "Dans ce projet, j'ai mis l'accent sur la spécial feature et sur le level design.",
            "team": "Individuel",
            "link": "https://gamejolt.com/games/sweet_decay/610610",
            "date": "2020-11",
            "duration": "2 mois",
            "video": null,
            "isDisplayedInSlider": false
        },
        {
            "name": "Eye Love Rats",
            "description": "2 rats magiciens cherchent à s'échapper d'un laboratoire magique après que des mages aient expérimenté un sort de battle de regard sur eux. Malgré le fait qu’il ne peuvent pas s'empêcher de se regarder, il vont devoir braver les obstacles en lançant leur laser de l’amitié. ",
            "pictures": [
                "EyeLoveRats_TitleCard.png",
                "EyeLoveRats_Gameplay1.png",
            ],
            "gameEngine": "Unity",
            "language": "C#",
            "platform": "PC",
            "role": "Dans ce projet, je me suis occupé de la feature du laser qui permet de repousser l'autre joueur ou de se connecter si ils entrent en collision.",
            "team": "2 Game Designers & Programmers, 2 Game Artistes, 1 Sound Designers",
            "link": "https://gamejolt.com/games/eyeloverats/723382",
            "date": "2022-06",
            "duration": "3 jours",
            "video": null,
            "isDisplayedInSlider": true
        },
        {
            "name": "Lost Memories",
            "description": "C'est l'histoire d'un homme qui a perdu la mémoire. Au travers de ses actions, il va rencontrer les développeurs de ce jeu pour tenter de retrouver la mémoire.",
            "pictures": [
                "LostMemories_TitleCard.png",
            ],
            "gameEngine": "Ren'py",
            "language": "Python",
            "platform": "PC",
            "role": "Dans ce projet, je me suis occupé d'une partie du texte pour un des personnage et de la transitions entre chaque scène.",
            "team": "2 Game Designers & Programmers, 1 Game Artistes, 1 Producer, 1 Game Designers",
            "link": "https://gamejolt.com/games/lost_memories/617270",
            "date": "2021-05",
            "duration": "3 jours",
            "video": null,
            "isDisplayedInSlider": false
        }
    ]
};

export default data;