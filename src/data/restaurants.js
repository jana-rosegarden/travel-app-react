
/* <h3>{place.name[lang]}</h3>
<p>{place.notes[lang]}</p> */
//Images Imports

import sopranoImage from "../assets/images/restaurants/soprano.webp"
import asterixImage from "../assets/images/restaurants/asterix.webp"
import diegoImage from "../assets/images/restaurants/diego.webp"
import fishFoodMoreImage from "../assets/images/restaurants/fish-food-more.webp"
import mcDonaldsImage from "../assets/images/restaurants/mcdonalds-pula.webp"
import kebabossImage from "../assets/images/restaurants/kebaboss.webp"
import sandwichClubImage from "../assets/images/restaurants/sandwich-club.webp"

export const restaurants = [
    {
        name: {
            de: "Konoba 'Soprano'",
            uk: "Ресторан 'Сопрано'"},
        adresse: "Ul. Monte Paradiso 40, 52100, Pula",
        id: "soprano",
        entfernung: 0.17,
        image: sopranoImage
        
    },
    {
        name: {
            de: "Pizzeria 'Asterix'",
            uk: "Піццерія 'Астерікс'"
        },
        adresse: "Piranesijev prilaz 11, 52100, Pula",
        id: "asterix",
        entfernung: 1.0,
        image: asterixImage
    },
    {
        name: {
            de: "Pizzeria 'Diego'",
            uk: "Піццерія 'Дієго'"
        },
        adresse: "Ul. de Franceschijeva 23, 52100, Pula",
        id: "diego",
        entfernung: 1.1,
        image: diegoImage
    },
    {
        name: {
            de: "Fish Food More",
            uk: "Ресторан 'Fish Food More'"
        },
        adresse: "Rizzijeva ul. 47, 52100, Pula",
        id: "fishfood",
        entfernung: 1.0,
        image: fishFoodMoreImage
    },
    {
        name: {
            de: "McDonald's Pula",
            uk: "McDonald's Pula"
        },
        isFastfood: true,
        adresse: "Ulica Rimske Centurijacije 101, 52100, Pula",
        id: "mcdonaldsPula",
        entfernung: 3.8,
        image: mcDonaldsImage
    },
    {
        name: {
            de: "KebaBoss",
            uk: "Закусочна 'KebaBoss'"
        },
        isFastfood: true,
        adresse: "Tomasinijeva ul. 34, 52100, Pula",
        id: "kebaboss",
        entfernung: 0.8,
        image: kebabossImage
    },
     {
        name: {
            de: "Sandwich Club",
            uk: "Закусочна 'Sandwich Club'"
        },
        isFastfood: true,
        adresse: "Sisplac ul. 4, 52100, Pula",
        id: "sandwich-club",
        entfernung: 1.2,
        image: sandwichClubImage
    }
]

