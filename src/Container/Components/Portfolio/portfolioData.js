const portfolioData = [
    {
        naam: "Student Dashboard",
        afkorting: "studentdashboard",
        voorvertoning: "studentdashboard-mockup-scaled.png",
        link: "https://jannekecoumans-student-dashboard.netlify.app/",
        intro: "Dit was mijn afstudeeropdracht bij Winc Academy. De bedoeling van het project was om een platform te bouwen waarin grafieken dynamisch weergegeven worden.",
        vereisten: ["DRY code", "Meerdere filtermogelijkheden", "Gebruik van grafieken", "Tabel waarin je kunt filteren"],
        header: "studentdashboard-mockup.png",
        extrafoto1: "studentdashboard-foto1.png",
        extrafoto2: "studentdashboard-foto2.png",
        toelichting: "Dit was een pittig project. We hadden hier twee dagen de tijd voor, nadat we anderhalve week hebben mogen oefenen met React. Het lastigste onderdeel vond ik om de data zo te verwerken dat het omgezet kon worden tot waardes voor de grafieken. Toen dit eenmaal gelukt was, was ik ontzettend blij en trots! Ik had een apart data bestand waarin alle studenten + hun waarderingen voor de opdrachten in stonden. Hiervan heb ik ook een aparte Studenten-pagina gemaakt waar voor elke student dynamisch een grafiek aangemaakt werd."
    },
    {
        naam: "React Playlist",
        afkorting: "playlist",
        voorvertoning: "songlist-mockup-scaled.png",
        link: "https://jannekecoumans-playlist.netlify.app/",
        intro: "Superleuke opdracht! Gebruikers van de playlist kunnen hun eigen nummers toevoegen en labelen onder een bepaalde genre. Vervolgens kun je de playlist op verschillende manieren filteren.",
        vereisten: ["Meerdere filtermogelijkheden", "De state updaten", "Mogelijkheid om liedjes toe te voegen en te verwijderen"],
        header: "songlist-mockup.png",
        extrafoto1: "",
        extrafoto2: "",
        toelichting: "Elke week op vrijdag vond de weekopdracht plaats. Om deze te kunnen voltooien, vonden er meerdere opdrachten die week plaats waardoor we in principe alle stof hadden die we nodig hadden om de opdracht te maken. Echter, was dit extreem ingewikkeld. Naast slaaptekort (dromen over programmeren), werkdruk en weinig tijd was het elke keer weer een ontzettende uitdaging! Gelukkig is deze opdracht me ook goed afgegaan!"
    },
    {
        naam: "To Do List",
        afkorting: "todolist",
        voorvertoning: "todolist-mockup-scaled.png",
        link: "https://jannekecoumans.nl/html/todo-list/index.html",
        intro: "Leuke opdracht om te oefenen met data. De bedoeling van de opdracht was dat gebruikers lijstjes kunnen opstellen. Vervolgens kunnen afstrepen wanneer een taak gedaan is en eventueel taken kunnen verwijderen. De data wordt via een API opgeslagen, dus je kunt je lijstje overal bekijken!",
        vereisten: ["Data ophalen/bewerken via API-methodes: GET, PUT en DELETE", "Doorstrepen wanneer taak is afgevinkt", "Lijst wordt ververst wanneer verandering is aangebracht"],
        header: "todolist-mockup.png",
        extrafoto1: "",
        extrafoto2: "",
        toelichting: "Deze opdracht was erg leuk om te doen! Ik had ook nog wat tijd over, dus ik kon nog een beetje tijd besteden aan de vormgeving. Ik heb het zelfs een tijdje gebruikt als eigen todo-lijstje, totdat ik zag dat iemand er iets aan veranderd had, toen ben ik er maar mee opgehouden."
    },
    {
        naam: "",
        afkorting: "website5",
        voorvertoning: "website5-mockup-scaled.png",
        link: "https://jannekecoumans.nl/images/pf6.png",
        intro: "Een website voor Travel Lovers. Mooie plaatjes, zachte pastelkleuren en sierlijke letters. Precies wat ik mooi vind!",
        vereisten: "",
        header: "website5-mockup.png",
        extrafoto1: "website5-foto1.png",
        extrafoto2: "website5-foto2.png",
        toelichting: "Dit is mijn favoriet. Hier heb ik heel veel tijd ingestoken. Ik heb hiervoor een logo gemaakt, fictieve boeken gephotoshopt en ik ben heel lang bezig geweest om de juisten kleuren te vinden. Erg tevreden met het resultaat!"
    },
    {
        naam: "",
        afkorting: "website4",
        voorvertoning: "website4-mockup-scaled.png",
        link: "https://jannekecoumans.nl/images/pf5.png",
        intro: "Aaah, een website gevuld met herfstachtige plaatjes, kleuren en seizoenspassende quotes. Deze heb ik, natuurlijk, gemaakt aan het begin van de herfst 2019 en blijf het een superfijne layout vinden.",
        vereisten: "",
        header: "website4-mockup.png",
        extrafoto1: "website4-foto1.png",
        extrafoto2: "website4-foto2.png",
        toelichting: "Deze website, een kopje thee en een mandarijntje. Daar krijg ik zin in als ik hier naar kijk. Ik vond het heel erg leuk om deze te maken. Ik ging op zoek naar Herfstachtige plaatjes op Unsplash.com, zocht een mooi lettertype uit en baseerde het kleurenpalet op de foto's. Ook voegde ik met Javascript een image slider toe.",
    },
    
    {
        naam: "",
        afkorting: "website3",
        voorvertoning: "website3-mockup-scaled.png",
        link: "https://jannekecoumans.nl/images/pf4.png",
        intro: "Een mooie, rustige website voor een bedrijf die kaarsen verkoopt. Dit was weer een namaak-projectje zodat ik meer met CSS kon oefenen.",
        vereisten: "",
        header: "website3-mockup.png",
        extrafoto1: "website3-foto1.png",
        extrafoto2: "website3-foto2.png",
        toelichting: "Weer een projectje waarin ik creatieve oplossingen wilde vinden. Ditmaal de tekst in het vlak. Oorspronkelijk wilde ik dit vlak namaken en als afbeelding plaatsen, maar uiteindelik was het een easy fix door de titel een achtergrondkleur te geven en met negatieve marges naar boven te verplaatsen."
    },
    {
        naam: "",
        afkorting: "website2",
        voorvertoning: "website2-mockup-scaled.png",
        link: "https://jannekecoumans.nl/images/pf2.png",
        intro: "Ook dit is een namaak-projectje. Ik koos deze destijds omdat de verschillende vlakken op de achtergrond me een uitdaging leken. Erg vermakelijk destijds :)",
        vereisten: "",
        header: "website2-mockup.png",
        extrafoto1: "website2-foto1.png",
        extrafoto2: "website2-foto2.png",
        toelichting: "Bij deze website ben ik veel bezig geweest met z-indexes en negatieve marges. Erg leuk effect, vind ik, wanneer het over elkaar heen loopt."
    },
    {
        naam: "",
        afkorting: "website1",
        voorvertoning: "website1-mockup-scaled.png",
        link: "https://jannekecoumans.nl/images/pf1.png",
        intro: "Één van mijn eerste namaak-websites. Inspiratie opgedaan op Pinterest, daarna kon ik niet wachten om het zelf uit te proberen.",
        vereisten: "",
        header: "website1-mockup.png",
        extrafoto1: "website1-foto1.png",
        extrafoto2: "website1-foto2.png",
        toelichting: "Het doel hiervan was om mezelf uit te dagen om mooie ontwerpen na te maken en eigen te maken. Ik wilde niet precies hetzelfde ontwerp namaken, dus ging ik op zoek naar gepaste afbeeldingen, kleuren en lettertypes."
    },
]

export default portfolioData;