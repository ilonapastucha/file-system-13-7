var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

// wyświetla informacje o obrazku
fs.stat('./cat.jpg', function (err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

//odczyt pliku // wymuszenie funkcjonalności, która najpierw odczytuje zawartość pliku, następnie zapiszuje dane i znowu odczytuje plik po zmianie jego zawartości:
fs.readFile('./text.txt', 'utf-8', function (err, data) {
    console.log('Dane przed zapisem'.blue);
    console.log(data);
    fs.appendFile('./text.txt', '\nA tak wyglądaja dane po zapisie', function (err) { //dopisanie tekstu do istniejącego
        if (err) throw err;
        console.log('Zapisano'.blue);
        fs.readFile('./text.txt', 'utf-8', function (err, data) {
            console.log('Dane po zapisie'.blue);
            console.log(data);
        });
    });
});


fs.readdir('./', 'utf-8', function (err, files) {
    if (err) {
        throw err;
    } else { //zapis pliku
        fs.writeFile('./nowy.txt', files, function () {
            if (err) throw err;
            console.log('Zapisano zawartość katalogu do pliku nowy.txt'.red);
        });
        // odczt liku
        fs.readFile('./nowy.txt', 'utf-8', function (err, data) {
            console.log('Zawartość katalogu to: '.green + data);
        });
    }
});