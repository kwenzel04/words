// Array of words for learning
const words = ["ab", "Abend", "aber", "Advent", "Affe", "Afrika", "alle", "allein", "als", "also", "alt", "am", "Amerika", "an", "andere", "Angst", "antworten", "Apfel", "Arzt", "Asien", "auch", "auf", "aufpassen", "aufwachen", "Auge", "aus", "außerdem", "Australien", "Auto", "bald", "Ball", "Banane", "bauen", "Baum", "befehlen", "befiehlt", "begegnen", "bei", "Beispiel", "bekommen", "belohnen", "Berg", "besiegen", "besser", "beste", "Bett", "bevor", "bin", "Birne", "bis", "bisschen", "bist", "bitten", "bleiben", "Boot", "böse", "brauchen", "Brief", "bringen", "Brot", "Bruder", "brummen", "Buch", "Burg", "Bus", "Cent", "Chor", "Computer", "da", "danach", "dann", "darf", "das", "davor", "dein", "denken", "denn", "der", "Detektiv", "dich", "die", "Dieb", "Dienstag", "dies", "dir", "doch", "Donnerstag", "doof", "doppelt", "dort", "Dose", "draußen", "drei", "dumm", "durch", "dürfen", "Durst", "Ei", "eigentlich", "Eimer", "ein", "einmal", "eins", "Eis", "Elefant", "Eltern", "endlich", "er", "Erdbeere", "Ergebnis", "erklären", "erschrecken", "erschrickt", "erstens", "erzählen", "es", "essen", "euch", "Eule", "Europa", "fährt", "fahren", "Fahrrad", "fällt", "fallen", "fängt", "fangen", "fast", "fehlen", "Ferien", "Fernseher", "fertig", "Feuerwehr", "finden", "Fisch", "Flasche", "fliegen", "Flugzeug", "fragen", "Frau", "Freitag", "fressen", "freuen", "Freund", "frisst", "Frühstück", "Fuchs", "für", "Fuß", "füttern", "Gabel", "ganz", "geben", "Geburt", "gefährlich", "gefallen", "gehen", "gelb", "genug", "gerade", "gern", "geschehen", "Geschichte", "gestern", "gesund", "gewinnen", "Gewitter", "gibt", "gießen", "Giraffe", "Glück", "groß", "Gruppe", "grüßen", "gucken", "Haar", "haben", "halb", "hallo", "hält", "halten", "Hand", "Handy", "Hase", "hat", "hatte", "Haus", "Heft", "heißen", "helfen", "heraus", "herein", "heute", "Hexe", "hier", "hilft", "hinein", "hinter", "hoffen", "hören", "Hose", "Hummel", "Hund", "Hunger", "hungrig", "ich", "Idee", "ihm", "ihn", "ihr", "im", "immer", "in", "ins", "ist", "isst", "ja", "Jacke", "Jahr", "jede", "jetzt", "jung", "Junge", "kämpfen", "kann", "kaputt", "Karten", "Käse", "Katze", "kaufen", "kein", "kennen", "Kind", "Kirche", "Kirsche", "klappen", "Klasse", "klein", "klettern", "klug", "Knopf", "kochen", "kommen", "können", "Kopf", "Korb", "krabbeln", "Kreuz", "kriegen", "Küche", "Kuh", "kurz", "lachen", "lang", "langsam", "lässt", "lassen", "Laub", "läuft", "laufen", "leer", "Lehrer", "lernen", "lesen", "letzte", "lieb", "liegen", "liest", "Löffel", "löschen", "loslassen", "Löwe", "machen", "mag", "malen", "Mama", "man", "Mann", "Mappe", "Maus", "Meer", "mehr", "mein", "meistens", "Messer", "mich", "Milch", "Minute", "mir", "mit", "mitnehmen", "Mittag", "Mittwoch", "möchten", "mögen", "Mond", "Montag", "morgen", "Mund", "müssen", "muss", "Mutter", "Mütze", "nach", "Nachbar", "Nachmittag", "nächste", "Nähe", "nämlich", "Nase", "Nashorn", "nehmen", "nein", "Nest", "nett", "neu", "nicht", "nichts", "nie", "nimmt", "nirgendwo", "noch", "Note", "nun", "nur", "ob", "oder", "oft", "ohne", "Oma", "Opa", "paar", "Papa", "Papagei", "Pappe", "passieren", "Pferd", "Pflanze", "Pflaster", "pflücken", "Pinsel", "Platz", "plötzlich", "Pullover", "Puppe", "Rauch", "rechnen", "Regen", "reiten", "rennen", "Rettung", "Rock", "rufen", "ruhig", "Sache", "sagen", "sammeln", "Samstag", "Schaf", "schaffen", "Schal", "schauen", "Schaufel", "Schaukel", "schaukeln", "schenken", "Schiff", "schimpfen", "schläft", "schlafen", "schlecht", "schlimm", "Schloss", "Schluss", "Schmetterling", "schmutzig", "Schnee", "schneiden", "schnell", "Schnupfen", "schon", "schön", "Schrank", "schrecklich", "schreiben", "schreien", "Schule", "schwarz", "Schwein", "schwimmen", "See", "sehen", "sehr", "sein", "seit", "Seite", "selbst", "sich", "sie", "sieht", "sind", "singen", "sitzen", "sollen", "Sonne", "Sonntag", "Spaß", "spät", "Spiegel", "spielen", "Spinne", "Sport ", "springen", "spritzen", "Stadt", "stehen", "steigen", "Stein", "stellen", "Stern", "Straße", "streiten", "Stück", "Stunde", "süß", "Tafel", "Tag", "Tasche", "Tasse", "Teller", "Tipp", "tippen", "Tisch", "Tod", "toll", "tot", "trägt", "tragen", "Treppe", "trinken", "tun", "über", "Uhr", "Uhu", "um", "und", "Ungeheuer", "uns", "unter", "Urlaub", "Vampir", "Vater", "verbieten", "verdoppeln", "vergessen", "vergisst", "Verkäufer", "verletzen", "verlieren", "vermissen", "verrückt", "versprechen", "verspricht", "verstecken", "versuchen", "viel", "vielleicht", "vier", "Vogel", "voll", "vom", "von", "vor", "voraus", "vorbei", "Vorfahrt", "Vorname", "Vorschlag", "vorsichtig", "Vorteil", "Waage", "wachen", "wächst", "wachsen", "wahr", "Wald", "wann", "warum", "was", "Wasser", "weg", "Weg", "Weihnachten", "weil", "Weile", "weinen", "weiß", "weiter", "welcher", "Welt", "wem", "wen", "wenig", "wenn", "wer", "werden", "werfen", "wie", "wieder", "will", "wir", "wird", "wirft", "wissen", "wohnen", "Wolke", "wollen", "wütend", "Zahn", "Zeit", "Ziege", "ziehen", "Zimmer", "Zitrone", "Zoo", "zu", "zuerst", "Zug", "zum", "zur", "zurück", "zusammen", "zwei"]
let currentIndex = 0;

// Stopwatch variables
let seconds = 0;
let intervalId = null;

//wordcount
let wordCount = 0;

function displayWord() {
    const wordDisplay = document.getElementById("wordDisplay");
    wordDisplay.textContent = words[currentIndex];

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

// Start the stopwatch
intervalId = setInterval(updateStopwatch, 1000);

document.getElementById("nextWord").addEventListener("click", nextWord);
document.getElementById("prevWord").addEventListener("click", prevWord);
document.getElementById("randomWord").addEventListener("click", randomWord);

// Initialize with the first word
displayWord();
