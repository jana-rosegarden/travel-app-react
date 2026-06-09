import paradiso1Image from "../assets/images/kontakts/paradiso1.webp"
import paradiso2Image from "../assets/images/kontakts/paradiso2.webp"

export const telefonNummer = [
    {
        name:{
            de: "Jana",
            uk: "Яна"
        },
        telefon: 1111111111
    },
    {
        name:{
            de: "Andreas",
            uk: "Адреас"
        },
        telefon: 111111111
    },
    {
        name:{
            de: "Marian",
            uk: "Мар'ян"
        },
        telefon: 111111111
    },
    {
        name:{
            de: "Vera",
            uk: "Віра"
        },
        telefon: 1111111111
    },
    {
        name:{
            de: "Ihor",
            uk: "Ігор"
        },
        telefon: 1111111111
    },
    {
        name:{
            de: "Nazar",
            uk: "Назар"
        },
        telefon: 1111111111
    }
];

export const paradiso = 
    {
        name: {
        de: "Andi, Jana, Marian, Rafael",
        uk: "Анді, Яна, Мар'ян, Рафаель"
       },
        adresse:{
            de: "Pula, 52100, Monte Paradiso",
            uk: "Пула, 52100, вул. Монте Парадізо"
        },
        image: [paradiso1Image],
        id: "paradiso"
    };

export const benussia = 
    {
        name: {
        de: "Nazar, Vera, Ihor",
        uk: "Назар, Віра, Ігор"
       },
        adresse:{
            de: "Pula, 52100, Matteo Benussi",
            uk: "Пула, 52100, вул. Маттео Бенуссі"
        },
        image: [paradiso1Image, paradiso2Image],
        id: "benussia"
    };

export const kontaktsData = {
     paradiso,
     benussia
}