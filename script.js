// Array of words for learning
const words = ["ab", "Abend", "aber", "Advent", "Affe", "Afrika", "alle", "allein", "als", "also", "alt", "am", "Amerika", "an", "andere", "Angst", "antworten", "Apfel", "Arzt", "Asien", "auch", "auf", "aufpassen", "aufwachen", "Auge", "aus", "außerdem", "Australien", "Auto", "bald", "Ball", "Banane", "bauen", "Baum", "befehlen", "befiehlt", "begegnen", "bei", "Beispiel", "bekommen", "belohnen", "Berg", "besiegen", "besser", "beste", "Bett", "bevor", "bin", "Birne", "bis", "bisschen", "bist", "bitten", "bleiben", "Boot", "böse", "brauchen", "Brief", "bringen", "Brot", "Bruder", "brummen", "Buch", "Burg", "Bus", "Cent", "Chor", "Computer", "da", "danach", "dann", "darf", "das", "davor", "dein", "denken", "denn", "der", "Detektiv", "dich", "die", "Dieb", "Dienstag", "dies", "dir", "doch", "Donnerstag", "doof", "doppelt", "dort", "Dose", "draußen", "drei", "dumm", "durch", "dürfen", "Durst", "Ei", "eigentlich", "Eimer", "ein", "einmal", "eins", "Eis", "Elefant", "Eltern", "endlich", "er", "Erdbeere", "Ergebnis", "erklären", "erschrecken", "erschrickt", "erstens", "erzählen", "es", "essen", "euch", "Eule", "Europa", "fährt", "fahren", "Fahrrad", "fällt", "fallen", "fängt", "fangen", "fast", "fehlen", "Ferien", "Fernseher", "fertig", "Feuerwehr", "finden", "Fisch", "Flasche", "fliegen", "Flugzeug", "fragen", "Frau", "Freitag", "fressen", "freuen", "Freund", "frisst", "Frühstück", "Fuchs", "für", "Fuß", "füttern", "Gabel", "ganz", "geben", "Geburt", "gefährlich", "gefallen", "gehen", "gelb", "genug", "gerade", "gern", "geschehen", "Geschichte", "gestern", "gesund", "gewinnen", "Gewitter", "gibt", "gießen", "Giraffe", "Glück", "groß", "Gruppe", "grüßen", "gucken", "Haar", "haben", "halb", "hallo", "hält", "halten", "Hand", "Handy", "Hase", "hat", "hatte", "Haus", "Heft", "heißen", "helfen", "heraus", "herein", "heute", "Hexe", "hier", "hilft", "hinein", "hinter", "hoffen", "hören", "Hose", "Hummel", "Hund", "Hunger", "hungrig", "ich", "Idee", "ihm", "ihn", "ihr", "im", "immer", "in", "ins", "ist", "isst", "ja", "Jacke", "Jahr", "jede", "jetzt", "jung", "Junge", "kämpfen", "kann", "kaputt", "Karten", "Käse", "Katze", "kaufen", "kein", "kennen", "Kind", "Kirche", "Kirsche", "klappen", "Klasse", "klein", "klettern", "klug", "Knopf", "kochen", "kommen", "können", "Kopf", "Korb", "krabbeln", "Kreuz", "kriegen", "Küche", "Kuh", "kurz", "lachen", "lang", "langsam", "lässt", "lassen", "Laub", "läuft", "laufen", "leer", "Lehrer", "lernen", "lesen", "letzte", "lieb", "liegen", "liest", "Löffel", "löschen", "loslassen", "Löwe", "machen", "mag", "malen", "Mama", "man", "Mann", "Mappe", "Maus", "Meer", "mehr", "mein", "meistens", "Messer", "mich", "Milch", "Minute", "mir", "mit", "mitnehmen", "Mittag", "Mittwoch", "möchten", "mögen", "Mond", "Montag", "morgen", "Mund", "müssen", "muss", "Mutter", "Mütze", "nach", "Nachbar", "Nachmittag", "nächste", "Nähe", "nämlich", "Nase", "Nashorn", "nehmen", "nein", "Nest", "nett", "neu", "nicht", "nichts", "nie", "nimmt", "nirgendwo", "noch", "Note", "nun", "nur", "ob", "oder", "oft", "ohne", "Oma", "Opa", "paar", "Papa", "Papagei", "Pappe", "passieren", "Pferd", "Pflanze", "Pflaster", "pflücken", "Pinsel", "Platz", "plötzlich", "Pullover", "Puppe", "Rauch", "rechnen", "Regen", "reiten", "rennen", "Rettung", "Rock", "rufen", "ruhig", "Sache", "sagen", "sammeln", "Samstag", "Schaf", "schaffen", "Schal", "schauen", "Schaufel", "Schaukel", "schaukeln", "schenken", "Schiff", "schimpfen", "schläft", "schlafen", "schlecht", "schlimm", "Schloss", "Schluss", "Schmetterling", "schmutzig", "Schnee", "schneiden", "schnell", "Schnupfen", "schon", "schön", "Schrank", "schrecklich", "schreiben", "schreien", "Schule", "schwarz", "Schwein", "schwimmen", "See", "sehen", "sehr", "sein", "seit", "Seite", "selbst", "sich", "sie", "sieht", "sind", "singen", "sitzen", "sollen", "Sonne", "Sonntag", "Spaß", "spät", "Spiegel", "spielen", "Spinne", "Sport ", "springen", "spritzen", "Stadt", "stehen", "steigen", "Stein", "stellen", "Stern", "Straße", "streiten", "Stück", "Stunde", "süß", "Tafel", "Tag", "Tasche", "Tasse", "Teller", "Tipp", "tippen", "Tisch", "Tod", "toll", "tot", "trägt", "tragen", "Treppe", "trinken", "tun", "über", "Uhr", "Uhu", "um", "und", "Ungeheuer", "uns", "unter", "Urlaub", "Vampir", "Vater", "verbieten", "verdoppeln", "vergessen", "vergisst", "Verkäufer", "verletzen", "verlieren", "vermissen", "verrückt", "versprechen", "verspricht", "verstecken", "versuchen", "viel", "vielleicht", "vier", "Vogel", "voll", "vom", "von", "vor", "voraus", "vorbei", "Vorfahrt", "Vorname", "Vorschlag", "vorsichtig", "Vorteil", "Waage", "wachen", "wächst", "wachsen", "wahr", "Wald", "wann", "warum", "was", "Wasser", "weg", "Weg", "Weihnachten", "weil", "Weile", "weinen", "weiß", "weiter", "welcher", "Welt", "wem", "wen", "wenig", "wenn", "wer", "werden", "werfen", "wie", "wieder", "will", "wir", "wird", "wirft", "wissen", "wohnen", "Wolke", "wollen", "wütend", "Zahn", "Zeit", "Ziege", "ziehen", "Zimmer", "Zitrone", "Zoo", "zu", "zuerst", "Zug", "zum", "zur", "zurück", "zusammen", "zwei"]
let currentIndex = 0;

