import { sehenswuerdigkeiten } from "./sehenswuerdigkeiten";
import { spielplatz } from "./spielplatz";

export const translations = {
    de:{
        name: "Name",
        adresse: "Adresse",
        entfernung: "Entfernung von Zuhause",
        oeffnungszeiten: "Öffnungszeiten",
        price: "Preis",
        info: "Info",
        alterVon: "Für welches Alter geeignet",
        parken: "Parkensmöglichkeiten",
        eintritt: "Eintritt",
        datenschutz: "Datenschutzerklärung",
        impressum: "impressum",
        notruf: "Notrufnummern in Pula"
    },
    uk:{
        name: "Назва",
        adresse: "Адреса",
        entfernung: "Відстань від дому",
        oeffnungszeiten: "Години роботи",
        price: "Ціна",
        info: "Інфо",
        alterVon: "Для якого віку",
        parken: "Парковка",
        eintritt: "Вхід",
        datenschutz: "Політика конфіденційності",
        impressum: "Вихідні дані",
        notruf: "Номера екстреної служби в Пулі"
    }
};

export const categoryTranslations = {
    de: {
        aerzte: "Ärtzte",
        apotheken: "Apotheken",
        aquaparks: "Aqauparks",
        restaurants: "Restaurants",
        sehenswuerdigkeiten: "Sehenswürdigkeiten",
        shops: "Shops",
        spielplatz: "Spielplätze und Parks",
        strands: "Strände"
       },
    uk: {
        aerzte: "Лікарі",
        apotheken: "Аптеки",
        aquaparks: "Аквапарки",
        restaurants: "Ресторани",
        sehenswuerdigkeiten: "Видатні місця",
        shops: "Магазини",
        spielplatz: "Ігрові площадки на парки",
        strands: "Пляжі"
    }
}

export const footer = {
   impressum: {
    de: [{text: "Jana Engenhorst", id: 123}, {text: "Josef-Priller-Str. 20, 86159 Augsburg", id: 456}, {text: "jana@engenhor.st", id: 789}],
    uk: [{text: "Яна Енгенхорст", id: 234}, {text: "Josef-Priller-Str. 20, 86159 Аугсбург", id: 345}, {text: "jana@engenhor.st", id: 567}]
   },
   datenschutz:{
    de: [{text: "Diese Webseite erhebt keine personenbezogenen Daten und verwendet keine Cookies oder Tracking-Tools. Es werden keine externen Dienste wie Google Analytics, YouTube, Facebook oder ähnliche Anbieter eingebunden.", id: 111}, 
        {text: "Wenn Sie auf einen Link zu externen Webseiten (z. B. Instagram oder GitHub) klicken, verlassen Sie meine Seite. Für die Inhalte und den Datenschutz dieser externen Seiten bin ich nicht verantwortlich.", id: 222},
        {textData: [{data: "Verantwortlich für den Inhalt dieser Seite:", id: 11}, 
                    {data:"Jana Engenhorst", id: 22}, 
                    {data: "Josef-Priller-Str. 20", id: 33,},
                    {data: "86159 Augsburg", id: 44},
                    {data: "E-Mail: jana@engenhor.st", id: 55}],
                id: 201}
    ],
    uk: [{text: "Цей додаток не збирає персональних даних і не використовує файли cookie чи засоби відстеження. У ньому не використовуються зовнішні сервіси, такі як Google Analytics, YouTube, Facebook чи подібні сервіси.", id: 333}, {text: "Якщо ви натиснете на посилання на зовнішні веб-сайти (наприклад, Instagram або GitHub), ви покинете мій сайт. Я не несу відповідальності за вміст та політику конфіденційності цих зовнішніх сайтів.", id: 444},
        {textData: [{data: "Verantwortlich für den Inhalt dieser Seite:", id: 66}, 
                    {data:"Яна Енгенхорст", id: 77}, 
                    {data: "Josef-Priller-Str. 20", id: 88,},
                    {data: "86159 Augsburg", id: 99},
                    {data: "Електронна пошта: jana@engenhor.st", id: 101}],
                 id: 401
                }
     ],
   }
}