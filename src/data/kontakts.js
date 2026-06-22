import paradiso1Image from "../assets/images/kontakts/paradiso1.webp"
import paradiso2Image from "../assets/images/kontakts/paradiso2.webp"
import benussiaImage from "../assets/images/kontakts/benussia.webp"

export const telefonnummerParadizo = [
    {
        person:{
            de: "Jana",
            uk: "Яна"
        },
        telefon: "+491111111111",
        id: "jana"
    },
    {
        person:{
            de: "Andreas",
            uk: "Адреас"
        },
        telefon: "+49111111111",
        id: "andreas"
    },
    {
        person:{
            de: "Marian",
            uk: "Мар'ян"
        },
        telefon: "+49111111111",
        id: "marian"
    },
    {
        person:{
            de: "Vera",
            uk: "Віра"
        },
        telefon: "+491111111111",
        id: "vera"
    },
    {
        person:{
            de: "Ihor",
            uk: "Ігор"
        },
        telefon: "+491111111111",
        id: "ihor"
    },
    {
        person:{
            de: "Nazar",
            uk: "Назар"
        },
        telefon: "+491111111111",
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
                telefon: "+4911122233344",
                id: "jana"
            },
            {
                person:{
                    de: "Andreas",
                    uk: "Адреас"
                },
                telefon: "+4955566677788",
                id: "andreas"
            },
            {
                person:{
                    de: "Marian",
                    uk: "Мар'ян"
                },
                telefon: "+49111111111",
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
                telefon: "+4944455566677",
                id: "vera"
            },
            {
                person:{
                    de: "Ihor",
                    uk: "Ігор"
                },
                telefon: "+4977788899911",
                id: "ihor"
            },
            {
                person:{
                    de: "Nazar",
                    uk: "Назар"
                },
                telefon: "+4911122233344",
                id: "nazar"
            }
        ]
    };

export const kontaktsData = {
     paradiso,
     benussia
}