const sentences = [
    "Der Hund bellt laut.",
    "Die Katze schläft auf dem Sofa.",
    "Das Auto ist rot.",
    "Der Vogel fliegt hoch.",
    "Der Baum ist groß.",
    "Das Kind spielt im Sand.",
    "Der Apfel ist lecker.",
    "Die Blume ist bunt.",
    "Der Fisch schwimmt im Teich.",
    "Das Buch liegt auf dem Tisch.",
    "Die Sonne scheint hell.",
    "Der Mond leuchtet am Himmel.",
    "Der Stuhl ist kaputt.",
    "Die Maus ist klein.",
    "Der Elefant ist groß.",
    "Die Banane ist gelb.",
    "Das Pferd galoppiert über die Wiese.",
    "Der Junge fährt Fahrrad.",
    "Das Mädchen malt ein Bild.",
    "Der Lehrer erklärt die Aufgabe.",
    "Die Uhr zeigt acht Uhr.",
    "Das Haus ist alt.",
    "Der Ball ist rund.",
    "Die Suppe ist heiß.",
    "Der Kuchen schmeckt süß.",
    "Der Schnee ist weiß.",
    "Das Gras ist grün.",
    "Der Himmel ist blau.",
    "Die Ente schwimmt auf dem See.",
    "Der Bär schläft im Winter.",
    "Der Regen fällt vom Himmel.",
    "Die Straße ist lang.",
    "Der Stift schreibt blau.",
    "Das Fenster ist offen.",
    "Der Schrank ist voll.",
    "Die Tür ist zu.",
    "Der Vogel singt ein Lied.",
    "Die Blume duftet gut.",
    "Der Hund jagt die Katze.",
    "Das Brot ist frisch.",
    "Der Tisch ist gedeckt.",
    "Der Baum hat grüne Blätter.",
    "Der See ist tief.",
    "Das Buch ist spannend.",
    "Der Apfelbaum trägt Früchte.",
    "Der Junge spielt Fußball.",
    "Die Katze fängt eine Maus.",
    "Das Auto fährt schnell.",
    "Die Wolke ist grau.",
    "Der Wind weht stark.",
    "Der Sommer ist heiß.",
    "Der Winter ist kalt.",
    "Der Frühling bringt Blumen.",
    "Der Herbst färbt die Blätter bunt.",
    "Der Vogel baut ein Nest.",
    "Die Kuh gibt Milch.",
    "Der Zug fährt pünktlich ab.",
    "Das Flugzeug landet sicher.",
    "Die Sonne geht auf.",
    "Der Mond geht unter.",
    "Das Kind lacht laut.",
    "Der Fisch schwimmt schnell.",
    "Der Hund holt den Ball.",
    "Die Katze schnurrt leise.",
    "Das Brot ist hart.",
    "Der Kuchen ist noch warm.",
    "Der Apfel ist rot.",
    "Die Blume ist rosa.",
    "Der Baum steht im Garten.",
    "Der Stuhl ist bequem.",
    "Das Wasser ist kalt.",
    "Die Milch ist warm.",
    "Der Kaffee ist heiß.",
    "Der Tee ist süß.",
    "Der Tisch wackelt.",
    "Der Stift schreibt nicht.",
    "Das Auto ist neu.",
    "Der Bus ist voll.",
    "Die Straßenbahn kommt.",
    "Das Kind liest ein Buch.",
    "Der Lehrer schreibt an die Tafel.",
    "Der Schüler meldet sich.",
    "Die Schülerin malt ein Bild.",
    "Das Klassenzimmer ist groß.",
    "Die Schule hat Ferien.",
    "Der Hund läuft im Park.",
    "Die Katze sitzt auf dem Zaun.",
    "Der Vogel pickt Körner.",
    "Der Fisch blubbert im Wasser.",
    "Der Bär ist stark.",
    "Der Elefant trompetet laut.",
    "Die Giraffe hat einen langen Hals.",
    "Das Zebra hat Streifen.",
    "Der Löwe brüllt laut.",
    "Der Affe klettert auf den Baum.",
    "Das Krokodil hat viele Zähne.",
    "Der Tiger ist gefährlich.",
    "Der Esel ist störrisch.",
    "Das Schaf hat weiche Wolle.",
    "Die Ziege meckert laut.",
    "Der Hase hoppelt durch den Garten.",
    "Das Meerschweinchen piepst leise.",
    "Der Hamster läuft im Rad.",
    "Der Papagei spricht Worte nach.",
    "Der Kanarienvogel singt schön.",
    "Der Fisch schwimmt im Aquarium.",
    "Die Schildkröte bewegt sich langsam.",
    "Der Frosch quakt im Teich.",
    "Die Schlange schlängelt sich durchs Gras.",
    "Der Delfin springt aus dem Wasser.",
    "Der Wal ist riesig.",
    "Der Tintenfisch hat viele Arme.",
    "Die Krabbe läuft seitwärts.",
    "Der Hummer hat große Scheren.",
    "Der Seestern liegt auf dem Meeresgrund.",
    "Die Qualle ist durchsichtig.",
    "Die Muschel hat eine harte Schale.",
    "Die Schnecke trägt ihr Haus auf dem Rücken.",
    "Die Biene sammelt Nektar.",
    "Der Schmetterling flattert von Blume zu Blume.",
    "Die Ameise trägt ein großes Blatt.",
    "Der Käfer krabbelt über den Boden.",
    "Die Spinne spinnt ein Netz.",
    "Die Wespe sticht schmerzhaft.",
    "Die Libelle fliegt schnell.",
    "Der Marienkäfer hat rote Punkte.",
    "Die Heuschrecke springt weit.",
    "Die Fliege summt laut.",
    "Die Mücke sticht in die Haut.",
    "Die Grille zirpt in der Nacht.",
    "Der Wurm windet sich durch die Erde.",
    "Der Tausendfüßler hat viele Beine.",
    "Der Skorpion hat einen giftigen Stachel.",
    "Die Raupe frisst Blätter.",
    "Der Maikäfer ist braun.",
    "Der Mistkäfer rollt Kugeln.",
    "Die Motte fliegt zum Licht.",
    "Das Glühwürmchen leuchtet im Dunkeln.",
    "Ich gehe gerne zur Schule.",
    "Das Haus hat ein rotes Dach.",
    "Wir spielen im Park.",
    "Anna liest ein Buch.",
    "Der Vogel singt im Baum.",
    "Max malt ein Bild.",
    "Ich mag Eiscreme.",
    "Papa kocht das Abendessen.",
    "Die Blume blüht im Garten.",
    "Lisa hat einen neuen Rucksack.",
    "Die Kinder spielen Verstecken.",
    "Das Auto ist blau.",
    "Meine Schwester heißt Maria.",
    "Das Kätzchen spielt mit dem Ball.",
    "Ich habe einen Bleistift.",
    "Die Kuh steht auf der Wiese.",
    "Wir backen Kekse.",
    "Das Fahrrad ist kaputt.",
    "Oma erzählt eine Geschichte.",
    "Der Bär ist groß und stark.",
    "Ich trinke gerne Saft.",
    "Das Flugzeug fliegt hoch.",
    "Wir machen ein Picknick.",
    "Das Boot schwimmt auf dem See.",
    "Die Bäume sind grün.",
    "Mama singt ein Lied.",
    "Ich habe eine neue Freundin.",
    "Die Maus ist klein und grau.",
    "Wir gehen schwimmen.",
    "Der Ball ist rund.",
    "Das Wetter ist schön.",
    "Ich liebe meine Familie.",
    "Die Ente quakt im Teich.",
    "Wir feiern Geburtstag.",
    "Ich fahre mit dem Bus.",
    "Der Elefant hat einen langen Rüssel.",
    "Die Milch ist frisch.",
    "Wir haben Ferien.",
    "Der Schnee ist weiß und kalt.",
    "Ich zeichne gerne.",
    "Das Kamel lebt in der Wüste.",
    "Wir essen Pizza.",
    "Die Tür ist zu.",
    "Ich schreibe einen Brief.",
    "Der Zug fährt schnell.",
    "Wir pflücken Blumen.",
    "Die Uhr zeigt drei Uhr.",
    "Ich habe einen neuen Hut.",
    "Der Bäcker backt Brot.",
    "Wir besuchen den Zoo.",
    "Das Pony ist süß.",
    "Der Igel hat Stacheln.",
    "Wir tanzen zur Musik.",
    "Ich baue ein Haus aus Lego.",
    "Das Wasser ist klar.",
    "Der Papagei kann sprechen.",
    "Wir essen im Restaurant.",
    "Das Spielzeug ist kaputt.",
    "Der Regenbogen hat viele Farben.",
    "Ich gehe ins Bett.",
    "Das Radio spielt Musik.",
    "Wir feiern Weihnachten.",
    "Ich mag keine Spinnen.",
    "Der Pinguin watschelt.",
    "Wir basteln eine Karte.",
    "Das Pferd galoppiert schnell.",
    "Ich trage eine Mütze.",
    "Der Frosch springt hoch.",
    "Wir malen Ostereier.",
    "Die Giraffe ist sehr groß.",
    "Ich habe meine Hausaufgaben gemacht.",
    "Das Krokodil hat scharfe Zähne.",
    "Wir sehen einen Film.",
    "Die Kerze brennt.",
    "Ich putze meine Zähne.",
    "Der Drache speit Feuer.",
    "Wir gehen spazieren.",
    "Das Dach ist undicht.",
    "Ich spiele Klavier.",
    "Die Glocke läutet.",
    "Der Schneemann schmilzt.",
    "Ich finde meinen Schlüssel nicht.",
    "Das Mädchen hat lange Haare.",
    "Wir singen ein Lied.",
    "Die Trommel macht Lärm.",
    "Ich habe einen neuen Pulli.",
    "Der Schneeball ist kalt.",
    "Wir gehen wandern.",
    "Ich habe Hunger.",
    "Das Eichhörnchen sammelt Nüsse.",
    "Der Teppich ist weich.",
    "Wir backen einen Kuchen.",
    "Ich spiele mit meiner Schwester.",
    "Wir tanzen im Regen.",
    "Die Ampel ist grün.",
    "Ich habe einen Wunsch.",
    "Der Pilz ist giftig.",
    "Wir fahren in den Urlaub.",
    "Das Känguru springt hoch.",
    "Ich spiele Schach.",
    "Die Tasche ist schwer.",
    "Wir gehen ins Kino.",
    "Die Schildkröte kriecht langsam.",
    "Ich habe ein neues Spiel.",
    "Der Osterhase bringt Eier.",
    "Wir machen eine Radtour.",
    "Der Kranich fliegt weit.",
    "Ich liebe Schokolade.",
    "Die Sonne geht unter.",
    "Wir hören ein Hörspiel.",
    "Der Sturm ist heftig.",
    "Ich schreibe ein Gedicht.",
    "Die Kerze flackert.",
    "Der Hase hoppelt.",
    "Wir sehen ein Feuerwerk.",
    "Das Lagerfeuer brennt.",
    "Ich trinke heiße Schokolade.",
    "Die Schafe grasen auf der Weide.",
    "Wir bauen eine Sandburg.",
    "Der Traktor fährt langsam.",
    "Ich mache ein Foto.",
    "Der Baum hat viele Blätter.",
    "Wir feiern Silvester.",
    "Die Glühbirne leuchtet.",
    "Der Fisch ist bunt.",
    "Wir gehen auf den Spielplatz.",
    "Das Baby lacht.",
    "Ich habe ein neues Handy.",
    "Die Puppe hat ein Kleid.",
    "Der Regen fällt leise.",
    "Wir gehen zur Bücherei.",
    "Das Glas ist zerbrochen.",
    "Der Affe klettert.",
    "Ich spiele Fußball.",
    "Die Blumen duften.",
    "Wir machen eine Schatzsuche.",
    "Der Hamster frisst Körner.",
    "Ich habe eine Postkarte geschrieben.",
    "Der Ballon fliegt hoch.",
    "Wir grillen im Garten.",
    "Das Schloss ist alt.",
    "Ich sehe einen Regenbogen.",
    "Die Torte ist süß.",
    "Das Zelt steht im Garten.",
    "Ich habe ein Puzzle gemacht.",
    "Der Drachen fliegt im Wind.",
    "Wir machen eine Schneeballschlacht.",
    "Ich gehe zum Arzt.",
    "Der Schlitten fährt schnell.",
    "Wir machen einen Ausflug.",
    "Die Wäsche ist sauber.",
    "Ich habe ein Geschenk bekommen.",
    "Der Kürbis ist orange.",
    "Wir lesen ein Märchen.",
    "Die Schokolade ist lecker.",
    "Ich habe einen Brief geschrieben.",
    "Der Schmetterling ist bunt.",
    "Wir pflanzen einen Baum.",
    "Das Kaninchen frisst Karotten.",
    "Ich habe ein Gedicht gelernt.",
    "Der Weihnachtsbaum leuchtet.",
    "Wir machen eine Fahrradtour.",
    "Die Muschel ist schön.",
    "Der Hund wedelt mit dem Schwanz.",
    "Wir gehen zur Kirche.",
    "Das Ei ist hart gekocht.",
    "Ich spiele Gitarre.",
    "Der Teddybär ist weich.",
    "Die Wolke sieht aus wie ein Hund.",
    "Ich habe einen Apfel gegessen.",
    "Wir machen ein Wettrennen.",
    "Der Fluss fließt schnell.",
    "Die Katze schnurrt.",
    "Wir spielen im Sand.",
    "Der Zug kommt pünktlich.",
    "Ich habe ein Fahrrad.",
    "Die Blumen blühen.",
    "Wir feiern Ostern.",
    "Der Hund bellt.",
    "Ich lese ein Buch.",
    "Die Sonne scheint.",
    "Wir spielen Fußball.",
    "Das Haus ist groß.",
    "Der Vogel singt.",
    "Wir essen Kuchen.",
    "Die Katze schläft.",
    "Der Regen fällt.",
    "Wir gehen schwimmen.",
    "Der Hund rennt.",
    "Ich sehe einen Vogel.",
    "Die Wolken sind weiß.",
    "Wir spielen Karten.",
    "Das Auto fährt.",
    "Der Baum ist hoch.",
    "Die Blume blüht.",
    "Ich lese gerne.",
    "Der Hund ist braun.",
    "Wir machen ein Picknick.",
    "Das Fahrrad ist blau.",
    "Der Fisch schwimmt.",
    "Die Sonne scheint hell.",
    "Das Auto ist schnell.",
    "Ich mag Schokolade.",
    "Wir gehen spazieren.",
    "Das Auto fährt schnell."
];

