
import artParkVerudelaImage from "../assets/images/spielplaetze/art-park-verudela.webp"
import montezaroParkImage from "../assets/images/spielplaetze/montezaro-park.webp"
import parkPlazaVerudelaImage from "../assets/images/spielplaetze/park-plaza-verudela.webp"
import parkValkaneZelenikaImage from "../assets/images/spielplaetze/park-valkane-zelenika.webp"
import peekabooImage from "../assets/images/spielplaetze/peekaboo.webp"
import ribarskaKolibaImage from "../assets/images/spielplaetze/ribarska-koliba.webp"
import verudelaImage from "../assets/images/spielplaetze/verudela.webp"


export const spielplatz = [
    {
        name: {
            de: "Ribarska koliba Playground",
            uk: "Дитячий майданчик «Рибарська коліба»"
        },
        adresse: {
            de: "Verudela 16, 52100 Pula",
            uk: "Верудела, 16, 52100 Пула"
        },
        entfernung: 1.2,
        image: ribarskaKolibaImage,
        id: "ribarska"
    },
    {
        name: {
            de: "Kinderspielplatz im Montezaro Park",
            uk: "Дитячий майданчик у парку Монтезаро"
        },
        adresse: {
            de: "Ul. cara Emina, 52100, Pula",
            uk: "Вул. Еміна, 52100, Пула"
        },
        entfernung: 2.0,
        image: montezaroParkImage,
        id: "montezaro"
    },
    {
        name: {
            de: "Djecji park Zelenika",
            uk: "Дитячий парк «Зеленіка»"
        },
        adresse: {
            de: "Stoja, 52100, Pula (Valkane 12, 52100, Pula)",
            uk: "Стоя, 52100, Пула (Валкане, 12, 52100, Пула)"
        },
        entfernung: 2.5,
        image: parkValkaneZelenikaImage,
        id: "zelenika"
    },
    {
        name: {
            de: "Park Verudela",
            uk: "Парк Верудела"
        },
        adresse: {
            de: "Verudela 33, 52100, Pula",
            uk: "Верудела, 33, 52100, Пула"
        },
        entfernung: 2.2,
        image: verudelaImage,
        id: "parkverudela"
    },
    {
        name: {
            de: "Park Plaza Verudela Pula",
            uk: "Park Plaza Verudela, Пула"
        },
        adresse: {
            de: "Verudela 11, 52100, Pula",
            uk: "Верудела, 11, 52100, Пула"
        },
        entfernung: 2.1,
        image: parkPlazaVerudelaImage,
        id: "parkplaza"
    },
    {
        name: {
            de: "Verudela Artpark",
            uk: "Артпарк «Верудела»"
        },
        adresse: {
            de: "Verudela 22, 52100, Pula",
            uk: "Верудела, 22, 52100, Пула"
        },
        entfernung: 1.6,
        image: artParkVerudelaImage,
        id: "artpark"
    },
    {
        name: {
            de: "Pizzerija Peekaboo und Spielplatz innen",
            uk: "Піцерія «Peekaboo» та ігровий майданчик у приміщенні"
        },
        adresse: {
            de: "Ul. Svetog Polikarpa 8, 52100, Pula",
            uk: "Вул. Св. Полікарпа, 8, 52100, Пула"
        },
        entfernung: 2.1,
        image: peekabooImage,
        id: "peekaboo"
    }
]