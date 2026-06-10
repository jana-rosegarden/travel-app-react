import paradiso1Image from "../assets/images/kontakts/paradiso1.webp"
import paradiso2Image from "../assets/images/kontakts/paradiso2.webp"
import benussiaImage from "../assets/images/kontakts/benussia.webp"

export const telefonnummerParadizo = [
    {
        person:{
            de: "Jana",
            uk: "Яна"
        },
        telefon: 1111111111,
        id: "jana"
    },
    {
        person:{
            de: "Andreas",
            uk: "Адреас"
        },
        telefon: 111111111,
        id: "andreas"
    },
    {
        person:{
            de: "Marian",
            uk: "Мар'ян"
        },
        telefon: 111111111,
        id: "marian"
    },
    {
        person:{
            de: "Vera",
            uk: "Віра"
        },
        telefon: 1111111111,
        id: "vera"
    },
    {
        person:{
            de: "Ihor",
            uk: "Ігор"
        },
        telefon: 1111111111,
        id: "ihor"
    },
    {
        person:{
            de: "Nazar",
            uk: "Назар"
        },
        telefon: 1111111111,
        id: "nazar"
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
        id: "paradiso",
        telefons: [
                    {
                person:{
                    de: "Jana",
                    uk: "Яна"
                },
                telefon: "111-222-333-44",
                id: "jana"
            },
            {
                person:{
                    de: "Andreas",
                    uk: "Адреас"
                },
                telefon: "555-666-777-88",
                id: "andreas"
            },
            {
                person:{
                    de: "Marian",
                    uk: "Мар'ян"
                },
                telefon: 111111111,
                id: "999-111-222-33"
            }
        ]
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
        image: [benussiaImage],
        id: "benussia",
        telefons: [
                    {
                person:{
                    de: "Vera",
                    uk: "Віра"
                },
                telefon: "444-555-666-77",
                id: "vera"
            },
            {
                person:{
                    de: "Ihor",
                    uk: "Ігор"
                },
                telefon: "777-888-999-11",
                id: "ihor"
            },
            {
                person:{
                    de: "Nazar",
                    uk: "Назар"
                },
                telefon: "111-222-333-44",
                id: "nazar"
            }
        ]
    };

export const kontaktsData = {
     paradiso,
     benussia
}