
import amphitheaterImage from "../assets/images/sehenswürdigkeiten/amphitheater.webp"
import augustusTempelImage from "../assets/images/sehenswürdigkeiten/augustus-tempel.webp"
import piramidaImage from "../assets/images/sehenswürdigkeiten/piramida.webp"
import platzAussichtImage from "../assets/images/sehenswürdigkeiten/platz-aussicht.webp"
import pulaZitadelImage from "../assets/images/sehenswürdigkeiten/pula-zitadel.webp"
import verudelaImage from "../assets/images/sehenswürdigkeiten/verudela.webp"
import vollkplatzImage from "../assets/images/sehenswürdigkeiten/vollksplatz.webp"
import zerostrasseImage from "../assets/images/sehenswürdigkeiten/zerostrasse.webp"



export const sehenswuerdigkeiten = [
    
    {
        name: {
            de: "Pula Citadel",
            ukr: "Цитадель Пули"
        },
        adresse: {
            de: "Gradinski uspon 10, 52100, Pula",
            ukr: "Градінський підйом, 10, 52100, Пула"
        },
        entfernung: 4.3,
        price: {
            de: "Erwachsene: 7 €, Kinder/Studenten/Senioren (65+): 3 €",
            ukr: "Дорослі: 7 євро, діти/студенти/пенсіонери (65+): 3 євро"
        },
        info: {
            de: "Die Zitadelle von Pula (Kaštel) ist eine sternförmige Festung aus dem 17. Jahrhundert, die auf einem zentralen Hügel über der Altstadt thront. Sie bietet einen beeindruckenden Panoramablick auf die Stadt, den Hafen und das Amphitheater. Heute beherbergt das Kastell das Historische und Maritime Museum Istriens.",
            ukr: "Цитадель Пули (Каштель) — це фортеця у формі зірки, збудована у XVII столітті, яка височіє на центральному пагорбі над Старим містом. Звідти відкривається вражаючий панорамний вид на місто, гавань та амфітеатр. Сьогодні в Каштелі розміщується Історичний та морський музей Істрії."
        },
        oeffnungszeiten: {
            de: "Von Mai bis September ist sie täglich von 08:00/09:00 bis 21:00 Uhr geöffnet",
            ukr: "З травня по вересень вона працює щодня з 08:00/09:00 до 21:00"
        },
        image: pulaZitadelImage,
        id: "citadel"
    },
    {
        name: {
            de: "Platz mit Aussicht",
            ukr: "Місце з краєвидом"
        },
        adresse: {
            de: "52100, Pješčana Uvala, Хорватия",
            ukr: "52100, Пєщана Увала, Хорватія"
        },
        entfernung: 2.6,
        price: {
            de: "Kostenfrei",
            ukr: "Безкоштовно"
        },
        info: {
            de: "Der Ort zeichnet sich vor allem durch seine Lage auf den Hügeln oberhalb der Bucht aus und bietet Besuchern eine entspannte Atmosphäre abseits des Strandtrubels.Panorama-Blick: Von hier aus hast du eine direkte Sicht auf die Marina Veruda, eine der am besten ausgestatteten Jachthäfen Kroatiens, sowie auf die gegenüberliegende Halbinsel Verudela.",
            ukr: "Це місце вирізняється насамперед своїм розташуванням на пагорбах над бухтою та пропонує відвідувачам спокійну атмосферу, подалі від пляжної метушні. Панорамний вид: звідси відкривається прямий вид на марину Веруда, одну з найкраще обладнаних яхтенних пристаней Хорватії, а також на протилежний півострів Верудела."
        },
        oeffnungszeiten: {
            de: "Keine festen Öffnungszeiten.",
            ukr: "Немає фіксованих годин роботи."
        },
        image: platzAussichtImage,
        id: "platzaussicht"
    },
    {
        name: {
            de: "Narodni trg (Platz)",
            ukr: "Народна площа"
        },
        adresse: {
            de: "Ul. Marsovog polja 10, 52100, Pula",
            ukr: "Вул. Марсового поля, 10, 52100, Пула"
        },
        entfernung: 2.3,
        price: {
            de: "Kostenfrei",
            ukr: "Безкоштовно"
        },
        info: {
            de: "Markthalle: Ein architektonisches Highlight aus der k.u.k. Zeit (Stahl-Glas-Konstruktion).Angebot: Frischer Fisch, Fleisch, Käse, Obst, Gemüse und lokale Spezialitäten.",
            ukr: "Торговий павільйон: архітектурна перлина часів Австро-Угорської імперії (конструкція зі сталі та скла). Асортимент: свіжа риба, м’ясо, сир, фрукти, овочі та місцеві делікатеси."
        },
        oeffnungszeiten: {
            de: "Wochentags und samstags meist von 7:00 bis 13:00 oder 14:00 Uhr (Stände) bzw. bis 15:00 Uhr (Geschäfte) geöffnet. Der Fischmarkt schließt oft gegen 13:00 Uhr. Sonntags sind die Zeiten kürzer, meist bis 12:00 Uhr.",
            ukr: "У будні та суботу ринок зазвичай працює з 7:00 до 13:00 або 14:00 (торгові ятки) та до 15:00 (магазини). Рибний ринок часто закривається близько 13:00. У неділю години роботи скорочені, зазвичай до 12:00."
        },
        image: vollkplatzImage,
        id: "narodnitrg"
    },
    {
        name: {
            de: "Pyramid of Pula",
            ukr: "Піраміда в Пулі"
        },
        adresse: {
            de: "Zlatne stijene, 52100, Pula, Хорватия",
            ukr: "Златне Стієне, 52100, Пула"
        },
        entfernung: 1.2,
        price: {
            de: "Kostenlos",
            ukr: "Безкоштовно"
        },
        info: {
            de: "Form: Das Gebäude ist eine markante Beton-Pyramide, die direkt in die felsige Küstenlandschaft integriert wurde. Eröffnung: Die Diskothek wurde im Juli 1985 eröffnet. Der Architekt war Gjevdet Voljevica.Blütezeit: In den späten 80er Jahren galt sie als eine der modernsten und angesagtesten Diskotheken im damaligen Jugoslawien. Die Investitionskosten sollen sich aufgrund des enormen Erfolgs bereits nach 12 Monaten amortisiert haben.Niedergang: Mit dem Ausbruch des kroatischen Unabhängigkeitskrieges Anfang der 1990er Jahre blieben die Touristen aus. Ungeklärte Besitzverhältnisse und der wirtschaftliche Wandel führten zur endgültigen Schließung. Seitdem verfällt das Gebäude zusehends.",
            ukr: "Форма: Будівля являє собою виразну бетонну піраміду, яка органічно вписалася у скелястий прибережний ландшафт. Відкриття: Дискотека була відкрита в липні 1985 року. Архітектором виступила Г'євдет Вольєвіца. Розквіт: Наприкінці 80-х років вона вважалася однією з найсучасніших і наймодніших дискотек у тодішній Югославії. Завдяки величезному успіху інвестиційні витрати окупилися вже через 12 місяців. Занепад: З початком війни за незалежність Хорватії на початку 1990-х років туристи перестали приїжджати. Невизначеність щодо прав власності та економічні зміни призвели до остаточного закриття. З того часу будівля поступово руйнується."
        },
        oeffnungszeiten: {
            de: "Keine festen Öffnungszeiten",
            ukr: "Фіксованих часів огляду немає"
        },
        image: piramidaImage,
        id: "pyramid"
    },
    {
        name: {
            de: "Zerostrasse (unterirdisches Tunnelsystem)",
            ukr: "Нульова вулиця (підземна система тунелів)"
        },
        adresse: {
            de: "Carrarina ul. 3, 52100, Pula",
            ukr: "Вул. Карраріна, 3, 52100, Пула"
        },
        entfernung: 3.8,
        price: {
            de: "Erwachsene: 7 €, Kinder (5–16 Jahre): 3 €, Familienkarte: ca. 15 €",
            ukr: "Дорослі: 7 євро, діти (5–16 років): 3 євро, сімейний квиток: приблизно 15 євро"
        },
        info: {
            de: "Die Zerostrasse ist ein faszinierendes System aus unterirdischen Tunneln direkt unter der Altstadt von Pula. Sie bietet einen spannenden Einblick in die militärische Geschichte der Stadt. Bauzeit: Errichtet während des Ersten Weltkriegs (Österreich-Ungarn).Zweck: Diente als Luftschutzbunker für die Bevölkerung und als Lager für Munition.Kapazität: Die Tunnel konnten bis zu 6.000 Menschen Schutz bieten. Kühles Klima: In den Tunneln herrschen das ganze Jahr über konstante 14–18 °C. Eine leichte Jacke ist auch im Sommer ratsam.Kombi-Vorteil: Mit dem Ticket kannst du meist den Aufzug direkt von der Zerostrasse hoch zur Festung Kaštel nutzen, von wo aus du einen tollen Panoramablick über Pula hast.",
            ukr: "Зероштрассе — це захоплююча система підземних тунелів, розташована безпосередньо під Старим містом Пули. Вона дає змогу зануритися у військову історію міста. Час будівництва: споруджено під час Першої світової війни (Австро-Угорщина). Призначення: слугувало як протиповітряний бункер для населення та як склад боєприпасів. Місткість: тунелі могли надати притулок до 6 000 людей. Прохолодний клімат: у тунелях протягом усього року підтримується постійна температура 14–18 °C. Навіть влітку рекомендується взяти з собою легку куртку. Комбінована перевага: за квитком зазвичай можна скористатися ліфтом, що веде прямо з вулиці Зеро до фортеці Каштел, звідки відкривається чудовий панорамний вид на Пулу."
        },
        oeffnungszeiten: {
            de: "Mai – September: Täglich von 09:00 bis 21:00 Uhr",
            ukr: "Травень – вересень: щодня з 09:00 до 21:00"
        },
        image: zerostrasseImage,
        id: "zerostrasse"
    },
     {
        name: {
            de: "Augustus-Tempel",
            ukr: "Храм Августа"
        },
        adresse: {
            de: "Forum b.b, 52100, Pula",
            ukr: "Forum b.b, 52100, Пула"
        },
        entfernung: 3.0,
        price: {
            de: "Preis: Erwachsene ca. 2 €, Schüler/Studenten ca. 1 €.",
            ukr: "Ціна: дорослі — приблизно 2 євро, школярі/студенти — приблизно 1 євро."
        },
        info: {
            de: "Der Augustus-Tempel in Pula (Kroatien) ist ein hervorragend erhaltener römischer Peripteraltempel aus dem 1. Jahrhundert n. Chr. (ca. 2 v. Chr. – 14 n. Chr.), der der Göttin Roma und Kaiser Augustus geweiht war. Er befindet sich auf dem Forum im Zentrum der Altstadt und ist für seine sechs ca. 8 Meter hohen korinthischen Säulen bekannt.",
            ukr: "Храм Августа в Пулі (Хорватія) — це чудово збережений римський периптерний храм I століття н. е. (приблизно 2 р. до н. е. — 14 р. н. е.), присвячений богині Ромі та імператору Августу. Він розташований на Форумі в центрі Старого міста і відомий своїми шістьма коринфськими колонами висотою близько 8 метрів."
        },
        oeffnungszeiten: {
            de: "Mai, Juni, September: 09:00 – 20:00 Uhr",
            ukr: "Травень, червень, вересень: 09:00 – 20:00"
        },
        image: augustusTempelImage,
        id: "tempel"
    },
    {
        name: {
            de: "Verudela Canyon",
            ukr: "Каньйон Верудела"
        },
        adresse: {
            de: "Verudela 23, 52100, Pula, Хорватия",
            ukr: "Verudela 23, 52100, Пула"
        },
        entfernung: 2.2,
        price: {
            de: "Kostenlos",
            ukr: "Безкоштовно"
        },
        info: {
            de: "Der Verudela Canyon ist eine beeindruckende, natürliche Felsenschlucht an der Küste von Pula. Er gehört zu den meistfotografierten Natur-Spots in Istrien. Spektakuläre Kulisse: Zwei steile Felswände ragen etwa 20 Meter aus dem tiefblauen Meer empor. Versteckter Ort: Der Canyon liegt etwas versteckt hinter dem Park Plaza Verudela Resort und dem E&D Bistro.Fußweg: Vom Parkplatz führt ein kurzer, teilweise unebener Pfad entlang der Klippen direkt zur Schlucht. Der Verudela Canyon ist ein spektakulärer Ort, aber für Eltern mit Kindern ist erhöhte Vorsicht geboten. Er ist kein klassischer 'familienfreundlicher' Strand, sondern ein raues Naturdenkmal. Die größten Gefahrenquellen: Fehlende Absperrungen: Es gibt keine Zäune oder Geländer. Die Klippen fallen senkrecht ca. 20 Meter in die Tiefe. Rutschige Felsen: Der Kalkstein ist durch Meerwasser und Wind oft extrem glatt oder scharfkantig. Checkliste für ElternFestes Schuhwerk: Keine Flip-Flops! Kinder brauchen Schuhe mit gutem Grip (Turnschuhe oder feste Trekkingsandalen), um auf den unebenen Felsen nicht auszurutschen.Sicherheitsabstand: Lassen Sie Kinder niemals allein vorlaufen. Die Kante ist oft abrupt und durch niedrige Vegetation manchmal schwer einzuschätzen. Schatten & Hitze: Es gibt am Canyon selbst keinen Schatten. Ein Besuch mit kleinen Kindern empfiehlt sich nur am frühen Vormittag oder späten Nachmittag.",
            ukr: "Каньйон Верудела — це вражаюче природне скельне ущелине на узбережжі Пули. Воно входить до числа найбільш фотографованих природних куточків Істрії. Видовищний пейзаж: дві стрімкі скельні стіни здіймаються на висоту близько 20 метрів над глибоко-синім морем. Приховане місце: Каньйон трохи прихований за курортом Park Plaza Verudela та бістро E&D. Пішохідна доріжка: Від автостоянки веде коротка, місцями нерівна стежка вздовж скель прямо до ущелини. Каньйон Верудела — це вражаюче місце, але батькам з дітьми слід бути особливо обережними. Це не класичний «сімейний» пляж, а суворий природний пам'ятник. Найбільші джерела небезпеки: Відсутність огорож: тут немає парканів чи поручнів. Скелі обриваються вертикально на глибину близько 20 метрів. Слизькі скелі: вапняк часто стає надзвичайно слизьким або гострим через морську воду та вітер. Перелік для батьків Міцне взуття: ніяких шльопанців! Дітям потрібне взуття з хорошим зчепленням (кросівки або міцні трекінгові сандалі), щоб не посковзнутися на нерівних скелях. Безпечна відстань: ніколи не дозволяйте дітям бігти попереду самостійно. Край часто є різким і його іноді важко оцінити через низьку рослинність. Тінь і спека: у самому каньйоні немає тіні. Відвідування з маленькими дітьми рекомендується лише рано вранці або пізно ввечері. "
        },
        oeffnungszeiten: {
            de: "Das Gelände ist frei zugänglich und theoretisch 24 Stunden am Tag offen",
            ukr: "Територія є вільно доступною і, теоретично, працює цілодобово"
        },
        image: verudelaImage,
        id: "canyon"
    },
    {
        name: {
            de: "Amphitheater Pula",
            ukr: "Амфітеатр Пули"
        },
        adresse: {
            de: "Flavijevska ul., 52100, Pula, Kroatien",
            ukr: "Вул. Флавієвська, 52100, Пула"
        },
        entfernung: 3.6,
        price: {
            de: "Erwachsene: 10 € pro Person. Ermäßigte Tickets für Kinder, Schüler und Studenten: 5 €, Kinder unter 5 Jahren:  frei.",
            ukr: "Дорослі: 10 євро з особи. Квитки за пільговим тарифом для дітей, школярів та студентів: 5 євро, діти до 5 років: безкоштовно."
        },
        info: {
            de: "Das Amphitheater in Pula (Pulska Arena) ist ein beeindruckendes, im 1. Jahrhundert n. Chr. erbautes römisches Bauwerk an der kroatischen Adriaküste. Als sechstgrößtes römisches Amphitheater der Welt ist es eines der am besten erhaltenen, wobei die imposante Außenfassade aus weißem Kalkstein fast vollständig erhalten ist.",
            ukr: "Амфітеатр у Пулі (Пульська Арена) — це вражаюча римська споруда, зведена в I столітті н. е. на хорватському узбережжі Адріатичного моря. Це шостий за величиною римський амфітеатр у світі та один із найкраще збережених: його величний зовнішній фасад із білого вапняку зберігся майже повністю."
        },
        oeffnungszeiten: {
            de: "Mai: 08:00 – 21:00 Uhr",
            ukr: "Травень: 08:00 – 21:00"
        },
        image: amphitheaterImage,
        id: "amphitheater"
    }
]