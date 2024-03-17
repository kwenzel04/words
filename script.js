// Array of words for learning
const words = ["ab","Abend","aber","acht","Affe","alle","allein(e)","als","also","alt","am","an","andere","anfangen","Angst","antworten(beantworten)","Apfel","Arbeit","arbeiten","Arzt","auch","auf","Auge(n)","aus","Auto","baden","bald","Ball","bauen","Bauer","Baum","bei","beide","beim","Bein","Beispiel","beißen","bekommen","Berg","besser","Bett","Bild","bin","bis","blau","bleiben","Blume","Boden","böse","brauchen","braun","Brief","bringen","Brot","Bruder","Buch","da","dabei","dafür","damit","danach","dann","daran","darauf","darin","das","dauern","davon","dazu","dein","dem","den","denken","denn","der","deshalb","dich","dick","die","Ding","dir","doch","Dorf","dort","draußen","drehen","drei","dumm","dunkel","durch","dürfen","eigentlich","ein(eine","einer)","einfach","einige","einigen","einmal","Eis","Eltern","Ende","endlich","er","Erde","erklären","erschrecken","erst","erzählen","es","essen(Essen)","etwas","fahren","Fahrrad","fährt","fallen","Familie","fangen","fast","fehlen","Fenster","Ferien","fertig","fest","Feuer","fiel","finden","Finger","Fisch","Flasche","fliegen","Frage","fragen","Frau","frei","fressen","Freude","freuen","Freund","fröhlich","früh","früher","führen","fünf","für","Fuß","Fußball","gab","ganz","gar","Garten","geben","Geburtstag","gefährlich","gegen","gehen","gehören","gelb","Geld","genau","gerade","gern(e)","Geschenk","Geschichte","Gesicht","gestern","gesund","gewinnen","gibt","ging","Glas","glauben","gleich","Glück","glücklich","Gott","groß(e)","grün","gut","Haar(e)","haben","halb(e)","halten","Hand","hängen","hart","Hase","hat(hatte","hatten)","Haus","heiß","heißen(heißt)","helfen","her","heraus","Herr","Herz","heute","hier","Hilfe","Himmel","hin","hinein","hinter","hoch","holen","hören","Hund","Hunger","ich","ihm","ihn","ihr","im","immer","in","ins","ist","ja","Jahr","jeder","jetzt","jung","Junge","kalt","kam","kann","Katze","kaufen","kein","kennen","Kind","Klasse","klein","klettern","kochen","kommen","können","Kopf","krank","Küche","kurz","lachen","Land","lang(e)","langsam","las","lassen","laufen","laut","leben(Leben)","legen","Lehrer","Lehrerin","leicht","leise","lernen","lesen","letzte","Leute","Licht","lieb","liegen","ließ(en)","Loch","los","Luft","lustig","machen","Mädchen","mal","man","Mann","Maus","Meer","mehr","mein","Mensch","merken","mich","Milch","Minute(n)","mir","mit","mögen","möglich","Monat(e)","müde","Musik","müssen","Mutter(Mutti)","nach","nächste","Nacht","nah(e)","Name(n)","nämlich","Nase","nass","natürlich","neben","nehmen","nein","nennen","neu","neun","nicht","nichts","nie","nimmt","noch","nun","nur","ob","oben","oder","offen","öffnen","oft","ohne","Oma(Omi)","Onkel","Opa","packen","Pferd","Platz","plötzlich","Polizei","Rad","rechnen","reich","reiten","rennen","richtig","rot","rufen","ruhig","rund","Sache","sagen","schaffen","schauen","scheinen","schenken","schicken","Schiff","schlafen","schlagen","schlecht","schlimm","Schluss","Schnee","schnell","schon","schön","schreiben","schreien","Schuh","Schule","Schüler","schwarz","schwer","Schwester","schwimmen","sechs","See","sehen","sehr","sein","seit","Seite","selbst","setzen","sich","sicher","sie","sieben","sieht","sind","singen","sitzen","so","sofort","Sohn","sollen","Sommer","Sonne","Sonntag","sonst","Spaß","spät","später","Spiel","spielen","sprechen","springen","Stadt","stark","stehen","steigen","Stein","Stelle","stellen","Straße","Stück","Stunde","suchen","Tag","Tante","Teller","tief","Tier","Tisch","tot","tragen","traurig","treffen","trinken","tun","Tür","turnen","über","überall","Uhr","um","und","uns","unser","unten","unter","Vater(Vati)","vergessen","verkaufen","verlieren","verstecken","verstehen","versuchen","viel","vielleicht","vier","Vogel","voll","vom","von","vor","vorbei","Wagen","wahr","Wald","war(waren)","warm","warten","warum","was","waschen","Wasser","weg","Weg","Weihnachten","weil","weinen","weiß","weit","weiter","Welt","wenig","wenn","wer","werden","werfen","Wetter","wichtig","wie","wieder","Wiese","will","Winter","wir","wird","wirklich","wissen(Wissen)","wo","Woche","wohl","wohnen","Wohnung","wollen","Wort","wünschen","Zahl","zehn","zeigen","Zeit","Zeitung","ziehen","Zimmer","zu","Zug","zum","zur","zurück","zusammen","zwei","zwischen"];
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