// Stopwatch variables
let seconds = 0;
let intervalId = null;

//wordcount
let wordCount = 0;


//
let showingWords = true;
const toggleButton = document.getElementById('toggleButton');

function displayWord() {
    const wordDisplay = document.getElementById("wordDisplay");

    if (showingWords) {
        wordDisplay.textContent = getRandomElement(words);
    } else {
        wordDisplay.textContent = getRandomElement(sentences);
    }


  //  wordDisplay.textContent = words[currentIndex];

     // Trigger flip effect
     wordDisplay.classList.add("flip-effect");
    
     // Listen for the end of the animation to remove the class, allowing the animation to be triggered again next time
     wordDisplay.addEventListener('animationend', () => {
         wordDisplay.classList.remove("flip-effect");
     });

    // Reset font size to a base value to calculate adjustments
    let baseFontSize = 100; // Starting point for font size in pixels
    wordDisplay.style.fontSize = `${baseFontSize}px`;

    // Calculate the adjustment needed to make the word take up 80% of the viewport width
    const viewportWidth = window.innerWidth;
    const wordWidth = wordDisplay.offsetWidth;
    const desiredWidth = viewportWidth * 0.6; // 80% of the viewport width

    // Adjust font size based on the ratio of desired width to initial word width
    const adjustedFontSize = baseFontSize * (desiredWidth / wordWidth);

    // Apply the adjusted font size
    wordDisplay.style.fontSize = `${adjustedFontSize}px`;

    updateWordCount(); // Update the word count each time a word is displayed
}

function updateWordCount() {
    wordCount++;
    document.getElementById('wordCount').textContent = `Anzahl Wörter: ${wordCount}`;
}

function nextWord() {
    currentIndex = (currentIndex + 1) % words.length;
    displayWord();
}

function prevWord() {
    currentIndex = (currentIndex - 1 + words.length) % words.length;
    displayWord();
}

function randomWord() {
    currentIndex = Math.floor(Math.random() * words.length);
    displayWord();
}

function updateStopwatch() {
    seconds++;
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    // Ensuring two-digit formatting
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedSeconds = remainingSeconds.toString().padStart(2, '0');

    document.getElementById('stopwatch').textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

toggleButton.addEventListener('click', () => {
    showingWords = !showingWords;
    toggleButton.textContent = showingWords ? 'Switch to Sentences' : 'Switch to Words';
    updateDisplay();
});

// Start the stopwatch
intervalId = setInterval(updateStopwatch, 1000);

document.getElementById("nextWord").addEventListener("click", nextWord);
document.getElementById("prevWord").addEventListener("click", prevWord);
document.getElementById("randomWord").addEventListener("click", randomWord);

// Initialize with the first word
//displayWord();
